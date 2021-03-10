package adapter

import (
	"context"
	"errors"
	"fmt"
	"github.com/jackc/pgtype"
	"golang.org/x/crypto/ssh/terminal"
	"log"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"syscall"
	"time"

	//fb "github.com/google/flatbuffers/go"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"

	// project dependencies
	"assessment/utils"
)

var err error = nil

//var BUILDER = fb.NewBuilder(10240) // faster than 0

//var POOL *pgx.Conn = NewConnection()
var CTX = context.Background()
var POOL *pgxpool.Pool = NewConnectionPool()

const TEMPLATES_FOLDER = "./datamodel/resources/templates/"

var DROP_TABLE, _ = filepath.Abs(TEMPLATES_FOLDER + "drop_table.sql.tpl")

// var ROWS *pgx.Rows = nil
// var BATCH *pgx.Batch

type Batch struct {
	PgxBatch *pgx.Batch
	Size     int
	Res      pgx.BatchResults
}

type RowsToBytesConverter func(rows *pgx.Rows) []byte

// will use generics when available, not used for now
//type BytesToEntityConverter func(bytes []byte) *fb.Table // interface{}

// TODO: check if better / less expensive way to invalidate / restart connection
//func ResetConnection() bool {
//
//	err = CONX.Close(context.Background()); if err != nil {
//		log.Print(err)
//		return false
//	}
//	CONX = NewConnection()
//	return true
//}

// TODO: use "github.com/jackc/pgx/pgxpool" pgxpool.Connect for multithreading
// or map 1 thread 1 connection
func NewConnectionPool() *pgxpool.Pool {

	//conx, err := pgx.Connect(
	dbUser := os.Getenv("DB_USER")
	dbName := os.Getenv("DB_NAME")
	dbHost := os.Getenv("DB_HOST")
	var dbPwd string = os.Getenv("DB_PWD")
	if dbPwd == "" {
		fmt.Printf("Enter password for %s@%s/%s:\n", dbUser, dbHost, dbName)
		dbPwdBytes, err := terminal.ReadPassword(int(syscall.Stdin))
		if err != nil {
			log.Fatal("cannot read password")
		}
		dbPwd = string(dbPwdBytes)
	}
	pool, err := pgxpool.Connect(CTX, fmt.Sprintf("user=%s password=%s dbname=%s host=%s", dbUser, dbPwd, dbName, dbHost))
	if err != nil {
		log.Panic(err)
	}
	log.Printf("New pool connected to database: %s@%s/%s\n", os.Getenv("DBA"), os.Getenv("DB_HOST"), os.Getenv("DB_NAME"))
	// TODO: handle db disconnect error?
	//defer conx.Close(context.Background())
	//defer pool.Close()
	return pool
}

func columnNamesToSql(columns []string) string {

	if columns == nil || len(columns) == 0 {
		return "*"
	}
	if len(columns) == 1 {
		return columns[0]
	}
	return strings.Join(columns, ", ")
}

func sqlUpdateArgs(columns []string) string {

	str := ""
	for i := 0; i < len(columns); i++ {
		str +=  columns[i] + " = " + "$" + strconv.Itoa(i + 1)
		if i < len(columns) -1 { str += ", " }
	}
	return str
}

func sqlQueryArgs(size, start int) string {

	s := "($" + strconv.Itoa(start)
	for i := 1; i < size; i++ {
		s += ", $" + strconv.Itoa(i+start)
	}
	s += ")"
	return s
}

func RowsToBytesList(rows *pgx.Rows, converter RowsToBytesConverter) [][]byte {
	if rows == nil || *rows == nil {
		return nil
	}
	var list [][]byte
	for (*rows).Next() {
		list = append(list, converter(rows))
	}
	return list
}

func exec(queryString string, values ...interface{}) int64 {

	cmd, err := POOL.Exec(context.Background(), queryString, values...)
	if err != nil {
		log.Print(err)
		//ResetConnection()
		return 0
	}
	if cmd.RowsAffected() < 1 {
		log.Printf("%s had no effect\n", queryString)
		return 0
	}
	return cmd.RowsAffected()
}

func execSplit(queryString string) int64 {

	affected := int64(0)
	statements := strings.SplitAfter(queryString, ";") // split after keeps the delimiter
	for i := 0; i < len(statements); i++ {
		if strings.TrimSpace(statements[i]) != "" {
			affected += exec(statements[i])
		}
	}
	return affected
}

func query(queryString string, values ...interface{}) *pgx.Rows {

	// log.Print(queryString)
	rows, err := POOL.Query(context.Background(), queryString, values...)
	if err != nil {
		log.Print(err)
		//ResetConnection()
		return nil
	}
	// ROWS = &rows
	return &rows
}

func ResetRows(rows *pgx.Rows) {

	if rows != nil && *rows != nil {
		(*rows).Close()
		//*rows = nil
	}
}

func filteredSelectQuery(tableName string, columns, columnsToFilter, operators []string) string {
	return fmt.Sprintf(
		"select %s %s",
		columnNamesToSql(columns),
		filteredQuery(tableName, columnsToFilter, operators))
}

func filteredDeleteQuery(tableName string, columnsToFilter, operators []string) string {
	return fmt.Sprintf(
		"delete %s",
		filteredQuery(tableName, columnsToFilter, operators))
}

func filteredQuery(tableName string, columnsToFilter, operators []string) string {

	if len(operators) != len(columnsToFilter) {
		log.Fatalf("columns to filter and operators on these filters need to be of same length to build a select query string\n")
	}
	str := fmt.Sprintf("from %s", tableName)
	if len(columnsToFilter) > 0 {
		str += fmt.Sprintf(" where %s %s $1", columnsToFilter[0], operators[0])
		for col := 1; col < len(columnsToFilter); col++ {
			str += fmt.Sprintf(" and %s %s $%d", columnsToFilter[col], operators[col], col+1)
		}
	}
	return str
}

// TODO finish the returning clause
func insertQuery(tableName string, columns, returning []string) string {

	returningString := ""
	if returning != nil && len(returning) > 0 {
		returningString = " returning (" + columnNamesToSql(returning) + ")"
	}
	return fmt.Sprintf(
		"insert into %s(%s) values %s%s",
		tableName, columnNamesToSql(columns), sqlQueryArgs(len(columns), 1), returningString)
}

// TODO test the update
func updateQuery(tableName string, columns []string, columnToFilter, filterOperator string) string {

	return fmt.Sprintf(
		"update %s set %s where %s %s $%d",
		tableName, sqlUpdateArgs(columns), columnToFilter, filterOperator, len(columns) + 1)
}

func RowsToUint32(rows *pgx.Rows) []uint32 {
	var l []uint32
	var d uint32
	for {
		err := (*rows).Scan(&d)
		if err != nil {
			d = 0
		}
		l = append(l, d)
		if !((*rows).Next()) {
			break
		}
	}
	return l
}

func RowsToUint64(rows *pgx.Rows) []uint64 {
	var l []uint64
	var d uint64
	for {
		err := (*rows).Scan(&d)
		if err != nil {
			d = 0
		}
		l = append(l, d)
		if !((*rows).Next()) {
			break
		}
	}
	return l
}

func RowsToInt32(rows *pgx.Rows) []int32 {
	var l []int32
	var d int32
	for {
		err := (*rows).Scan(&d)
		if err != nil {
			d = 0
		}
		l = append(l, d)
		if !((*rows).Next()) {
			break
		}
	}
	return l
}

func RowsToInt64(rows *pgx.Rows) []int64 {
	var l []int64
	var d int64
	for {
		err := (*rows).Scan(&d)
		if err != nil {
			d = 0
		}
		l = append(l, d)
		if !((*rows).Next()) {
			break
		}
	}
	return l
}

func RowsToFloat64(rows *pgx.Rows) []float64 {
	var l []float64
	var d float64
	for {
		err := (*rows).Scan(&d)
		if err != nil {
			d = 0
		}
		l = append(l, d)
		if !((*rows).Next()) {
			break
		}
	}
	return l
}

func RowsToString(rows *pgx.Rows) []string {
	var l []string
	var s pgtype.Varchar
	for {
		err := (*rows).Scan(&s)
		if err != nil || s.Status == pgtype.Null {
			s = pgtype.Varchar{}
		}
		l = append(l, s.String)
		if !((*rows).Next()) {
			break
		}
	}
	return l
}

func RowsToTime(rows *pgx.Rows) []time.Time {
	var l []time.Time
	var t pgtype.Timestamptz
	for {
		err := (*rows).Scan(&t)
		if err != nil || t.Status == pgtype.Null {
			t = pgtype.Timestamptz{}
		}
		l = append(l, t.Time)
		if !((*rows).Next()) {
			break
		}
	}
	return l
}

func RowsToEpoch(rows *pgx.Rows) []int64 {
	var l []int64
	times := RowsToTime(rows)
	for _, t := range times {
		l = append(l, t.Unix())
	}
	return l
}

func Store(tableName string, columns, returning []string, values ...interface{}) uint64 { //int64 {

	queryString := insertQuery(tableName, columns, returning)
	rows := query(queryString, values...)
	if rows == nil || *rows == nil {
		return 0
	}
	(*rows).Next()
	return RowsToUint64(rows)[0]
}

func StoreList(tableName string, columns, returning []string, table ...[]interface{}) []uint64 { //int64 {

	tx, err := POOL.Begin(CTX)
	if err != nil {
		panic(err)
	}

	b := NewBatch()
	b.AddInsertList(tableName, columns, returning, table...)
	b.Res = tx.SendBatch(CTX, b.PgxBatch)
	var ids []uint64
	for b.Size > 0 {
		//rows := b.Query()
		rows, err := b.Res.Query()
		if err != nil {
			log.Print(err)
			continue
		}
		if rows == nil {
			return nil
		}
		ids = append(ids, RowsToUint64(&rows)...)
		rows.Close()
	}
	if err := tx.Commit(CTX); err != nil {
		log.Print(err)
	}
	b.Res.Close()
	return ids
}

// use the driver QueryRow instead of Query and sort by in the query
func Select(tableName string, columns []string, columnsToFilter []string, filterOperators []string, vals []interface{}) *pgx.Rows {

	return query(
		filteredSelectQuery(tableName, columns, columnsToFilter, filterOperators),
		vals...)
}

func Delete(tableName string, columnsToFilter []string, filterOperators []string, vals ...interface{}) int64 {

	return exec(
		filteredDeleteQuery(tableName, columnsToFilter, filterOperators),
		vals...)
}

func UpdateOne(
	tableName string,
	columns []string,
	vals []interface{},
	columnToFilter string,
	filterOperator string,
	filterValue interface{}) int64 {

	return exec(
		updateQuery(tableName, columns, columnToFilter, filterOperator),
		append(vals, filterValue)...)
}

func UpdateOneEquals(
	tableName string,
	columns []string,
	vals []interface{},
	columnToFilter string,
	filterValue interface{}) int64 {
	return UpdateOne(tableName, columns, vals, columnToFilter, "=", filterValue)
}

func DropTable(tableName string) bool {
	statement := utils.LoadTemplate(DROP_TABLE, map[string]string{"table_name": tableName})
	return exec(statement) > 0
}

func SelectIn(tableName string, columns []string, by string, vals ...interface{}) *pgx.Rows {

	queryString := fmt.Sprintf(
		"select %s from %s where %s in %s",
		columnNamesToSql(columns), tableName, by, sqlQueryArgs(len(vals), 1))
	return query(queryString, vals...)
}

func SelectAll(tableName string, columns []string) *pgx.Rows {

	queryString := fmt.Sprintf("select %s from %s", columnNamesToSql(columns), tableName)
	return query(queryString)
}

func DeleteIn(tableName string, columns []string, by string, vals ...interface{}) int64 {

	return exec(fmt.Sprintf(
		"delete from %s where %s in %s",
		tableName, by, sqlQueryArgs(len(vals), 1)),
		vals...)
}

func SelectNotIn(tableName string, columns []string, by string, vals ...interface{}) *pgx.Rows {

	return query(fmt.Sprintf(
		"select %s from %s where %s not in %s",
		columnNamesToSql(columns), tableName, by, sqlQueryArgs(len(vals), 1)),
		vals...)
}

func DeleteNotIn(tableName string, columns []string, by string, vals ...interface{}) int64 {

	return exec(fmt.Sprintf(
		"delete from %s where %s not in %s",
		tableName, by, sqlQueryArgs(len(vals), 1)),
		vals...)
}

func SelectEqual(tableName string, columns []string, by string, val interface{}) *pgx.Rows {

	return query(fmt.Sprintf(
		"select %s from %s where %s = $1",
		columnNamesToSql(columns), tableName, by),
		val)
}

func DeleteEqual(tableName string, column string, value interface{}) int64 {

	return exec(fmt.Sprintf(
		"delete from %s where %s = $1",
		tableName, column), value)
}

func SelectLike(tableName string, columns []string, by string, val string) *pgx.Rows {

	return query(fmt.Sprintf(
		"select %s from %s where %s LIKE $1",
		columnNamesToSql(columns), tableName, by),
		fmt.Sprintf("%%%s%%", val))
}

func DeleteLike(tableName string, columns []string, by string, val string) int64 {

	return exec(fmt.Sprintf(
		"delete from %s where %s LIKE $1",
		tableName, by),
		fmt.Sprintf("%%%s%%", val))
}

// batch methods

func NewBatch() *Batch {
	b := &Batch{}
	b.PgxBatch = &pgx.Batch{}
	b.Size = 0
	return b
}

func (b *Batch) AddInsert(tableName string, columns, returning []string, values ...interface{}) {

	queryString := insertQuery(tableName, columns, returning)
	b.PgxBatch.Queue(queryString, values...)
	b.Size++
}

func (b *Batch) AddDelete(tableName string, columnsToFilter, filterOperators []string, vals ...interface{}) {

	queryString := filteredDeleteQuery(tableName, columnsToFilter, filterOperators)
	b.PgxBatch.Queue(queryString, vals...)
	b.Size++
}

func (b *Batch) Exec() int64 {

	cmd, err := b.Res.Exec()
	b.Size--
	if err != nil {
		log.Print(err)
		return 0
	} else if cmd == nil || cmd.RowsAffected() < 1 {
		log.Print(errors.New("no row inserted"))
		return 0
	}
	// TODO: understand why br.Exec() cmd has rowsAffected set to 1 no matter the batch Size
	// else if cmd.RowsAffected() != int64(BATCH.Len()) {
	// 	log.Print(errors.New(fmt.Sprintf("batch failed: %d / %d\n", cmd.RowsAffected(), BATCH.Len())))
	// 	return 0
	// }
	return cmd.RowsAffected() // int64(b.PgxBatch.Len())
}

func (b *Batch) Query() *pgx.Rows {

	rows, err := b.Res.Query()
	b.Size--
	if err != nil {
		log.Print(err)
		//ResetConnection()
		return nil
	}
	// ROWS = &rows
	return &rows
}

func (b *Batch) AddInsertList(tableName string, columns, returning []string, table ...[]interface{}) {

	for _, values := range table {
		b.AddInsert(tableName, columns, returning, values...)
	}
}

func (b *Batch) DeleteList(tableName string, columnsToFilter []string, filterOperators [][]string, vals ...[]interface{}) {

	for i, values := range vals {
		b.AddDelete(tableName, columnsToFilter, filterOperators[i], values)
	}
}

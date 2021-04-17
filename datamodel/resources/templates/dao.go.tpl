// GENERATED - DO NOT MODIFY

package ${package_name}

import (

    // external dependencies
    "log"
    "github.com/jackc/pgx/v4"
    "github.com/golang/protobuf/proto"

    // project dependencies
	"star_wars_clash/datamodel/adapter"
    "star_wars_clash/datamodel/types"

    // dao dependencies
    ${imports}
)

const (
${table_name_const}

${column_names_const}
)

var COLUMNS_TO_CREATE = []string{
${columns_to_create}
}

var COLUMNS_TO_RETURN = []string{
${columns_to_return}
}

var COLUMNS_TO_UPDATE = []string{
${columns_to_update}
}

var DAO_LINKS map[string]types.Link = map[string]types.Link{
    ${dao_links}
}

var PRIMITIVE_LINKS map[string]types.Link = map[string]types.Link{
    ${primitive_links}
}

func fetchLinkRows(el *${class_name}, l types.Link) *pgx.Rows {
    return adapter.SelectIn(l.Table, []string{ l.Target }, l.By, el.${id_attribute})
}

func fetchLinks(el *${class_name}) {
    // DAO_LINKS >> entity = true
${fetch_dao_links}
    // PRIMITIVE_LINKS >> entity = false
${fetch_primitive_links}
}

const PRINTER = `
${printers}
`

func getStorable(el *${class_name}) []interface{} {
	return []interface{}{
${storables}
    }
}

func getStorableList(els ...*${class_name}) [][]interface{} {

	var l [][]interface{}
	for _, el := range els {
		l = append(l, getStorable(el))
	}
	return l
}

var CACHE = cacheInit()

func cacheInit() map[string]map[interface{}]*${class_name} {

	c := map[string]map[interface{}]*${class_name}{}
${cache_init}
	return c
}

func addToCache(els ...*${class_name}) {

	for _, el := range els {
${add_to_cache}
		// fmt.Println("cached: ", string(el.Email))
	}
}

func getFromCacheBy(by string, vals ...interface{}) []*${class_name} {

	var els []*${class_name}

	for _, val := range vals {
		if el, ok := CACHE[by][val]; ok {
			// fmt.Println("from addToCache: ", string(el.Email))
			els = append(els, el)
		}
	}
	return els
}

func removeFromCache(els ...*${class_name}) bool {

	for _, el := range els {
		if el, ok := ${default_cache}; ok {
${remove_from_cache}
			return true
		}
	}
	return false
}

func removeFromCacheBy(by string, vals ...interface{}) bool {

	els := getFromCacheBy(by, vals...)
	return removeFromCache(els...)
}

func FromRow(rows *pgx.Rows) *${class_name} {

${pgtypes}

	err := (*rows).Scan(
${pgscan}
    )
	if err != nil {
		log.Print(err)
		return nil
	}

	return &${class_name}{
${from_pgtypes}
    }
}

func GetBytes(el *${class_name}) []byte {

	b, err := proto.Marshal(el)
	if err != nil { log.Print(err); return nil }
	return b
}

// decodes entity from protobuf binary
func FromBytes(bytes []byte) *${class_name} {

	u := &${class_name}{}
	if err:= proto.Unmarshal(bytes, u); err != nil { log.Print(err); return nil }
	return u
}

// decodes entity from protobuf binary list
func ListFromBytes(bl [][]byte) []*${class_name} {

	var l []*${class_name}
	for _, b := range bl { if el := FromBytes(b); el != nil { l = append(l, el) } }
	return l
}

// prints entities from serialized bytes
func Print(els ...*${class_name}) {
	for _, el := range els { log.Printf(PRINTER, getStorable(el)...) }
}

// prints entity from serialized bytes
func PrintFromBytes(b ...[]byte) {
	Print(ListFromBytes(b)...)
}

// store to database from entity
func Store(el *${class_name}, cache bool) uint64 {
	if cache { addToCache(el) }
	return adapter.Store(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorable(el)...)
}

// store to database from serialized bytes
func StoreFromBytes(bytes []byte) uint64 {
	return Store(FromBytes(bytes), false)
}

// store list to database
func StoreList(els ...*${class_name}) []uint64 {
	return adapter.StoreList(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorableList(els...)...)
}

// delete from database by criteria
func DeleteBy(by string, vals ...interface{}) int64 {
	return adapter.DeleteIn(TABLE_NAME, nil, by, vals...)
}

// delete entity from cache and database
func Delete(els ...*${class_name}) int64 {

	var ids []interface{}
	for _, el := range els { ids = append(ids, el.${id_attribute}) }
	removeFromCache(els...)
	return DeleteBy(${id_column}, ids...)
}

// update entity in cache and database
func UpdateOne(el *${class_name}) int64 {

    executed := int64(0)
    if el.${id_attribute} == 0 {
        // new element >> store
        el.${id_attribute} = Store(el, true)
        executed = 1
    } else {
        executed = adapter.UpdateOneEquals(TABLE_NAME, COLUMNS_TO_UPDATE, append([]interface{}{ el.${id_attribute} }, getStorable(el)...), ID, el.${id_attribute})
    }
    addToCache(el)
    return executed
}

// create entities from query resultset
func FromRows(rows *pgx.Rows) []*${class_name} {
	if rows == nil || *rows == nil { return nil }
	var list []*${class_name}
	for (*rows).Next() { list = append(list, FromRow(rows)) }
	return list
}

// create entities from database query
func FetchBy(by string, vals ...interface{}) []*${class_name} {
	rows := adapter.SelectIn(TABLE_NAME, nil, by, vals...)
	return FromRows(rows)
}

// create entities from database query
func FetchAll() []*${class_name} {
    rows := adapter.SelectAll(TABLE_NAME, nil)
    return FromRows(rows)
}

// create entities from cache or database
func GetBy(by string, vals ...interface{}) []*${class_name} {

	var cached []*${class_name}
	var fetched []*${class_name}
	var toFetch []interface{}

	// TODO: optimize that
	for _, val := range vals {
		fromCache := getFromCacheBy(by, val)
		if fromCache != nil {
			cached = append(cached, fromCache...)
		} else {
			toFetch = append(toFetch, val)
		}
	}
	fetched = FetchBy(by, toFetch...)
	addToCache(fetched...)
	return append(cached, fetched...)
}

func GetOneBy(by string, val interface{}) *${class_name} {
	l := GetBy(by, val)
	if len(l) > 0 { return GetBy(by, val)[0] }
	return nil
}

${default_exports}

func TestDao() {
${test_dao}
}

// GENERATED - DO NOT MODIFY

package planet_cross_score

import (

	// external dependencies
	"log"

	"github.com/golang/protobuf/proto"
	"github.com/jackc/pgx/v4"

	// project dependencies
	"star_wars_clash/datamodel/adapter"
	"star_wars_clash/datamodel/types"

	// dao dependencies
	. "star_wars_clash/datamodel/generated/proto/entities"
)

const (
	TABLE_NAME = "planet_cross_scores"

	ID        = "id"
	REF       = "ref"
	CMP       = "cmp"
	REF_LIKES = "ref_likes"
	CMP_LIKES = "cmp_likes"
)

var COLUMNS_TO_CREATE = []string{
	REF,
	CMP,
	REF_LIKES,
	CMP_LIKES,
}

var COLUMNS_TO_RETURN = []string{
	ID,
}

var COLUMNS_TO_UPDATE = []string{
	ID,
	REF,
	CMP,
	REF_LIKES,
	CMP_LIKES,
}

var DAO_LINKS map[string]types.Link = map[string]types.Link{}

var PRIMITIVE_LINKS map[string]types.Link = map[string]types.Link{}

func fetchLinkRows(el *PlanetCrossScore, l types.Link) *pgx.Rows {
	return adapter.SelectIn(l.Table, []string{l.Target}, l.By, el.Id)
}

func fetchLinks(el *PlanetCrossScore) {
	// DAO_LINKS >> entity = true

	// PRIMITIVE_LINKS >> entity = false

}

const PRINTER = `
"ref":                 %d
"cmp":                 %d
"ref_likes":           %d
"cmp_likes":           %d

`

func getStorable(el *PlanetCrossScore) []interface{} {
	return []interface{}{
		el.Ref,
		el.Cmp,
		el.RefLikes,
		el.CmpLikes,
	}
}

func getStorableList(els ...*PlanetCrossScore) [][]interface{} {

	var l [][]interface{}
	for _, el := range els {
		l = append(l, getStorable(el))
	}
	return l
}

var CACHE = cacheInit()

func cacheInit() map[string]map[interface{}]*PlanetCrossScore {

	c := map[string]map[interface{}]*PlanetCrossScore{}
	c[ID] = map[interface{}]*PlanetCrossScore{}
	c[REF] = map[interface{}]*PlanetCrossScore{}
	c[CMP] = map[interface{}]*PlanetCrossScore{}

	return c
}

func addToCache(els ...*PlanetCrossScore) {

	for _, el := range els {
		CACHE[ID][el.Id] = el
		CACHE[REF][el.Ref] = el
		CACHE[CMP][el.Cmp] = el

		// fmt.Println("cached: ", string(el.Email))
	}
}

func getFromCacheBy(by string, vals ...interface{}) []*PlanetCrossScore {

	var els []*PlanetCrossScore

	for _, val := range vals {
		if el, ok := CACHE[by][val]; ok {
			// fmt.Println("from addToCache: ", string(el.Email))
			els = append(els, el)
		}
	}
	return els
}

func removeFromCache(els ...*PlanetCrossScore) bool {

	for _, el := range els {
		if el, ok := CACHE[ID][el.Id]; ok {
			delete(CACHE[ID], el.Id)
			delete(CACHE[REF], el.Ref)
			delete(CACHE[CMP], el.Cmp)

			return true
		}
	}
	return false
}

func removeFromCacheBy(by string, vals ...interface{}) bool {

	els := getFromCacheBy(by, vals...)
	return removeFromCache(els...)
}

func FromRow(rows *pgx.Rows) *PlanetCrossScore {

	var id uint64
	var ref uint64
	var cmp uint64
	var refLikes uint32
	var cmpLikes uint32

	err := (*rows).Scan(
		&id,
		&ref,
		&cmp,
		&refLikes,
		&cmpLikes,
	)
	if err != nil {
		log.Print(err)
		return nil
	}

	return &PlanetCrossScore{
		Id:       id,
		Ref:      ref,
		Cmp:      cmp,
		RefLikes: refLikes,
		CmpLikes: cmpLikes,
	}
}

func GetBytes(el *PlanetCrossScore) []byte {

	b, err := proto.Marshal(el)
	if err != nil {
		log.Print(err)
		return nil
	}
	return b
}

// decodes entity from protobuf binary
func FromBytes(bytes []byte) *PlanetCrossScore {

	u := &PlanetCrossScore{}
	if err := proto.Unmarshal(bytes, u); err != nil {
		log.Print(err)
		return nil
	}
	return u
}

// decodes entity from protobuf binary list
func ListFromBytes(bl [][]byte) []*PlanetCrossScore {

	var l []*PlanetCrossScore
	for _, b := range bl {
		if el := FromBytes(b); el != nil {
			l = append(l, el)
		}
	}
	return l
}

// prints entities from serialized bytes
func Print(els ...*PlanetCrossScore) {
	for _, el := range els {
		log.Printf(PRINTER, getStorable(el)...)
	}
}

// prints entity from serialized bytes
func PrintFromBytes(b ...[]byte) {
	Print(ListFromBytes(b)...)
}

// store to database from entity
func Store(el *PlanetCrossScore, cache bool) uint64 {
	if cache {
		addToCache(el)
	}
	return adapter.Store(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorable(el)...)
}

// store to database from serialized bytes
func StoreFromBytes(bytes []byte) uint64 {
	return Store(FromBytes(bytes), false)
}

// store list to database
func StoreList(els ...*PlanetCrossScore) []uint64 {
	return adapter.StoreList(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorableList(els...)...)
}

// delete from database by criteria
func DeleteBy(by string, vals ...interface{}) int64 {
	return adapter.DeleteIn(TABLE_NAME, nil, by, vals...)
}

// delete entity from cache and database
func Delete(els ...*PlanetCrossScore) int64 {

	var ids []interface{}
	for _, el := range els {
		ids = append(ids, el.Id)
	}
	removeFromCache(els...)
	return DeleteBy(ID, ids...)
}

// update entity in cache and database
func UpdateOne(el *PlanetCrossScore) int64 {

	executed := int64(0)
	if el.Id == 0 {
		// new element >> store
		el.Id = Store(el, true)
		executed = 1
	} else {
		executed = adapter.UpdateOneEquals(TABLE_NAME, COLUMNS_TO_UPDATE, append([]interface{}{el.Id}, getStorable(el)...), ID, el.Id)
	}
	addToCache(el)
	return executed
}

// create entities from query resultset
func FromRows(rows *pgx.Rows) []*PlanetCrossScore {
	if rows == nil || *rows == nil {
		return nil
	}
	var list []*PlanetCrossScore
	for (*rows).Next() {
		list = append(list, FromRow(rows))
	}
	return list
}

// create entities from database query
func FetchBy(by string, vals ...interface{}) []*PlanetCrossScore {
	rows := adapter.SelectIn(TABLE_NAME, nil, by, vals...)
	return FromRows(rows)
}

// create entities from database query
func FetchAll() []*PlanetCrossScore {
	rows := adapter.SelectAll(TABLE_NAME, nil)
	return FromRows(rows)
}

// create entities from cache or database
func GetBy(by string, vals ...interface{}) []*PlanetCrossScore {

	var cached []*PlanetCrossScore
	var fetched []*PlanetCrossScore
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

func GetOneBy(by string, val interface{}) *PlanetCrossScore {
	l := GetBy(by, val)
	if len(l) > 0 {
		return GetBy(by, val)[0]
	}
	return nil
}

func TestDao() {

}

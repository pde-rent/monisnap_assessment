// GENERATED - DO NOT MODIFY

package planet_absolute_score

import (

    // external dependencies
    "log"
    "github.com/jackc/pgx/v4"
    "github.com/golang/protobuf/proto"

    // project dependencies
	"assessment/datamodel/adapter"
    "assessment/datamodel/types"

    // dao dependencies
    . "assessment/datamodel/generated/proto/entities"
)

const (
    TABLE_NAME = "planet_absolute_scores"

    ID = "id"
    REF = "ref"
    LIKES = "likes"
    DISLIKES = "dislikes"

)

var COLUMNS_TO_CREATE = []string{
    REF,
    LIKES,
    DISLIKES,

}

var COLUMNS_TO_RETURN = []string{
    ID,

}

var COLUMNS_TO_UPDATE = []string{
    ID,
    REF,
    LIKES,
    DISLIKES,

}

var DAO_LINKS map[string]types.Link = map[string]types.Link{
    
}

var PRIMITIVE_LINKS map[string]types.Link = map[string]types.Link{
    
}

func fetchLinkRows(el *PlanetAbsoluteScore, l types.Link) *pgx.Rows {
    return adapter.SelectIn(l.Table, []string{ l.Target }, l.By, el.Id)
}

func fetchLinks(el *PlanetAbsoluteScore) {
    // DAO_LINKS >> entity = true

    // PRIMITIVE_LINKS >> entity = false

}

const PRINTER = `
"ref":                 %d
"likes":               %d
"dislikes":            %d

`

func getStorable(el *PlanetAbsoluteScore) []interface{} {
	return []interface{}{
        el.Ref,
        el.Likes,
        el.Dislikes,

    }
}

func getStorableList(els ...*PlanetAbsoluteScore) [][]interface{} {

	var l [][]interface{}
	for _, el := range els {
		l = append(l, getStorable(el))
	}
	return l
}

var CACHE = cacheInit()

func cacheInit() map[string]map[interface{}]*PlanetAbsoluteScore {

	c := map[string]map[interface{}]*PlanetAbsoluteScore{}
    c[ID] = map[interface{}]*PlanetAbsoluteScore{}
    c[REF] = map[interface{}]*PlanetAbsoluteScore{}

	return c
}

func addToCache(els ...*PlanetAbsoluteScore) {

	for _, el := range els {
        CACHE[ID][el.Id] = el
        CACHE[REF][el.Ref] = el

		// fmt.Println("cached: ", string(el.Email))
	}
}

func getFromCacheBy(by string, vals ...interface{}) []*PlanetAbsoluteScore {

	var els []*PlanetAbsoluteScore

	for _, val := range vals {
		if el, ok := CACHE[by][val]; ok {
			// fmt.Println("from addToCache: ", string(el.Email))
			els = append(els, el)
		}
	}
	return els
}

func removeFromCache(els ...*PlanetAbsoluteScore) bool {

	for _, el := range els {
		if el, ok := CACHE[ID][el.Id]; ok {
            delete(CACHE[ID], el.Id)
            delete(CACHE[REF], el.Ref)

			return true
		}
	}
	return false
}

func removeFromCacheBy(by string, vals ...interface{}) bool {

	els := getFromCacheBy(by, vals...)
	return removeFromCache(els...)
}

func FromRow(rows *pgx.Rows) *PlanetAbsoluteScore {

    var id uint64
    var ref uint64
    var likes uint32
    var dislikes uint32


	err := (*rows).Scan(
        &id,
        &ref,
        &likes,
        &dislikes,

    )
	if err != nil {
		log.Print(err)
		return nil
	}

	return &PlanetAbsoluteScore{
        Id: id,
        Ref: ref,
        Likes: likes,
        Dislikes: dislikes,

    }
}

func GetBytes(el *PlanetAbsoluteScore) []byte {

	b, err := proto.Marshal(el)
	if err != nil { log.Print(err); return nil }
	return b
}

// decodes entity from protobuf binary
func FromBytes(bytes []byte) *PlanetAbsoluteScore {

	u := &PlanetAbsoluteScore{}
	if err:= proto.Unmarshal(bytes, u); err != nil { log.Print(err); return nil }
	return u
}

// decodes entity from protobuf binary list
func ListFromBytes(bl [][]byte) []*PlanetAbsoluteScore {

	var l []*PlanetAbsoluteScore
	for _, b := range bl { if el := FromBytes(b); el != nil { l = append(l, el) } }
	return l
}

// prints entities from serialized bytes
func Print(els ...*PlanetAbsoluteScore) {
	for _, el := range els { log.Printf(PRINTER, getStorable(el)...) }
}

// prints entity from serialized bytes
func PrintFromBytes(b ...[]byte) {
	Print(ListFromBytes(b)...)
}

// store to database from entity
func Store(el *PlanetAbsoluteScore, cache bool) uint64 {
	if cache { addToCache(el) }
	return adapter.Store(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorable(el)...)
}

// store to database from serialized bytes
func StoreFromBytes(bytes []byte) uint64 {
	return Store(FromBytes(bytes), false)
}

// store list to database
func StoreList(els ...*PlanetAbsoluteScore) []uint64 {
	return adapter.StoreList(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorableList(els...)...)
}

// delete from database by criteria
func DeleteBy(by string, vals ...interface{}) int64 {
	return adapter.DeleteIn(TABLE_NAME, nil, by, vals...)
}

// delete entity from cache and database
func Delete(els ...*PlanetAbsoluteScore) int64 {

	var ids []interface{}
	for _, el := range els { ids = append(ids, el.Id) }
	removeFromCache(els...)
	return DeleteBy(ID, ids...)
}

// update entity in cache and database
func UpdateOne(el *PlanetAbsoluteScore) int64 {

    executed := int64(0)
    if el.Id == 0 {
        // new element >> store
        el.Id = Store(el, true)
        executed = 1
    } else {
        executed = adapter.UpdateOneEquals(TABLE_NAME, COLUMNS_TO_UPDATE, append([]interface{}{ el.Id }, getStorable(el)...), ID, el.Id)
    }
    addToCache(el)
    return executed
}

// create entities from query resultset
func FromRows(rows *pgx.Rows) []*PlanetAbsoluteScore {
	if rows == nil || *rows == nil { return nil }
	var list []*PlanetAbsoluteScore
	for (*rows).Next() { list = append(list, FromRow(rows)) }
	return list
}

// create entities from database query
func FetchBy(by string, vals ...interface{}) []*PlanetAbsoluteScore {
	rows := adapter.SelectIn(TABLE_NAME, nil, by, vals...)
	return FromRows(rows)
}

// create entities from database query
func FetchAll() []*PlanetAbsoluteScore {
    rows := adapter.SelectAll(TABLE_NAME, nil)
    return FromRows(rows)
}

// create entities from cache or database
func GetBy(by string, vals ...interface{}) []*PlanetAbsoluteScore {

	var cached []*PlanetAbsoluteScore
	var fetched []*PlanetAbsoluteScore
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

func GetOneBy(by string, val interface{}) *PlanetAbsoluteScore {
	l := GetBy(by, val)
	if len(l) > 0 { return GetBy(by, val)[0] }
	return nil
}



func TestDao() {

}

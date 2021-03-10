// GENERATED - DO NOT MODIFY

package character

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
    "github.com/jackc/pgtype"
    "assessment/datamodel/generated/dao/species"
    "assessment/datamodel/generated/dao/planet"
    . "assessment/datamodel/generated/proto/enums"
)

const (
    TABLE_NAME = "characters"

    ID = "id"
    NAME = "name"
    HEIGHT = "height"
    MASS = "mass"
    HAIR_COLOR = "hair_color"
    SKIN_COLOR = "skin_color"
    EYE_COLOR = "eye_color"
    BIRTH_YEAR = "birth_year"
    GENDER = "gender"
    HOMEWORLD = "homeworld"
    SPECIES = "species"
    MAIN_AFFILIATION = "main_affiliation"

)

var COLUMNS_TO_CREATE = []string{
    NAME,
    HEIGHT,
    MASS,
    HAIR_COLOR,
    SKIN_COLOR,
    EYE_COLOR,
    BIRTH_YEAR,
    GENDER,
    HOMEWORLD,
    SPECIES,
    MAIN_AFFILIATION,

}

var COLUMNS_TO_RETURN = []string{
    ID,

}

var COLUMNS_TO_UPDATE = []string{
    ID,
    NAME,
    HEIGHT,
    MASS,
    HAIR_COLOR,
    SKIN_COLOR,
    EYE_COLOR,
    BIRTH_YEAR,
    GENDER,
    HOMEWORLD,
    SPECIES,
    MAIN_AFFILIATION,

}

var DAO_LINKS map[string]types.Link = map[string]types.Link{
    
}

var PRIMITIVE_LINKS map[string]types.Link = map[string]types.Link{
    
}

func fetchLinkRows(el *Character, l types.Link) *pgx.Rows {
    return adapter.SelectIn(l.Table, []string{ l.Target }, l.By, el.Id)
}

func fetchLinks(el *Character) {
    // DAO_LINKS >> entity = true

    // PRIMITIVE_LINKS >> entity = false

}

const PRINTER = `
"name":                %s
"height":              %d
"mass":                %d
"hair_color":          %v
"skin_color":          %v
"eye_color":           %v
"birth_year":          %f
"gender":              %v
"homeworld":           %d
"species":             %d
"main_affiliation":    %v

`

func getStorable(el *Character) []interface{} {
	return []interface{}{
        el.Name,
        el.Height,
        el.Mass,
        el.HairColor,
        el.SkinColor,
        el.EyeColor,
        el.BirthYear,
        el.Gender,
        el.Homeworld.Id,
        el.Species.Id,
        el.MainAffiliation,

    }
}

func getStorableList(els ...*Character) [][]interface{} {

	var l [][]interface{}
	for _, el := range els {
		l = append(l, getStorable(el))
	}
	return l
}

var CACHE = cacheInit()

func cacheInit() map[string]map[interface{}]*Character {

	c := map[string]map[interface{}]*Character{}
    c[ID] = map[interface{}]*Character{}
    c[NAME] = map[interface{}]*Character{}

	return c
}

func addToCache(els ...*Character) {

	for _, el := range els {
        CACHE[ID][el.Id] = el
        CACHE[NAME][string(el.Name)] = el

		// fmt.Println("cached: ", string(el.Email))
	}
}

func getFromCacheBy(by string, vals ...interface{}) []*Character {

	var els []*Character

	for _, val := range vals {
		if el, ok := CACHE[by][val]; ok {
			// fmt.Println("from addToCache: ", string(el.Email))
			els = append(els, el)
		}
	}
	return els
}

func removeFromCache(els ...*Character) bool {

	for _, el := range els {
		if el, ok := CACHE[ID][el.Id]; ok {
            delete(CACHE[ID], el.Id)
            delete(CACHE[NAME], el.Name)

			return true
		}
	}
	return false
}

func removeFromCacheBy(by string, vals ...interface{}) bool {

	els := getFromCacheBy(by, vals...)
	return removeFromCache(els...)
}

func FromRow(rows *pgx.Rows) *Character {

    var id uint64
    var name pgtype.Varchar
    var height int32
    var mass int32
    var hairColor string
    var skinColor string
    var eyeColor string
    var birthYear float32
    var gender string
    var homeworldId uint64
    var speciesId uint64
    var mainAffiliation string


	err := (*rows).Scan(
        &id,
        &name,
        &height,
        &mass,
        &hairColor,
        &skinColor,
        &eyeColor,
        &birthYear,
        &gender,
        &homeworldId,
        &speciesId,
        &mainAffiliation,

    )
	if err != nil {
		log.Print(err)
		return nil
	}

	return &Character{
        Id: id,
        Name: name.String,
        Height: height,
        Mass: mass,
        HairColor: Color(Color_value[hairColor]),
        SkinColor: Color(Color_value[skinColor]),
        EyeColor: Color(Color_value[eyeColor]),
        BirthYear: birthYear,
        Gender: Gender(Gender_value[gender]),
        Homeworld: planet.GetBy("id", homeworldId)[0],
        Species: species.GetBy("id", speciesId)[0],
        MainAffiliation: Affiliation(Affiliation_value[mainAffiliation]),

    }
}

func GetBytes(el *Character) []byte {

	b, err := proto.Marshal(el)
	if err != nil { log.Print(err); return nil }
	return b
}

// decodes entity from protobuf binary
func FromBytes(bytes []byte) *Character {

	u := &Character{}
	if err:= proto.Unmarshal(bytes, u); err != nil { log.Print(err); return nil }
	return u
}

// decodes entity from protobuf binary list
func ListFromBytes(bl [][]byte) []*Character {

	var l []*Character
	for _, b := range bl { if el := FromBytes(b); el != nil { l = append(l, el) } }
	return l
}

// prints entities from serialized bytes
func Print(els ...*Character) {
	for _, el := range els { log.Printf(PRINTER, getStorable(el)...) }
}

// prints entity from serialized bytes
func PrintFromBytes(b ...[]byte) {
	Print(ListFromBytes(b)...)
}

// store to database from entity
func Store(el *Character, cache bool) uint64 {
	if cache { addToCache(el) }
	return adapter.Store(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorable(el)...)
}

// store to database from serialized bytes
func StoreFromBytes(bytes []byte) uint64 {
	return Store(FromBytes(bytes), false)
}

// store list to database
func StoreList(els ...*Character) []uint64 {
	return adapter.StoreList(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorableList(els...)...)
}

// delete from database by criteria
func DeleteBy(by string, vals ...interface{}) int64 {
	return adapter.DeleteIn(TABLE_NAME, nil, by, vals...)
}

// delete entity from cache and database
func Delete(els ...*Character) int64 {

	var ids []interface{}
	for _, el := range els { ids = append(ids, el.Id) }
	removeFromCache(els...)
	return DeleteBy(ID, ids...)
}

// update entity in cache and database
func UpdateOne(el *Character) int64 {

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
func FromRows(rows *pgx.Rows) []*Character {
	if rows == nil || *rows == nil { return nil }
	var list []*Character
	for (*rows).Next() { list = append(list, FromRow(rows)) }
	return list
}

// create entities from database query
func FetchBy(by string, vals ...interface{}) []*Character {
	rows := adapter.SelectIn(TABLE_NAME, nil, by, vals...)
	return FromRows(rows)
}

// create entities from database query
func FetchAll() []*Character {
    rows := adapter.SelectAll(TABLE_NAME, nil)
    return FromRows(rows)
}

// create entities from cache or database
func GetBy(by string, vals ...interface{}) []*Character {

	var cached []*Character
	var fetched []*Character
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

func GetOneBy(by string, val interface{}) *Character {
	l := GetBy(by, val)
	if len(l) > 0 { return GetBy(by, val)[0] }
	return nil
}



func TestDao() {

}

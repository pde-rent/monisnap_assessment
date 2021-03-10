// GENERATED - DO NOT MODIFY

package species

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
    //. "assessment/utils"
    "github.com/jackc/pgtype"
    "assessment/datamodel/generated/dao/planet"
    . "assessment/datamodel/generated/proto/enums"
)

const (
    TABLE_NAME = "species"

    ID = "id"
    NAME = "name"
    SPECIES_TYPE = "species_type"
    AVERAGE_HEIGHT = "average_height"
    AVERAGE_LIFESPAN = "average_lifespan"
    LANGUAGE = "language"
    HOMEWORLD = "homeworld"
    SKIN_COLORS = "skin_colors"
    HAIR_COLORS = "hair_colors"
    EYE_COLORS = "eye_colors"

)

var COLUMNS_TO_CREATE = []string{
    NAME,
    SPECIES_TYPE,
    AVERAGE_HEIGHT,
    AVERAGE_LIFESPAN,
    LANGUAGE,
    HOMEWORLD,

}

var COLUMNS_TO_RETURN = []string{
    ID,

}

var COLUMNS_TO_UPDATE = []string{
    ID,
    NAME,
    SPECIES_TYPE,
    AVERAGE_HEIGHT,
    AVERAGE_LIFESPAN,
    LANGUAGE,
    HOMEWORLD,

}

var DAO_LINKS map[string]types.Link = map[string]types.Link{
    
}

var PRIMITIVE_LINKS map[string]types.Link = map[string]types.Link{
    
    "skinColors": {
        Table: "character_skin_colors",
        Type: "enum",
        By: "id",
        Target: "color"},
    "hairColors": {
        Table: "character_hair_colors",
        Type: "enum",
        By: "id",
        Target: "color"},
    "eyeColors": {
        Table: "character_eye_colors",
        Type: "enum",
        By: "id",
        Target: "color"},
}

func fetchLinkRows(el *Species, l types.Link) *pgx.Rows {
    return adapter.SelectIn(l.Table, []string{ l.Target }, l.By, el.Id)
}

func fetchLinks(el *Species) {
    // DAO_LINKS >> entity = true

    // PRIMITIVE_LINKS >> entity = false
var strList []string

    strList = adapter.RowsToString(fetchLinkRows(el, PRIMITIVE_LINKS["skinColors"]))

    // el.SkinColors = []Color
    for _, s := range strList {
        v, ok := Color_value[s]
        if !ok { continue }
        el.SkinColors = append(el.SkinColors, Color(v))
    }

    strList = adapter.RowsToString(fetchLinkRows(el, PRIMITIVE_LINKS["hairColors"]))

    // el.HairColors = []Color
    for _, s := range strList {
        v, ok := Color_value[s]
        if !ok { continue }
        el.HairColors = append(el.HairColors, Color(v))
    }

    strList = adapter.RowsToString(fetchLinkRows(el, PRIMITIVE_LINKS["eyeColors"]))

    // el.EyeColors = []Color
    for _, s := range strList {
        v, ok := Color_value[s]
        if !ok { continue }
        el.EyeColors = append(el.EyeColors, Color(v))
    }

}

const PRINTER = `
"name":                %s
"species_type":        %v
"average_height":      %d
"average_lifespan":    %d
"language":            %s
"homeworld":           %d

`

func getStorable(el *Species) []interface{} {
	return []interface{}{
        el.Name,
        el.SpeciesType,
        el.AverageHeight,
        el.AverageLifespan,
        el.Language,
        el.Homeworld.Id,

    }
}

func getStorableList(els ...*Species) [][]interface{} {

	var l [][]interface{}
	for _, el := range els {
		l = append(l, getStorable(el))
	}
	return l
}

var CACHE = cacheInit()

func cacheInit() map[string]map[interface{}]*Species {

	c := map[string]map[interface{}]*Species{}
    c[ID] = map[interface{}]*Species{}
    c[NAME] = map[interface{}]*Species{}

	return c
}

func addToCache(els ...*Species) {

	for _, el := range els {
        CACHE[ID][el.Id] = el
        CACHE[NAME][string(el.Name)] = el

		// fmt.Println("cached: ", string(el.Email))
	}
}

func getFromCacheBy(by string, vals ...interface{}) []*Species {

	var els []*Species

	for _, val := range vals {
		if el, ok := CACHE[by][val]; ok {
			// fmt.Println("from addToCache: ", string(el.Email))
			els = append(els, el)
		}
	}
	return els
}

func removeFromCache(els ...*Species) bool {

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

func FromRow(rows *pgx.Rows) *Species {

    var id uint64
    var name pgtype.Varchar
    var speciesType string
    var averageHeight uint32
    var averageLifespan uint32
    var language pgtype.Varchar
    var homeworldId uint64


	err := (*rows).Scan(
        &id,
        &name,
        &speciesType,
        &averageHeight,
        &averageLifespan,
        &language,
        &homeworldId,

    )
	if err != nil {
		log.Print(err)
		return nil
	}

	return &Species{
        Id: id,
        Name: name.String,
        SpeciesType: SpeciesType(SpeciesType_value[speciesType]),
        AverageHeight: averageHeight,
        AverageLifespan: averageLifespan,
        Language: language.String,
        Homeworld: planet.GetBy("id", homeworldId)[0],

    }
}

func GetBytes(el *Species) []byte {

	b, err := proto.Marshal(el)
	if err != nil { log.Print(err); return nil }
	return b
}

// decodes entity from protobuf binary
func FromBytes(bytes []byte) *Species {

	u := &Species{}
	if err:= proto.Unmarshal(bytes, u); err != nil { log.Print(err); return nil }
	return u
}

// decodes entity from protobuf binary list
func ListFromBytes(bl [][]byte) []*Species {

	var l []*Species
	for _, b := range bl { if el := FromBytes(b); el != nil { l = append(l, el) } }
	return l
}

// prints entities from serialized bytes
func Print(els ...*Species) {
	for _, el := range els { log.Printf(PRINTER, getStorable(el)...) }
}

// prints entity from serialized bytes
func PrintFromBytes(b ...[]byte) {
	Print(ListFromBytes(b)...)
}

// store to database from entity
func Store(el *Species, cache bool) uint64 {
	if cache { addToCache(el) }
	return adapter.Store(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorable(el)...)
}

// store to database from serialized bytes
func StoreFromBytes(bytes []byte) uint64 {
	return Store(FromBytes(bytes), false)
}

// store list to database
func StoreList(els ...*Species) []uint64 {
	return adapter.StoreList(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorableList(els...)...)
}

// delete from database by criteria
func DeleteBy(by string, vals ...interface{}) int64 {
	return adapter.DeleteIn(TABLE_NAME, nil, by, vals...)
}

// delete entity from cache and database
func Delete(els ...*Species) int64 {

	var ids []interface{}
	for _, el := range els { ids = append(ids, el.Id) }
	removeFromCache(els...)
	return DeleteBy(ID, ids...)
}

// update entity in cache and database
func UpdateOne(el *Species) int64 {

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
func FromRows(rows *pgx.Rows) []*Species {
	if rows == nil || *rows == nil { return nil }
	var list []*Species
	for (*rows).Next() { list = append(list, FromRow(rows)) }
	return list
}

// create entities from database query
func FetchBy(by string, vals ...interface{}) []*Species {
	rows := adapter.SelectIn(TABLE_NAME, nil, by, vals...)
	return FromRows(rows)
}

// create entities from database query
func FetchAll() []*Species {
    rows := adapter.SelectAll(TABLE_NAME, nil)
    return FromRows(rows)
}

// create entities from cache or database
func GetBy(by string, vals ...interface{}) []*Species {

	var cached []*Species
	var fetched []*Species
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

func GetOneBy(by string, val interface{}) *Species {
	l := GetBy(by, val)
	if len(l) > 0 { return GetBy(by, val)[0] }
	return nil
}



func TestDao() {

}

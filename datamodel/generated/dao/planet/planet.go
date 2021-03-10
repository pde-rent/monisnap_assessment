// GENERATED - DO NOT MODIFY

package planet

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
    . "assessment/datamodel/generated/proto/enums"
)

const (
    TABLE_NAME = "planets"

    ID = "id"
    NAME = "name"
    DAYS_TO_ROTATION = "days_to_rotation"
    DAYS_TO_ORBIT = "days_to_orbit"
    DIAMETER_KM = "diameter_km"
    CLIMATE = "climate"
    STANDARD_GRAVITY = "standard_gravity"
    TERRAIN = "terrain"
    SURFACE_WATER = "surface_water"
    POPULATION = "population"

)

var COLUMNS_TO_CREATE = []string{
    NAME,
    DAYS_TO_ROTATION,
    DAYS_TO_ORBIT,
    DIAMETER_KM,
    CLIMATE,
    STANDARD_GRAVITY,
    TERRAIN,
    SURFACE_WATER,
    POPULATION,

}

var COLUMNS_TO_RETURN = []string{
    ID,

}

var COLUMNS_TO_UPDATE = []string{
    ID,
    NAME,
    DAYS_TO_ROTATION,
    DAYS_TO_ORBIT,
    DIAMETER_KM,
    CLIMATE,
    STANDARD_GRAVITY,
    TERRAIN,
    SURFACE_WATER,
    POPULATION,

}

var DAO_LINKS map[string]types.Link = map[string]types.Link{
    
}

var PRIMITIVE_LINKS map[string]types.Link = map[string]types.Link{
    
}

func fetchLinkRows(el *Planet, l types.Link) *pgx.Rows {
    return adapter.SelectIn(l.Table, []string{ l.Target }, l.By, el.Id)
}

func fetchLinks(el *Planet) {
    // DAO_LINKS >> entity = true

    // PRIMITIVE_LINKS >> entity = false

}

const PRINTER = `
"name":                %s
"days_to_rotation":    %d
"days_to_orbit":       %d
"diameter_km":         %d
"climate":             %v
"standard_gravity":    %f
"terrain":             %s
"surface_water":       %f
"population":          %d

`

func getStorable(el *Planet) []interface{} {
	return []interface{}{
        el.Name,
        el.DaysToRotation,
        el.DaysToOrbit,
        el.DiameterKm,
        el.Climate,
        el.StandardGravity,
        el.Terrain,
        el.SurfaceWaterRatio,
        el.Population,

    }
}

func getStorableList(els ...*Planet) [][]interface{} {

	var l [][]interface{}
	for _, el := range els {
		l = append(l, getStorable(el))
	}
	return l
}

var CACHE = cacheInit()

func cacheInit() map[string]map[interface{}]*Planet {

	c := map[string]map[interface{}]*Planet{}
    c[ID] = map[interface{}]*Planet{}
    c[NAME] = map[interface{}]*Planet{}

	return c
}

func addToCache(els ...*Planet) {

	for _, el := range els {
        CACHE[ID][el.Id] = el
        CACHE[NAME][string(el.Name)] = el

		// fmt.Println("cached: ", string(el.Email))
	}
}

func getFromCacheBy(by string, vals ...interface{}) []*Planet {

	var els []*Planet

	for _, val := range vals {
		if el, ok := CACHE[by][val]; ok {
			// fmt.Println("from addToCache: ", string(el.Email))
			els = append(els, el)
		}
	}
	return els
}

func removeFromCache(els ...*Planet) bool {

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

func FromRow(rows *pgx.Rows) *Planet {

    var id uint64
    var name pgtype.Varchar
    var daysToRotation uint32
    var daysToOrbit uint32
    var diameterKm uint32
    var climate string
    var standardGravity float32
    var terrain pgtype.Varchar
    var surfaceWater float32
    var population uint64


	err := (*rows).Scan(
        &id,
        &name,
        &daysToRotation,
        &daysToOrbit,
        &diameterKm,
        &climate,
        &standardGravity,
        &terrain,
        &surfaceWater,
        &population,

    )
	if err != nil {
		log.Print(err)
		return nil
	}

	return &Planet{
        Id: id,
        Name: name.String,
        DaysToRotation: daysToRotation,
        DaysToOrbit: daysToOrbit,
        DiameterKm: diameterKm,
        Climate: Climate(Climate_value[climate]),
        StandardGravity: standardGravity,
        Terrain: terrain.String,
        SurfaceWaterRatio: surfaceWater,
        Population: population,

    }
}

func GetBytes(el *Planet) []byte {

	b, err := proto.Marshal(el)
	if err != nil { log.Print(err); return nil }
	return b
}

// decodes entity from protobuf binary
func FromBytes(bytes []byte) *Planet {

	u := &Planet{}
	if err:= proto.Unmarshal(bytes, u); err != nil { log.Print(err); return nil }
	return u
}

// decodes entity from protobuf binary list
func ListFromBytes(bl [][]byte) []*Planet {

	var l []*Planet
	for _, b := range bl { if el := FromBytes(b); el != nil { l = append(l, el) } }
	return l
}

// prints entities from serialized bytes
func Print(els ...*Planet) {
	for _, el := range els { log.Printf(PRINTER, getStorable(el)...) }
}

// prints entity from serialized bytes
func PrintFromBytes(b ...[]byte) {
	Print(ListFromBytes(b)...)
}

// store to database from entity
func Store(el *Planet, cache bool) uint64 {
	if cache { addToCache(el) }
	return adapter.Store(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorable(el)...)
}

// store to database from serialized bytes
func StoreFromBytes(bytes []byte) uint64 {
	return Store(FromBytes(bytes), false)
}

// store list to database
func StoreList(els ...*Planet) []uint64 {
	return adapter.StoreList(TABLE_NAME, COLUMNS_TO_CREATE, COLUMNS_TO_RETURN, getStorableList(els...)...)
}

// delete from database by criteria
func DeleteBy(by string, vals ...interface{}) int64 {
	return adapter.DeleteIn(TABLE_NAME, nil, by, vals...)
}

// delete entity from cache and database
func Delete(els ...*Planet) int64 {

	var ids []interface{}
	for _, el := range els { ids = append(ids, el.Id) }
	removeFromCache(els...)
	return DeleteBy(ID, ids...)
}

// update entity in cache and database
func UpdateOne(el *Planet) int64 {

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
func FromRows(rows *pgx.Rows) []*Planet {
	if rows == nil || *rows == nil { return nil }
	var list []*Planet
	for (*rows).Next() { list = append(list, FromRow(rows)) }
	return list
}

// create entities from database query
func FetchBy(by string, vals ...interface{}) []*Planet {
	rows := adapter.SelectIn(TABLE_NAME, nil, by, vals...)
	return FromRows(rows)
}

// create entities from database query
func FetchAll() []*Planet {
    rows := adapter.SelectAll(TABLE_NAME, nil)
    return FromRows(rows)
}

// create entities from cache or database
func GetBy(by string, vals ...interface{}) []*Planet {

	var cached []*Planet
	var fetched []*Planet
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

func GetOneBy(by string, val interface{}) *Planet {
	l := GetBy(by, val)
	if len(l) > 0 { return GetBy(by, val)[0] }
	return nil
}



func TestDao() {

}

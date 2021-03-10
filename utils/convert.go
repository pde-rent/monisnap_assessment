package utils

import (
	"encoding/binary"
	"math"
	"regexp"
	"strings"
	"unsafe"
)

// TODO: check for endianness
func Float64ToBytes(x float64) []byte {

	arr := make([]byte, 8)
	binary.LittleEndian.PutUint64(arr, uint64(x))
	return arr
}

func Float32ToBytes(x float32) []byte {

	arr := make([]byte, 4)
	binary.LittleEndian.PutUint32(arr, uint32(x))
	return arr
}

func BytesToFloat64(b []byte) float64 {

	return *(*float64)(unsafe.Pointer(&b[0]))
}

func BytesToFloat32(b []byte) float32 {

	return *(*float32)(unsafe.Pointer(&b[0]))
}

// TODO: check for endianness
func Int64ToBytes(x int64) []byte {
	return Uint64ToBytes(uint64(x))
}

func Int32ToBytes(x int32) []byte {
	return Uint32ToBytes(uint32(x))
}

func Int16ToBytes(x int16) []byte {
	return Uint16ToBytes(uint16(x))
}

func Uint64ToBytes(x uint64) []byte {

	arr := make([]byte, 8) // var arr [4]byte
	binary.LittleEndian.PutUint64(arr, x)
	return arr
}

func Uint32ToBytes(x uint32) []byte {

	arr := make([]byte, 4) // var arr [4]byte
	binary.LittleEndian.PutUint32(arr, x)
	return arr // (*(*[]byte)(unsafe.Pointer(&f)))[:4]
}

func Uint16ToBytes(x uint16) []byte {

	arr := make([]byte, 2) // var arr [4]byte
	binary.LittleEndian.PutUint16(arr, x)
	return arr // (*(*[]byte)(unsafe.Pointer(&f)))[:2]
}

func BytesToInt64(b []byte) int64 {

	return *(*int64)(unsafe.Pointer(&b[0]))
}

func BytesToInt32(b []byte) int32 {

	return *(*int32)(unsafe.Pointer(&b[0]))
}

func BytesToUint32(b []byte) uint32 {

	return *(*uint32)(unsafe.Pointer(&b[0]))
}

func BytesToUint64(b []byte) uint64 {

	return *(*uint64)(unsafe.Pointer(&b[0]))
}

// TODO: improve / test the case conversion functions (add kebab and pascal case)
var MATCH_SEPARATOR = regexp.MustCompile("(^[A-Za-z])|_([A-Za-z])")
var MATCH_FIRST_CAP = regexp.MustCompile("([A-Z])([A-Z][a-z])")
var MATCH_ALL_CAP   = regexp.MustCompile("([a-z0-9])([A-Z])")

func ToCamelCase(str string) string {
	return MATCH_SEPARATOR.ReplaceAllStringFunc(str, func(s string) string {
		return strings.ToUpper(strings.Replace(s,"_","",-1))
	})
}

func ToSnakeCase(input string) string {
	output := MATCH_FIRST_CAP.ReplaceAllString(input, "${1}_${2}")
	output = MATCH_ALL_CAP.ReplaceAllString(output, "${1}_${2}")
	replacer := strings.NewReplacer("-", "_", " ", "_")
	return strings.ToLower(replacer.Replace(output))
}

func Uint64bToFloat32Mb(n uint64) float32 {
	return float32(math.Round(float64(n) / 1000.00) / 1000)
}

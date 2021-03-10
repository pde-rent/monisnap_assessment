package utils

import (
	"fmt"
	"io/ioutil"
	"log"
	"strings"
)

func LoadTemplate(templatePath string, mappings map[string]string) string {

	bytesTpl, err := ioutil.ReadFile(templatePath)
	if err != nil { log.Fatal(err) }
	sql := string(bytesTpl)
	// TODO: user Replacer: replacer := strings.NewReplacer(k1, v1, k2, v2...)
	for k, v := range mappings {
		sql = strings.ReplaceAll(sql, fmt.Sprintf("${%s}", k), v)
	}
	return sql
}

package types

import (
	"encoding/json"
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"log"
)

type Options struct {
	data map[string]interface{}
}

func (o *Options) Get(key string) interface{} {
	if val, ok := o.data[key]; ok {
		return val
	}
	return ""
}

func (o *Options) GetAsString(key string) string {
	return fmt.Sprintf("%v", o.Get(key))
}

func (o *Options) Set(key string, value interface{}) bool {
	if o.data == nil { o.data = map[string]interface{}{} }
	o.data[key] = value
	return true
}

func (o *Options) SetAsString(key string, value interface{}) bool {
	o.Set(key, fmt.Sprintf("%v", value))
	return true
}

func (o *Options) ToJson() []byte {
	b, err := json.Marshal(o.data)
	if err != nil {
		return nil
	}
	return b
}

func (o *Options) ToXml() []byte {
	b, err := xml.Marshal(o.data)
	if err != nil {
		return nil
	}
	return b
}

func FromXml(b []byte) Options {
	o := Options{}
	err := xml.Unmarshal(b, o.data); if err != nil {
		log.Println(err)
		return Options{}
	}
	return o
}

func FromJson(b []byte) Options {
	o := Options{}
	err := json.Unmarshal(b, o.data); if err != nil {
		log.Println(err)
		return Options{}
	}
	return o
}

func FromJsonFile(filename string) Options {
	b, err := ioutil.ReadFile(filename)
	if err != nil {
		log.Println(err)
		return Options{}
	}
	return FromJson(b)
}

func FromXmlFile(filename string) Options {
	b, err := ioutil.ReadFile(filename)
	if err != nil {
		log.Println(err)
		return Options{}
	}
	return FromXml(b)
}

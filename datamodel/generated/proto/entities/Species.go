// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.14.0
// source: entities/Species.proto

package entities

import (
	enums "assessment/datamodel/generated/proto/enums"
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// table:species
type Species struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id              uint64            `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`                                    // column:id pk generated returned cached
	Name            string            `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`                                 // column:name unique index cached
	SpeciesType     enums.SpeciesType `protobuf:"varint,3,opt,name=speciesType,proto3,enum=SpeciesType" json:"speciesType,omitempty"` // column:species_type type:enum
	AverageHeight   uint32            `protobuf:"varint,4,opt,name=averageHeight,proto3" json:"averageHeight,omitempty"`              // column:average_height
	SkinColors      []enums.Color     `protobuf:"varint,5,rep,packed,name=skinColors,proto3,enum=Color" json:"skinColors,omitempty"`  // link_table:character_skin_colors type:enum target:color
	HairColors      []enums.Color     `protobuf:"varint,6,rep,packed,name=hairColors,proto3,enum=Color" json:"hairColors,omitempty"`  // link_table:character_hair_colors type:enum target:color
	EyeColors       []enums.Color     `protobuf:"varint,7,rep,packed,name=eyeColors,proto3,enum=Color" json:"eyeColors,omitempty"`    // link_table:character_eye_colors type:enum target:color
	AverageLifespan uint32            `protobuf:"varint,8,opt,name=averageLifespan,proto3" json:"averageLifespan,omitempty"`          // column:average_lifespan
	Language        string            `protobuf:"bytes,9,opt,name=language,proto3" json:"language,omitempty"`                         // column:language
	Homeworld       *Planet           `protobuf:"bytes,10,opt,name=homeworld,proto3" json:"homeworld,omitempty"`                      // column:homeworld entity table:planets nullable
}

func (x *Species) Reset() {
	*x = Species{}
	if protoimpl.UnsafeEnabled {
		mi := &file_entities_Species_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Species) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Species) ProtoMessage() {}

func (x *Species) ProtoReflect() protoreflect.Message {
	mi := &file_entities_Species_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Species.ProtoReflect.Descriptor instead.
func (*Species) Descriptor() ([]byte, []int) {
	return file_entities_Species_proto_rawDescGZIP(), []int{0}
}

func (x *Species) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Species) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Species) GetSpeciesType() enums.SpeciesType {
	if x != nil {
		return x.SpeciesType
	}
	return enums.SpeciesType_AMPHIBIAN
}

func (x *Species) GetAverageHeight() uint32 {
	if x != nil {
		return x.AverageHeight
	}
	return 0
}

func (x *Species) GetSkinColors() []enums.Color {
	if x != nil {
		return x.SkinColors
	}
	return nil
}

func (x *Species) GetHairColors() []enums.Color {
	if x != nil {
		return x.HairColors
	}
	return nil
}

func (x *Species) GetEyeColors() []enums.Color {
	if x != nil {
		return x.EyeColors
	}
	return nil
}

func (x *Species) GetAverageLifespan() uint32 {
	if x != nil {
		return x.AverageLifespan
	}
	return 0
}

func (x *Species) GetLanguage() string {
	if x != nil {
		return x.Language
	}
	return ""
}

func (x *Species) GetHomeworld() *Planet {
	if x != nil {
		return x.Homeworld
	}
	return nil
}

type SpeciesList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Values []*Species `protobuf:"bytes,1,rep,name=values,proto3" json:"values,omitempty"`
}

func (x *SpeciesList) Reset() {
	*x = SpeciesList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_entities_Species_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SpeciesList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SpeciesList) ProtoMessage() {}

func (x *SpeciesList) ProtoReflect() protoreflect.Message {
	mi := &file_entities_Species_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SpeciesList.ProtoReflect.Descriptor instead.
func (*SpeciesList) Descriptor() ([]byte, []int) {
	return file_entities_Species_proto_rawDescGZIP(), []int{1}
}

func (x *SpeciesList) GetValues() []*Species {
	if x != nil {
		return x.Values
	}
	return nil
}

var File_entities_Species_proto protoreflect.FileDescriptor

var file_entities_Species_proto_rawDesc = []byte{
	0x0a, 0x16, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x69, 0x65, 0x73, 0x2f, 0x53, 0x70, 0x65, 0x63, 0x69,
	0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x15, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x69,
	0x65, 0x73, 0x2f, 0x50, 0x6c, 0x61, 0x6e, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x11, 0x65, 0x6e, 0x75, 0x6d, 0x73, 0x2f, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x17, 0x65, 0x6e, 0x75, 0x6d, 0x73, 0x2f, 0x53, 0x70, 0x65, 0x63, 0x69, 0x65,
	0x73, 0x54, 0x79, 0x70, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xe6, 0x02, 0x0a, 0x07,
	0x53, 0x70, 0x65, 0x63, 0x69, 0x65, 0x73, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2e, 0x0a, 0x0b, 0x73,
	0x70, 0x65, 0x63, 0x69, 0x65, 0x73, 0x54, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x0c, 0x2e, 0x53, 0x70, 0x65, 0x63, 0x69, 0x65, 0x73, 0x54, 0x79, 0x70, 0x65, 0x52, 0x0b,
	0x73, 0x70, 0x65, 0x63, 0x69, 0x65, 0x73, 0x54, 0x79, 0x70, 0x65, 0x12, 0x24, 0x0a, 0x0d, 0x61,
	0x76, 0x65, 0x72, 0x61, 0x67, 0x65, 0x48, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x0d, 0x61, 0x76, 0x65, 0x72, 0x61, 0x67, 0x65, 0x48, 0x65, 0x69, 0x67, 0x68,
	0x74, 0x12, 0x26, 0x0a, 0x0a, 0x73, 0x6b, 0x69, 0x6e, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x73, 0x18,
	0x05, 0x20, 0x03, 0x28, 0x0e, 0x32, 0x06, 0x2e, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x52, 0x0a, 0x73,
	0x6b, 0x69, 0x6e, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x73, 0x12, 0x26, 0x0a, 0x0a, 0x68, 0x61, 0x69,
	0x72, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0e, 0x32, 0x06, 0x2e,
	0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x52, 0x0a, 0x68, 0x61, 0x69, 0x72, 0x43, 0x6f, 0x6c, 0x6f, 0x72,
	0x73, 0x12, 0x24, 0x0a, 0x09, 0x65, 0x79, 0x65, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x73, 0x18, 0x07,
	0x20, 0x03, 0x28, 0x0e, 0x32, 0x06, 0x2e, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x52, 0x09, 0x65, 0x79,
	0x65, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x73, 0x12, 0x28, 0x0a, 0x0f, 0x61, 0x76, 0x65, 0x72, 0x61,
	0x67, 0x65, 0x4c, 0x69, 0x66, 0x65, 0x73, 0x70, 0x61, 0x6e, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x0f, 0x61, 0x76, 0x65, 0x72, 0x61, 0x67, 0x65, 0x4c, 0x69, 0x66, 0x65, 0x73, 0x70, 0x61,
	0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x18, 0x09, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x12, 0x25, 0x0a,
	0x09, 0x68, 0x6f, 0x6d, 0x65, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x07, 0x2e, 0x50, 0x6c, 0x61, 0x6e, 0x65, 0x74, 0x52, 0x09, 0x68, 0x6f, 0x6d, 0x65, 0x77,
	0x6f, 0x72, 0x6c, 0x64, 0x22, 0x2f, 0x0a, 0x0b, 0x53, 0x70, 0x65, 0x63, 0x69, 0x65, 0x73, 0x4c,
	0x69, 0x73, 0x74, 0x12, 0x20, 0x0a, 0x06, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x08, 0x2e, 0x53, 0x70, 0x65, 0x63, 0x69, 0x65, 0x73, 0x52, 0x06, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x73, 0x42, 0x2f, 0x5a, 0x2d, 0x61, 0x73, 0x73, 0x65, 0x73, 0x73, 0x6d,
	0x65, 0x6e, 0x74, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x2f, 0x67, 0x65,
	0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x65, 0x6e,
	0x74, 0x69, 0x74, 0x69, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_entities_Species_proto_rawDescOnce sync.Once
	file_entities_Species_proto_rawDescData = file_entities_Species_proto_rawDesc
)

func file_entities_Species_proto_rawDescGZIP() []byte {
	file_entities_Species_proto_rawDescOnce.Do(func() {
		file_entities_Species_proto_rawDescData = protoimpl.X.CompressGZIP(file_entities_Species_proto_rawDescData)
	})
	return file_entities_Species_proto_rawDescData
}

var file_entities_Species_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_entities_Species_proto_goTypes = []interface{}{
	(*Species)(nil),        // 0: Species
	(*SpeciesList)(nil),    // 1: SpeciesList
	(enums.SpeciesType)(0), // 2: SpeciesType
	(enums.Color)(0),       // 3: Color
	(*Planet)(nil),         // 4: Planet
}
var file_entities_Species_proto_depIdxs = []int32{
	2, // 0: Species.speciesType:type_name -> SpeciesType
	3, // 1: Species.skinColors:type_name -> Color
	3, // 2: Species.hairColors:type_name -> Color
	3, // 3: Species.eyeColors:type_name -> Color
	4, // 4: Species.homeworld:type_name -> Planet
	0, // 5: SpeciesList.values:type_name -> Species
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_entities_Species_proto_init() }
func file_entities_Species_proto_init() {
	if File_entities_Species_proto != nil {
		return
	}
	file_entities_Planet_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_entities_Species_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Species); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_entities_Species_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SpeciesList); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_entities_Species_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_entities_Species_proto_goTypes,
		DependencyIndexes: file_entities_Species_proto_depIdxs,
		MessageInfos:      file_entities_Species_proto_msgTypes,
	}.Build()
	File_entities_Species_proto = out.File
	file_entities_Species_proto_rawDesc = nil
	file_entities_Species_proto_goTypes = nil
	file_entities_Species_proto_depIdxs = nil
}

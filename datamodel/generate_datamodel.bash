#!/usr/bin/env bash

PROTOC=protoc.exe # protoc

# generate protobuffers
echo "generating .py .go enums from .proto ..."
$PROTOC -I ./resources/idl/proto \
    --go_out=./generated/proto \
    ./resources/idl/proto/enums/*.proto
#    --python_out=./generated/proto \

echo "generating .py .go entities from .proto ..."
$PROTOC -I ./resources/idl/proto \
    --go_out=./generated/proto \
    ./resources/idl/proto/entities/*.proto
#    --python_out=./generated/proto \

echo "to generate .js and .d.ts bindings, please see the script for ./pbjs ./pbts command lines"
# TODO: for TypeScript compilation:
# for javascript, use protobufjs instead of google protobuf (better imp):
# npm install -g protobufjs
# NB: protobuf-js generated files do not support imports
# so we have to bundle the whole data model into a single file bundle.js / prototyped in bundle.d.ts
# >>> pbjs -t static-module -w commonjs -o ./generated/proto/bundle.js -p ./resources/idl/proto ./resources/idl/proto/enums/*.proto ./resources/idl/proto/entities/*.proto
# NB: as long as https://github.com/jsdoc/jsdoc/pull/1686#pullrequestreview-555935901
# TODO: if the PR is still not merged, code script to move @enum to end of bundle.js compiled file
# is not merged, jsdoc enum exports should be mpved to the end of bundle.js
# otherwise interfaces are not able to be genrated
# >>> pbts -o ./generated/proto/bundle.d.ts ./generated/proto/bundle.js

echo "fixing compilation paths ..."
# fix package location issues
mv ./generated/proto/assessment/datamodel/generated/proto/enums/* ./generated/proto/enums/
mv ./generated/proto/assessment/datamodel/generated/proto/entities/* ./generated/proto/entities/
rm -rf ./generated/proto/assessment/

echo "renaming compiled files ..."
rename -f 's/.pb.go/.go/g' ./generated/proto/*/*
rename -f 's/_pb.js/.js/g' ./generated/proto/*/*
#rename -f 's/_pb2.py/.py/g' ./generated/proto/*/*
rename -f 's/_pb.d.ts/.d.ts/g' ./generated/proto/*/*

echo "renaming references within compiled files ..."
find ./generated/proto -type f -name "*.*s" | xargs sed -i 's/_pb//g'
find ./generated/proto -type f -name "*.*s" | xargs sed -i 's/_pb//g'
#find ./generated/proto -type f -name "*.py" | xargs sed -i 's/_pb2//g'

echo "generating SQL schema from .proto ..."
python3 ./generate_datamodel.py

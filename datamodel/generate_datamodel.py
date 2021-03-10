# parse proto file
# store: name / type / format / pk / col name

import re
import os
from pathlib import Path
from typing import List, Set

SQL_RESERVED_KEWORDS = [] # not used as we quote all column names now

PRINTER_BY_TYPE = {
    "bool": "%t",
    "uint32": "%d",
    "uint64": "%d",
    "int32": "%d",
    "int64": "%d",
    "float": "%f",
    "float32": "%f",
    "float64": "%f",
    "double": "%f",
    "ufloat": "%f",
    "ufloat32": "%f",
    "udouble": "%f",
    "ufloat64": "%f",
    "string": "%s"}

SQL_TYPE_BY_TYPE = {
    "bool": "boolean",
    "uint32": "integer",
    "uint64": "bigint",
    "int32": "integer",
    "int64": "bigint",
    "float": "real",
    "float32": "real",
    "float64": "double precision",
    "double": "double precision",
    "ufloat": "real",
    "ufloat32": "real",
    "udouble": "double precision",
    "ufloat64": "double precision",
    "string": "varchar",
    "bytes": "bytea",
    "datetime": "timestamp with time zone"
}

GO_PGTYPE_BY_TYPE = {
    "bool": "bool",
    "uint32": "uint32",
    "uint64": "uint64",
    "int32": "int32",
    "int64": "int64",
    "float": "float32",
    "float32": "float32",
    "float64": "float64",
    "double": "float64",
    "ufloat": "ufloat32",
    "ufloat32": "ufloat32",
    "udouble": "ufloat64",
    "ufloat64": "ufloat64",
    "string": "pgtype.Varchar",
    "bytes": "pgtype.Bytea"
}


class SqlChunk:

    name: str # object / enum or entity table name
    enum_dependencies: Set[str]
    entity_dependencies: Set[str]
    sql: str # full declaration

    def __init__(self, name, enum_dependencies=[], entity_dependencies=[], sql=""):
        self.name = name
        self.enum_dependencies = enum_dependencies
        self.entity_dependencies = entity_dependencies
        self.sql = sql


class DefaultDesc:

    name: str
    by: str
    val: str


class Link:

    table: str
    type: str
    by: str
    target: str


class ColumnDesc:

    column_name: str = ""
    field_name: str = ""
    type: str = ""
    table: str = ""  # foreign reference
    is_array: bool = False
    is_entity: bool = False
    is_date: bool = False
    is_pk: bool = False  # primary key
    is_unique: bool = False  # primary key
    is_index: bool = False  # primary key
    is_generated: bool = False  # generated attribute
    is_nullable: bool = True
    is_returned: bool = False  # returned from sql query (usually ID)
    is_cached: bool = False  # cached after fetched
    is_enum: bool = False
    link: Link = None


class EntityDescription:

    # table annotations
    table: str = ""
    is_hypertable: bool = False
    compress_after: str = ""
    class_name: str = ""

    id_column: str = ""
    id_attribute: str = ""
    # columns annotations
    columns: List[ColumnDesc]

    # defaults annotations
    defaults: List[DefaultDesc]

    # sql enum / table dependencies
    enum_dependencies: Set[str]
    entity_dependencies: Set[str]

    # other dep
    external_dependencies: Set[str]


class ParsedEntity:

    message: str
    tables: List[str]
    columns: List[str]
    links: List[str]
    defaults: List[str]

    def check_integrity(self) -> bool:
        missing = ""
        if len(self.tables) < 1:
            missing = "table"
        if len(self.columns) < 1:
            missing = "columns"
        # if len(self.defaults) <= 0:
        #     missing = "defaults"
        if not missing:
            return True
        print(f"missing {missing} for message {self.message} table {self.tables[0] if self.tables else '???'}")
        return False

    def __init__(self, proto_filename: str):  # can't type with class itself?

        self.tables = []
        self.columns = []
        self.links = []
        self.defaults = []
        with open(proto_filename) as f:
            s = f.read()
            self.message = parse_lines(raw=s, pattern="message")[0]
            self.tables = parse_lines(raw=s, pattern="table:")
            # we use set > list here to get rid of duplicates (columns and link_table can both be valued for an attribute)
            self.columns = parse_lines(raw=s, pattern="column:")
            links = parse_lines(raw=s, pattern="link_table:")
            for l in links:
                if l not in self.columns:
                    self.columns.append(l)
            self.defaults = parse_lines(raw=s, pattern="default:")
        # self.check_integrity()


class ParsedEnum:

    type: str
    name: str
    values: List[str]

    def check_integrity(self) -> bool:
        missing = ""
        if len(self.type) < 1:
            missing = "table"
        if len(self.name) < 1:
            missing = "columns"
        if len(self.values) < 1:
            missing = "values"
        if not missing:
            return True
        print(f"missing {missing}")
        return False

    def __init__(self, proto_filename: str):  # can't type with class itself?

        self.values = []
        with open(proto_filename) as f:
            s = f.read()
            raw_header = parse_lines(raw=s, pattern="type:")[0].split(' ')
            self.type = raw_header[raw_header.index("type") + 1]
            self.name = raw_header[raw_header.index("name") + 1]
            raw_values = parse_lines(raw=s, pattern="=")
            for v in raw_values:
                raw = v.split(" ")
                eq_index = raw.index("=")
                if raw[eq_index + 1].isdigit():
                    self.values.append(raw[eq_index - 1])
        # self.check_integrity()


def get_printer_by_type(t: str) -> str:
    return PRINTER_BY_TYPE[t] if t in PRINTER_BY_TYPE else "%v"


def get_pgtype_by_type(t: str) -> str:
    return GO_PGTYPE_BY_TYPE[t] if t in GO_PGTYPE_BY_TYPE else None


def get_sql_type_by_type(t: str) -> str:
    return SQL_TYPE_BY_TYPE[t] if t in SQL_TYPE_BY_TYPE else f"public.{to_snake(t)}"


def pad(preceding: str, to: int) -> str:
    return " " * (to - len(preceding))


# like .title() but keeps existing uppercase
def cap(word):
    return word[0].upper() + word[1:]


def to_snake(s: str) -> str:
    s = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', s)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s).lower()


def to_pascal(s: str) -> str:
    return ''.join(cap(word) for word in s.split('_'))


def to_camel(s: str) -> str:
    s = to_pascal(s)
    return s[0].lower() + s[1:]


def load_template(filename: str, mappings: dict) -> str:
    with open(filename, 'r') as f:
        raw = f.read()
        # f.seek(0)
        # f.truncate()
        for key in mappings.keys():
            raw = raw.replace(f"${{{key}}}", mappings[key])
        return raw


def parse_lines(raw: str, pattern: str) -> List[str]:
    found = re.findall(rf"^.*{pattern}.*$", raw, re.MULTILINE)
    lines = []
    for line in found:
        lines.append(re.sub(r"(;|//|{|:)", " ", line))
    return lines


def entity_proto_to_desc(filename: str) -> EntityDescription:
    parsed = ParsedEntity(proto_filename=filename)
    desc = EntityDescription()
    if not parsed.check_integrity():
        raise Exception("Proto not properly annotated")
    message_split = parsed.message.split(" ")
    message_name_index = message_split.index("message") + 1
    desc.class_name = message_split[message_name_index]
    table_split = parsed.tables[0].split(" ")
    tab_index = table_split.index("table") + 1
    desc.table = table_split[tab_index] if tab_index > 0 else to_snake(desc.class_name + "s")
    if "hypertable" in table_split:
        desc.is_hypertable = True
        compress_index = table_split.index("compress_after")
        if compress_index > 0:
            desc.compress_after = f"{table_split[compress_index + 1]} {table_split[compress_index + 2]}"
    desc.columns = []
    desc.defaults = []
    desc.enum_dependencies = set()
    desc.entity_dependencies = set()
    desc.external_dependencies = set()

    # parse column annotations
    for col in parsed.columns:
        indexes = {
            # common to all columns
            "=": -1,
            "pk": -1,
            "unique": -1,
            "index": -1,
            "generated": -1,
            "nullable": -1,
            "returned": -1,
            "column": -1,
            "cached": -1,
            # mapped entities
            "entity": -1,
            "table": -1,
            # enum and entity fields
            "type": -1,
            "enum": -1,
            # only repeated fields > link tables mapping
            "link_table": -1,
            "by": -1,
            "target": -1
        }
        parts = col.split()
        for index in indexes:
            try:
                indexes[index] = parts.index(index)
            except ValueError as e:
                pass
        cd = ColumnDesc()
        cd.is_array = True if parts[0] == "repeated" else False
        cd.is_pk = True if indexes["pk"] > -1 else False
        cd.is_unique = True if indexes["unique"] > -1 else False
        cd.is_index = True if indexes["index"] > -1 else False
        cd.is_generated = True if indexes["generated"] > -1 else False
        cd.is_nullable = True if indexes["nullable"] > -1 else False
        cd.is_returned = True if indexes["returned"] > -1 else False
        cd.is_cached = True if indexes["cached"] > -1 else False
        cd.is_enum = True if indexes["enum"] > -1 else False
        cd.type = parts[indexes["="] - 2].strip()
        cd.field_name = parts[indexes["="] - 1].strip()
        cd.column_name = '"' + (parts[indexes["column"] + 1].strip() if indexes["column"] > -1 else to_snake(cd.field_name)) + '"'
        cd.is_entity = indexes["entity"] > -1
        cd.is_date = "date" in cd.field_name # TODO: check this

        if cd.is_pk and not desc.id_column:
            desc.id_attribute = to_pascal(cd.field_name)
            desc.id_column = cd.field_name.upper()

        if cd.is_enum or cd.is_array or cd.is_entity:
            cd.link = Link()
            cd.link.type = parts[indexes["type"] + 1] if indexes["type"] > -1 else cd.type
            if cd.is_enum:
                cd.link.table = to_snake(cd.type)
                desc.enum_dependencies.add(cd.link.table)
            #     cd.link.type = "string" # all enums are loaded as str by pgx / cast to enum on insert
            else:
                cd.table = parts[indexes["table"] + 1]
                if cd.table != desc.table:
                    desc.entity_dependencies.add(to_snake(cd.type))
            cd.link.table = parts[indexes["link_table"] + 1] if indexes["link_table"] > -1 else ""
            cd.link.by = parts[indexes["by"] + 1] if indexes["by"] > -1 else "id"
            cd.link.target = parts[indexes["target"] + 1] if indexes["target"] > -1 else ""  # nothing if all eager

        desc.columns.append(cd)

    # parse defaults annotations
    for col in parsed.defaults:
        indexes = {
            "default": -1,
            "by": -1,
            "val": -1}
        parts = col.split()
        for index in indexes:
            try:
                indexes[index] = parts.index(index)
            except ValueError as e:
                pass
        dd = DefaultDesc()
        dd.name = parts[indexes["default"] + 1]
        dd.by = parts[indexes["by"] + 1]
        val_idx = indexes["val"] + 1
        dd.val = parts[val_idx]
        if '"' in parts[val_idx]:
            val_idx += 1
            while val_idx < len(parts) and '"' not in parts[val_idx]:
                dd.val += f" {parts[val_idx]}"
                val_idx += 1

        # dd.val += f" {parts[val_idx]}"
        dd.val = dd.val.replace('"', '')
        desc.defaults.append(dd)

    return desc


def sql_chunk_from_enum_proto(filename: str) -> SqlChunk:

    parsed: ParsedEnum = ParsedEnum(proto_filename=filename)
    if not parsed.check_integrity():
        raise Exception("Proto not properly annotated")
    sql_values = "    '" + "',\n    '".join(parsed.values) + "'"
    sql=f"""
-- GENERATED - DO NOT MODIFY
CREATE TYPE public.{parsed.name} AS ENUM (
{sql_values}
);
ALTER TYPE public.{parsed.name} OWNER TO dba;
"""
    return SqlChunk(name=parsed.name, sql=sql)


def sql_chunk_from_entity_description(desc: EntityDescription) -> SqlChunk:

    main_table = f"\n-- GENERATED - DO NOT MODIFY\nCREATE TABLE public.{desc.table} (\n"
    link_tables: List[str] = list()
    pks: List[str] = list()

    for c in desc.columns:

        fk = ""
        if c.is_entity: # and "_id" in c.column_name:
            c.type = "uint64"
            fk = f" references public.{c.table}"

        if not (c.is_array and c.link):
            if "date" in c.column_name:
                c.type = "datetime"

            if c.is_pk:
                pks.append(c.column_name)
            if desc.table == "parameter_sets":
                print("break")
            main_table += f'    {c.column_name} {pad(c.column_name, 25)} {get_sql_type_by_type(c.type)} {pad(get_sql_type_by_type(c.type), 25)}{fk}'
            if c.is_generated: main_table += " generated by default as identity" # generated always = no default override of id
            if c.is_unique: main_table += " unique"
            # if c.is_index: main_table += " index" # TODO: implement index properly to be next to PRIMARY KEY (end of statement)
            if not c.is_nullable: main_table += " not null"
            main_table += ",\n"
        else:
            link_tables.append(f"""
-- GENERATED - DO NOT MODIFY
CREATE TABLE public.{c.link.table} (
    "id" bigint references public.{desc.table},
    "{c.link.target}" {get_sql_type_by_type(c.type)}{fk},
    primary key("id", "{c.link.target}")
);
ALTER TABLE public.{c.link.table} OWNER TO dba;
""")
    main_table += f"    PRIMARY KEY ({','.join(pks)})\n);\nALTER TABLE public.{desc.table} OWNER TO dba;\n"
    if desc.is_hypertable:
        main_table += f"SELECT create_hypertable('public.{desc.table}', '{pks[0][1:-1]}');\n"
        if desc.compress_after:
            main_table += f"ALTER TABLE public.{desc.table} SET (timescaledb.compress);\n" # , timescaledb.compress_segmentby = 'pks[0][1:-1]'
            main_table += f"SELECT add_compression_policy('public.{desc.table}', INTERVAL '{desc.compress_after}');\n"
    sql = main_table + ''.join(link_tables)
    # "generated": "generated always as identity",
    # "pk": "primary key"
    # not null

    return SqlChunk(
        name=to_snake(desc.class_name),
        enum_dependencies=desc.enum_dependencies,
        entity_dependencies=desc.entity_dependencies,
        sql=sql)


def desc_to_mapping(desc: EntityDescription) -> dict:

    cnc = ""
    cts = ""
    ctu = ""
    ctr = ""
    storables = ""
    printers = ""
    default_cache = ""
    cache_init = ""
    add_to_cache = ""
    remove_from_cache = ""
    pgtypes = ""
    pgscan = ""
    from_pgtypes = ""
    dao_links = ""
    primitive_links = ""
    fetch_dao_links = ""
    fetch_primitive_links = ""
    default_exports = ""
    enum_links_count = 0

    for c in desc.columns:

        go_column_const = to_snake(c.column_name.replace('"', '')).upper()
        is_string = c.type == "string"
        is_bytes = c.type == "bytes"
        printer = "%v"
        if c.is_date:
            pgtype = "pgtype.Timestamptz"
        elif c.is_enum:
            # pgtype = c.type
            pgtype = "string"
        elif not c.is_entity and not c.is_generated:
            pgtype = get_pgtype_by_type(c.type)
            printer = get_printer_by_type(c.type)
        else:
            pgtype = "uint64"
            printer = "%d"
        if "pgtype" in pgtype:
            desc.external_dependencies.add('"github.com/jackc/pgtype"')
        go_attribute = to_pascal(c.field_name)
        if c.is_date:
            go_storable = f"EpochToTimestampTz(el.{go_attribute})"
            desc.external_dependencies.add('. "assessment/utils"')
        else:
            go_storable = f"el.{go_attribute}"
        # TODO: check if enums <> varchar work automatically
        cnc += f'    {go_column_const} = {c.column_name}\n'

        if not c.is_array:
            pgvar = to_camel(c.column_name).replace('"', "")
            if c.is_entity:
                pgvar += "Id"
            pgtypes += f"    var {pgvar} {pgtype}\n"
            pgscan += f"        &{pgvar},\n"
            from_pgtype = f"        {go_attribute}: "
            if c.is_date:
                from_pgtype += f"TimestampTzToEpoch({pgvar}),\n"
            elif is_string:
                from_pgtype += f"{pgvar}.String,\n"
            elif c.is_enum:
                from_pgtype += f"{c.type}({c.type}_value[{pgvar}]),\n"
            elif is_bytes:
                from_pgtype += f"{pgvar}.Bytes,\n"
            elif c.is_entity:
                from_pgtype += f'{to_snake(c.link.type)}.GetBy("{c.link.by}", {pgvar})[0],\n'
                go_storable += ".Id" # pgvar?
            else:
                from_pgtype += f"{pgvar},\n"
            from_pgtypes += from_pgtype
            # if not c.is_generated and not go_column_const == "ID":
            if not c.is_generated:
                cts += f"    {go_column_const},\n"
                printers += f"{c.column_name}:{pad(c.column_name, 22)}{printer}\n"
                storables += f"        {go_storable},\n"
            if c.is_pk:
                default_cache = f"CACHE[{go_column_const}][el.{go_attribute}]"
                ctr += f"    {go_column_const},\n"
            if c.is_cached and not is_bytes: # TODO: look into how to cache by bytes (conv to string for hash?)
                cache_init += f"    c[{go_column_const}] = map[interface{{}}]*{desc.class_name}{{}}\n"
                add_to_cache += f"        CACHE[{go_column_const}][{'string(el.' + go_attribute + ')' if is_string else go_storable}] = el\n"
                remove_from_cache += f"            delete(CACHE[{go_column_const}], {go_storable})\n"
        else:  # repeated field >> mapped to a link table
            if not c.link:
                raise Exception("cannot find link on repeated field")
                # links
            go_link_str = f"""
    "{c.field_name}": {{
        Table: "{c.link.table}",
        Type: "{c.link.type}",
        By: "{c.link.by}",
        Target: "{c.link.target}"}},"""
            go_dao_package_name = f"{to_snake(c.type)}"
            desc.external_dependencies.add('. "assessment/utils"')
            if c.is_entity:
                dao_links += go_link_str
                fetch_dao_links += f'    el.{go_attribute} = {go_dao_package_name}.GetBy({go_dao_package_name}.ID, adapter.RowsToUint64(fetchLinkRows(el, DAO_LINKS["{c.type}"])))\n'
            else:
                primitive_links += go_link_str
                link_str = f'adapter.RowsTo{to_pascal("string" if c.is_enum else c.link.type)}(fetchLinkRows(el, PRIMITIVE_LINKS["{c.field_name}"]))\n'
                if not c.is_enum:
                    fetch_primitive_links += f"    el.{go_attribute} = {link_str}"
                else:
                    if enum_links_count == 0:
                        fetch_primitive_links += "var strList []string\n"
                    fetch_primitive_links += f"""
    strList = {link_str}
    // el.{go_attribute} = []{c.type}
    for _, s := range strList {{
        v, ok := {c.type}_value[s]
        if !ok {{ continue }}
        el.{go_attribute} = append(el.{go_attribute}, {c.type}(v))
    }}
"""
                    enum_links_count += 1

    for default in desc.defaults:
        default_exports += f'var {default.name} = GetOneBy("{default.by}", "{default.val}")\n'

    imports: List[str] = []
    imports.append('. "assessment/datamodel/generated/proto/entities"')
    if len(desc.external_dependencies) > 0:
        for dep in desc.external_dependencies:
            imports.append(dep)
    if len(desc.entity_dependencies) > 0:
        for dep in desc.entity_dependencies:
            imports.append(f'"assessment/datamodel/generated/dao/{dep}"')
    if len(desc.enum_dependencies) > 0:
        imports.append('. "assessment/datamodel/generated/proto/enums"')

    # TODO: fix this for composite primary keys (duplicate columns in the update)
    ctu = ctr + cts
    return {
        "imports": '\n    '.join(imports),  # TODO: import only daos used as direct references / links?
        "package_name": to_snake(desc.class_name),
        "file_name": to_snake(desc.class_name) + ".go",
        "class_name": desc.class_name,
        "table_name_const": f'    TABLE_NAME = "{desc.table}"',
        "column_names_const": cnc,
        "columns_to_create": cts,
        "columns_to_update": ctu,
        "columns_to_return": ctr,
        "storables": storables,
        "id_column": desc.id_column,
        "id_attribute": desc.id_attribute,
        "default_cache": default_cache,
        "cache_init": cache_init,
        "remove_from_cache": remove_from_cache,
        "add_to_cache": add_to_cache,
        "pgtypes": pgtypes,
        "pgscan": pgscan,
        "printers": printers,
        "from_pgtypes": from_pgtypes,
        "dao_links": dao_links,
        "primitive_links": primitive_links,
        "fetch_dao_links": fetch_dao_links,
        "fetch_primitive_links": fetch_primitive_links,
        "default_exports": default_exports,
        "test_dao": ""
    }


# TODO: make this generate SQL as well
if __name__ == "__main__":

    entities_proto_paths = Path("resources/idl/proto/entities").glob('**/*.proto')
    enums_proto_paths = Path("resources/idl/proto/enums").glob('**/*.proto')

    sql_available_dependencies: Set[str] = set()
    sql_chunks_to_insert: dict = {} # SqlChunk by dependency name
    sql_chunks_inserted: dict = {} # SqlChunk by dependency name
    sql = ""

    for path in enums_proto_paths:
        sql_chunk: SqlChunk = sql_chunk_from_enum_proto(str(path))
        sql += sql_chunk.sql
        sql_chunks_inserted[sql_chunk.name] = sql_chunk
        sql_available_dependencies.add(sql_chunk.name)
        print(f"appended enum type {sql_chunk.name.upper()} {pad(sql_chunk.name.upper(), 20)} to schema.sql")

    for path in entities_proto_paths:
        name = to_snake(path.stem)
        dao_entity_file = f"generated/dao/{name}/{name}.go"
        try:
            d = entity_proto_to_desc(str(path))
            mapping = desc_to_mapping(d)
            sql_chunk: SqlChunk = sql_chunk_from_entity_description(d)
            sql_chunks_to_insert[sql_chunk.name] = sql_chunk
            go_dao = load_template("resources/templates/dao.go.tpl", mapping)
            dao_folder = Path(dao_entity_file).parent
            if not dao_folder.exists():
                dao_folder.mkdir(parents=True)
            with open(dao_entity_file, 'w+') as f:
                f.write(go_dao)
            print(f"generated dao {dao_entity_file} {pad(dao_entity_file, 55)} from {path}")

        except Exception as e:
            print(f"did not generate dao {dao_entity_file} {pad(dao_entity_file, 55)} from {path}:\n{e}")

    to_insert_count = len(sql_chunks_to_insert.keys())
    inserted: List[str] = []
    while True:
        if len(inserted) > 0:
            for k in inserted:
                sql_chunks_inserted[k] = sql_chunks_to_insert[k]
                del sql_chunks_to_insert[k]
            to_insert_count -= len(inserted)
            # print(f"inserted: {str(len(inserted)) + ': ' + ','.join(inserted)}\nremaining: {str(to_insert_count) + ': ' + ','.join(sql_chunks_to_insert.keys())}")
            inserted = []
        if to_insert_count < 1:
            break
        for k in sql_chunks_to_insert.keys():
            sql_chunk: SqlChunk = sql_chunks_to_insert[k]
            deps = sql_chunk.entity_dependencies | sql_chunk.enum_dependencies
            if deps.issubset(sql_available_dependencies):
                sql += sql_chunk.sql
                sql_chunks_inserted[k] = sql_chunk
                sql_available_dependencies.add(k)
                inserted.append(k)
                print(f"appended entity table {sql_chunk.name.upper()} {pad(sql_chunk.name.upper(), 20)} to schema.sql")
            # to_insert_count -= 1
        if len(inserted) < 1:
            raise Exception(f"some sql dependencies are missing - check circular dependencies and table annotations for protos: {','.join(sql_chunks_to_insert.keys())}")

    sql_schema = load_template("resources/templates/schema.sql.tpl", { "create_types": sql })

    sql_schema_file = f"generated/sql/schema.sql"

    with open(sql_schema_file, 'w+') as f:
        f.write(sql_schema)

    print("generated schema.sql")

    pass

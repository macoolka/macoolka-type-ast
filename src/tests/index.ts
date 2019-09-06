[
  {
    "path": [
      "",
      "home",
      "fastspeeed",
      "macoolka",
      "macoolka-type-ast",
      "src",
      "tests",
      "fixtures",
      "Basic.ts"
    ],
    "name": "Basic",
    "interfaces": [
      {
        "name": "Basic",
        "isExported": true,
        "signature": "\ninterface Basic extends T1,T2{\nadd:(\n    string: string,\n    number?: number,\n    date?: Date,\n    int?: number,\n    boolean?: boolean,\n    json1?: Record<string,any>,\n    string_kind?: string,\n    number_kind?: number,\n    int_kind?: number,\n    datetime_kind?: Date,\n    json_kind?: Record<string,any>,\n    boolean_kind?: boolean,\n    enum_kind?: 'a' | 'b',\n    enum_t_kind?: City,\n    kind_kind?: 'k',\n    type_kind?: T1,\n    typeUnion_kind?: T1 | T2,\n  ) => void\nboolean?: boolean\nboolean_kind?: boolean\ndate?: Date\ndatetime_kind?: Date\nenum_kind?: 'a' | 'b'\nenum_t_kind?: City\nint?: number\nint_kind?: number\njson1?: Record<string,any>\njson_kind?: Record<string,any>\nkind_kind?: 'k'\nnumber?: number\nnumber_kind?: number\nstring: string\nstring_kind?: string\ntypeUnion_kind?: T1 | T2\ntype_kind?: T1\n}\n",
        "implements": [
          "T1",
          "T2"
        ],
        "methods": [],
        "fields": [
          {
            "name": "add",
            "signature": "add:(\n    string: string,\n    number?: number,\n    date?: Date,\n    int?: number,\n    boolean?: boolean,\n    json1?: Record<string,any>,\n    string_kind?: string,\n    number_kind?: number,\n    int_kind?: number,\n    datetime_kind?: Date,\n    json_kind?: Record<string,any>,\n    boolean_kind?: boolean,\n    enum_kind?: 'a' | 'b',\n    enum_t_kind?: City,\n    kind_kind?: 'k',\n    type_kind?: T1,\n    typeUnion_kind?: T1 | T2,\n  ) => void",
            "required": true,
            "type": {
              "_kind": "type",
              "value": "object",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "boolean",
            "signature": "boolean?: boolean",
            "required": false,
            "type": {
              "_kind": "boolean",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "boolean_kind",
            "signature": "boolean_kind?: boolean",
            "required": false,
            "type": {
              "_kind": "boolean",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "date",
            "signature": "date?: Date",
            "required": false,
            "type": {
              "_kind": "type",
              "value": "Date",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "datetime_kind",
            "signature": "datetime_kind?: Date",
            "required": false,
            "type": {
              "_kind": "type",
              "value": "Date",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "enum_kind",
            "signature": "enum_kind?: 'a' | 'b'",
            "required": false,
            "type": {
              "_kind": "enum",
              "values": [
                "\"a\"",
                "\"b\""
              ],
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "enum_t_kind",
            "signature": "enum_t_kind?: City",
            "required": false,
            "type": {
              "_kind": "enum",
              "values": [
                "\"A\"",
                "\"B\"",
                "\"C\""
              ],
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "int",
            "signature": "int?: number",
            "required": false,
            "type": {
              "_kind": "number",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "int_kind",
            "signature": "int_kind?: number",
            "required": false,
            "type": {
              "_kind": "number",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "json1",
            "signature": "json1?: Record<string,any>",
            "required": false,
            "type": {
              "_kind": "type",
              "value": "object",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "json_kind",
            "signature": "json_kind?: Record<string,any>",
            "required": false,
            "type": {
              "_kind": "type",
              "value": "object",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "kind_kind",
            "signature": "kind_kind?: 'k'",
            "required": false,
            "type": {
              "_kind": "kind",
              "value": "\"k\"",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "number",
            "signature": "number?: number",
            "required": false,
            "type": {
              "_kind": "number",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "number_kind",
            "signature": "number_kind?: number",
            "required": false,
            "type": {
              "_kind": "number",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "string",
            "signature": "string: string",
            "required": true,
            "type": {
              "_kind": "string",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "string_kind",
            "signature": "string_kind?: string",
            "required": false,
            "type": {
              "_kind": "string",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "typeUnion_kind",
            "signature": "typeUnion_kind?: T1 | T2",
            "required": false,
            "type": {
              "_kind": "typeUnion",
              "values": [
                "T1",
                "T2"
              ],
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          },
          {
            "name": "type_kind",
            "signature": "type_kind?: T1",
            "required": false,
            "type": {
              "_kind": "type",
              "value": "T1",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          }
        ],
        "since": "0.2.0",
        "description": [],
        "examples": [],
        "deprecated": false,
        "ignore": false,
        "reason": [],
        "path": [],
        "_kind": "interface"
      },
      {
        "name": "NonEmptyArray",
        "isExported": true,
        "signature": "\ninterface NonEmptyArray extends Array,Array,Array,Array,Array,Array{\n0: A\n}\n",
        "implements": [
          "Array",
          "Array",
          "Array",
          "Array",
          "Array",
          "Array"
        ],
        "methods": [],
        "fields": [
          {
            "name": "0",
            "signature": "0: A",
            "required": true,
            "type": {
              "_kind": "type",
              "value": "A",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          }
        ],
        "since": "0.2.0",
        "description": [
          "Code generated by github.com/macoolka/macoolka-gen-model, DO NOT EDIT."
        ],
        "examples": [],
        "deprecated": false,
        "ignore": false,
        "reason": [],
        "path": [],
        "_kind": "interface"
      },
      {
        "name": "T1",
        "isExported": true,
        "signature": "\ninterface T1 {\nname1: string\n}\n",
        "implements": [],
        "methods": [],
        "fields": [
          {
            "name": "name1",
            "signature": "name1: string",
            "required": true,
            "type": {
              "_kind": "string",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          }
        ],
        "since": "0.2.0",
        "description": [],
        "examples": [],
        "deprecated": false,
        "ignore": false,
        "reason": [],
        "path": [],
        "_kind": "interface"
      },
      {
        "name": "T2",
        "isExported": false,
        "signature": "\ninterface T2 {\nname2?: string\n}\n",
        "implements": [],
        "methods": [],
        "fields": [
          {
            "name": "name2",
            "signature": "name2?: string",
            "required": false,
            "type": {
              "_kind": "string",
              "isArray": false,
              "maybe": false,
              "maybeArray": false,
              "isArrayRequired": false,
              "defaultEmptyArray": true
            },
            "since": "0.2.0",
            "description": [],
            "examples": [],
            "deprecated": false,
            "ignore": false,
            "reason": [],
            "path": [],
            "_kind": "field",
            "unique": false,
            "id": false,
            "readonly": false,
            "order": true,
            "exclusiveCreate": false,
            "exclusiveUpdate": false,
            "exclusiveWhere": false,
            "exclusiveSearch": false,
            "exclusiveLoad": false
          }
        ],
        "since": "0.2.0",
        "description": [],
        "examples": [],
        "deprecated": false,
        "ignore": false,
        "reason": [],
        "path": [],
        "_kind": "interface"
      }
    ],
    "typealiases": [
      {
        "name": "City",
        "signature": "export type City = 'A' | 'B' | 'C'",
        "since": "0.2.0",
        "description": [],
        "examples": [],
        "deprecated": false,
        "ignore": false,
        "reason": [],
        "path": [],
        "isExported": true,
        "fields": [],
        "methods": [],
        "type": "string",
        "required": false,
        "_kind": "typealias"
      },
      {
        "name": "Empty",
        "signature": "export type Empty = never",
        "since": "0.2.0",
        "description": [],
        "examples": [],
        "deprecated": false,
        "ignore": false,
        "reason": [],
        "path": [],
        "isExported": true,
        "fields": [],
        "methods": [],
        "type": "string",
        "required": false,
        "_kind": "typealias"
      }
    ],
    "classes": [],
    "exports": [],
    "functions": [],
    "constants": [],
    "since": "0.2.0",
    "description": [
      "Code generated by github.com/macoolka/macoolka-gen-model, DO NOT EDIT."
    ],
    "examples": [],
    "file": false,
    "deprecated": false,
    "ignore": false,
    "reason": [],
    "_kind": "module",
    "idUnique": false
  }
]

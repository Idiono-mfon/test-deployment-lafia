export const Practitioner = {
    "type":"object",
    "required":[
        "active",
        "address",
        "id",
        "identifier",
        "meta",
        "name",
        "qualification",
        "resourceType",
        "text"
    ],
    "properties":{
        "resourceType":{
            "type":"string",
            "minLength":1
        },
        "id":{
            "type":"string",
            "minLength":1
        },
        "text":{
            "$ref":"#/definitions/Account_text"
        },
        "identifier":{
            "type":"array",
            "uniqueItems":true,
            "items":{
                "$ref":"#/definitions/Account_identifier"
            },
            "minItems":1
        },
        "active":{
            "type":"boolean"
        },
        "name":{
            "type":"array",
            "uniqueItems":true,
            "items":{
                "$ref":"#/definitions/Practitioner_name"
            },
            "minItems":1
        },
        "address":{
            "type":"array",
            "uniqueItems":true,
            "items":{
                "$ref":"#/definitions/Person_address"
            },
            "minItems":1
        },
        "qualification":{
            "type":"array",
            "uniqueItems":true,
            "items":{
                "$ref":"#/definitions/Practitioner_qualification"
            },
            "minItems":1
        },
        "meta":{
            "$ref":"#/definitions/Account_meta"
        }
    },
    "description":"",
    "xml": {
        "name": "Practitioner"
    }
};

export const Practitioner_name = {
    "required":[
        "family"
    ],
    "properties":{
        "family":{
            "type":"string",
            "minLength":1
        },
        "given":{
            "type":"array",
            "items":{
                "type":"object",
                "properties":{
                }
            }
        },
        "prefix":{
            "type":"array",
            "items":{
                "type":"object",
                "properties":{
                }
            }
        }
    }
}

export const Practitioner_qualification = {
    "properties":{
        "identifier":{
            "type":"array",
            "uniqueItems":true,
            "items":{
                "$ref":"#/definitions/Account_identifier"
            },
            "minItems":1
        },
        "code":{
            "$ref":"#/definitions/Account_type"
        },
        "period":{
            "$ref":"#/definitions/Contract_period"
        },
        "issuer":{
            "$ref":"#/definitions/AuditEvent_source_observer"
        }
    }
}

export const Person_address = {
    "type": "object",
    "properties": {
        "city": {
            "type": "string"
        },
        "line": {
            "type": "string"
        },
        "postalCode": {
            "type": "string"
        },
        "state": {
            "type": "string"
        },
        "use": {
            "type": "string"
        }
    },
    "xml": {
        "name": "Person_address"
    }
}
export const ActivityDefinition_valueCodeableConcept = {
    "required":[
        "coding"
    ],
    "properties":{
        "coding":{
            "type":"array",
            "uniqueItems":true,
            "items":{
                "$ref":"#/definitions/Account_type_coding"
            },
            "minItems":1
        }
    }
}

export const ActivityDefinition_jurisdiction = {
    "properties":{
        "coding":{
            "type":"array",
            "uniqueItems":true,
            "items":{
                "$ref":"#/definitions/ActivityDefinition_code"
            },
            "minItems":1
        }
    }
}

export const ActivityDefinition_code = {
    "required":[
        "code",
        "system"
    ],
    "properties":{
        "system":{
            "type":"string",
            "minLength":1
        },
        "code":{
            "type":"string",
            "minLength":1
        }
    }
}
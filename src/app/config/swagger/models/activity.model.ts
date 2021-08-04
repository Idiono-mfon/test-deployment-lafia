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
export const AdverseEvent_category = {
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
export const Account_identifier = {
    "required":[
        "system",
        "value"
    ],
    "properties":{
        "system":{
            "type":"string",
            "minLength":1
        },
        "value":{
            "type":"string",
            "minLength":1
        }
    }
};

export const Account_meta = {
    "required":[
        "tag"
    ],
    "properties":{
        "tag":{
            "type":"array",
            "uniqueItems":true,
            "items":{
                "$ref":"#/definitions/Account_type_coding"
            },
            "minItems":1
        }
    }
};

export const Account_type = {
    "required":[
        "coding",
        "text"
    ],
    "properties":{
        "coding":{
            "type":"array",
            "uniqueItems":true,
            "items":{
                "$ref":"#/definitions/Account_type_coding"
            },
            "minItems":1
        },
        "text":{
            "type":"string",
            "minLength":1
        }
    }
}

export const Account_type_coding = {
    "required":[
        "code",
        "display",
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
        },
        "display":{
            "type":"string",
            "minLength":1
        }
    }
}

export const Account_text = {
    "required":[
        "div",
        "status"
    ],
    "properties":{
        "status":{
            "type":"string",
            "minLength":1
        },
        "div":{
            "type":"string",
            "minLength":1
        }
    }
}

export const Account_coverage = {
    "required":[
        "reference"
    ],
    "properties":{
        "reference":{
            "type":"string",
            "minLength":1
        }
    }
}
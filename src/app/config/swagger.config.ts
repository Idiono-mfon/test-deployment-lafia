import { 
    Account_coverage, 
    Account_identifier, 
    Account_meta, 
    Account_subject, 
    Account_text, 
    Account_type, 
    Account_type_coding, 
    ActivityDefinition_valueCodeableConcept, 
    AdverseEvent_category, 
    Appointment, 
    Appointment_coding, 
    Appointment_participant, 
    Appointment_serviceType, 
    AuditEvent_source_observer, 
    Contract_period, 
    Encounter, 
    Person_address, 
    Practitioner, 
    Practitioner_name, 
    Practitioner_qualification 
} from "./swagger/models";

const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "Lafia Service API",
        "description": "Lafia services api documentation which conforms with fhir specifications",
        "contact": {
            "email": "engineering@lafia.io"
        },
        "termsOfService": "https://api.lafia.io/terms/",
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    "schemes": [
        "https"
    ],
    "host": "api.lafia.io",
    "basePath": "/",
    "paths": {

        "/fhir/Appointment": {
            "get": {
                "tags": ["Appointment"],
                "summary": "GET Appointment Resource Bundle",
                "description": "Returns a list containing all Appointment resource.",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "_format",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "_id",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "_language",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "actor",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "appointment-type",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "based-on",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "identifier",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "location",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "part-status",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "practitioner",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "patient",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reason-reference",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reason-code",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "service-category",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "service-type",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "slot",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "specialty",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "supporting-info",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Appointment",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Appointment"
                            }
                        }
                    }
                }
            },

            "post": {
                "tags": ["Appointment"],
                "summary": "Create Appointment Resource",
                "description": "This api lets you create a new instance of the Appointment resource.",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "description": "Appointment",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Appointment"
                        }
                    },
                ],
                "responses": {
                    "201": {
                        "description": "Created"
                    }
                }
            }
        },

        "/fhir/Encounter": {
            "get": {
                "tags": ["Encounter"],
                "summary": "GET Encounter Resource Bundle",
                "description": "Returns a list containing all Encounter resource.",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "_format",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "_id",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "_language",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "accoun",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "appointment",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "based-on",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "class",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "diagnosis",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "episode-of-care",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "identifier",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "length",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "integer",
                        "format": "int64"
                    },
                    {
                        "name": "location",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "location-period",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "part-of",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "participant",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "participant-type",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "patient",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "practitioner",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reason-code",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reason-reference",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "service-provider",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "special-arrangement",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "subject",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "type",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Encounter",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Encounter"
                            }
                        }
                    }
                }
            },

            "post": {
                "tags": ["Encounter"],
                "summary": "Create Encounter Resource",
                "description": "This api lets you create a new instance of the Encounter resource.",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "description": "Encounter",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Encounter"
                        }
                    },
                ],
                "responses": {
                    "201": {
                        "description": "Created"
                    }
                }
            }
        },


        "/fhir/Practitioner": {
            "get": {
                "tags": ["Practitioner"],
                "summary": "GET Practitioner Resource Bundle",
                "description": "Returns a list containing all practitioner resource.",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "_format",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "_id",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "_language",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "active",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "address",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "address-city",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "address-country",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "address-postalcode",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "address-state",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "address-use",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "communication",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "email",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "family",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "gender",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "given",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "identifier",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "name",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "phone",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "phonetic",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "telcom",
                        "in": "query",
                        "description": "format",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of practitioner",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Practitioner"
                            }
                        }
                    }
                }
            },

            "post": {
                "tags": ["Practitioner"],
                "summary": "Create Practitioner Resource",
                "description": "This api lets you create a new instance of the Practitioner resource.",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "description": "Practitioner",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Practitioner"
                        }
                    },
                ],
                "responses": {
                    "201": {
                        "description": "Created"
                    }
                }
            }
        },

        "/fhir/Practitioner/{id}": {
            "get": {
                "tags": ["Practitioner"],
                "summary": "GET Practitioner Resource by ID",
                "description": "Returns one practitioner resource.",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "format",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                ],
                "responses": {
                    "200": {
                        "description": "Practitioner resource",
                        "schema": {
                            "type": "object",
                            "items": {
                                "$ref": "#/definitions/Practitioner"
                            }
                        }
                    }
                }
            },

            "delete": {
                "tags": ["Practitioner"],
                "summary": "Delete Practitioner Resource",
                "description": "This api lets you delete an existing instance of the Practitioner resource by its ID.",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "format",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                ],
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },

            "put": {
                "tags": ["Practitioner"],
                "summary": "Update Practitioner Resource",
                "description": "This api lets you create a new current version for an existing Practitioner resource or creates an initial version if no Practitioner resource already exists for the given id.",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "format",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                ],
                "responses": {
                    "200": {
                        "description": "practitioner",
                        "schema": {
                            "type": "object",
                            "items": {
                                "$ref": "#/definitions/Practitioner"
                            }
                        }
                    }
                }
            }
        },

        "/fhir/Practitioner/{id}/_history/{vid}": {
            "get": {
                "tags": ["Practitioner"],
                "summary": "GET Practitioner Resource by version ID",
                "description": "Returns one practitioner resource by practitioner ID and version ID",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "format",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                    {
                        "name": "vid",
                        "in": "path",
                        "description": "format",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                ],
                "responses": {
                    "200": {
                        "description": "Practitioner resource",
                        "schema": {
                            "type": "object",
                            "items": {
                                "$ref": "#/definitions/Practitioner"
                            }
                        }
                    }
                }
            }
        },

        "/fhir/Practitioner/_history": {
            "get": {
                "tags": ["Practitioner"],
                "summary": "GET Change History of Practitioner Resource",
                "description": "This endpoint supports retrieve the update history across the Practitioner resource type.It returns Bundle of update history of Practitioner resource.",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "_count",
                        "in": "query",
                        "description": "format",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                    {
                        "name": "_since",
                        "in": "query",
                        "description": "format",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                ],
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },

        "/fhir/Practitioner/{id}/_history": {
            "get": {
                "tags": ["Practitioner"],
                "summary": "GET Change History of Practitioner Resource by ID",
                "description": "This endpoint supports retrieve the update history of Practitioner resource instance given its ID.",
                "produces": ["application/xml", "application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "format",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                    {
                        "name": "_count",
                        "in": "query",
                        "description": "format",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                    {
                        "name": "_since",
                        "in": "query",
                        "description": "format",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                ],
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
    },
    "definitions": {
        "Encounter": Encounter,
        "Practitioner": Practitioner,
        "Appointment": Appointment,
        "Account_identifier": Account_identifier,
        "Account_meta": Account_meta,
        "Account_type": Account_type,
        "Account_type_coding": Account_type_coding,
        "Practitioner_name": Practitioner_name,
        "AuditEvent_source_observer": AuditEvent_source_observer,
        "Contract_period": Contract_period,
        "Practitioner_qualification": Practitioner_qualification,
        "Person_address": Person_address,
        "Account_text": Account_text,
        "Account_coverage": Account_coverage,
        "Account_subject": Account_subject,
        "ActivityDefinition_valueCodeableConcept": ActivityDefinition_valueCodeableConcept,
        "AdverseEvent_category": AdverseEvent_category,
        "Appointment_participant": Appointment_participant,
        "Appointment_serviceType": Appointment_serviceType,
        "Appointment_coding": Appointment_coding
    }
}
export default swaggerDocument;
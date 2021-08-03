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
        "/persons": {
            "get": {
                "summary": "Gets some persons",
                "description": "Returns a list containing all persons.",
                "responses": {
                    "200": {
                        "description": "A list of Person",
                        "schema": {
                            "type": "array",
                            "items": {
                                "properties": {
                                    "firstName": {
                                        "type": "string"
                                    },
                                    "lastName": {
                                        "type": "string"
                                    },
                                    "username": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
export default swaggerDocument;
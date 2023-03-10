import { bundleResource } from './bundleResource';

const resourceData = [
  {
    "resourceType": "Endpoint",
    "id": "direct-endpoint",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: direct-endpoint\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: active\u003c/p\u003e\u003cp\u003e\u003cb\u003econnectionType\u003c/b\u003e: direct-project (Details: [not stated] code direct-project \u003d \u0027direct-project\u0027, stated as \u0027null\u0027)\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: MARTIN SMIETANKA\u003c/p\u003e\u003cp\u003e\u003cb\u003emanagingOrganization\u003c/b\u003e: \u003ca\u003eOrganization/299\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epayloadType\u003c/b\u003e: urn:hl7-org:sdwg:ccda-structuredBody:1.1 \u003cspan\u003e(Details : {urn:oid:1.3.6.1.4.1.19376.1.2.3 code \u0027urn:hl7-org:sdwg:ccda-structuredBody:1.1\u0027 \u003d \u0027urn:hl7-org:sdwg:ccda-structuredBody:1.1)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: \u003ca\u003eMARTIN.SMIETANKA@directnppes.com\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "status": "active",
    "connectionType": {
      "code": "direct-project"
    },
    "name": "MARTIN SMIETANKA",
    "managingOrganization": {
      "reference": "Organization/299"
    },
    "payloadType": [
      {
        "coding": [
          {
            "system": "urn:oid:1.3.6.1.4.1.19376.1.2.3",
            "code": "urn:hl7-org:sdwg:ccda-structuredBody:1.1"
          }
        ]
      }
    ],
    "address": "mailto:MARTIN.SMIETANKA@directnppes.com",
    "meta": {
      "tag": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "HTEST",
          "display": "test health data"
        }
      ]
    }
  },
  {
    "resourceType": "Endpoint",
    "id": "example-iid",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n\t\t\tExample of an Imaging IID type endpoint\n\t\t\u003c/div\u003e"
    },
    "status": "active",
    "connectionType": {
      "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
      "code": "ihe-iid"
    },
    "name": "PACS Hospital Invoke Image Display endpoint",
    "payloadType": [
      {
        "text": "DICOM IID"
      }
    ],
    "address": "https://pacs.hospital.org/IHEInvokeImageDisplay",
    "meta": {
      "tag": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "HTEST",
          "display": "test health data"
        }
      ]
    }
  },
  {
    "resourceType": "Endpoint",
    "id": "example-wadors",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t\u003c/div\u003e"
    },
    "status": "active",
    "connectionType": {
      "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
      "code": "dicom-wado-rs"
    },
    "name": "PACS Hospital DICOM WADO-RS endpoint",
    "payloadType": [
      {
        "text": "DICOM WADO-RS"
      }
    ],
    "payloadMimeType": [
      "application/dicom"
    ],
    "address": "https://pacs.hospital.org/wado-rs",
    "meta": {
      "tag": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "HTEST",
          "display": "test health data"
        }
      ]
    }
  },
  {
    "resourceType": "Endpoint",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n\t\t\tHealth Intersections CarePlan Hub\u003cbr/\u003e\n\t\t\tCarePlans can be uploaded to/from this loccation\n\t\t\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "http://example.org/enpoint-identifier",
        "value": "epcp12"
      }
    ],
    "status": "active",
    "connectionType": {
      "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
      "code": "hl7-fhir-rest"
    },
    "name": "Health Intersections CarePlan Hub",
    "managingOrganization": {
      "reference": "Organization/hl7"
    },
    "contact": [
      {
        "system": "email",
        "value": "endpointmanager@example.org",
        "use": "work"
      }
    ],
    "period": {
      "start": "2014-09-01"
    },
    "payloadType": [
      {
        "coding": [
          {
            "system": "http://hl7.org/fhir/resource-types",
            "code": "CarePlan"
          }
        ]
      }
    ],
    "payloadMimeType": [
      "application/fhir+xml"
    ],
    "address": "http://fhir3.healthintersections.com.au/open/CarePlan",
    "header": [
      "bearer-code BASGS534s4"
    ],
    "meta": {
      "tag": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "HTEST",
          "display": "test health data"
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/71",
    "resource": {
      "resourceType": "Endpoint",
      "id": "71",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              CarePlan repository, CarePlan\u003cbr/\u003e\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "hl7-fhir-rest"
      },
      "name": "CarePlan repository",
      "managingOrganization": {
        "display": "Telstra Health"
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "CarePlan"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/fhir+xml"
      ],
      "address": "https://sqlonfhir-dstu2.azurewebsites.net/fhir"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/72",
    "resource": {
      "resourceType": "Endpoint",
      "id": "72",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              Questionnaire Destination, QuestionnaireResponse\u003cbr/\u003e\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "hl7-fhir-rest"
      },
      "name": "Questionnaire Destination",
      "managingOrganization": {
        "display": "Telstra Health"
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "QuestionnaireResponse"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/fhir+xml"
      ],
      "address": "https://sqlonfhir-dstu2.azurewebsites.net/fhir"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/73",
    "resource": {
      "resourceType": "Endpoint",
      "id": "73",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              Referral Requests, ServiceRequest\u003cbr/\u003e\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "hl7-fhir-rest"
      },
      "name": "Referral Requests",
      "managingOrganization": {
        "display": "Telstra Health"
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "ServiceRequest"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/fhir+xml"
      ],
      "address": "https://sqlonfhir-dstu2.azurewebsites.net/fhir"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/74",
    "resource": {
      "resourceType": "Endpoint",
      "id": "74",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              Referral Requests, ServiceRequest QuestionnaireResponse\u003cbr/\u003e\n              Address: https://open.epic.com/Interface/FHIR\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "hl7-fhir-rest"
      },
      "name": "Referral Requests",
      "managingOrganization": {
        "display": "Epic demo organization"
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "ServiceRequest QuestionnaireResponse"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/fhir+json"
      ],
      "address": "https://open.epic.com/Interface/FHIR"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/75",
    "resource": {
      "resourceType": "Endpoint",
      "id": "75",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              Subscription receiver, ServiceRequest\u003cbr/\u003e\n              Address: mailto:subscriptions@example.org\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "secure-email"
      },
      "name": "Subscription receiver",
      "managingOrganization": {
        "display": "Telstra Health"
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "ServiceRequest"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/fhir+xml"
      ],
      "address": "mailto:subscriptions@example.org"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/76",
    "resource": {
      "resourceType": "Endpoint",
      "id": "76",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              valid usecase?, CDA-EventSummary\u003cbr/\u003e\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "hl7-fhir-msg"
      },
      "name": "valid usecase?",
      "managingOrganization": {
        "display": "Telstra Health"
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "CDA-EventSummary"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/pdf"
      ],
      "address": "https://sqlonfhir-dstu2.azurewebsites.net/fhir"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/77",
    "resource": {
      "resourceType": "Endpoint",
      "id": "77",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              v2 referral Requests, REF-I12\u003cbr/\u003e\n              Address: 127.0.0.1\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "hl7v2-mllp"
      },
      "name": "v2 referral Requests",
      "managingOrganization": {
        "display": "Epic demo organization"
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "REF-I12"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/hl7-v2"
      ],
      "address": "127.0.0.1"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/78",
    "resource": {
      "resourceType": "Endpoint",
      "id": "78",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              xds event summaries, CDA-EventSummary\u003cbr/\u003e\n              Address: https://open.epic.com/Interface/XDS.b\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "ihe-xds"
      },
      "name": "xds event summaries",
      "managingOrganization": {
        "display": "Epic demo organization"
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "CDA-EventSummary"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/hl7-sda+xml; variant\u003dXDA/XDS"
      ],
      "address": "https://open.epic.com/Interface/XDS.b"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/79",
    "resource": {
      "resourceType": "Endpoint",
      "id": "79",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)\u003cbr/\u003e\n              Address: https://pacs.hospital.org/dicomweb\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "dicom-wado-rs"
      },
      "name": "Enterprise Image Archive",
      "managingOrganization": {
        "display": "Multi-site Co."
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/dicom; variant\u003dDICOM WADO-RS"
      ],
      "address": "https://pacs.hospital.org/dicomweb"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/80",
    "resource": {
      "resourceType": "Endpoint",
      "id": "80",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)\u003cbr/\u003e\n              Address: https://pacs.hospital.org/dicomweb\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "dicom-qido-rs"
      },
      "name": "Enterprise Image Archive",
      "managingOrganization": {
        "display": "Multi-site Co."
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/dicom; variant\u003dDICOM QIDO-RS"
      ],
      "address": "https://pacs.hospital.org/dicomweb"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/81",
    "resource": {
      "resourceType": "Endpoint",
      "id": "81",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)\u003cbr/\u003e\n              Address: https://pacs.hospital.org/dicomweb\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "dicom-stow-rs"
      },
      "name": "Enterprise Image Archive",
      "managingOrganization": {
        "display": "Multi-site Co."
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/dicom; variant\u003dDICOM STOW-RS"
      ],
      "address": "https://pacs.hospital.org/dicomweb"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/82",
    "resource": {
      "resourceType": "Endpoint",
      "id": "82",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)\u003cbr/\u003e\n              Address: https://pacs.hospital.org/dicomweb\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "dicom-stow-rs"
      },
      "name": "Enterprise Image Archive",
      "managingOrganization": {
        "display": "Multi-site Co."
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/dicom; variant\u003dDICOM STOW-RS"
      ],
      "address": "https://pacs.hospital.org/dicomweb"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/83",
    "resource": {
      "resourceType": "Endpoint",
      "id": "83",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)\u003cbr/\u003e\n              Address: https://pacs.hospital.org/wadoUri\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "dicom-wado-uri"
      },
      "name": "Enterprise Image Archive",
      "managingOrganization": {
        "display": "Multi-site Co."
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/dicom; variant\u003dDICOM WADO-URI"
      ],
      "address": "https://pacs.hospital.org/wadoUri"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Endpoint/84",
    "resource": {
      "resourceType": "Endpoint",
      "id": "84",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)\u003cbr/\u003e\n              Address: https://pacs.hospital.org/IHEInvokeImageDisplay\u003c/div\u003e"
      },
      "status": "active",
      "connectionType": {
        "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code": "ihe-iid"
      },
      "name": "Enterprise Image Archive",
      "managingOrganization": {
        "display": "Multi-site Co."
      },
      "payloadType": [
        {
          "coding": [
            {
              "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
            }
          ]
        }
      ],
      "payloadMimeType": [
        "application/dicom; variant\u003dIHE IID"
      ],
      "address": "https://pacs.hospital.org/IHEInvokeImageDisplay"
    }
  }
];

export const endpointBundle = bundleResource('Endpoint', resourceData);

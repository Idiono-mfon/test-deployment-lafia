import { bundleResource } from "./bundleResource";

const resourceData = [
  {
    "resourceType": "OrganizationAffiliation",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\tHL7 Payer Network services for Acme Hospital from 1-Jan 2012 to 31-Mar 2012\n\t\t\t\u003c/p\u003e\n\t\t\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "http://www.acme.org/practitioners",
        "value": "23"
      }
    ],
    "active": true,
    "period": {
      "start": "2012-01-01",
      "end": "2012-03-31"
    },
    "organization": {
      "reference": "Organization/hl7pay"
    },
    "participatingOrganization": {
      "reference": "Organization/f001"
    },
    "network": [
      {
        "reference": "Organization/hl7pay",
        "display": "HL7 Payer Network"
      }
    ],
    "code": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/organization-role",
            "code": "provider"
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "408443003",
            "display": "General medical practice"
          }
        ]
      }
    ],
    "location": [
      {
        "reference": "Location/1",
        "display": "South Wing, second floor"
      }
    ],
    "healthcareService": [
      {
        "reference": "HealthcareService/example"
      }
    ],
    "telecom": [
      {
        "system": "email",
        "value": "general.practice@example.org",
        "use": "work"
      }
    ],
    "endpoint": [
      {
        "reference": "Endpoint/example"
      }
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
  }
];

export const organizationAffiliationBundle = bundleResource('OrganizationAffiliation', resourceData);

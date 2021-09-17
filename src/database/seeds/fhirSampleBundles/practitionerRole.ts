import { bundleResource } from "./bundleResource";

const resourceData = [
  {
    "resourceType": "PractitionerRole",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\tDr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar\n\t\t\t\t2012\n\t\t\t\u003c/p\u003e\n\t\t\u003c/div\u003e"
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
    "practitioner": {
      "reference": "Practitioner/example",
      "display": "Dr Adam Careful"
    },
    "organization": {
      "reference": "Organization/f001"
    },
    "code": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0286",
            "code": "RP"
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
        "system": "phone",
        "value": "(03) 5555 6473",
        "use": "work"
      },
      {
        "system": "email",
        "value": "adam.southern@example.org",
        "use": "work"
      }
    ],
    "availableTime": [
      {
        "daysOfWeek": [
          "mon",
          "tue",
          "wed"
        ],
        "availableStartTime": "09:00:00",
        "availableEndTime": "16:30:00"
      },
      {
        "daysOfWeek": [
          "thu",
          "fri"
        ],
        "availableStartTime": "09:00:00",
        "availableEndTime": "12:00:00"
      }
    ],
    "notAvailable": [
      {
        "description": "Adam will be on extended leave during May 2017",
        "during": {
          "start": "2017-05-01",
          "end": "2017-05-20"
        }
      }
    ],
    "availabilityExceptions": "Adam is generally unavailable on public holidays and during the Christmas/New Year break",
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
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/f003-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "f003-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Marc Versteegh\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e BMC\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Care role\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/f003",
        "display": "Marc Versteegh"
      },
      "organization": {
        "reference": "Organization/f001",
        "display": "BMC"
      },
      "code": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        }
      ],
      "specialty": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.011",
              "display": "Cardiothoracal surgery"
            }
          ],
          "text": "specialization"
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/example-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "example-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Adam Careful\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003elocation:\u003c/span\u003e South Wing, second floor\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e RP\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eEmail:\u003c/span\u003e dr.adam.careful@example.org\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eidentifier:\u003c/span\u003e 52\n          \u003c/div\u003e"
      },
      "identifier": [
        {
          "system": "http://example.org/role-identifier",
          "value": "52"
        }
      ],
      "period": {
        "start": "2012-01-01",
        "end": "2012-03-31"
      },
      "practitioner": {
        "reference": "Practitioner/example",
        "display": "Adam Careful"
      },
      "organization": {
        "reference": "Organization/f001"
      },
      "code": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0286",
              "code": "RP"
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
          "value": "dr.adam.careful@example.org"
        }
      ],
      "endpoint": [
        {
          "reference": "Endpoint/example"
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/example-1",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "example-1",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Adam Careful\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e Good Health Clinic\n          \u003c/div\u003e"
      },
      "period": {
        "start": "2012-01-01"
      },
      "practitioner": {
        "reference": "Practitioner/example",
        "display": "Adam Careful"
      },
      "organization": {
        "reference": "Organization/2",
        "display": "Good Health Clinic"
      }
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/example-2",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "example-2",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Adam Careful\u003cbr/\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e Good Health Clinic\u003cbr/\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e On call physcologist\n          \u003c/div\u003e"
      },
      "period": {
        "start": "2016-07-01",
        "end": "2017-06-30"
      },
      "practitioner": {
        "reference": "Practitioner/example",
        "display": "Adam Careful"
      },
      "organization": {
        "reference": "Organization/2",
        "display": "Good Health Clinic"
      },
      "code": [
        {
          "text": "On call physcologist"
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555 123456",
          "use": "mobile"
        }
      ],
      "availableTime": [
        {
          "daysOfWeek": [
            "sat",
            "sun"
          ],
          "allDay": true
        }
      ],
      "availabilityExceptions": "Public Holidays"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/f007-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "f007-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Simone Heps\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e BMC\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Care role\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/f007",
        "display": "Simone Heps"
      },
      "organization": {
        "reference": "Organization/f001",
        "display": "BMC"
      },
      "code": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        }
      ],
      "specialty": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.015",
              "display": "Physician"
            }
          ],
          "text": "specialization"
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/f004-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "f004-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Ronald Briet\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e BMC\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Care role\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/f004",
        "display": "Ronald Briet"
      },
      "organization": {
        "reference": "Organization/f001",
        "display": "BMC"
      },
      "code": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        }
      ],
      "specialty": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.018",
              "display": "Ear-, Nose and Throat"
            }
          ],
          "text": "specialization"
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/xcda1-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "xcda1-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Sherry Dopplemeyer\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e Cleveland Clinic\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Primary Surgon\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/xcda1",
        "display": "Sherry Dopplemeyer"
      },
      "organization": {
        "display": "Cleveland Clinic"
      },
      "code": [
        {
          "text": "Primary Surgon"
        }
      ],
      "specialty": [
        {
          "text": "Orthopedic"
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/f202-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "f202-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Luigi Maas\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e AUMC\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Electronic laboratory reporting\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/f202",
        "display": "Luigi Maas"
      },
      "organization": {
        "reference": "Organization/f201",
        "display": "AUMC"
      },
      "code": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "33526004",
              "display": "Electronic laboratory reporting"
            }
          ]
        }
      ],
      "specialty": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "159285000",
              "display": "Medical laboratory technician"
            }
          ]
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/f201-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "f201-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Dokter Bronsig\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e AUMC\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Implementation of planned interventions\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/f201",
        "display": "Dokter Bronsig"
      },
      "organization": {
        "reference": "Organization/f201",
        "display": "AUMC"
      },
      "code": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "225304007",
              "display": "Implementation of planned interventions"
            }
          ]
        }
      ],
      "specialty": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "310512001",
              "display": "Medical oncologist"
            }
          ]
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/f203-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "f203-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Juri van Gelder\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e AUMC\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Physical therapist\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/f203",
        "display": "Juri van Gelder"
      },
      "organization": {
        "reference": "Organization/f201",
        "display": "AUMC"
      },
      "code": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "36682004",
              "display": "Physical therapist"
            }
          ]
        }
      ],
      "specialty": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "410158009",
              "display": "Assess physical therapist service"
            }
          ]
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/f005-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "f005-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Langeveld Anne\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e BMC\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Care role\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/f005",
        "display": "Langeveld Anne"
      },
      "organization": {
        "reference": "Organization/f001",
        "display": "BMC"
      },
      "code": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        }
      ],
      "specialty": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.018",
              "display": "Keel- neus- en oorarts"
            }
          ],
          "text": "specialization"
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/f006-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "f006-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Rob van den Berk\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e BMC\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Care role\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/f006",
        "display": "Rob van den Berk"
      },
      "organization": {
        "reference": "Organization/f001",
        "display": "BMC"
      },
      "code": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        }
      ],
      "specialty": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "17.000",
              "display": "Pharmacist"
            }
          ],
          "text": "specialization"
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/f001-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "f001-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Eric van den broek\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e BMC\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Care role\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/f001",
        "display": "Eric van den broek"
      },
      "organization": {
        "reference": "Organization/f001",
        "display": "BMC"
      },
      "code": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        }
      ],
      "specialty": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.018",
              "display": "Ear-, Nose and Throat"
            }
          ],
          "text": "specialization"
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/f002-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "f002-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Pieter Voigt\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e BMC\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Care role\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/f002",
        "display": "Pieter Voigt"
      },
      "organization": {
        "reference": "Organization/f001",
        "display": "BMC"
      },
      "code": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        }
      ],
      "specialty": [
        {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.011",
              "display": "Cardiothoracal surgery"
            }
          ],
          "text": "specialization"
        }
      ]
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/PractitionerRole/f204-0",
    "resource": {
      "resourceType": "PractitionerRole",
      "id": "f204-0",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n            \u003cspan style\u003d\"color: gray;\"\u003epractitioner:\u003c/span\u003e Carla Espinosa\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003eorganization:\u003c/span\u003e AUMC\u003cbr/\u003e\u003cspan style\u003d\"color: gray;\"\u003erole:\u003c/span\u003e Renal nurse\n          \u003c/div\u003e"
      },
      "practitioner": {
        "reference": "Practitioner/f204",
        "display": "Carla Espinosa"
      },
      "organization": {
        "reference": "Organization/f201",
        "display": "AUMC"
      },
      "code": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "224565004",
              "display": "Renal nurse"
            }
          ]
        }
      ],
      "specialty": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "9632001",
              "display": "Nursing procedure"
            }
          ]
        }
      ]
    }
  }
];

export const practitionerRoleBundle = bundleResource('PractitionerRole', resourceData);

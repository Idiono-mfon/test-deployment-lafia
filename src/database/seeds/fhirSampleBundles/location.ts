import { bundleResource } from './bundleResource';

const resourceData = [
  {
    "resourceType": "Location",
    "id": "amb",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eMobile Clinic\u003c/div\u003e"
    },
    "status": "active",
    "name": "BUMC Ambulance",
    "description": "Ambulance provided by Burgers University Medical Center",
    "mode": "kind",
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            "code": "AMB",
            "display": "Ambulance"
          }
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "2329",
        "use": "mobile"
      }
    ],
    "physicalType": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
          "code": "ve",
          "display": "Vehicle"
        }
      ]
    },
    "managingOrganization": {
      "reference": "Organization/f001"
    },
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
    "resourceType": "Location",
    "id": "hl7",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      Health Level Seven International\u003cbr/\u003e\n\t\t\t\t3300 Washtenaw Avenue, Suite 227\u003cbr/\u003e\n\t\t\t\tAnn Arbor, MI 48104\u003cbr/\u003e\n\t\t\t\tUSA\u003cbr/\u003e\n\t\t\t\t(+1) 734-677-7777 (phone)\u003cbr/\u003e\n\t\t\t\t(+1) 734-677-6622 (fax)\u003cbr/\u003e\n\t\t\t\tE-mail:  \u003ca href\u003d\"mailto:hq@HL7.org\"\u003ehq@HL7.org\u003c/a\u003e\n    \u003c/div\u003e"
    },
    "status": "active",
    "name": "Health Level Seven International",
    "description": "HL7 Headquarters",
    "mode": "instance",
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            "code": "SLEEP",
            "display": "Sleep disorders unit"
          }
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "(+1) 734-677-7777"
      },
      {
        "system": "fax",
        "value": "(+1) 734-677-6622"
      },
      {
        "system": "email",
        "value": "hq@HL7.org"
      }
    ],
    "address": {
      "line": [
        "3300 Washtenaw Avenue, Suite 227"
      ],
      "city": "Ann Arbor",
      "state": "MI",
      "postalCode": "48104",
      "country": "USA"
    },
    "physicalType": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
          "code": "bu",
          "display": "Building"
        }
      ]
    },
    "position": {
      "longitude": 42.256500,
      "latitude": -83.694710
    },
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
    "resourceType": "Location",
    "id": "ph",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003ePatient\u0027s Home\u003c/div\u003e"
    },
    "status": "active",
    "name": "Patient\u0027s Home",
    "description": "Patient\u0027s Home",
    "mode": "kind",
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            "code": "PTRES",
            "display": "Patient\u0027s Residence"
          }
        ]
      }
    ],
    "physicalType": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
          "code": "ho",
          "display": "House"
        }
      ]
    },
    "managingOrganization": {
      "reference": "Organization/f001"
    },
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
    "resourceType": "Location",
    "id": "2",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eBurgers UMC, South Wing, second floor, Neuro Radiology Operation Room 1\u003c/div\u003e"
    },
    "identifier": [
      {
        "value": "B1-S.F2.1.00"
      }
    ],
    "status": "suspended",
    "operationalStatus": {
      "system": "http://terminology.hl7.org/CodeSystem/v2-0116",
      "code": "H",
      "display": "Housekeeping"
    },
    "name": "South Wing Neuro OR 1",
    "alias": [
      "South Wing OR 5",
      "Main Wing OR 2"
    ],
    "description": "Old South Wing, Neuro Radiology Operation Room 1 on second floor",
    "mode": "instance",
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            "code": "RNEU",
            "display": "Neuroradiology unit"
          }
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "2329"
      }
    ],
    "physicalType": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
          "code": "ro",
          "display": "Room"
        }
      ]
    },
    "managingOrganization": {
      "reference": "Organization/f001"
    },
    "partOf": {
      "reference": "Location/1"
    },
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
    "resourceType": "Location",
    "id": "ukp",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eUK Pharmacies\u003c/div\u003e"
    },
    "status": "active",
    "name": "UK Pharmacies",
    "description": "All Pharmacies in the United Kingdom covered by the National Pharmacy Association",
    "mode": "kind",
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            "code": "PHARM",
            "display": "Pharmacy"
          }
        ]
      }
    ],
    "physicalType": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
          "code": "jdn",
          "display": "Jurisdiction"
        }
      ]
    },
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
    "resourceType": "Location",
    "id": "1",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eBurgers UMC, South Wing, second floor\u003c/div\u003e"
    },
    "identifier": [
      {
        "value": "B1-S.F2"
      }
    ],
    "status": "active",
    "name": "South Wing, second floor",
    "alias": [
      "BU MC, SW, F2",
      "Burgers University Medical Center, South Wing, second floor"
    ],
    "description": "Second floor of the Old South Wing, formerly in use by Psychiatry",
    "mode": "instance",
    "telecom": [
      {
        "system": "phone",
        "value": "2328",
        "use": "work"
      },
      {
        "system": "fax",
        "value": "2329",
        "use": "work"
      },
      {
        "system": "email",
        "value": "second wing admissions"
      },
      {
        "system": "url",
        "value": "http://sampleorg.com/southwing",
        "use": "work"
      }
    ],
    "address": {
      "use": "work",
      "line": [
        "Galapagosweg 91, Building A"
      ],
      "city": "Den Burg",
      "postalCode": "9105 PZ",
      "country": "NLD"
    },
    "physicalType": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
          "code": "wi",
          "display": "Wing"
        }
      ]
    },
    "position": {
      "longitude": -83.6945691,
      "latitude": 42.25475478,
      "altitude": 0
    },
    "managingOrganization": {
      "reference": "Organization/f001"
    },
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
    "fullUrl": "http://hl7.org/fhir/Location/2",
    "resource": {
      "resourceType": "Location",
      "id": "2",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eUSS Enterprise\u003c/div\u003e"
      },
      "status": "active",
      "name": "USSS Enterprise-D",
      "mode": "instance"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Location/3",
    "resource": {
      "resourceType": "Location",
      "id": "3",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eUSSS Enterprise-D Sickbay\u003c/div\u003e"
      },
      "status": "active",
      "name": "USSS Enterprise-D Sickbay",
      "mode": "instance",
      "partOf": {
        "reference": "Location/2",
        "display": "USS Enterprise"
      }
    }
  }
];

export const locationBundle = bundleResource('Location', resourceData);

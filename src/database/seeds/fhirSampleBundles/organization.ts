import { bundleResource } from "./bundleResource";

const resourcedata = [
  {
    "resourceType": "Organization",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f001\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 91654 (OFFICIAL), 17-0112278 (USUAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: University Medical Hospital \u003cspan\u003e(Details : {urn:oid:2.16.840.1.113883.2.4.15.1060 code \u0027V6\u0027 \u003d \u0027V6\u0027, given as \u0027University Medical Hospital\u0027}; {http://terminology.hl7.org/CodeSystem/organization-type code \u0027prov\u0027 \u003d \u0027Healthcare Provider\u0027, given as \u0027Healthcare Provider\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Burgers University Medical Center\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 022-655 2300(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: \u003c/p\u003e\u003cul\u003e\u003cli\u003eGalapagosweg 91 Den Burg 9105 PZ NLD (WORK)\u003c/li\u003e\u003cli\u003ePO Box 2311 Den Burg 9100 AA NLD (WORK)\u003c/li\u003e\u003c/ul\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003econtact\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epurpose\u003c/b\u003e: Press \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/contactentity-type code \u0027PRESS\u0027 \u003d \u0027Press)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 022-655 2334\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003econtact\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epurpose\u003c/b\u003e: Patient \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/contactentity-type code \u0027PATINF\u0027 \u003d \u0027Patient)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 022-655 2335\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "urn:oid:2.16.528.1",
        "value": "91654"
      },
      {
        "use": "usual",
        "system": "urn:oid:2.16.840.1.113883.2.4.6.1",
        "value": "17-0112278"
      }
    ],
    "type": [
      {
        "coding": [
          {
            "system": "urn:oid:2.16.840.1.113883.2.4.15.1060",
            "code": "V6",
            "display": "University Medical Hospital"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/organization-type",
            "code": "prov",
            "display": "Healthcare Provider"
          }
        ]
      }
    ],
    "name": "Burgers University Medical Center",
    "telecom": [
      {
        "system": "phone",
        "value": "022-655 2300",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "Galapagosweg 91"
        ],
        "city": "Den Burg",
        "postalCode": "9105 PZ",
        "country": "NLD"
      },
      {
        "use": "work",
        "line": [
          "PO Box 2311"
        ],
        "city": "Den Burg",
        "postalCode": "9100 AA",
        "country": "NLD"
      }
    ],
    "contact": [
      {
        "purpose": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
              "code": "PRESS"
            }
          ]
        },
        "telecom": [
          {
            "system": "phone",
            "value": "022-655 2334"
          }
        ]
      },
      {
        "purpose": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
              "code": "PATINF"
            }
          ]
        },
        "telecom": [
          {
            "system": "phone",
            "value": "022-655 2335"
          }
        ]
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
    "resourceType": "Organization",
    "id": "f002",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f002\u003c/p\u003e\u003cp\u003e\u003cb\u003eactive\u003c/b\u003e: true\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Hospital Department \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/organization-type code \u0027dept\u0027 \u003d \u0027Hospital Department\u0027, given as \u0027Hospital Department\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Burgers UMC Cardiology unit\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 022-655 2320\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: South Wing, floor 2 \u003c/p\u003e\u003cp\u003e\u003cb\u003epartOf\u003c/b\u003e: \u003ca\u003eOrganization/f001\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eContacts\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePurpose\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eName\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eTelecom\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAddress\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eAdministrative \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/contactentity-type code \u0027ADMIN\u0027 \u003d \u0027Administrative)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003emevr. D. de Haan\u003c/td\u003e\u003ctd\u003eph: 022-655 2321\u003c/td\u003e\u003ctd\u003eSouth Wing, floor 2 \u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "active": true,
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/organization-type",
            "code": "dept",
            "display": "Hospital Department"
          }
        ]
      }
    ],
    "name": "Burgers UMC Cardiology unit",
    "telecom": [
      {
        "system": "phone",
        "value": "022-655 2320"
      }
    ],
    "address": [
      {
        "line": [
          "South Wing, floor 2"
        ]
      }
    ],
    "partOf": {
      "reference": "Organization/f001"
    },
    "contact": [
      {
        "purpose": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
              "code": "ADMIN"
            }
          ]
        },
        "name": {
          "text": "mevr. D. de Haan"
        },
        "telecom": [
          {
            "system": "phone",
            "value": "022-655 2321"
          },
          {
            "system": "email",
            "value": "cardio@burgersumc.nl"
          },
          {
            "system": "fax",
            "value": "022-655 2322"
          }
        ],
        "address": {
          "line": [
            "South Wing, floor 2"
          ]
        }
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
    "resourceType": "Organization",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f003\u003c/p\u003e\u003cp\u003e\u003cb\u003eactive\u003c/b\u003e: true\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Hospital Department \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/organization-type code \u0027dept\u0027 \u003d \u0027Hospital Department\u0027, given as \u0027Hospital Department\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Burgers UMC Ear,Nose,Throat unit\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 022-655 6780\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: West Wing, floor 5 \u003c/p\u003e\u003cp\u003e\u003cb\u003epartOf\u003c/b\u003e: \u003ca\u003eOrganization/f001\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eContacts\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePurpose\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eName\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eTelecom\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAddress\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eAdministrative \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/contactentity-type code \u0027ADMIN\u0027 \u003d \u0027Administrative)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003emr. F. de Hond\u003c/td\u003e\u003ctd\u003eph: 022-655 7654\u003c/td\u003e\u003ctd\u003eWest Wing, floor 5 \u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "active": true,
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/organization-type",
            "code": "dept",
            "display": "Hospital Department"
          }
        ]
      }
    ],
    "name": "Burgers UMC Ear,Nose,Throat unit",
    "telecom": [
      {
        "system": "phone",
        "value": "022-655 6780"
      }
    ],
    "address": [
      {
        "line": [
          "West Wing, floor 5"
        ]
      }
    ],
    "partOf": {
      "reference": "Organization/f001"
    },
    "contact": [
      {
        "purpose": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
              "code": "ADMIN"
            }
          ]
        },
        "name": {
          "text": "mr. F. de Hond"
        },
        "telecom": [
          {
            "system": "phone",
            "value": "022-655 7654"
          },
          {
            "system": "email",
            "value": "KNO@burgersumc.nl"
          },
          {
            "system": "fax",
            "value": "022-655 0998"
          }
        ],
        "address": {
          "line": [
            "West Wing, floor 5"
          ]
        }
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
    "resourceType": "Organization",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f201\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: Artis University Medical Center (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003eactive\u003c/b\u003e: true\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Academic Medical Center \u003cspan\u003e(Details : {SNOMED CT code \u0027405608006\u0027 \u003d \u0027Academic medical centre\u0027, given as \u0027Academic Medical Center\u0027}; {urn:oid:2.16.840.1.113883.2.4.15.1060 code \u0027V6\u0027 \u003d \u0027V6\u0027, given as \u0027University Medical Hospital\u0027}; {http://terminology.hl7.org/CodeSystem/organization-type code \u0027prov\u0027 \u003d \u0027Healthcare Provider\u0027, given as \u0027Healthcare Provider\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Artis University Medical Center (AUMC)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: +31715269111(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Walvisbaai 3 Den Helder 2333ZA NLD (WORK)\u003c/p\u003e\u003ch3\u003eContacts\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eName\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eTelecom\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAddress\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eProfessor Brand(OFFICIAL)\u003c/td\u003e\u003ctd\u003eph: +31715269702(WORK)\u003c/td\u003e\u003ctd\u003eWalvisbaai 3 Gebouw 2 Den helder 2333ZA NLD \u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.zorgkaartnederland.nl/",
        "value": "Artis University Medical Center"
      }
    ],
    "active": true,
    "type": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "405608006",
            "display": "Academic Medical Center"
          },
          {
            "system": "urn:oid:2.16.840.1.113883.2.4.15.1060",
            "code": "V6",
            "display": "University Medical Hospital"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/organization-type",
            "code": "prov",
            "display": "Healthcare Provider"
          }
        ]
      }
    ],
    "name": "Artis University Medical Center (AUMC)",
    "telecom": [
      {
        "system": "phone",
        "value": "+31715269111",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "Walvisbaai 3"
        ],
        "city": "Den Helder",
        "postalCode": "2333ZA",
        "country": "NLD"
      }
    ],
    "contact": [
      {
        "name": {
          "use": "official",
          "text": "Professor Brand",
          "family": "Brand",
          "given": [
            "Ronald"
          ],
          "prefix": [
            "Prof.Dr."
          ]
        },
        "telecom": [
          {
            "system": "phone",
            "value": "+31715269702",
            "use": "work"
          }
        ],
        "address": {
          "line": [
            "Walvisbaai 3",
            "Gebouw 2"
          ],
          "city": "Den helder",
          "postalCode": "2333ZA",
          "country": "NLD"
        }
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
    "resourceType": "Organization",
    "id": "f203",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f203\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: Zorginstelling naam \u003d Blijdorp MC (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003eactive\u003c/b\u003e: true\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Academic Medical Center \u003cspan\u003e(Details : {SNOMED CT code \u0027405608006\u0027 \u003d \u0027Academic medical centre\u0027, given as \u0027Academic Medical Center\u0027}; {http://terminology.hl7.org/CodeSystem/organization-type code \u0027prov\u0027 \u003d \u0027Healthcare Provider)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Blijdorp Medisch Centrum (BUMC)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: +31107040704(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: apenrots 230 Blijdorp 3056BE NLD (WORK)\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "text": "Zorginstelling naam"
        },
        "system": "http://www.zorgkaartnederland.nl/",
        "value": "Blijdorp MC"
      }
    ],
    "active": true,
    "type": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "405608006",
            "display": "Academic Medical Center"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/organization-type",
            "code": "prov"
          }
        ]
      }
    ],
    "name": "Blijdorp Medisch Centrum (BUMC)",
    "telecom": [
      {
        "system": "phone",
        "value": "+31107040704",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "apenrots 230"
        ],
        "city": "Blijdorp",
        "postalCode": "3056BE",
        "country": "NLD"
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
    "resourceType": "Organization",
    "id": "1",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \n      \u003cp\u003eGastroenterology @ Acme Hospital. ph: +1 555 234 3523, email: \n        \u003ca href\u003d\"mailto:gastro@acme.org\"\u003egastro@acme.org\u003c/a\u003e\n      \u003c/p\u003e\n    \n    \u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "http://www.acme.org.au/units",
        "value": "Gastro"
      }
    ],
    "name": "Gastroenterology",
    "telecom": [
      {
        "system": "phone",
        "value": "+1 555 234 3523",
        "use": "mobile"
      },
      {
        "system": "email",
        "value": "gastro@acme.org",
        "use": "work"
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
    "resourceType": "Organization",
    "id": "2.16.840.1.113883.19.5",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \n      \u003cp\u003eGood Health Clinic\u003c/p\u003e\n    \n    \u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "2.16.840.1.113883.19.5"
      }
    ],
    "name": "Good Health Clinic",
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
    "resourceType": "Organization",
    "id": "hl7pay",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \n      \u003cp\u003eHL7 Payer Network\u003c/p\u003e\n    \n    \u003c/div\u003e"
    },
    "name": "HL7 Payer network",
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
    "resourceType": "Organization",
    "id": "2",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \n      \u003cp\u003eXYZ Insurance\u003c/p\u003e\n    \n    \u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "urn:oid:2.16.840.1.113883.3.19.2.3",
        "value": "666666"
      }
    ],
    "name": "XYZ Insurance",
    "alias": [
      "ABC Insurance"
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
    "resourceType": "Organization",
    "id": "1832473e-2fe0-452d-abe9-3cdb9879522f",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \n      \u003cp\u003eClinical Laboratory @ Acme Hospital. ph: +1 555 234 1234, email: \n        \u003ca href\u003d\"mailto:contact@labs.acme.org\"\u003econtact@labs.acme.org\u003c/a\u003e\n      \u003c/p\u003e\n    \n    \u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "http://www.acme.org.au/units",
        "value": "ClinLab"
      }
    ],
    "name": "Clinical Lab",
    "telecom": [
      {
        "system": "phone",
        "value": "+1 555 234 1234",
        "use": "work"
      },
      {
        "system": "email",
        "value": "contact@labs.acme.org",
        "use": "work"
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

export const organizationBundle = bundleResource('Organization', resourcedata);

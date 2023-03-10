import { bundleResource } from "./bundleResource";

const resourceData = [
  {
    "resourceType": "Practitioner",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f001\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 938273695 (OFFICIAL), 129IDH4OP733 (USUAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Eric van den broek (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 0205568263(WORK), E.M.vandenbroek@bmc.nl(WORK), fax: 0205664440(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003egender\u003c/b\u003e: male\u003c/p\u003e\u003cp\u003e\u003cb\u003ebirthDate\u003c/b\u003e: 07/12/1975\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "938273695"
      },
      {
        "use": "usual",
        "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
        "value": "129IDH4OP733"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "van den broek",
        "given": [
          "Eric"
        ],
        "suffix": [
          "MD"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "0205568263",
        "use": "work"
      },
      {
        "system": "email",
        "value": "E.M.vandenbroek@bmc.nl",
        "use": "work"
      },
      {
        "system": "fax",
        "value": "0205664440",
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
      }
    ],
    "gender": "male",
    "birthDate": "1975-12-07",
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
    "resourceType": "Practitioner",
    "id": "f002",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f002\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 730291637 (OFFICIAL), 174BIP3JH438 (USUAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Pieter Voigt (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 0205569336(WORK), p.voigt@bmc.nl(WORK), fax: 0205669382(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003egender\u003c/b\u003e: male\u003c/p\u003e\u003cp\u003e\u003cb\u003ebirthDate\u003c/b\u003e: 29/04/1979\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "730291637"
      },
      {
        "use": "usual",
        "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
        "value": "174BIP3JH438"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "Voigt",
        "given": [
          "Pieter"
        ],
        "suffix": [
          "MD"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "0205569336",
        "use": "work"
      },
      {
        "system": "email",
        "value": "p.voigt@bmc.nl",
        "use": "work"
      },
      {
        "system": "fax",
        "value": "0205669382",
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
      }
    ],
    "gender": "male",
    "birthDate": "1979-04-29",
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
    "resourceType": "Practitioner",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f003\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 846100293 (OFFICIAL), 243HID3RT938 (USUAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Marc Versteegh (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 0205562431(WORK), m.versteegh@bmc.nl(WORK), fax: 0205662948(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Galapagosweg 91 Amsterdam 1105 AZ NLD (WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003egender\u003c/b\u003e: male\u003c/p\u003e\u003cp\u003e\u003cb\u003ebirthDate\u003c/b\u003e: 01/07/1963\u003c/p\u003e\u003cp\u003e\u003cb\u003ecommunication\u003c/b\u003e: Dutch \u003cspan\u003e(Details : {urn:ietf:bcp:47 code \u0027nl\u0027 \u003d \u0027Dutch\u0027, given as \u0027Dutch\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "846100293"
      },
      {
        "use": "usual",
        "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
        "value": "243HID3RT938"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "Versteegh",
        "given": [
          "Marc"
        ],
        "suffix": [
          "MD"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "0205562431",
        "use": "work"
      },
      {
        "system": "email",
        "value": "m.versteegh@bmc.nl",
        "use": "work"
      },
      {
        "system": "fax",
        "value": "0205662948",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "Galapagosweg 91"
        ],
        "city": "Amsterdam",
        "postalCode": "1105 AZ",
        "country": "NLD"
      }
    ],
    "gender": "male",
    "birthDate": "1963-07-01",
    "communication": [
      {
        "coding": [
          {
            "system": "urn:ietf:bcp:47",
            "code": "nl",
            "display": "Dutch"
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
    "resourceType": "Practitioner",
    "id": "f004",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f004\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 118265112 (OFFICIAL), 523ASA1LK927 (USUAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Ronald Briet (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 0205569273(WORK), r.briet@bmc.nl(WORK), fax: 0205664440(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Galapagosweg 91 Amsterdam 1105 AZ NLD (WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003egender\u003c/b\u003e: male\u003c/p\u003e\u003cp\u003e\u003cb\u003ebirthDate\u003c/b\u003e: 04/02/1980\u003c/p\u003e\u003cp\u003e\u003cb\u003ecommunication\u003c/b\u003e: Language \u003cspan\u003e(Details : {urn:ietf:bcp:47 code \u0027nl\u0027 \u003d \u0027Dutch\u0027, given as \u0027Netherlands\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "118265112"
      },
      {
        "use": "usual",
        "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
        "value": "523ASA1LK927"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "Briet",
        "given": [
          "Ronald"
        ],
        "suffix": [
          "MD"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "0205569273",
        "use": "work"
      },
      {
        "system": "email",
        "value": "r.briet@bmc.nl",
        "use": "work"
      },
      {
        "system": "fax",
        "value": "0205664440",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "Galapagosweg 91"
        ],
        "city": "Amsterdam",
        "postalCode": "1105 AZ",
        "country": "NLD"
      }
    ],
    "gender": "male",
    "birthDate": "1980-02-04",
    "communication": [
      {
        "coding": [
          {
            "system": "urn:ietf:bcp:47",
            "code": "nl",
            "display": "Netherlands"
          }
        ],
        "text": "Language"
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
    "resourceType": "Practitioner",
    "id": "f005",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f005\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 118265112 (OFFICIAL), 191REW8WE916 (USUAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Langeveld Anne (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 0205563847(WORK), a.langeveld@bmc.nl(WORK), fax: 0205668916(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Galapagosweg 9 Amsterdam 1105 AZ NLD (WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003egender\u003c/b\u003e: female\u003c/p\u003e\u003cp\u003e\u003cb\u003ebirthDate\u003c/b\u003e: 11/03/1959\u003c/p\u003e\u003cp\u003e\u003cb\u003ephoto\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003ecommunication\u003c/b\u003e: France \u003cspan\u003e(Details : {urn:ietf:bcp:47 code \u0027fr\u0027 \u003d \u0027French\u0027, given as \u0027France\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "118265112"
      },
      {
        "use": "usual",
        "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
        "value": "191REW8WE916"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "Anne",
        "given": [
          "Langeveld"
        ],
        "suffix": [
          "MD"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "0205563847",
        "use": "work"
      },
      {
        "system": "email",
        "value": "a.langeveld@bmc.nl",
        "use": "work"
      },
      {
        "system": "fax",
        "value": "0205668916",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "Galapagosweg 9"
        ],
        "city": "Amsterdam",
        "postalCode": "1105 AZ",
        "country": "NLD"
      }
    ],
    "gender": "female",
    "birthDate": "1959-03-11",
    "photo": [
      {
        "contentType": "image/jpeg",
        "data": "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"
      }
    ],
    "communication": [
      {
        "coding": [
          {
            "system": "urn:ietf:bcp:47",
            "code": "fr",
            "display": "France"
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
    "resourceType": "Practitioner",
    "id": "f006",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f006\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 937223645 (OFFICIAL), 134IDY41W988 (USUAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Rob van den Berk (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 0205569288(WORK), R.A.vandenberk@bmc.nl(WORK), fax: 0205664987(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003egender\u003c/b\u003e: male\u003c/p\u003e\u003cp\u003e\u003cb\u003ebirthDate\u003c/b\u003e: 07/12/1975\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "937223645"
      },
      {
        "use": "usual",
        "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
        "value": "134IDY41W988"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "van den Berk",
        "given": [
          "Rob"
        ],
        "suffix": [
          "MD"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "0205569288",
        "use": "work"
      },
      {
        "system": "email",
        "value": "R.A.vandenberk@bmc.nl",
        "use": "work"
      },
      {
        "system": "fax",
        "value": "0205664987",
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
      }
    ],
    "gender": "male",
    "birthDate": "1975-12-07",
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
    "resourceType": "Practitioner",
    "id": "f007",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f007\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 874635264 (OFFICIAL), 567IUI51C154 (USUAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Simone Heps (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: 020556936(WORK), S.M.Heps@bmc.nl(WORK), fax: 0205669283(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003egender\u003c/b\u003e: female\u003c/p\u003e\u003cp\u003e\u003cb\u003ebirthDate\u003c/b\u003e: 07/11/1971\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "874635264"
      },
      {
        "use": "usual",
        "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
        "value": "567IUI51C154"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "Heps",
        "given": [
          "Simone"
        ],
        "suffix": [
          "MD"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "020556936",
        "use": "work"
      },
      {
        "system": "email",
        "value": "S.M.Heps@bmc.nl",
        "use": "work"
      },
      {
        "system": "fax",
        "value": "0205669283",
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
      }
    ],
    "gender": "female",
    "birthDate": "1971-11-07",
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
    "resourceType": "Practitioner",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f201\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: UZI-nummer \u003d 12345678901 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003eactive\u003c/b\u003e: true\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Dokter Bronsig(OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: +31715269111(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Walvisbaai 3 C4 - Automatisering Den helder 2333ZA NLD (WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003egender\u003c/b\u003e: male\u003c/p\u003e\u003cp\u003e\u003cb\u003ebirthDate\u003c/b\u003e: 24/12/1956\u003c/p\u003e\u003ch3\u003eQualifications\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003ePulmonologist \u003cspan\u003e(Details : {SNOMED CT code \u002741672002\u0027 \u003d \u0027Respiratory disease specialist\u0027, given as \u0027Pulmonologist\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "text": "UZI-nummer"
        },
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "12345678901"
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "text": "Dokter Bronsig",
        "family": "Bronsig",
        "given": [
          "Arend"
        ],
        "prefix": [
          "Dr."
        ]
      }
    ],
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
          "Walvisbaai 3",
          "C4 - Automatisering"
        ],
        "city": "Den helder",
        "postalCode": "2333ZA",
        "country": "NLD"
      }
    ],
    "gender": "male",
    "birthDate": "1956-12-24",
    "qualification": [
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "41672002",
              "display": "Pulmonologist"
            }
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
    "resourceType": "Practitioner",
    "id": "f202",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f202\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: UZI-nummer \u003d 12345678902 (OFFICIAL), BIG-nummer \u003d 12345678902 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003eactive\u003c/b\u003e: true\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Luigi Maas(OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: +31715269111(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Walvisbaai 3 C4 - Automatisering Den helder 2333ZA NLD (WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003egender\u003c/b\u003e: male\u003c/p\u003e\u003cp\u003e\u003cb\u003ebirthDate\u003c/b\u003e: 12/06/1960\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "text": "UZI-nummer"
        },
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "12345678902"
      },
      {
        "use": "official",
        "type": {
          "text": "BIG-nummer"
        },
        "system": "https://www.bigregister.nl/",
        "value": "12345678902"
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "text": "Luigi Maas",
        "family": "Maas",
        "given": [
          "Luigi"
        ],
        "prefix": [
          "Dr."
        ]
      }
    ],
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
          "Walvisbaai 3",
          "C4 - Automatisering"
        ],
        "city": "Den helder",
        "postalCode": "2333ZA",
        "country": "NLD"
      }
    ],
    "gender": "male",
    "birthDate": "1960-06-12",
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
    "resourceType": "Practitioner",
    "id": "f203",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f203\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: UZI-nummer \u003d 12345678903 (OFFICIAL), BIG-nummer \u003d 12345678903 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003eactive\u003c/b\u003e: true\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Juri van Gelder(OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: +31715269111(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Walvisbaai 3 Den helder 2333ZA NLD (WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003egender\u003c/b\u003e: male\u003c/p\u003e\u003cp\u003e\u003cb\u003ebirthDate\u003c/b\u003e: 20/04/1983\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "text": "UZI-nummer"
        },
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "12345678903"
      },
      {
        "use": "official",
        "type": {
          "text": "BIG-nummer"
        },
        "system": "https://www.bigregister.nl/",
        "value": "12345678903"
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "text": "Juri van Gelder"
      }
    ],
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
        "city": "Den helder",
        "postalCode": "2333ZA",
        "country": "NLD"
      }
    ],
    "gender": "male",
    "birthDate": "1983-04-20",
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
    "resourceType": "Practitioner",
    "id": "f204",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f204\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: UZI-nummer \u003d 12345678904 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Carla Espinosa\u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: ph: +31715262169(WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddress\u003c/b\u003e: Walvisbaai 3 Den helder 2333ZA NLD (WORK)\u003c/p\u003e\u003cp\u003e\u003cb\u003egender\u003c/b\u003e: female\u003c/p\u003e\u003cp\u003e\u003cb\u003ebirthDate\u003c/b\u003e: 05/11/1967\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "text": "UZI-nummer"
        },
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "12345678904"
      }
    ],
    "name": [
      {
        "use": "usual",
        "text": "Carla Espinosa"
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "+31715262169",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "Walvisbaai 3"
        ],
        "city": "Den helder",
        "postalCode": "2333ZA",
        "country": "NLD"
      }
    ],
    "gender": "female",
    "birthDate": "1967-11-05",
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
    "resourceType": "Practitioner",
    "id": "xcda-author",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003eHarold Hippocrates, MD\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "name": [
      {
        "family": "Hippocrates",
        "given": [
          "Harold"
        ],
        "suffix": [
          "MD"
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
    "resourceType": "Practitioner",
    "id": "xcda1",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: xcda1\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: D234123 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: Sherry Dopplemeyer \u003c/p\u003e\u003cp\u003e\u003cb\u003etelecom\u003c/b\u003e: john.doe@healthcare.example.org\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://healthcare.example.org/identifiers/staff",
        "value": "D234123"
      }
    ],
    "name": [
      {
        "family": "Dopplemeyer",
        "given": [
          "Sherry"
        ]
      }
    ],
    "telecom": [
      {
        "system": "email",
        "value": "john.doe@healthcare.example.org"
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
    "resourceType": "Practitioner",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003eDr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar\n        2012\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "http://www.acme.org/practitioners",
        "value": "23"
      }
    ],
    "active": true,
    "name": [
      {
        "family": "Careful",
        "given": [
          "Adam"
        ],
        "prefix": [
          "Dr"
        ]
      }
    ],
    "address": [
      {
        "use": "home",
        "line": [
          "534 Erewhon St"
        ],
        "city": "PleasantVille",
        "state": "Vic",
        "postalCode": "3999"
      }
    ],
    "qualification": [
      {
        "identifier": [
          {
            "system": "http://example.org/UniversityIdentifier",
            "value": "12345"
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0360/2.7",
              "code": "BS",
              "display": "Bachelor of Science"
            }
          ],
          "text": "Bachelor of Science"
        },
        "period": {
          "start": "1995"
        },
        "issuer": {
          "display": "Example University"
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
    "fullUrl": "http://hl7.org/fhir/Practitioner/1",
    "resource": {
      "resourceType": "Practitioner",
      "id": "1",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eDr. Beverly Crusher\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "333333333"
        },
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "NPI"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-npi",
          "value": "1122334499"
        },
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DEA"
              }
            ]
          },
          "system": "https://www.deanumber.com/",
          "value": "F91234567-001AB"
        }
      ],
      "name": [
        {
          "family": "Beverly",
          "given": [
            "Crusher"
          ],
          "prefix": [
            "Dr"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/13",
    "resource": {
      "resourceType": "Practitioner",
      "id": "13",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eSeven, Henry. SSN:\n            333333333\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "333333333"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Seven",
          "given": [
            "Henry"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1002",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1002 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/14",
    "resource": {
      "resourceType": "Practitioner",
      "id": "14",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eAssigned, Amanda. SSN:\n            33344444\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "33344444"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Assigned",
          "given": [
            "Amanda"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1021",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1020 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/15",
    "resource": {
      "resourceType": "Practitioner",
      "id": "15",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eHippocrates, Harold. SSN:\n            444444444\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "444444444"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Hippocrates",
          "given": [
            "Harold"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1003",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1003 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/16",
    "resource": {
      "resourceType": "Practitioner",
      "id": "16",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003ePrimary, Patricia. SSN:\n            555555555\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "555555555"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Primary",
          "given": [
            "Patricia"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1004",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1004 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/17",
    "resource": {
      "resourceType": "Practitioner",
      "id": "17",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eAdmit, Alan. SSN:\n            666666666\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "666666666"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Admit",
          "given": [
            "Alan"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1005",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1005 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/18",
    "resource": {
      "resourceType": "Practitioner",
      "id": "18",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eAttend, Aaron. SSN:\n            777777777\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "777777777"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Attend",
          "given": [
            "Aaron"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1006",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1006 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/19",
    "resource": {
      "resourceType": "Practitioner",
      "id": "19",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eSender, Sam. SSN:\n            888888888\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "888888888"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Sender",
          "given": [
            "Sam"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1007",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1007 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/20",
    "resource": {
      "resourceType": "Practitioner",
      "id": "20",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eIntern, Irving. SSN:\n            888222222\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "888222222"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Intern",
          "given": [
            "Irving"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1022",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1021 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/21",
    "resource": {
      "resourceType": "Practitioner",
      "id": "21",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eResident, Rachel. SSN:\n            888333333\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "888333333"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Resident",
          "given": [
            "Rachel"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1023",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1022 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/22",
    "resource": {
      "resourceType": "Practitioner",
      "id": "22",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eLeader, Linda. SSN:\n            888444444\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "888444444"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Leader",
          "given": [
            "Linda"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1024",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1023 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/23",
    "resource": {
      "resourceType": "Practitioner",
      "id": "23",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eVerify, Virgil. SSN:\n            999999999\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "999999999"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Verify",
          "given": [
            "Virgil"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1008",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1008 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/24",
    "resource": {
      "resourceType": "Practitioner",
      "id": "24",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eSpecialize, Sara. SSN:\n            222333333\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222333333"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Specialize",
          "given": [
            "Sara"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1009",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1009 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/25",
    "resource": {
      "resourceType": "Practitioner",
      "id": "25",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eReaction, Ramsey. SSN:\n            222223333\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222223333"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Reaction",
          "given": [
            "Ramsey"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1025",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1024 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/26",
    "resource": {
      "resourceType": "Practitioner",
      "id": "26",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eSleeper, Sally. SSN:\n            222666666\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222666666"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Sleeper",
          "given": [
            "Sally"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1012",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1012 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/27",
    "resource": {
      "resourceType": "Practitioner",
      "id": "27",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003ePump, Patrick. SSN:\n            222334444\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222334444"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Pump",
          "given": [
            "Patrick"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1027",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1025 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/28",
    "resource": {
      "resourceType": "Practitioner",
      "id": "28",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eValve, Vera. SSN:\n            222335555\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222335555"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Valve",
          "given": [
            "Vera"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1028",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1026 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/29",
    "resource": {
      "resourceType": "Practitioner",
      "id": "29",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eScratch, Sophie. SSN:\n            222336666\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222336666"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Scratch",
          "given": [
            "Sophie"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1029",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1027 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/30",
    "resource": {
      "resourceType": "Practitioner",
      "id": "30",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eEmergency, Eric. SSN:\n            222337777\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222337777"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Emergency",
          "given": [
            "Eric"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1030",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1028 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/31",
    "resource": {
      "resourceType": "Practitioner",
      "id": "31",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eHormone, Horace. SSN:\n            222338888\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222338888"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Hormone",
          "given": [
            "Horace"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1031",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1029 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/32",
    "resource": {
      "resourceType": "Practitioner",
      "id": "32",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eFamily, Fay. SSN:\n            222339999\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222339999"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Family",
          "given": [
            "Fay"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1032",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1030 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/33",
    "resource": {
      "resourceType": "Practitioner",
      "id": "33",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eTum, Tony. SSN:\n            222442222\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222442222"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Tum",
          "given": [
            "Tony"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1033",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1031 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/34",
    "resource": {
      "resourceType": "Practitioner",
      "id": "34",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eSage, Stanley. SSN:\n            222443333\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222443333"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Sage",
          "given": [
            "Stanley"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1034",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1032 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/35",
    "resource": {
      "resourceType": "Practitioner",
      "id": "35",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eBleeder, Boris. SSN:\n            222443344\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222443344"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Bleeder",
          "given": [
            "Boris"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1035",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1033 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/36",
    "resource": {
      "resourceType": "Practitioner",
      "id": "36",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003ePasteur, Paula. SSN:\n            222445555\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222445555"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Pasteur",
          "given": [
            "Paula"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1036",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1034 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/37",
    "resource": {
      "resourceType": "Practitioner",
      "id": "37",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eOsler, Otto. SSN:\n            222446666\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222446666"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Osler",
          "given": [
            "Otto"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1037",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1035 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/38",
    "resource": {
      "resourceType": "Practitioner",
      "id": "38",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eRenal, Rory. SSN:\n            222447777\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222447777"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Renal",
          "given": [
            "Rory"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1038",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1036 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/39",
    "resource": {
      "resourceType": "Practitioner",
      "id": "39",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eBrain, Barry. SSN:\n            222448888\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222448888"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Brain",
          "given": [
            "Barry"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1039",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1037 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/40",
    "resource": {
      "resourceType": "Practitioner",
      "id": "40",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eCranium, Carol. SSN:\n            222449999\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222449999"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Cranium",
          "given": [
            "Carol"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1040",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1038 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/41",
    "resource": {
      "resourceType": "Practitioner",
      "id": "41",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eFem, Flora. SSN:\n            222552222\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222552222"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Fem",
          "given": [
            "Flora"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1041",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1039 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/42",
    "resource": {
      "resourceType": "Practitioner",
      "id": "42",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eTumor, Trudy. SSN:\n            222553333\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222553333"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Tumor",
          "given": [
            "Trudy"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-2003",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1040 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/43",
    "resource": {
      "resourceType": "Practitioner",
      "id": "43",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eVision, Victor. SSN:\n            222554444\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222554444"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Vision",
          "given": [
            "Victor"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1043",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1041 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/44",
    "resource": {
      "resourceType": "Practitioner",
      "id": "44",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eCarpenter, Calvin. SSN:\n            222555545\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222555545"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Carpenter",
          "given": [
            "Calvin"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1044",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1042 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/45",
    "resource": {
      "resourceType": "Practitioner",
      "id": "45",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eRhino, Rick. SSN:\n            222556666\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222556666"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Rhino",
          "given": [
            "Rick"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1045",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1043 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/46",
    "resource": {
      "resourceType": "Practitioner",
      "id": "46",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eSlide, Stan. SSN:\n            222444444\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222444444"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Slide",
          "given": [
            "Stan"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1010",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1010 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/47",
    "resource": {
      "resourceType": "Practitioner",
      "id": "47",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eKidder, Karen. SSN:\n            222557777\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222557777"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Kidder",
          "given": [
            "Karen"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1046",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1044 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/48",
    "resource": {
      "resourceType": "Practitioner",
      "id": "48",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eHollywood, Heddie. SSN:\n            222558888\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222558888"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Hollywood",
          "given": [
            "Heddie"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1047",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1045 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/49",
    "resource": {
      "resourceType": "Practitioner",
      "id": "49",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eShrink, Serena. SSN:\n            222559999\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222559999"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Shrink",
          "given": [
            "Serena"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1048",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1046 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/50",
    "resource": {
      "resourceType": "Practitioner",
      "id": "50",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003ePuffer, Penny. SSN:\n            222662222\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222662222"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Puffer",
          "given": [
            "Penny"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1049",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1047 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/51",
    "resource": {
      "resourceType": "Practitioner",
      "id": "51",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eCurie, Christine. SSN:\n            222555555\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222555555"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Curie",
          "given": [
            "Christine"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1011",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1011 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/52",
    "resource": {
      "resourceType": "Practitioner",
      "id": "52",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eJoint, Jeffrey. SSN:\n            222663333\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222663333"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Joint",
          "given": [
            "Jeffrey"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1050",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1048 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/53",
    "resource": {
      "resourceType": "Practitioner",
      "id": "53",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eCutter, Carl. SSN:\n            222777777\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222777777"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Cutter",
          "given": [
            "Carl"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1013",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1013 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/54",
    "resource": {
      "resourceType": "Practitioner",
      "id": "54",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003ePlumber, Peter. SSN:\n            222664444\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222664444"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Plumber",
          "given": [
            "Peter"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1051",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1049 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/55",
    "resource": {
      "resourceType": "Practitioner",
      "id": "55",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eHelper, Horace. SSN:\n            222665555\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222665555"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Helper",
          "given": [
            "Horace"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1052",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1050 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/56",
    "resource": {
      "resourceType": "Practitioner",
      "id": "56",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eNightingale, Nancy. SSN:\n            222888888\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222888888"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Nightingale",
          "given": [
            "Nancy"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1014",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1014 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/57",
    "resource": {
      "resourceType": "Practitioner",
      "id": "57",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eBarton, Clarence. SSN:\n            222999999\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222999999"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Barton",
          "given": [
            "Clarence"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1015",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1015 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/58",
    "resource": {
      "resourceType": "Practitioner",
      "id": "58",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eBender, Bob. SSN:\n            222666666\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222666666"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Bender",
          "given": [
            "Bob"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1053",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1051 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/59",
    "resource": {
      "resourceType": "Practitioner",
      "id": "59",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eChopper, Charlie. SSN:\n            222667777\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222667777"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Chopper",
          "given": [
            "Charlie"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1054",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1052 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/60",
    "resource": {
      "resourceType": "Practitioner",
      "id": "60",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eBrace, Ben. SSN:\n            222668888\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222668888"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Brace",
          "given": [
            "Ben"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1055",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1053 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/61",
    "resource": {
      "resourceType": "Practitioner",
      "id": "61",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eSpecs, Sylvia. SSN:\n            222669999\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222669999"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Specs",
          "given": [
            "Sylvia"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1056",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1054 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/62",
    "resource": {
      "resourceType": "Practitioner",
      "id": "62",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eScript, Susan. SSN:\n            333222222\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "333222222"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Script",
          "given": [
            "Susan"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1016",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1016 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/63",
    "resource": {
      "resourceType": "Practitioner",
      "id": "63",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eBunion, Paul. SSN:\n            222772222\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222772222"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Bunion",
          "given": [
            "Paul"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1057",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1055 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/64",
    "resource": {
      "resourceType": "Practitioner",
      "id": "64",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eListener, Larry. SSN:\n            222773333\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222773333"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Listener",
          "given": [
            "Larry"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1058",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1056 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/65",
    "resource": {
      "resourceType": "Practitioner",
      "id": "65",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eBeaker, Bill. SSN:\n            333444444\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "333444444"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Beaker",
          "given": [
            "Bill"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1017",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1017 Healthcare Drive"
          ]
        }
      ],
      "gender": "male"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/66",
    "resource": {
      "resourceType": "Practitioner",
      "id": "66",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eChow, Connie. SSN:\n            333555555\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "333555555"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Chow",
          "given": [
            "Connie"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1018",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1018 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/67",
    "resource": {
      "resourceType": "Practitioner",
      "id": "67",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eteHelper. SSN: 000111111\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "000111111"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Helper",
          "given": [
            "Helen"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1019",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1019 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  },
  {
    "fullUrl": "http://hl7.org/fhir/Practitioner/68",
    "resource": {
      "resourceType": "Practitioner",
      "id": "68",
      "meta": {
        "lastUpdated": "2012-05-29T23:45:32Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003ePlayer, Pamela. SSN:\n            222776666\u003c/div\u003e"
      },
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SS"
              }
            ]
          },
          "system": "http://hl7.org/fhir/sid/us-ssn",
          "value": "222776666"
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Player",
          "given": [
            "Pamela"
          ]
        }
      ],
      "telecom": [
        {
          "system": "phone",
          "value": "555-555-1059",
          "use": "work"
        }
      ],
      "address": [
        {
          "use": "home",
          "line": [
            "1057 Healthcare Drive"
          ]
        }
      ],
      "gender": "female"
    }
  }
];

export const practitionerBundle = bundleResource('Practitioner', resourceData);

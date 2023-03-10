import { bundleResource } from "./bundleResource";

const resourceData = [
  {
    "resourceType": "Immunization",
    "id": "historical",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: historical\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003evaccineCode\u003c/b\u003e: Influenza \u003cspan\u003e(Details : {urn:oid:1.2.36.1.2001.1005.17 code \u0027GNFLU\u0027 \u003d \u0027Influenza)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epatient\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eoccurrence\u003c/b\u003e: January 2012\u003c/p\u003e\u003cp\u003e\u003cb\u003eprimarySource\u003c/b\u003e: false\u003c/p\u003e\u003cp\u003e\u003cb\u003ereportOrigin\u003c/b\u003e: Written Record \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/immunization-origin code \u0027record\u0027 \u003d \u0027Written Record)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003elocation\u003c/b\u003e: \u003ca\u003eLocation/1\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: Notes on adminstration of a historical vaccine\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234"
      }
    ],
    "status": "completed",
    "vaccineCode": {
      "coding": [
        {
          "system": "urn:oid:1.2.36.1.2001.1005.17",
          "code": "GNFLU"
        }
      ],
      "text": "Influenza"
    },
    "patient": {
      "reference": "Patient/example"
    },
    "occurrenceString": "January 2012",
    "primarySource": false,
    "reportOrigin": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/immunization-origin",
          "code": "record"
        }
      ],
      "text": "Written Record"
    },
    "location": {
      "reference": "Location/1"
    },
    "note": [
      {
        "text": "Notes on adminstration of a historical vaccine"
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
    "resourceType": "Immunization",
    "id": "protocol",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: protocol\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003evaccineCode\u003c/b\u003e: Twinrix (HepA/HepB) \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/cvx code \u0027104\u0027 \u003d \u0027Hep A-Hep B)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epatient\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eoccurrence\u003c/b\u003e: 18/06/2018\u003c/p\u003e\u003cp\u003e\u003cb\u003eprimarySource\u003c/b\u003e: true\u003c/p\u003e\u003cp\u003e\u003cb\u003elocation\u003c/b\u003e: \u003ca\u003eLocation/1\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003emanufacturer\u003c/b\u003e: \u003ca\u003eOrganization/hl7\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003elotNumber\u003c/b\u003e: PT123F\u003c/p\u003e\u003cp\u003e\u003cb\u003eexpirationDate\u003c/b\u003e: 15/12/2018\u003c/p\u003e\u003cp\u003e\u003cb\u003esite\u003c/b\u003e: left arm \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActSite code \u0027LA\u0027 \u003d \u0027left arm\u0027, given as \u0027left arm\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eroute\u003c/b\u003e: Injection, intramuscular \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code \u0027IM\u0027 \u003d \u0027Injection, intramuscular\u0027, given as \u0027Injection, intramuscular\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edoseQuantity\u003c/b\u003e: 5 mg\u003cspan\u003e (Details: UCUM code mg \u003d \u0027mg\u0027)\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efunction\u003c/b\u003e: Ordering Provider \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code \u0027OP\u0027 \u003d \u0027Ordering Provider)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eactor\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efunction\u003c/b\u003e: Administering Provider \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code \u0027AP\u0027 \u003d \u0027Administering Provider)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eactor\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cp\u003e\u003cb\u003eisSubpotent\u003c/b\u003e: false\u003c/p\u003e\u003cp\u003e\u003cb\u003eprogramEligibility\u003c/b\u003e: Not Eligible \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/immunization-program-eligibility code \u0027ineligible\u0027 \u003d \u0027Not Eligible)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efundingSource\u003c/b\u003e: Private \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/immunization-funding-source code \u0027private\u0027 \u003d \u0027Private)\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eprotocolApplied\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eseries\u003c/b\u003e: 2-dose\u003c/p\u003e\u003cp\u003e\u003cb\u003etargetDisease\u003c/b\u003e: Viral hepatitis, type A \u003cspan\u003e(Details : {SNOMED CT code \u002740468003\u0027 \u003d \u0027Viral hepatitis, type A)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edoseNumber\u003c/b\u003e: 1\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eprotocolApplied\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eseries\u003c/b\u003e: 3-dose\u003c/p\u003e\u003cp\u003e\u003cb\u003etargetDisease\u003c/b\u003e: Type B viral hepatitis \u003cspan\u003e(Details : {SNOMED CT code \u002766071002\u0027 \u003d \u0027Type B viral hepatitis)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edoseNumber\u003c/b\u003e: 2\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234"
      }
    ],
    "status": "completed",
    "vaccineCode": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/cvx",
          "code": "104"
        }
      ],
      "text": "Twinrix (HepA/HepB)"
    },
    "patient": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "occurrenceDateTime": "2018-06-18",
    "primarySource": true,
    "location": {
      "reference": "Location/1"
    },
    "manufacturer": {
      "reference": "Organization/hl7"
    },
    "lotNumber": "PT123F",
    "expirationDate": "2018-12-15",
    "site": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
          "code": "LA",
          "display": "left arm"
        }
      ]
    },
    "route": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
          "code": "IM",
          "display": "Injection, intramuscular"
        }
      ]
    },
    "doseQuantity": {
      "value": 5,
      "system": "http://unitsofmeasure.org",
      "code": "mg"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
              "code": "OP"
            }
          ]
        },
        "actor": {
          "reference": "Practitioner/example"
        }
      },
      {
        "function": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
              "code": "AP"
            }
          ]
        },
        "actor": {
          "reference": "Practitioner/example"
        }
      }
    ],
    "isSubpotent": false,
    "programEligibility": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility",
            "code": "ineligible"
          }
        ]
      }
    ],
    "fundingSource": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
          "code": "private"
        }
      ]
    },
    "protocolApplied": [
      {
        "series": "2-dose",
        "targetDisease": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "40468003"
              }
            ]
          }
        ],
        "doseNumberPositiveInt": 1
      },
      {
        "series": "3-dose",
        "targetDisease": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "66071002"
              }
            ]
          }
        ],
        "doseNumberPositiveInt": 2
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
    "resourceType": "Immunization",
    "id": "notGiven",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: notGiven\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: not-done\u003c/p\u003e\u003cp\u003e\u003cb\u003estatusReason\u003c/b\u003e: medical precaution \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code \u0027MEDPREC\u0027 \u003d \u0027medical precaution\u0027, given as \u0027medical precaution\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evaccineCode\u003c/b\u003e: DTP \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/cvx code \u002701\u0027 \u003d \u0027DTP\u0027, given as \u0027DTP\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epatient\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eoccurrence\u003c/b\u003e: 10/01/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003eprimarySource\u003c/b\u003e: true\u003c/p\u003e\u003c/div\u003e"
    },
    "status": "not-done",
    "statusReason": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "MEDPREC",
          "display": "medical precaution"
        }
      ]
    },
    "vaccineCode": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/cvx",
          "code": "01",
          "display": "DTP"
        }
      ]
    },
    "patient": {
      "reference": "Patient/example"
    },
    "occurrenceDateTime": "2013-01-10",
    "primarySource": true,
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
    "resourceType": "Immunization",
    "id": "subpotent",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: subpotent\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003evaccineCode\u003c/b\u003e: Hepatitis B \u003cspan\u003e(Details : {urn:oid:1.2.36.1.2001.1005.17 code \u0027GNHEP\u0027 \u003d \u0027Hepatitis B)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epatient\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eoccurrence\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003eprimarySource\u003c/b\u003e: true\u003c/p\u003e\u003cp\u003e\u003cb\u003elocation\u003c/b\u003e: \u003ca\u003eLocation/1\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003emanufacturer\u003c/b\u003e: \u003ca\u003eOrganization/hl7\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003elotNumber\u003c/b\u003e: AAJN11K\u003c/p\u003e\u003cp\u003e\u003cb\u003eexpirationDate\u003c/b\u003e: 28/02/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003esite\u003c/b\u003e: left thigh \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActSite code \u0027LT\u0027 \u003d \u0027left thigh\u0027, given as \u0027left thigh\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eroute\u003c/b\u003e: Injection, intramuscular \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code \u0027IM\u0027 \u003d \u0027Injection, intramuscular\u0027, given as \u0027Injection, intramuscular\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edoseQuantity\u003c/b\u003e: 0.5 ml\u003cspan\u003e (Details: UCUM code ml \u003d \u0027ml\u0027)\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efunction\u003c/b\u003e: Ordering Provider \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code \u0027OP\u0027 \u003d \u0027Ordering Provider)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eactor\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efunction\u003c/b\u003e: Administering Provider \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code \u0027AP\u0027 \u003d \u0027Administering Provider)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eactor\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: Notes on adminstration of vaccine\u003c/p\u003e\u003cp\u003e\u003cb\u003eisSubpotent\u003c/b\u003e: false\u003c/p\u003e\u003cp\u003e\u003cb\u003esubpotentReason\u003c/b\u003e: Partial Dose \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason code \u0027partial\u0027 \u003d \u0027Partial Dose)\u003c/span\u003e\u003c/p\u003e\u003ch3\u003eEducations\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDocumentType\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePublicationDate\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePresentationDate\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e253088698300010311120702\u003c/td\u003e\u003ctd\u003e02/07/2012\u003c/td\u003e\u003ctd\u003e10/01/2013\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eprogramEligibility\u003c/b\u003e: Not Eligible \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/immunization-program-eligibility code \u0027ineligible\u0027 \u003d \u0027Not Eligible)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efundingSource\u003c/b\u003e: Private \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/immunization-funding-source code \u0027private\u0027 \u003d \u0027Private)\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234"
      }
    ],
    "status": "completed",
    "vaccineCode": {
      "coding": [
        {
          "system": "urn:oid:1.2.36.1.2001.1005.17",
          "code": "GNHEP"
        }
      ],
      "text": "Hepatitis B"
    },
    "patient": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "occurrenceDateTime": "2015-01-15",
    "primarySource": true,
    "location": {
      "reference": "Location/1"
    },
    "manufacturer": {
      "reference": "Organization/hl7"
    },
    "lotNumber": "AAJN11K",
    "expirationDate": "2015-02-28",
    "site": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
          "code": "LT",
          "display": "left thigh"
        }
      ]
    },
    "route": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
          "code": "IM",
          "display": "Injection, intramuscular"
        }
      ]
    },
    "doseQuantity": {
      "value": 0.5,
      "system": "http://unitsofmeasure.org",
      "code": "ml"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
              "code": "OP"
            }
          ]
        },
        "actor": {
          "reference": "Practitioner/example"
        }
      },
      {
        "function": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
              "code": "AP"
            }
          ]
        },
        "actor": {
          "reference": "Practitioner/example"
        }
      }
    ],
    "note": [
      {
        "text": "Notes on adminstration of vaccine"
      }
    ],
    "isSubpotent": false,
    "subpotentReason": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason",
            "code": "partial"
          }
        ]
      }
    ],
    "education": [
      {
        "documentType": "253088698300010311120702",
        "publicationDate": "2012-07-02",
        "presentationDate": "2013-01-10"
      }
    ],
    "programEligibility": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility",
            "code": "ineligible"
          }
        ]
      }
    ],
    "fundingSource": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
          "code": "private"
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
    "resourceType": "Immunization",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: example\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003evaccineCode\u003c/b\u003e: Fluvax (Influenza) \u003cspan\u003e(Details : {urn:oid:1.2.36.1.2001.1005.17 code \u0027FLUVAX\u0027 \u003d \u0027Fluvax)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epatient\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eoccurrence\u003c/b\u003e: 10/01/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003eprimarySource\u003c/b\u003e: true\u003c/p\u003e\u003cp\u003e\u003cb\u003elocation\u003c/b\u003e: \u003ca\u003eLocation/1\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003emanufacturer\u003c/b\u003e: \u003ca\u003eOrganization/hl7\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003elotNumber\u003c/b\u003e: AAJN11K\u003c/p\u003e\u003cp\u003e\u003cb\u003eexpirationDate\u003c/b\u003e: 15/02/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003esite\u003c/b\u003e: left arm \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActSite code \u0027LA\u0027 \u003d \u0027left arm\u0027, given as \u0027left arm\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eroute\u003c/b\u003e: Injection, intramuscular \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code \u0027IM\u0027 \u003d \u0027Injection, intramuscular\u0027, given as \u0027Injection, intramuscular\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edoseQuantity\u003c/b\u003e: 5 mg\u003cspan\u003e (Details: UCUM code mg \u003d \u0027mg\u0027)\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efunction\u003c/b\u003e: Ordering Provider \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code \u0027OP\u0027 \u003d \u0027Ordering Provider)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eactor\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efunction\u003c/b\u003e: Administering Provider \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code \u0027AP\u0027 \u003d \u0027Administering Provider)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eactor\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: Notes on adminstration of vaccine\u003c/p\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Procedure to meet occupational requirement \u003cspan\u003e(Details : {SNOMED CT code \u0027429060002\u0027 \u003d \u0027Procedure to meet occupational requirement)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eisSubpotent\u003c/b\u003e: true\u003c/p\u003e\u003ch3\u003eEducations\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDocumentType\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePublicationDate\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePresentationDate\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e253088698300010311120702\u003c/td\u003e\u003ctd\u003e02/07/2012\u003c/td\u003e\u003ctd\u003e10/01/2013\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eprogramEligibility\u003c/b\u003e: Not Eligible \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/immunization-program-eligibility code \u0027ineligible\u0027 \u003d \u0027Not Eligible)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efundingSource\u003c/b\u003e: Private \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/immunization-funding-source code \u0027private\u0027 \u003d \u0027Private)\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234"
      }
    ],
    "status": "completed",
    "vaccineCode": {
      "coding": [
        {
          "system": "urn:oid:1.2.36.1.2001.1005.17",
          "code": "FLUVAX"
        }
      ],
      "text": "Fluvax (Influenza)"
    },
    "patient": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "occurrenceDateTime": "2013-01-10",
    "primarySource": true,
    "location": {
      "reference": "Location/1"
    },
    "manufacturer": {
      "reference": "Organization/hl7"
    },
    "lotNumber": "AAJN11K",
    "expirationDate": "2015-02-15",
    "site": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
          "code": "LA",
          "display": "left arm"
        }
      ]
    },
    "route": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
          "code": "IM",
          "display": "Injection, intramuscular"
        }
      ]
    },
    "doseQuantity": {
      "value": 5,
      "system": "http://unitsofmeasure.org",
      "code": "mg"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
              "code": "OP"
            }
          ]
        },
        "actor": {
          "reference": "Practitioner/example"
        }
      },
      {
        "function": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
              "code": "AP"
            }
          ]
        },
        "actor": {
          "reference": "Practitioner/example"
        }
      }
    ],
    "note": [
      {
        "text": "Notes on adminstration of vaccine"
      }
    ],
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "429060002"
          }
        ]
      }
    ],
    "isSubpotent": true,
    "education": [
      {
        "documentType": "253088698300010311120702",
        "publicationDate": "2012-07-02",
        "presentationDate": "2013-01-10"
      }
    ],
    "programEligibility": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility",
            "code": "ineligible"
          }
        ]
      }
    ],
    "fundingSource": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
          "code": "private"
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
  }
];

export const immunizationBundle = bundleResource('Immunization', resourceData);

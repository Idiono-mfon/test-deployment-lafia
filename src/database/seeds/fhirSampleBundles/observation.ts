import { bundleResource } from "./bundleResource";

const resourceData = [
  {
    "resourceType": "Observation",
    "id": "decimal",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: decimal\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Decimal Testing Observation \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Component \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 1.0 g\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Component \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 1.00 g\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Component \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 1.0 g\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Component \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 1E-22 g\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Component \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 1000000000000000000 g\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Component \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 1.000000000000000000E-245 g\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Component \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: -1.000000000000000000E+245 g\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "status": "final",
    "code": {
      "text": "Decimal Testing Observation"
    },
    "component": [
      {
        "code": {
          "text": "Component"
        },
        "valueQuantity": {
          "value": 1.0,
          "unit": "g"
        }
      },
      {
        "code": {
          "text": "Component"
        },
        "valueQuantity": {
          "value": 1.00,
          "unit": "g"
        }
      },
      {
        "code": {
          "text": "Component"
        },
        "valueQuantity": {
          "value": 1.0,
          "unit": "g"
        }
      },
      {
        "code": {
          "text": "Component"
        },
        "valueQuantity": {
          "value": 1E-22,
          "unit": "g"
        }
      },
      {
        "code": {
          "text": "Component"
        },
        "valueQuantity": {
          "value": 1000000000000000000,
          "unit": "g"
        }
      },
      {
        "code": {
          "text": "Component"
        },
        "valueQuantity": {
          "value": 1.000000000000000000E-245,
          "unit": "g"
        }
      },
      {
        "code": {
          "text": "Component"
        },
        "valueQuantity": {
          "value": -1.000000000000000000E+245,
          "unit": "g"
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
    "resourceType": "Observation",
    "id": "1minute-apgar-score",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: 1minute-apgar-score\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Survey \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027survey\u0027 \u003d \u0027Survey\u0027, given as \u0027Survey\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: 1 minute Apgar Score \u003cspan\u003e(Details : {LOINC code \u00279272-6\u0027 \u003d \u00271 minute Apgar Score\u0027, given as \u00271 minute Apgar Score\u0027}; {SNOMED CT code \u0027169895004\u0027 \u003d \u0027Apgar at 1 minute\u0027, given as \u0027Apgar at 1 minute\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 18/05/2016 10:33:22 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 0 {score}\u003cspan\u003e (Details: UCUM code {score} \u003d \u0027{score}\u0027)\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar color score \u003cspan\u003e(Details : {LOINC code \u002732406-1\u0027 \u003d \u00271 minute Apgar Color\u0027, given as \u00271 minute Apgar Color\u0027}; {SNOMED CT code \u0027249227004\u0027 \u003d \u0027Apgar color score\u0027, given as \u0027Apgar color score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 0. The baby\u0027s whole body is completely bluish-gray or pale \u003cspan\u003e(Details : {LOINC code \u0027LA6722-8\u0027 \u003d \u0027The baby\u0027s whole body is completely bluish-gray or pale\u0027, given as \u0027The baby\u0027s whole body is completely bluish-gray or pale\u0027}; {http://acme.ped/apgarcolor code \u00270\u0027 \u003d \u00270)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar respiratory effort score \u003cspan\u003e(Details : {LOINC code \u002732407-9\u0027 \u003d \u00271 minute Apgar Heart rate\u0027, given as \u00271 minute Apgar Heart Rate\u0027}; {SNOMED CT code \u0027249223000\u0027 \u003d \u0027Apgar heart rate score\u0027, given as \u0027Apgar heart rate score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 0. No heart rate \u003cspan\u003e(Details : {LOINC code \u0027LA6716-0\u0027 \u003d \u0027No heart rate\u0027, given as \u0027No heart rate\u0027}; {http://acme.ped/apgarheartrate code \u00270\u0027 \u003d \u00270)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar response to stimulus score \u003cspan\u003e(Details : {LOINC code \u002732409-5\u0027 \u003d \u00271 minute Apgar Reflex irritability\u0027, given as \u00271 minute Apgar Reflex Irritability\u0027}; {SNOMED CT code \u0027249226008\u0027 \u003d \u0027Apgar response to stimulus score\u0027, given as \u0027Apgar response to stimulus score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 0. No response to airways being suctioned \u003cspan\u003e(Details : {LOINC code \u0027LA6719-4\u0027 \u003d \u0027No response to airways being suctioned\u0027, given as \u0027No response to airways being suctioned\u0027}; {http://acme.ped/apgarreflexirritability code \u00270\u0027 \u003d \u00270)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar muscle tone score \u003cspan\u003e(Details : {LOINC code \u002732408-7\u0027 \u003d \u00271 minute Apgar Muscle tone\u0027, given as \u00271 minute Apgar Muscle Tone\u0027}; {SNOMED CT code \u0027249225007\u0027 \u003d \u0027Apgar muscle tone score\u0027, given as \u0027Apgar muscle tone score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 0. Limp; no movement \u003cspan\u003e(Details : {LOINC code \u0027LA6713-7\u0027 \u003d \u0027Limp; no movement\u0027, given as \u0027Limp; no movement\u0027}; {http://acme.ped/apgarmuscletone code \u00270\u0027 \u003d \u00270)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar respiratory effort score \u003cspan\u003e(Details : {LOINC code \u002732410-3\u0027 \u003d \u00271 minute Apgar Respiratory effort\u0027, given as \u00271 minute Apgar Respiratory effort\u0027}; {SNOMED CT code \u0027249224006\u0027 \u003d \u0027Apgar respiratory effort score\u0027, given as \u0027Apgar respiratory effort score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 0. Not breathing \u003cspan\u003e(Details : {LOINC code \u0027LA6725-1\u0027 \u003d \u0027Not breathing\u0027, given as \u0027Not breathing\u0027}; {http://acme.ped/apgarrespiratoryeffort code \u00270\u0027 \u003d \u00270)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Patient",
        "id": "newborn",
        "identifier": [
          {
            "system": "http://acmehealthcare/org/mrns",
            "value": "12345"
          }
        ],
        "active": true,
        "name": [
          {
            "family": "Chalmers",
            "given": [
              "Peter",
              "James"
            ]
          }
        ],
        "gender": "male",
        "birthDate": "2016-05-18",
        "_birthDate": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
              "valueDateTime": "2016-05-18T10:28:45Z"
            }
          ]
        }
      }
    ],
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "survey",
            "display": "Survey"
          }
        ],
        "text": "Survey"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "9272-6",
          "display": "1 minute Apgar Score"
        },
        {
          "system": "http://snomed.info/sct",
          "code": "169895004",
          "display": "Apgar at 1 minute"
        }
      ],
      "text": "1 minute Apgar Score"
    },
    "subject": {
      "reference": "#newborn"
    },
    "effectiveDateTime": "2016-05-18T22:33:22Z",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "valueQuantity": {
      "value": 0,
      "system": "http://unitsofmeasure.org",
      "code": "{score}"
    },
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32406-1",
              "display": "1 minute Apgar Color"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249227004",
              "display": "Apgar color score"
            }
          ],
          "text": "Apgar color score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6722-8",
              "display": "The baby\u0027s whole body is completely bluish-gray or pale"
            },
            {
              "system": "http://acme.ped/apgarcolor",
              "code": "0"
            }
          ],
          "text": "0. The baby\u0027s whole body is completely bluish-gray or pale"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32407-9",
              "display": "1 minute Apgar Heart Rate"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249223000",
              "display": "Apgar heart rate score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6716-0",
              "display": "No heart rate"
            },
            {
              "system": "http://acme.ped/apgarheartrate",
              "code": "0"
            }
          ],
          "text": "0. No heart rate"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32409-5",
              "display": "1 minute Apgar Reflex Irritability"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249226008",
              "display": "Apgar response to stimulus score"
            }
          ],
          "text": "Apgar response to stimulus score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6719-4",
              "display": "No response to airways being suctioned"
            },
            {
              "system": "http://acme.ped/apgarreflexirritability",
              "code": "0"
            }
          ],
          "text": "0. No response to airways being suctioned"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32408-7",
              "display": "1 minute Apgar Muscle Tone"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249225007",
              "display": "Apgar muscle tone score"
            }
          ],
          "text": "Apgar muscle tone score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6713-7",
              "display": "Limp; no movement"
            },
            {
              "system": "http://acme.ped/apgarmuscletone",
              "code": "0"
            }
          ],
          "text": "0. Limp; no movement"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32410-3",
              "display": "1 minute Apgar Respiratory effort"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249224006",
              "display": "Apgar respiratory effort score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6725-1",
              "display": "Not breathing"
            },
            {
              "system": "http://acme.ped/apgarrespiratoryeffort",
              "code": "0"
            }
          ],
          "text": "0. Not breathing"
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
    "resourceType": "Observation",
    "id": "2minute-apgar-score",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: 2minute-apgar-score\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Survey \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027survey\u0027 \u003d \u0027Survey\u0027, given as \u0027Survey\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: 2 minute Apgar Score \u003cspan\u003e(Details : {LOINC code \u00279273-4\u0027 \u003d \u00272 minute Apgar Score\u0027, given as \u00272 minute Apgar Score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 18/05/2016 10:33:22 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 5 {score}\u003cspan\u003e (Details: UCUM code {score} \u003d \u0027{score}\u0027)\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar color score \u003cspan\u003e(Details : {SNOMED CT code \u0027249227004\u0027 \u003d \u0027Apgar color score\u0027, given as \u0027Apgar color score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 1. Good color in body with bluish hands or feet \u003cspan\u003e(Details : {LOINC code \u0027LA6723-6\u0027 \u003d \u0027Good color in body with bluish hands or feet\u0027, given as \u0027Good color in body with bluish hands or feet\u0027}; {http://acme.ped/apgarcolor code \u00271\u0027 \u003d \u00271)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar respiratory effort score \u003cspan\u003e(Details : {SNOMED CT code \u0027249223000\u0027 \u003d \u0027Apgar heart rate score\u0027, given as \u0027Apgar heart rate score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 1. Fewer than 100 beats per minute \u003cspan\u003e(Details : {LOINC code \u0027LA6720-2\u0027 \u003d \u0027Grimace during suctioning\u0027, given as \u0027Fewer than 100 beats per minute\u0027}; {http://acme.ped/apgarheartrate code \u00271\u0027 \u003d \u00271)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar response to stimulus score \u003cspan\u003e(Details : {SNOMED CT code \u0027249226008\u0027 \u003d \u0027Apgar response to stimulus score\u0027, given as \u0027Apgar response to stimulus score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 1. Grimace during suctioning \u003cspan\u003e(Details : {LOINC code \u0027LA6721-0\u0027 \u003d \u0027Grimace and pulling away, cough, or sneeze during suctioning\u0027, given as \u0027Grimace during suctioning\u0027}; {http://acme.ped/apgarreflexirritability code \u00271\u0027 \u003d \u00271)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar muscle tone score \u003cspan\u003e(Details : {SNOMED CT code \u0027249225007\u0027 \u003d \u0027Apgar muscle tone score\u0027, given as \u0027Apgar muscle tone score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 1. Some flexion of arms and legs \u003cspan\u003e(Details : {LOINC code \u0027LA6714-5\u0027 \u003d \u0027Some flexion of arms and legs\u0027, given as \u0027Some flexion of arms and legs\u0027}; {http://acme.ped/apgarmuscletone code \u00271\u0027 \u003d \u00271)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar respiratory effort score \u003cspan\u003e(Details : {SNOMED CT code \u0027249224006\u0027 \u003d \u0027Apgar respiratory effort score\u0027, given as \u0027Apgar respiratory effort score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 1. Weak cry; may sound like whimpering, slow or irregular breathing \u003cspan\u003e(Details : {LOINC code \u0027LA6726-9\u0027 \u003d \u0027Weak cry; may sound like whimpering, slow or irregular breathing\u0027, given as \u0027Weak cry; may sound like whimpering, slow or irregular breathing\u0027}; {http://acme.ped/apgarrespiratoryeffort code \u00271\u0027 \u003d \u00271)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Patient",
        "id": "newborn",
        "identifier": [
          {
            "system": "http://acmehealthcare/org/mrns",
            "value": "12345"
          }
        ],
        "active": true,
        "name": [
          {
            "family": "Chalmers",
            "given": [
              "Peter",
              "James"
            ]
          }
        ],
        "gender": "male",
        "birthDate": "2016-05-18",
        "_birthDate": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
              "valueDateTime": "2016-05-18T10:28:45Z"
            }
          ]
        }
      }
    ],
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "survey",
            "display": "Survey"
          }
        ],
        "text": "Survey"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "9273-4",
          "display": "2 minute Apgar Score"
        }
      ],
      "text": "2 minute Apgar Score"
    },
    "subject": {
      "reference": "#newborn"
    },
    "effectiveDateTime": "2016-05-18T22:33:22Z",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "valueQuantity": {
      "value": 5,
      "system": "http://unitsofmeasure.org",
      "code": "{score}"
    },
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249227004",
              "display": "Apgar color score"
            }
          ],
          "text": "Apgar color score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 1
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6723-6",
              "display": "Good color in body with bluish hands or feet"
            },
            {
              "system": "http://acme.ped/apgarcolor",
              "code": "1"
            }
          ],
          "text": "1. Good color in body with bluish hands or feet"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249223000",
              "display": "Apgar heart rate score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 1
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6720-2",
              "display": "Fewer than 100 beats per minute"
            },
            {
              "system": "http://acme.ped/apgarheartrate",
              "code": "1"
            }
          ],
          "text": "1. Fewer than 100 beats per minute"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249226008",
              "display": "Apgar response to stimulus score"
            }
          ],
          "text": "Apgar response to stimulus score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 1
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6721-0",
              "display": "Grimace during suctioning"
            },
            {
              "system": "http://acme.ped/apgarreflexirritability",
              "code": "1"
            }
          ],
          "text": "1. Grimace during suctioning"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249225007",
              "display": "Apgar muscle tone score"
            }
          ],
          "text": "Apgar muscle tone score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 1
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6714-5",
              "display": "Some flexion of arms and legs"
            },
            {
              "system": "http://acme.ped/apgarmuscletone",
              "code": "1"
            }
          ],
          "text": "1. Some flexion of arms and legs"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249224006",
              "display": "Apgar respiratory effort score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 1
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6726-9",
              "display": "Weak cry; may sound like whimpering, slow or irregular breathing"
            },
            {
              "system": "http://acme.ped/apgarrespiratoryeffort",
              "code": "1"
            }
          ],
          "text": "1. Weak cry; may sound like whimpering, slow or irregular breathing"
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
    "resourceType": "Observation",
    "id": "5minute-apgar-score",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: 5minute-apgar-score\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Survey \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027survey\u0027 \u003d \u0027Survey\u0027, given as \u0027Survey\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: 5 minute Apgar Score \u003cspan\u003e(Details : {LOINC code \u00279274-2\u0027 \u003d \u00275 minute Apgar Score\u0027, given as \u00275 minute Apgar Score\u0027}; {SNOMED CT code \u0027169909004\u0027 \u003d \u0027Apgar at 5 minutes\u0027, given as \u0027Apgar at 5 minutes\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 18/05/2016 10:33:22 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 10 {score}\u003cspan\u003e (Details: UCUM code {score} \u003d \u0027{score}\u0027)\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar color score \u003cspan\u003e(Details : {LOINC code \u002732411-1\u0027 \u003d \u00275 minute Apgar Color\u0027, given as \u00275 minute Apgar Color\u0027}; {SNOMED CT code \u0027249227004\u0027 \u003d \u0027Apgar color score\u0027, given as \u0027Apgar color score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Good color all over \u003cspan\u003e(Details : {LOINC code \u0027LA6724-4\u0027 \u003d \u0027Good color all over\u0027, given as \u0027Good color all over\u0027}; {http://acme.ped/apgarcolor code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar respiratory effort score \u003cspan\u003e(Details : {LOINC code \u002732412-9\u0027 \u003d \u00275 minute Apgar Heart rate\u0027, given as \u00275 minute Apgar Heart Rate\u0027}; {SNOMED CT code \u0027249223000\u0027 \u003d \u0027Apgar heart rate score\u0027, given as \u0027Apgar heart rate score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. At least 100 beats per minute \u003cspan\u003e(Details : {LOINC code \u0027LA6718-6\u0027 \u003d \u0027At least 100 beats per minute\u0027, given as \u0027At least 100 beats per minute\u0027}; {http://acme.ped/apgarheartrate code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar response to stimulus score \u003cspan\u003e(Details : {LOINC code \u002732414-5\u0027 \u003d \u00275 minute Apgar Reflex irritability\u0027, given as \u00275 minute Apgar Reflex Irritability\u0027}; {SNOMED CT code \u0027249226008\u0027 \u003d \u0027Apgar response to stimulus score\u0027, given as \u0027Apgar response to stimulus score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Grimace and pulling away, cough, or sneeze during suctioning \u003cspan\u003e(Details : {LOINC code \u0027LA6721-0\u0027 \u003d \u0027Grimace and pulling away, cough, or sneeze during suctioning\u0027, given as \u0027Grimace and pulling away, cough, or sneeze during suctioning\u0027}; {http://acme.ped/apgarreflexirritability code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar muscle tone score \u003cspan\u003e(Details : {LOINC code \u002732413-7\u0027 \u003d \u00275 minute Apgar Muscle tone\u0027, given as \u00275 minute Apgar Muscle Tone\u0027}; {SNOMED CT code \u0027249225007\u0027 \u003d \u0027Apgar muscle tone score\u0027, given as \u0027Apgar muscle tone score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Active motion \u003cspan\u003e(Details : {LOINC code \u0027LA6715-2\u0027 \u003d \u0027Active motion\u0027, given as \u0027Active motion \u0027}; {http://acme.ped/apgarmuscletone code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar respiratory effort score \u003cspan\u003e(Details : {LOINC code \u002732415-2\u0027 \u003d \u00275 minute Apgar Respiratory effort\u0027, given as \u00275 minute Apgar Respiratory effort\u0027}; {SNOMED CT code \u0027249224006\u0027 \u003d \u0027Apgar respiratory effort score\u0027, given as \u0027Apgar respiratory effort score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Good, strong cry; normal rate and effort of breathing \u003cspan\u003e(Details : {LOINC code \u0027LA6727-7\u0027 \u003d \u0027Good, strong cry; normal rate and effort of breathing\u0027, given as \u0027Good, strong cry; normal rate and effort of breathing    \u0027}; {http://acme.ped/apgarrespiratoryeffort code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Patient",
        "id": "newborn",
        "identifier": [
          {
            "system": "http://acmehealthcare/org/mrns",
            "value": "12345"
          }
        ],
        "active": true,
        "name": [
          {
            "family": "Chalmers",
            "given": [
              "Peter",
              "James"
            ]
          }
        ],
        "gender": "male",
        "birthDate": "2016-05-18",
        "_birthDate": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
              "valueDateTime": "2016-05-18T10:28:45Z"
            }
          ]
        }
      }
    ],
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "survey",
            "display": "Survey"
          }
        ],
        "text": "Survey"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "9274-2",
          "display": "5 minute Apgar Score"
        },
        {
          "system": "http://snomed.info/sct",
          "code": "169909004",
          "display": "Apgar at 5 minutes"
        }
      ],
      "text": "5 minute Apgar Score"
    },
    "subject": {
      "reference": "#newborn"
    },
    "effectiveDateTime": "2016-05-18T22:33:22Z",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "valueQuantity": {
      "value": 10,
      "system": "http://unitsofmeasure.org",
      "code": "{score}"
    },
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32411-1",
              "display": "5 minute Apgar Color"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249227004",
              "display": "Apgar color score"
            }
          ],
          "text": "Apgar color score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6724-4",
              "display": "Good color all over"
            },
            {
              "system": "http://acme.ped/apgarcolor",
              "code": "2"
            }
          ],
          "text": "2. Good color all over"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32412-9",
              "display": "5 minute Apgar Heart Rate"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249223000",
              "display": "Apgar heart rate score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6718-6",
              "display": "At least 100 beats per minute"
            },
            {
              "system": "http://acme.ped/apgarheartrate",
              "code": "2"
            }
          ],
          "text": "2. At least 100 beats per minute"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32414-5",
              "display": "5 minute Apgar Reflex Irritability"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249226008",
              "display": "Apgar response to stimulus score"
            }
          ],
          "text": "Apgar response to stimulus score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6721-0",
              "display": "Grimace and pulling away, cough, or sneeze during suctioning"
            },
            {
              "system": "http://acme.ped/apgarreflexirritability",
              "code": "2"
            }
          ],
          "text": "2. Grimace and pulling away, cough, or sneeze during suctioning"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32413-7",
              "display": "5 minute Apgar Muscle Tone"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249225007",
              "display": "Apgar muscle tone score"
            }
          ],
          "text": "Apgar muscle tone score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6715-2",
              "display": "Active motion "
            },
            {
              "system": "http://acme.ped/apgarmuscletone",
              "code": "2"
            }
          ],
          "text": "2. Active motion"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32415-2",
              "display": "5 minute Apgar Respiratory effort"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249224006",
              "display": "Apgar respiratory effort score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6727-7",
              "display": "Good, strong cry; normal rate and effort of breathing    "
            },
            {
              "system": "http://acme.ped/apgarrespiratoryeffort",
              "code": "2"
            }
          ],
          "text": "2. Good, strong cry; normal rate and effort of breathing"
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
    "resourceType": "Observation",
    "id": "10minute-apgar-score",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: 10minute-apgar-score\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Survey \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027survey\u0027 \u003d \u0027Survey\u0027, given as \u0027Survey\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: 10 minute Apgar Score \u003cspan\u003e(Details : {LOINC code \u00279271-8\u0027 \u003d \u002710 minute Apgar Score\u0027, given as \u002710 minute Apgar Score\u0027}; {SNOMED CT code \u0027169922007\u0027 \u003d \u0027Apgar at 10 minutes\u0027, given as \u0027Apgar at 10 minutes\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 18/05/2016 10:33:22 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 10 {score}\u003cspan\u003e (Details: UCUM code {score} \u003d \u0027{score}\u0027)\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar color score \u003cspan\u003e(Details : {LOINC code \u002732401-2\u0027 \u003d \u002710 minute Apgar Color\u0027, given as \u002710 minute Apgar Color\u0027}; {SNOMED CT code \u0027249227004\u0027 \u003d \u0027Apgar color score\u0027, given as \u0027Apgar color score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Good color all over \u003cspan\u003e(Details : {LOINC code \u0027LA6724-4\u0027 \u003d \u0027Good color all over\u0027, given as \u0027Good color all over\u0027}; {http://acme.ped/apgarcolor code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar respiratory effort score \u003cspan\u003e(Details : {LOINC code \u002732402-0\u0027 \u003d \u002710 minute Apgar Heart rate\u0027, given as \u002710 minute Apgar Heart Rate\u0027}; {SNOMED CT code \u0027249223000\u0027 \u003d \u0027Apgar heart rate score\u0027, given as \u0027Apgar heart rate score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. At least 100 beats per minute \u003cspan\u003e(Details : {LOINC code \u0027LA6718-6\u0027 \u003d \u0027At least 100 beats per minute\u0027, given as \u0027At least 100 beats per minute\u0027}; {http://acme.ped/apgarheartrate code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar response to stimulus score \u003cspan\u003e(Details : {LOINC code \u002732404-6\u0027 \u003d \u002710 minute Apgar Reflex irritability\u0027, given as \u002710 minute Apgar Reflex Irritability\u0027}; {SNOMED CT code \u0027249226008\u0027 \u003d \u0027Apgar response to stimulus score\u0027, given as \u0027Apgar response to stimulus score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Grimace and pulling away, cough, or sneeze during suctioning \u003cspan\u003e(Details : {LOINC code \u0027LA6721-0\u0027 \u003d \u0027Grimace and pulling away, cough, or sneeze during suctioning\u0027, given as \u0027Grimace and pulling away, cough, or sneeze during suctioning\u0027}; {http://acme.ped/apgarreflexirritability code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar muscle tone score \u003cspan\u003e(Details : {LOINC code \u002732403-8\u0027 \u003d \u002710 minute Apgar Muscle tone\u0027, given as \u002710 minute Apgar Muscle Tone\u0027}; {SNOMED CT code \u0027249225007\u0027 \u003d \u0027Apgar muscle tone score\u0027, given as \u0027Apgar muscle tone score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Active motion \u003cspan\u003e(Details : {LOINC code \u0027LA6715-2\u0027 \u003d \u0027Active motion\u0027, given as \u0027Active motion \u0027}; {http://acme.ped/apgarmuscletone code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar respiratory effort score \u003cspan\u003e(Details : {LOINC code \u002732405-3\u0027 \u003d \u002710 minute Apgar Respiratory effort\u0027, given as \u002710 minute Apgar Respiratory effort\u0027}; {SNOMED CT code \u0027249224006\u0027 \u003d \u0027Apgar respiratory effort score\u0027, given as \u0027Apgar respiratory effort score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Good, strong cry; normal rate and effort of breathing \u003cspan\u003e(Details : {LOINC code \u0027LA6727-7\u0027 \u003d \u0027Good, strong cry; normal rate and effort of breathing\u0027, given as \u0027Good, strong cry; normal rate and effort of breathing    \u0027}; {http://acme.ped/apgarrespiratoryeffort code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Patient",
        "id": "newborn",
        "identifier": [
          {
            "system": "http://acmehealthcare/org/mrns",
            "value": "12345"
          }
        ],
        "active": true,
        "name": [
          {
            "family": "Chalmers",
            "given": [
              "Peter",
              "James"
            ]
          }
        ],
        "gender": "male",
        "birthDate": "2016-05-18",
        "_birthDate": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
              "valueDateTime": "2016-05-18T10:28:45Z"
            }
          ]
        }
      }
    ],
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "survey",
            "display": "Survey"
          }
        ],
        "text": "Survey"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "9271-8",
          "display": "10 minute Apgar Score"
        },
        {
          "system": "http://snomed.info/sct",
          "code": "169922007",
          "display": "Apgar at 10 minutes"
        }
      ],
      "text": "10 minute Apgar Score"
    },
    "subject": {
      "reference": "#newborn"
    },
    "effectiveDateTime": "2016-05-18T22:33:22Z",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "valueQuantity": {
      "value": 10,
      "system": "http://unitsofmeasure.org",
      "code": "{score}"
    },
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32401-2",
              "display": "10 minute Apgar Color"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249227004",
              "display": "Apgar color score"
            }
          ],
          "text": "Apgar color score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6724-4",
              "display": "Good color all over"
            },
            {
              "system": "http://acme.ped/apgarcolor",
              "code": "2"
            }
          ],
          "text": "2. Good color all over"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32402-0",
              "display": "10 minute Apgar Heart Rate"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249223000",
              "display": "Apgar heart rate score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6718-6",
              "display": "At least 100 beats per minute"
            },
            {
              "system": "http://acme.ped/apgarheartrate",
              "code": "2"
            }
          ],
          "text": "2. At least 100 beats per minute"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32404-6",
              "display": "10 minute Apgar Reflex Irritability"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249226008",
              "display": "Apgar response to stimulus score"
            }
          ],
          "text": "Apgar response to stimulus score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6721-0",
              "display": "Grimace and pulling away, cough, or sneeze during suctioning"
            },
            {
              "system": "http://acme.ped/apgarreflexirritability",
              "code": "2"
            }
          ],
          "text": "2. Grimace and pulling away, cough, or sneeze during suctioning"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32403-8",
              "display": "10 minute Apgar Muscle Tone"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249225007",
              "display": "Apgar muscle tone score"
            }
          ],
          "text": "Apgar muscle tone score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6715-2",
              "display": "Active motion "
            },
            {
              "system": "http://acme.ped/apgarmuscletone",
              "code": "2"
            }
          ],
          "text": "2. Active motion"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32405-3",
              "display": "10 minute Apgar Respiratory effort"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249224006",
              "display": "Apgar respiratory effort score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6727-7",
              "display": "Good, strong cry; normal rate and effort of breathing    "
            },
            {
              "system": "http://acme.ped/apgarrespiratoryeffort",
              "code": "2"
            }
          ],
          "text": "2. Good, strong cry; normal rate and effort of breathing"
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
    "resourceType": "Observation",
    "id": "20minute-apgar-score",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: 20minute-apgar-score\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Survey \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027survey\u0027 \u003d \u0027Survey\u0027, given as \u0027Survey\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: 20 minute Apgar Score \u003cspan\u003e(Details : {SNOMED CT code \u0027443849008\u0027 \u003d \u0027Apgar score at 20 minutes\u0027, given as \u0027Apgar score at 20 minutes\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 18/05/2016 10:33:22 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 10 {score}\u003cspan\u003e (Details: UCUM code {score} \u003d \u0027{score}\u0027)\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar color score \u003cspan\u003e(Details : {SNOMED CT code \u0027249227004\u0027 \u003d \u0027Apgar color score\u0027, given as \u0027Apgar color score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Good color all over \u003cspan\u003e(Details : {LOINC code \u0027LA6724-4\u0027 \u003d \u0027Good color all over\u0027, given as \u0027Good color all over\u0027}; {http://acme.ped/apgarcolor code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar respiratory effort score \u003cspan\u003e(Details : {SNOMED CT code \u0027249223000\u0027 \u003d \u0027Apgar heart rate score\u0027, given as \u0027Apgar heart rate score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. At least 100 beats per minute \u003cspan\u003e(Details : {LOINC code \u0027LA6718-6\u0027 \u003d \u0027At least 100 beats per minute\u0027, given as \u0027At least 100 beats per minute\u0027}; {http://acme.ped/apgarheartrate code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar response to stimulus score \u003cspan\u003e(Details : {SNOMED CT code \u0027249226008\u0027 \u003d \u0027Apgar response to stimulus score\u0027, given as \u0027Apgar response to stimulus score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Grimace and pulling away, cough, or sneeze during suctioning \u003cspan\u003e(Details : {LOINC code \u0027LA6721-0\u0027 \u003d \u0027Grimace and pulling away, cough, or sneeze during suctioning\u0027, given as \u0027Grimace and pulling away, cough, or sneeze during suctioning\u0027}; {http://acme.ped/apgarreflexirritability code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar muscle tone score \u003cspan\u003e(Details : {SNOMED CT code \u0027249225007\u0027 \u003d \u0027Apgar muscle tone score\u0027, given as \u0027Apgar muscle tone score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Active motion \u003cspan\u003e(Details : {LOINC code \u0027LA6715-2\u0027 \u003d \u0027Active motion\u0027, given as \u0027Active motion \u0027}; {http://acme.ped/apgarmuscletone code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Apgar respiratory effort score \u003cspan\u003e(Details : {SNOMED CT code \u0027249224006\u0027 \u003d \u0027Apgar respiratory effort score\u0027, given as \u0027Apgar respiratory effort score\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 2. Good, strong cry; normal rate and effort of breathing \u003cspan\u003e(Details : {LOINC code \u0027LA6727-7\u0027 \u003d \u0027Good, strong cry; normal rate and effort of breathing\u0027, given as \u0027Good, strong cry; normal rate and effort of breathing    \u0027}; {http://acme.ped/apgarrespiratoryeffort code \u00272\u0027 \u003d \u00272)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Patient",
        "id": "newborn",
        "identifier": [
          {
            "system": "http://acmehealthcare/org/mrns",
            "value": "12345"
          }
        ],
        "active": true,
        "name": [
          {
            "family": "Chalmers",
            "given": [
              "Peter",
              "James"
            ]
          }
        ],
        "gender": "male",
        "birthDate": "2016-05-18",
        "_birthDate": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
              "valueDateTime": "2016-05-18T10:28:45Z"
            }
          ]
        }
      }
    ],
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "survey",
            "display": "Survey"
          }
        ],
        "text": "Survey"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "443849008",
          "display": "Apgar score at 20 minutes"
        }
      ],
      "text": "20 minute Apgar Score"
    },
    "subject": {
      "reference": "#newborn"
    },
    "effectiveDateTime": "2016-05-18T22:33:22Z",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "valueQuantity": {
      "value": 10,
      "system": "http://unitsofmeasure.org",
      "code": "{score}"
    },
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249227004",
              "display": "Apgar color score"
            }
          ],
          "text": "Apgar color score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6724-4",
              "display": "Good color all over"
            },
            {
              "system": "http://acme.ped/apgarcolor",
              "code": "2"
            }
          ],
          "text": "2. Good color all over"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249223000",
              "display": "Apgar heart rate score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6718-6",
              "display": "At least 100 beats per minute"
            },
            {
              "system": "http://acme.ped/apgarheartrate",
              "code": "2"
            }
          ],
          "text": "2. At least 100 beats per minute"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249226008",
              "display": "Apgar response to stimulus score"
            }
          ],
          "text": "Apgar response to stimulus score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6721-0",
              "display": "Grimace and pulling away, cough, or sneeze during suctioning"
            },
            {
              "system": "http://acme.ped/apgarreflexirritability",
              "code": "2"
            }
          ],
          "text": "2. Grimace and pulling away, cough, or sneeze during suctioning"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249225007",
              "display": "Apgar muscle tone score"
            }
          ],
          "text": "Apgar muscle tone score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6715-2",
              "display": "Active motion "
            },
            {
              "system": "http://acme.ped/apgarmuscletone",
              "code": "2"
            }
          ],
          "text": "2. Active motion"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249224006",
              "display": "Apgar respiratory effort score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6727-7",
              "display": "Good, strong cry; normal rate and effort of breathing    "
            },
            {
              "system": "http://acme.ped/apgarrespiratoryeffort",
              "code": "2"
            }
          ],
          "text": "2. Good, strong cry; normal rate and effort of breathing"
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
    "resourceType": "Observation",
    "id": "abdo-tender",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: abdo-tender\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Exam \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027exam\u0027 \u003d \u0027Exam\u0027, given as \u0027Exam\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Abdominal tenderness \u003cspan\u003e(Details : {SNOMED CT code \u002743478001\u0027 \u003d \u0027Abdominal tenderness\u0027, given as \u0027Abdominal tenderness (finding)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 02/04/2018 10:30:10 AM --\u0026gt; (ongoing)\u003c/p\u003e\u003cp\u003e\u003cb\u003eissued\u003c/b\u003e: 03/04/2018 3:30:10 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: true\u003c/p\u003e\u003cp\u003e\u003cb\u003einterpretation\u003c/b\u003e: Abnormal \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code \u0027A\u0027 \u003d \u0027Abnormal\u0027, given as \u0027Abnormal\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "exam",
            "display": "Exam"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "43478001",
          "display": "Abdominal tenderness (finding)"
        }
      ],
      "text": "Abdominal tenderness"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "effectivePeriod": {
      "start": "2018-04-02T10:30:10+01:00"
    },
    "issued": "2018-04-03T15:30:10+01:00",
    "valueBoolean": true,
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "A",
            "display": "Abnormal"
          }
        ],
        "text": "Abnormal"
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
    "resourceType": "Observation",
    "id": "alcohol-type",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: alcohol-type\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Social History \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027social-history\u0027 \u003d \u0027Social History\u0027, given as \u0027Social History\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Type of alcohol consumed \u003cspan\u003e(Details : {http://acme-rehab.org code \u0027alcohol-type\u0027 \u003d \u0027alcohol-type\u0027, given as \u0027Type of alcohol consumed\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePeter James Chalmers\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 11/12/2014 4:44:16 AM\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: alcohol-type \u003cspan\u003e(Details : {http://acme-rehab.org code \u0027alcohol-type\u0027 \u003d \u0027alcohol-type)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: Wine \u003cspan\u003e(Details : {SNOMED CT code \u002735748005\u0027 \u003d \u0027Wine\u0027, given as \u0027Wine (substance)\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: alcohol-type \u003cspan\u003e(Details : {http://acme-rehab.org code \u0027alcohol-type\u0027 \u003d \u0027alcohol-type)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: Beer \u003cspan\u003e(Details : {SNOMED CT code \u002753410008\u0027 \u003d \u0027Beer\u0027, given as \u0027Beer (substance)\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: alcohol-type \u003cspan\u003e(Details : {http://acme-rehab.org code \u0027alcohol-type\u0027 \u003d \u0027alcohol-type)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: Liquor \u003cspan\u003e(Details : {SNOMED CT code \u00276524003\u0027 \u003d \u0027Distilled spirits\u0027, given as \u0027 Distilled spirits (substance)\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "social-history",
            "display": "Social History"
          }
        ],
        "text": "Social History"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://acme-rehab.org",
          "code": "alcohol-type",
          "display": "Type of alcohol consumed"
        }
      ],
      "text": "Type of alcohol consumed"
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "effectiveDateTime": "2014-12-11T04:44:16Z",
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://acme-rehab.org",
              "code": "alcohol-type"
            }
          ]
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "35748005",
              "display": "Wine (substance)"
            }
          ],
          "text": "Wine"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://acme-rehab.org",
              "code": "alcohol-type"
            }
          ]
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "53410008",
              "display": "Beer (substance)"
            }
          ],
          "text": "Beer"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://acme-rehab.org",
              "code": "alcohol-type"
            }
          ]
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "6524003",
              "display": " Distilled spirits (substance)"
            }
          ],
          "text": "Liquor"
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
    "resourceType": "Observation",
    "id": "bgpanel",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: bgpanel\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Laboratory \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027laboratory\u0027 \u003d \u0027Laboratory\u0027, given as \u0027Laboratory\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Blood Group Panel \u003cspan\u003e(Details : {LOINC code \u002734532-2\u0027 \u003d \u0027Blood type and Indirect antibody screen panel - Blood\u0027, given as \u0027 Blood type and Indirect antibody screen panel - Blood\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePatient/infant\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 11/03/2018 4:07:54 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003ehasMember\u003c/b\u003e: \u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003ca\u003eObservation/bloodgroup\u003c/a\u003e\u003c/li\u003e\u003cli\u003e\u003ca\u003eObservation/rhstatus\u003c/a\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e"
    },
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "laboratory",
            "display": "Laboratory"
          }
        ],
        "text": "Laboratory"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "34532-2",
          "display": " Blood type and Indirect antibody screen panel - Blood"
        }
      ],
      "text": "Blood Group Panel"
    },
    "subject": {
      "reference": "Patient/infant"
    },
    "effectiveDateTime": "2018-03-11T16:07:54+00:00",
    "hasMember": [
      {
        "reference": "Observation/bloodgroup"
      },
      {
        "reference": "Observation/rhstatus"
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
    "resourceType": "Observation",
    "id": "bloodgroup",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: bloodgroup\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Laboratory \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027laboratory\u0027 \u003d \u0027Laboratory\u0027, given as \u0027Laboratory\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Blood Group \u003cspan\u003e(Details : {LOINC code \u0027883-9\u0027 \u003d \u0027ABO group [Type] in Blood\u0027, given as \u0027ABO group [Type] in Blood\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePatient/infant\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 11/03/2018 4:07:54 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: A \u003cspan\u003e(Details : {SNOMED CT code \u0027112144000\u0027 \u003d \u0027Blood group A\u0027, given as \u0027Blood group A (finding)\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "laboratory",
            "display": "Laboratory"
          }
        ],
        "text": "Laboratory"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "883-9",
          "display": "ABO group [Type] in Blood"
        }
      ],
      "text": "Blood Group"
    },
    "subject": {
      "reference": "Patient/infant"
    },
    "effectiveDateTime": "2018-03-11T16:07:54+00:00",
    "valueCodeableConcept": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "112144000",
          "display": "Blood group A (finding)"
        }
      ],
      "text": "A"
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
    "resourceType": "Observation",
    "id": "blood-pressure-cancel",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
      ],
      "tag": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "HTEST",
          "display": "test health data"
        }
      ]
    },
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: blood-pressure-cancel\u003c/p\u003e\u003cp\u003e\u003cb\u003emeta\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: cancelled\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Vital Signs \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027vital-signs\u0027 \u003d \u0027Vital Signs\u0027, given as \u0027Vital Signs\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Blood pressure systolic \u0026amp; diastolic \u003cspan\u003e(Details : {LOINC code \u002785354-9\u0027 \u003d \u0027Blood pressure panel with all children optional\u0027, given as \u0027Blood pressure panel with all children optional\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 17/09/2012\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003einterpretation\u003c/b\u003e: Below low normal \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code \u0027L\u0027 \u003d \u0027Low\u0027, given as \u0027low\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: In this example, the blood pressure measurements are not available due to cancellation of the order.  Data absent reason is present for each component\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Right arm \u003cspan\u003e(Details : {SNOMED CT code \u0027368209003\u0027 \u003d \u0027Right upper arm\u0027, given as \u0027Right arm\u0027})\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Systolic blood pressure \u003cspan\u003e(Details : {LOINC code \u00278480-6\u0027 \u003d \u0027Systolic blood pressure\u0027, given as \u0027Systolic blood pressure\u0027}; {SNOMED CT code \u0027271649006\u0027 \u003d \u0027Systolic blood pressure\u0027, given as \u0027Systolic blood pressure\u0027}; {http://acme.org/devices/clinical-codes code \u0027bp-s\u0027 \u003d \u0027bp-s\u0027, given as \u0027Systolic Blood pressure\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edataAbsentReason\u003c/b\u003e: Not Asked \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/data-absent-reason code \u0027not-asked\u0027 \u003d \u0027Not Asked\u0027, given as \u0027Not Asked\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Diastolic blood pressure \u003cspan\u003e(Details : {LOINC code \u00278462-4\u0027 \u003d \u0027Diastolic blood pressure\u0027, given as \u0027Diastolic blood pressure\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edataAbsentReason\u003c/b\u003e: Not Asked \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/data-absent-reason code \u0027not-asked\u0027 \u003d \u0027Not Asked\u0027, given as \u0027Not Asked\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281"
      }
    ],
    "status": "cancelled",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "vital-signs",
            "display": "Vital Signs"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "85354-9",
          "display": "Blood pressure panel with all children optional"
        }
      ],
      "text": "Blood pressure systolic \u0026 diastolic"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "2012-09-17",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "L",
            "display": "low"
          }
        ],
        "text": "Below low normal"
      }
    ],
    "note": [
      {
        "text": "In this example, the blood pressure measurements are not available due to cancellation of the order.  Data absent reason is present for each component"
      }
    ],
    "bodySite": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "368209003",
          "display": "Right arm"
        }
      ]
    },
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8480-6",
              "display": "Systolic blood pressure"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "271649006",
              "display": "Systolic blood pressure"
            },
            {
              "system": "http://acme.org/devices/clinical-codes",
              "code": "bp-s",
              "display": "Systolic Blood pressure"
            }
          ]
        },
        "dataAbsentReason": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
              "code": "not-asked",
              "display": "Not Asked"
            }
          ]
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8462-4",
              "display": "Diastolic blood pressure"
            }
          ]
        },
        "dataAbsentReason": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
              "code": "not-asked",
              "display": "Not Asked"
            }
          ]
        }
      }
    ]
  },
  {
    "resourceType": "Observation",
    "id": "blood-pressure-dar",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
      ],
      "tag": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "HTEST",
          "display": "test health data"
        }
      ]
    },
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: blood-pressure-dar\u003c/p\u003e\u003cp\u003e\u003cb\u003emeta\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Vital Signs \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027vital-signs\u0027 \u003d \u0027Vital Signs\u0027, given as \u0027Vital Signs\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Blood pressure systolic \u0026amp; diastolic \u003cspan\u003e(Details : {LOINC code \u002785354-9\u0027 \u003d \u0027Blood pressure panel with all children optional\u0027, given as \u0027Blood pressure panel with all children optional\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 17/09/2012\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003einterpretation\u003c/b\u003e: Below low normal \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code \u0027L\u0027 \u003d \u0027Low\u0027, given as \u0027low\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Right arm \u003cspan\u003e(Details : {SNOMED CT code \u0027368209003\u0027 \u003d \u0027Right upper arm\u0027, given as \u0027Right arm\u0027})\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Systolic blood pressure \u003cspan\u003e(Details : {LOINC code \u00278480-6\u0027 \u003d \u0027Systolic blood pressure\u0027, given as \u0027Systolic blood pressure\u0027}; {SNOMED CT code \u0027271649006\u0027 \u003d \u0027Systolic blood pressure\u0027, given as \u0027Systolic blood pressure\u0027}; {http://acme.org/devices/clinical-codes code \u0027bp-s\u0027 \u003d \u0027bp-s\u0027, given as \u0027Systolic Blood pressure\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 107 mmHg\u003cspan\u003e (Details: UCUM code mm[Hg] \u003d \u0027mmHg\u0027)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Diastolic blood pressure \u003cspan\u003e(Details : {LOINC code \u00278462-4\u0027 \u003d \u0027Diastolic blood pressure\u0027, given as \u0027Diastolic blood pressure\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edataAbsentReason\u003c/b\u003e: Not Performed \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/data-absent-reason code \u0027not-performed\u0027 \u003d \u0027Not Performed\u0027, given as \u0027Not Performed\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281"
      }
    ],
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "vital-signs",
            "display": "Vital Signs"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "85354-9",
          "display": "Blood pressure panel with all children optional"
        }
      ],
      "text": "Blood pressure systolic \u0026 diastolic"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "2012-09-17",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "L",
            "display": "low"
          }
        ],
        "text": "Below low normal"
      }
    ],
    "bodySite": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "368209003",
          "display": "Right arm"
        }
      ]
    },
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8480-6",
              "display": "Systolic blood pressure"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "271649006",
              "display": "Systolic blood pressure"
            },
            {
              "system": "http://acme.org/devices/clinical-codes",
              "code": "bp-s",
              "display": "Systolic Blood pressure"
            }
          ]
        },
        "valueQuantity": {
          "value": 107,
          "unit": "mmHg",
          "system": "http://unitsofmeasure.org",
          "code": "mm[Hg]"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8462-4",
              "display": "Diastolic blood pressure"
            }
          ]
        },
        "dataAbsentReason": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
              "code": "not-performed",
              "display": "Not Performed"
            }
          ]
        }
      }
    ]
  },
  {
    "resourceType": "Observation",
    "id": "blood-pressure",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
      ],
      "tag": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "HTEST",
          "display": "test health data"
        }
      ]
    },
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: blood-pressure\u003c/p\u003e\u003cp\u003e\u003cb\u003emeta\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281\u003c/p\u003e\u003cp\u003e\u003cb\u003ebasedOn\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Vital Signs \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/observation-category code \u0027vital-signs\u0027 \u003d \u0027Vital Signs\u0027, given as \u0027Vital Signs\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Blood pressure systolic \u0026amp; diastolic \u003cspan\u003e(Details : {LOINC code \u002785354-9\u0027 \u003d \u0027Blood pressure panel with all children optional\u0027, given as \u0027Blood pressure panel with all children optional\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 17/09/2012\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003einterpretation\u003c/b\u003e: Below low normal \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code \u0027L\u0027 \u003d \u0027Low\u0027, given as \u0027low\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Right arm \u003cspan\u003e(Details : {SNOMED CT code \u0027368209003\u0027 \u003d \u0027Right upper arm\u0027, given as \u0027Right arm\u0027})\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Systolic blood pressure \u003cspan\u003e(Details : {LOINC code \u00278480-6\u0027 \u003d \u0027Systolic blood pressure\u0027, given as \u0027Systolic blood pressure\u0027}; {SNOMED CT code \u0027271649006\u0027 \u003d \u0027Systolic blood pressure\u0027, given as \u0027Systolic blood pressure\u0027}; {http://acme.org/devices/clinical-codes code \u0027bp-s\u0027 \u003d \u0027bp-s\u0027, given as \u0027Systolic Blood pressure\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 107 mmHg\u003cspan\u003e (Details: UCUM code mm[Hg] \u003d \u0027mmHg\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003einterpretation\u003c/b\u003e: Normal \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code \u0027N\u0027 \u003d \u0027Normal\u0027, given as \u0027normal\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ecomponent\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Diastolic blood pressure \u003cspan\u003e(Details : {LOINC code \u00278462-4\u0027 \u003d \u0027Diastolic blood pressure\u0027, given as \u0027Diastolic blood pressure\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 60 mmHg\u003cspan\u003e (Details: UCUM code mm[Hg] \u003d \u0027mmHg\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003einterpretation\u003c/b\u003e: Below low normal \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code \u0027L\u0027 \u003d \u0027Low\u0027, given as \u0027low\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281"
      }
    ],
    "basedOn": [
      {
        "identifier": {
          "system": "https://acme.org/identifiers",
          "value": "1234"
        }
      }
    ],
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "vital-signs",
            "display": "Vital Signs"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "85354-9",
          "display": "Blood pressure panel with all children optional"
        }
      ],
      "text": "Blood pressure systolic \u0026 diastolic"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "2012-09-17",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "L",
            "display": "low"
          }
        ],
        "text": "Below low normal"
      }
    ],
    "bodySite": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "368209003",
          "display": "Right arm"
        }
      ]
    },
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8480-6",
              "display": "Systolic blood pressure"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "271649006",
              "display": "Systolic blood pressure"
            },
            {
              "system": "http://acme.org/devices/clinical-codes",
              "code": "bp-s",
              "display": "Systolic Blood pressure"
            }
          ]
        },
        "valueQuantity": {
          "value": 107,
          "unit": "mmHg",
          "system": "http://unitsofmeasure.org",
          "code": "mm[Hg]"
        },
        "interpretation": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                "code": "N",
                "display": "normal"
              }
            ],
            "text": "Normal"
          }
        ]
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8462-4",
              "display": "Diastolic blood pressure"
            }
          ]
        },
        "valueQuantity": {
          "value": 60,
          "unit": "mmHg",
          "system": "http://unitsofmeasure.org",
          "code": "mm[Hg]"
        },
        "interpretation": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                "code": "L",
                "display": "low"
              }
            ],
            "text": "Below low normal"
          }
        ]
      }
    ]
  },
  {
    "resourceType": "Observation",
    "id": "bmd",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: bmd\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: BMD - Left Femur \u003cspan\u003e(Details : {LOINC code \u002724701-5\u0027 \u003d \u0027Femur DXA Bone density\u0027, given as \u0027Femur DXA Bone density\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePatient/pat2\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003eAcme Imaging Diagnostics\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003evalue\u003c/b\u003e: 0.887 g/cm²\u003cspan\u003e (Details: UCUM code g/cm-2 \u003d \u0027g/cm-2\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Left Femur \u003cspan\u003e(Details : {SNOMED CT code \u002771341001:272741003\u003d7771000\u0027 \u003d \u0027Femur where Laterality \u003d Left)\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "24701-5",
          "display": "Femur DXA Bone density"
        }
      ],
      "text": "BMD - Left Femur"
    },
    "subject": {
      "reference": "Patient/pat2"
    },
    "performer": [
      {
        "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
        "display": "Acme Imaging Diagnostics"
      }
    ],
    "valueQuantity": {
      "value": 0.887,
      "unit": "g/cm²",
      "system": "http://unitsofmeasure.org",
      "code": "g/cm-2"
    },
    "bodySite": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "71341001:272741003\u003d7771000"
        }
      ],
      "text": "Left Femur"
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

export const observationBundle = bundleResource('Observation', resourceData);


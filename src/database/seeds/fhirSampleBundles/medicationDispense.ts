import { bundleResource } from './bundleResource';

const resourceData = [
  {
    "resourceType": "MedicationDispense",
    "id": "meddisp0301",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0301\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: in-progress\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Vancomycin Hydrochloride. Generated Summary: id: med0301; Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE) \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u00270069-2587-10\u0027 \u003d \u0027n/a\u0027, given as \u0027Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esupportingInformation\u003c/b\u003e: \u003ca\u003eCondition/f203\u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003elocation\u003c/b\u003e: \u003ca\u003ePharmacy\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0318\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Emergency Supply \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027EM\u0027 \u003d \u0027Emergency Supply\u0027, given as \u0027Emergency Supply\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 12 Vial\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Vial \u003d \u0027Vial\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 3 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 15/01/2015 10:20:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003edestination\u003c/b\u003e: \u003ca\u003eLocation/ph\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereceiver\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0301",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "0069-2587-10",
              "display": "Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)"
            }
          ]
        }
      }
    ],
    "status": "in-progress",
    "medicationReference": {
      "reference": "#med0301",
      "display": "Vancomycin Hydrochloride"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "supportingInformation": [
      {
        "reference": "Condition/f203"
      }
    ],
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "location": {
      "reference": "Location/ukp",
      "display": "Pharmacy"
    },
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0318"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "EM",
          "display": "Emergency Supply"
        }
      ]
    },
    "quantity": {
      "value": 12,
      "unit": "Vial",
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "Vial"
    },
    "daysSupply": {
      "value": 3,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "destination": {
      "reference": "Location/ph"
    },
    "receiver": [
      {
        "reference": "Patient/pat1",
        "display": "Donald Duck"
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "500mg IV q6h x 3 days",
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 6,
            "periodUnit": "h"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "255560000",
              "display": "Intravenous"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "420620005",
              "display": "Push - dosing instruction imperative (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 500,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
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
    "resourceType": "MedicationDispense",
    "id": "meddisp0302",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0302\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: in-progress\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Novolog 100u/ml. Generated Summary: id: med0360; Novolog 100u/ml \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u00270169-7501-11\u0027 \u003d \u0027n/a\u0027, given as \u0027Novolog 100u/ml\u0027})\u003c/span\u003e; Injection solution (qualifier value) \u003cspan\u003e(Details : {SNOMED CT code \u0027385219001\u0027 \u003d \u0027Injection solution\u0027, given as \u0027Injection solution (qualifier value)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eFunction\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eFinal Checker \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function code \u0027finalchecker\u0027 \u003d \u0027Final Checker\u0027, given as \u0027Final Checker\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0321\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Refill - Part Fill \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027RFP\u0027 \u003d \u0027Refill - Part Fill\u0027, given as \u0027Refill - Part Fill\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 10 ml\u003cspan\u003e (Details: UCUM code ml \u003d \u0027ml\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 30 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 15/01/2015 10:20:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenHandedOver\u003c/b\u003e: 15/01/2015 4:20:00 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: , , \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0360",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "0169-7501-11",
              "display": "Novolog 100u/ml"
            }
          ]
        },
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "385219001",
              "display": "Injection solution (qualifier value)"
            }
          ]
        },
        "ingredient": [
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "325072002",
                  "display": "Insulin Aspart (substance)"
                }
              ]
            },
            "strength": {
              "numerator": {
                "value": 100,
                "system": "http://unitsofmeasure.org",
                "code": "U"
              },
              "denominator": {
                "value": 1,
                "system": "http://unitsofmeasure.org",
                "code": "mL"
              }
            }
          }
        ],
        "batch": {
          "lotNumber": "12345",
          "expirationDate": "2019-10-31"
        }
      }
    ],
    "status": "in-progress",
    "medicationReference": {
      "reference": "#med0360",
      "display": "Novolog 100u/ml"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function",
              "code": "finalchecker",
              "display": "Final Checker"
            }
          ]
        },
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0321"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "RFP",
          "display": "Refill - Part Fill"
        }
      ]
    },
    "quantity": {
      "value": 10,
      "system": "http://unitsofmeasure.org",
      "code": "ml"
    },
    "daysSupply": {
      "value": 30,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "whenHandedOver": "2015-01-15T16:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Before Breakfast",
        "additionalInstruction": [
          {
            "text": "Check sugar level before taking Novolog"
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 10,
              "unit": "U",
              "system": "http://unitsofmeasure.org",
              "code": "U"
            }
          }
        ]
      },
      {
        "sequence": 1,
        "text": "15 units before lunch",
        "additionalInstruction": [
          {
            "text": "Check sugar level before taking Novolog"
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 15,
              "unit": "U",
              "system": "http://unitsofmeasure.org",
              "code": "U"
            }
          }
        ]
      },
      {
        "sequence": 1,
        "text": "20 units before dinner",
        "additionalInstruction": [
          {
            "text": "Check sugar level before taking Novolog"
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 20,
              "unit": "U",
              "system": "http://unitsofmeasure.org",
              "code": "U"
            }
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
    "resourceType": "MedicationDispense",
    "id": "meddisp0303",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0303\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003epartOf\u003c/b\u003e: \u003ca\u003eProcedure/biopsy\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: on-hold\u003c/p\u003e\u003cp\u003e\u003cb\u003estatusReason\u003c/b\u003e: \u003ca\u003eDetectedIssue/allergy\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Outpatient \u003cspan\u003e(Details : {http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category code \u0027outpatient\u0027 \u003d \u0027Outpatient\u0027, given as \u0027Outpatient\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: id: med0310; Oxycodone Hydrochloride 5mg oral tablet (Roxicodone \u003cspan\u003e(Details : {RxNorm code \u00271049623\u0027 \u003d \u0027ROXICODONE 5 MG Oral Tablet\u0027, given as \u0027Oxycodone Hydrochloride 5mg oral tablet (Roxicodone\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003econtext\u003c/b\u003e: \u003ca\u003eEncounter/f001\u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0310\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Emergency Supply \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027EM\u0027 \u003d \u0027Emergency Supply\u0027, given as \u0027Emergency Supply\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 30 TAB\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB \u003d \u0027Tablet\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 10 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 15/04/2016 7:14:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003edetectedIssue\u003c/b\u003e: \u003ca\u003eDetectedIssue/allergy\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0310",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "1049623",
              "display": "Oxycodone Hydrochloride 5mg oral tablet (Roxicodone"
            }
          ]
        }
      }
    ],
    "partOf": [
      {
        "reference": "Procedure/biopsy"
      }
    ],
    "status": "on-hold",
    "statusReasonReference": {
      "reference": "DetectedIssue/allergy"
    },
    "category": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category",
          "code": "outpatient",
          "display": "Outpatient"
        }
      ]
    },
    "medicationReference": {
      "reference": "#med0310"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "context": {
      "reference": "Encounter/f001"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0310"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "EM",
          "display": "Emergency Supply"
        }
      ]
    },
    "quantity": {
      "value": 30,
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "daysSupply": {
      "value": 10,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2016-04-15T07:14:00+05:00",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "one to two tablets every 4-6 hours as needed for rib pain",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "418914006",
                "display": "Warning. May cause drowsiness. If affected do not drive or operate machinery. Avoid alcoholic drink (qualifier value)"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 4,
            "periodMax": 6,
            "periodUnit": "h"
          }
        },
        "asNeededCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "297217002",
              "display": "Rib Pain (finding)"
            }
          ]
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421521009",
              "display": "Swallow - dosing instruction imperative (qualifier value)"
            }
          ]
        }
      }
    ],
    "detectedIssue": [
      {
        "reference": "DetectedIssue/allergy"
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
    "resourceType": "MedicationDispense",
    "id": "meddisp0304",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0304\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Zosyn (piperacillin/tazobactam) 4.5gm injection. Generated Summary: id: med0302; Zosyn (piperacillin/tazobactam) 4.5gm injection \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u00270206-8862-02\u0027 \u003d \u0027n/a\u0027, given as \u0027Zosyn (piperacillin/tazobactam) 4.5gm injection\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0319\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: First Fill \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027FF\u0027 \u003d \u0027First Fill\u0027, given as \u0027First Fill\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 250 mL\u003cspan\u003e (Details: UCUM code mL \u003d \u0027mL\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 1 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 25/06/2015 7:13:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenHandedOver\u003c/b\u003e: 26/06/2015 7:13:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0302",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "0206-8862-02",
              "display": "Zosyn (piperacillin/tazobactam) 4.5gm injection"
            }
          ]
        }
      }
    ],
    "status": "completed",
    "medicationReference": {
      "reference": "#med0302",
      "display": "Zosyn (piperacillin/tazobactam) 4.5gm injection"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0319"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "FF",
          "display": "First Fill"
        }
      ]
    },
    "quantity": {
      "value": 250,
      "system": "http://unitsofmeasure.org",
      "code": "mL"
    },
    "daysSupply": {
      "value": 1,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-06-25T07:13:00+05:00",
    "whenHandedOver": "2015-06-26T07:13:00+05:00",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "4.5 grams in D5W 250 ml. IV every 6 hours. Infuse over 30 min at 8L/min",
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 6,
            "periodUnit": "h"
          }
        },
        "site": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "255560000",
              "display": "Intravenous route (qualifier value)"
            }
          ]
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "47625008",
              "display": "IV intravascular route that begins within a vein)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 4.5,
              "system": "http://unitsofmeasure.org",
              "code": "g"
            },
            "rateRatio": {
              "numerator": {
                "value": 8,
                "system": "http://unitsofmeasure.org",
                "code": "ml"
              },
              "denominator": {
                "value": 1,
                "system": "http://unitsofmeasure.org",
                "code": "min"
              }
            }
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
    "resourceType": "MedicationDispense",
    "id": "meddisp0305",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0305\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: entered-in-error\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Prednisone. Generated Summary: id: med0311; Prednisone 5mg Oral Tablet 48 Count Pack \u003cspan\u003e(Details : {RxNorm code \u0027763179\u0027 \u003d \u0027predniSONE 5 MG Oral Tablet 48 Count Pack\u0027, given as \u0027Prednisone 5mg Oral Tablet 48 Count Pack\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0303\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: First Fill \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027FF\u0027 \u003d \u0027First Fill\u0027, given as \u0027First Fill\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 49 TAB\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB \u003d \u0027Tablet\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 21 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 15/01/2015 10:20:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenHandedOver\u003c/b\u003e: 15/01/2015 4:20:00 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: , , \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0311",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "763179",
              "display": "Prednisone 5mg Oral Tablet 48 Count Pack"
            }
          ]
        }
      }
    ],
    "status": "entered-in-error",
    "medicationReference": {
      "reference": "#med0311",
      "display": "Prednisone"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0303"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "FF",
          "display": "First Fill"
        }
      ]
    },
    "quantity": {
      "value": 49,
      "unit": "TAB",
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "daysSupply": {
      "value": 21,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "whenHandedOver": "2015-01-15T16:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Take 4 tablets daily for 7 days starting January 16, 2015",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "311504000",
                "display": "With or after Food"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "boundsPeriod": {
              "start": "2015-01-16",
              "end": "2015-01-20"
            },
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421521009",
              "display": "Swallow - dosing instruction imperative (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 4,
              "unit": "TAB",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "TAB"
            }
          }
        ]
      },
      {
        "sequence": 2,
        "text": "Take 2 tablets daily for 7 days starting January 23, 2015",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "311504000",
                "display": "With or after Food"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "boundsPeriod": {
              "start": "2015-01-23",
              "end": "2015-01-30"
            },
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421521009",
              "display": "Swallow - dosing instruction imperative (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 2,
              "unit": "TAB",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "TAB"
            }
          }
        ]
      },
      {
        "sequence": 3,
        "text": "Take 1 tablets daily for 7 days starting January 31, 2015",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "311504000",
                "display": "With or after Food"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "boundsPeriod": {
              "start": "2015-01-31",
              "end": "2015-02-06"
            },
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421521009",
              "display": "Swallow - dosing instruction imperative (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 1,
              "unit": "TAB",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "TAB"
            }
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
    "resourceType": "MedicationDispense",
    "id": "meddisp0306",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0306\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: in-progress\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Alemtuzumab 10mg/ml (Lemtrada). Generated Summary: id: med0303; Alemtuzumab 10mg/ml (Lemtrada) \u003cspan\u003e(Details : {RxNorm code \u00271594660\u0027 \u003d \u0027alemtuzumab 10 MG/ML [Lemtrada]\u0027, given as \u0027Alemtuzumab 10mg/ml (Lemtrada)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0317\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Daily Fill \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027DF\u0027 \u003d \u0027Daily Fill\u0027, given as \u0027Daily Fill\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 5 415818006\u003cspan\u003e (Details: SNOMED CT code 415818006 \u003d \u0027Vial\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 7 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 15/01/2015 10:20:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: , , \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0303",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "1594660",
              "display": "Alemtuzumab 10mg/ml (Lemtrada)"
            }
          ]
        }
      }
    ],
    "status": "in-progress",
    "medicationReference": {
      "reference": "#med0303",
      "display": "Alemtuzumab 10mg/ml (Lemtrada)"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0317"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "DF",
          "display": "Daily Fill"
        }
      ]
    },
    "quantity": {
      "value": 5,
      "system": "http://snomed.info/sct",
      "code": "415818006"
    },
    "daysSupply": {
      "value": 7,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk",
        "additionalInstruction": [
          {
            "text": "Rapidly increase dose until tolerated"
          },
          {
            "text": "Administer on alternate days"
          }
        ],
        "timing": {
          "repeat": {
            "duration": 12,
            "durationUnit": "wk",
            "frequency": 3,
            "period": 1,
            "periodUnit": "wk"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "47625008",
              "display": "Intravenous route (qualifier value)"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "422145002",
              "display": "Inject - dosing instruction imperative (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 3,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ]
      },
      {
        "sequence": 2,
        "text": "Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk",
        "additionalInstruction": [
          {
            "text": "Rapidly increase dose until tolerated"
          },
          {
            "text": "Administer on alternate days"
          }
        ],
        "timing": {
          "repeat": {
            "duration": 12,
            "durationUnit": "wk",
            "frequency": 3,
            "period": 1,
            "periodUnit": "wk"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "47625008",
              "display": "Intravenous route (qualifier value)"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "422145002",
              "display": "Inject - dosing instruction imperative (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 10,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ]
      },
      {
        "sequence": 3,
        "text": "Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk",
        "additionalInstruction": [
          {
            "text": "Rapidly increase dose until tolerated"
          },
          {
            "text": "Administer on alternate days"
          }
        ],
        "timing": {
          "repeat": {
            "duration": 12,
            "durationUnit": "wk",
            "frequency": 3,
            "period": 1,
            "periodUnit": "wk"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "47625008",
              "display": "Intravenous route (qualifier value)"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "422145002",
              "display": "Inject - dosing instruction imperative (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 30,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
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
    "resourceType": "MedicationDispense",
    "id": "meddisp0307",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0307\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Myleran 2mg tablet, film coated \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u002776388-713-25\u0027 \u003d \u0027n/a\u0027, given as \u0027Myleran 2mg tablet, film coated\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0306\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Refill - Part Fill \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027RFP\u0027 \u003d \u0027Refill - Part Fill\u0027, given as \u0027Refill - Part Fill\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 90 TAB\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB \u003d \u0027Tablet\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 30 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 15/01/2015 10:20:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenHandedOver\u003c/b\u003e: 15/01/2015 4:20:00 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
    },
    "status": "completed",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "76388-713-25",
          "display": "Myleran 2mg tablet, film coated"
        }
      ]
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0306"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "RFP",
          "display": "Refill - Part Fill"
        }
      ]
    },
    "quantity": {
      "value": 90,
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "daysSupply": {
      "value": 30,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "whenHandedOver": "2015-01-15T16:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Take 3 tablets (6mg) once daily",
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 6,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
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
    "resourceType": "MedicationDispense",
    "id": "meddisp0308",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0308\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Timoptic 5mg/ml solution. Generated Summary: id: med0305; Timoptic 5mg/ml solution \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u00272501-813-16\u0027 \u003d \u0027n/a\u0027, given as \u0027Timoptic 5mg/ml solution\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck \u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0330\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Refill - Part Fill \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027RFP\u0027 \u003d \u0027Refill - Part Fill\u0027, given as \u0027Refill - Part Fill\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 10 mL\u003cspan\u003e (Details: UCUM code mL \u003d \u0027mL\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 30 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 25/06/2015 7:13:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenHandedOver\u003c/b\u003e: 26/06/2015 7:13:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0305",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "2501-813-16",
              "display": "Timoptic 5mg/ml solution"
            }
          ]
        }
      }
    ],
    "status": "completed",
    "medicationReference": {
      "reference": "#med0305",
      "display": "Timoptic 5mg/ml solution"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck "
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0330"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "RFP",
          "display": "Refill - Part Fill"
        }
      ]
    },
    "quantity": {
      "value": 10,
      "unit": "mL",
      "system": "http://unitsofmeasure.org",
      "code": "mL"
    },
    "daysSupply": {
      "value": 30,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-06-25T07:13:00+05:00",
    "whenHandedOver": "2015-06-26T07:13:00+05:00",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Instil one drop in each eye twice daily",
        "timing": {
          "repeat": {
            "frequency": 2,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "54485002",
              "display": "Ophthalmic route (qualifier value)"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421538008",
              "display": "Instill - dosing instruction imperative (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 1,
              "unit": "OPDROP",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "OPDROP"
            }
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
    "resourceType": "MedicationDispense",
    "id": "meddisp0309",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0309\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: entered-in-error\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Nystatin 100,000 units/ml oral suspension (product). Generated Summary: id: med0312; Nystatin 100,000 units/ml oral suspension (product) \u003cspan\u003e(Details : {SNOMED CT code \u0027324689003\u0027 \u003d \u0027Nystatin 100,000units/mL oral suspension\u0027, given as \u0027Nystatin 100,000 units/ml oral suspension (product)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck \u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0319\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: First Fill \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027FF\u0027 \u003d \u0027First Fill\u0027, given as \u0027First Fill\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 10 ml\u003cspan\u003e (Details: UCUM code ml \u003d \u0027ml\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 10 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenHandedOver\u003c/b\u003e: 15/01/2016\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0312",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "324689003",
              "display": "Nystatin 100,000 units/ml oral suspension (product)"
            }
          ]
        }
      }
    ],
    "status": "entered-in-error",
    "medicationReference": {
      "reference": "#med0312",
      "display": "Nystatin 100,000 units/ml oral suspension (product)"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck "
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0319"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "FF",
          "display": "First Fill"
        }
      ]
    },
    "quantity": {
      "value": 10,
      "unit": "ml",
      "system": "http://unitsofmeasure.org",
      "code": "ml"
    },
    "daysSupply": {
      "value": 10,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15",
    "whenHandedOver": "2016-01-15",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "10 drops four times daily - apply in mouth using cotton swab or finger",
        "timing": {
          "repeat": {
            "frequency": 4,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 10,
              "unit": "drop",
              "system": "http://unitsofmeasure.org",
              "code": "drop"
            }
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
    "resourceType": "MedicationDispense",
    "id": "meddisp0310",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0310\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: in-progress\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Percocet. Generated Summary: id: med0308; Percocet tablet \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u002716590-619-30\u0027 \u003d \u0027n/a\u0027, given as \u0027Percocet tablet\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck \u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0307\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Emergency Supply \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027EM\u0027 \u003d \u0027Emergency Supply\u0027, given as \u0027Emergency Supply\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 30 TAB\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB \u003d \u0027Tablet\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 30 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 15/01/2015 10:20:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0308",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "16590-619-30",
              "display": "Percocet tablet"
            }
          ]
        }
      }
    ],
    "status": "in-progress",
    "medicationReference": {
      "reference": "#med0308",
      "display": "Percocet"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck "
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0307"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "EM",
          "display": "Emergency Supply"
        }
      ]
    },
    "quantity": {
      "value": 30,
      "unit": "TAB",
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "daysSupply": {
      "value": 30,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "1 tablet every four hours as needed for pain",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "418914006",
                "display": "Warning. May cause drowsiness. If affected do not drive or operate machinery. Avoid alcoholic drink (qualifier value)"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 4,
            "periodUnit": "h"
          }
        },
        "asNeededCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "203082005",
              "display": "Fibromyalgia (disorder)"
            }
          ]
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 1,
              "unit": "TAB",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "TAB"
            }
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
    "resourceType": "MedicationDispense",
    "id": "meddisp0311",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0311\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Acetaminophen 120mg Suppository \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u002750090-0001\u0027 \u003d \u0027n/a\u0027, given as \u0027Acetaminophen 120mg Suppository\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0324\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Refill - Part Fill \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027RFP\u0027 \u003d \u0027Refill - Part Fill\u0027, given as \u0027Refill - Part Fill\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 60 RECSUPP\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code RECSUPP \u003d \u0027Rectal Suppository\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 10 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 15/01/2015 10:20:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenHandedOver\u003c/b\u003e: 15/01/2015 4:20:00 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
    },
    "status": "completed",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "50090-0001",
          "display": "Acetaminophen 120mg Suppository"
        }
      ]
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0324"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "RFP",
          "display": "Refill - Part Fill"
        }
      ]
    },
    "quantity": {
      "value": 60,
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "RECSUPP"
    },
    "daysSupply": {
      "value": 10,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "whenHandedOver": "2015-01-15T16:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Insert two suppositories (240mg) rectally twice daily as needed for fever to a maximim of 6 per day",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "418637003",
                "display": "Do not take with any other paracetamol products (qualifier value)"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 2,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "asNeededCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "386661006",
              "display": "Fever (finding)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 240,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ],
        "maxDosePerPeriod": {
          "numerator": {
            "value": 720,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1,
            "system": "http://unitsofmeasure.org",
            "code": "d"
          }
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
    "resourceType": "MedicationDispense",
    "id": "meddisp0312",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: meddisp0312\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: on-hold\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Tylenol PM. Generated Summary: id: med0309; Tylenol PM \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u002750580-506-02\u0027 \u003d \u0027n/a\u0027, given as \u0027Tylenol PM\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f006\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eauthorizingPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0310\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: First Fill \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code \u0027FF\u0027 \u003d \u0027First Fill\u0027, given as \u0027First Fill\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003equantity\u003c/b\u003e: 100 TAB\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB \u003d \u0027Tablet\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edaysSupply\u003c/b\u003e: 30 Day\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenPrepared\u003c/b\u003e: 15/01/2015 10:20:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003ewhenHandedOver\u003c/b\u003e: 15/01/2015 4:20:00 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0309",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "50580-506-02",
              "display": "Tylenol PM"
            }
          ]
        }
      }
    ],
    "status": "on-hold",
    "medicationReference": {
      "reference": "#med0309",
      "display": "Tylenol PM"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0310"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "FF",
          "display": "First Fill"
        }
      ]
    },
    "quantity": {
      "value": 100,
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "daysSupply": {
      "value": 30,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "whenHandedOver": "2015-01-15T16:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Take 1-2 tablets once daily at bedtime as needed for restless legs",
        "additionalInstruction": [
          {
            "text": "Take at bedtime"
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "asNeededCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "32914008",
              "display": "Restless Legs"
            }
          ]
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseRange": {
              "low": {
                "value": 1,
                "unit": "TAB",
                "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                "code": "TAB"
              },
              "high": {
                "value": 2,
                "unit": "TAB",
                "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                "code": "TAB"
              }
            }
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
  }
];

export const medicationDispenseBundle = bundleResource('MedicationDispense', resourceData);

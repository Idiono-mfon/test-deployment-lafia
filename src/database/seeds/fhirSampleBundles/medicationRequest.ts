import { bundleResource } from "./bundleResource";

const resourceData = [
  {
    "resourceType": "MedicationRequest",
    "id": "medrx0301",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0301\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: , \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003estatusReason\u003c/b\u003e: Try another treatment first \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason code \u0027altchoice\u0027 \u003d \u0027Try another treatment first\u0027, given as \u0027Try another treatment first\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Inpatient \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/medicationrequest-category code \u0027inpatient\u0027 \u003d \u0027Inpatient\u0027, given as \u0027Inpatient\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: id: med0310; Oral Form Oxycodone (product) \u003cspan\u003e(Details : {SNOMED CT code \u0027430127000\u0027 \u003d \u0027Oral form oxycodone\u0027, given as \u0027Oral Form Oxycodone (product)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eencounter who leads to this prescription\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esupportingInformation\u003c/b\u003e: \u003ca\u003eProcedure/biopsy\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003eCarla Espinosa\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformerType\u003c/b\u003e: Public Health Nurse \u003cspan\u003e(Details : {SNOMED CT code \u002726369006\u0027 \u003d \u0027Public health nurse\u0027, given as \u0027Public Health Nurse\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Rib Pain (finding) \u003cspan\u003e(Details : {SNOMED CT code \u0027297217002\u0027 \u003d \u0027Rib pain\u0027, given as \u0027Rib Pain (finding)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003einsurance\u003c/b\u003e: \u003ca\u003eCoverage/9876B1\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: Patient told to take with food\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003ch3\u003eDispenseRequests\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eValidityPeriod\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eNumberOfRepeatsAllowed\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eQuantity\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eExpectedSupplyDuration\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePerformer\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e15/01/2015 --\u0026gt; 15/01/2016\u003c/td\u003e\u003ctd\u003e0\u003c/td\u003e\u003ctd\u003e30 TAB\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB \u003d \u0027Tablet\u0027)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e10 days\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f001\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003ch3\u003eSubstitutions\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAllowed[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eReason\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003etrue\u003c/td\u003e\u003ctd\u003eformulary policy \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code \u0027FP\u0027 \u003d \u0027formulary policy\u0027, given as \u0027formulary policy\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003edetectedIssue\u003c/b\u003e: \u003ca\u003eDetectedIssue/allergy\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eeventHistory\u003c/b\u003e: Author\u0027s Signature. Generated Summary: id: signature; recorded: 01/02/2017 5:23:07 PM; \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0310",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "430127000",
              "display": "Oral Form Oxycodone (product)"
            }
          ]
        }
      },
      {
        "resourceType": "Provenance",
        "id": "signature",
        "target": [
          {
            "reference": "ServiceRequest/physiotherapy"
          }
        ],
        "recorded": "2017-02-01T17:23:07Z",
        "agent": [
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "AUT"
                  }
                ]
              }
            ],
            "who": {
              "reference": "Practitioner/example",
              "display": "Dr Adam Careful"
            }
          }
        ],
        "signature": [
          {
            "type": [
              {
                "system": "urn:iso-astm:E1762-95:2013",
                "code": "1.2.840.10065.1.12.1.1",
                "display": "Author\u0027s Signature"
              }
            ],
            "when": "2017-02-01T17:23:07Z",
            "who": {
              "reference": "Practitioner/example",
              "display": "Dr Adam Careful"
            },
            "targetFormat": "application/fhir+xml",
            "sigFormat": "application/signature+xml",
            "data": "dGhpcyBibG9iIGlzIHNuaXBwZWQ\u003d"
          }
        ]
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "completed",
    "statusReason": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
          "code": "altchoice",
          "display": "Try another treatment first"
        }
      ]
    },
    "intent": "order",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
            "code": "inpatient",
            "display": "Inpatient"
          }
        ]
      }
    ],
    "medicationReference": {
      "reference": "#med0310"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f201",
      "display": "encounter who leads to this prescription"
    },
    "supportingInformation": [
      {
        "reference": "Procedure/biopsy"
      }
    ],
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "performer": {
      "reference": "Practitioner/f204",
      "display": "Carla Espinosa"
    },
    "performerType": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "26369006",
          "display": "Public Health Nurse"
        }
      ]
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "297217002",
            "display": "Rib Pain (finding)"
          }
        ]
      }
    ],
    "insurance": [
      {
        "reference": "Coverage/9876B1"
      }
    ],
    "note": [
      {
        "text": "Patient told to take with food"
      }
    ],
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
        "patientInstruction": "Take one to two tablets every four to six hours as needed for rib pain",
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
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "numberOfRepeatsAllowed": 0,
      "quantity": {
        "value": 30,
        "unit": "TAB",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "TAB"
      },
      "expectedSupplyDuration": {
        "value": 10,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      },
      "performer": {
        "reference": "Practitioner/f001"
      }
    },
    "substitution": {
      "allowedBoolean": true,
      "reason": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "FP",
            "display": "formulary policy"
          }
        ]
      }
    },
    "detectedIssue": [
      {
        "reference": "DetectedIssue/allergy"
      }
    ],
    "eventHistory": [
      {
        "reference": "#signature",
        "display": "Author\u0027s Signature"
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
    "resourceType": "MedicationRequest",
    "id": "medrx0302",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0302\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: active\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: id: med0320; Azithromycin 250mg capsule (product) \u003cspan\u003e(Details : {SNOMED CT code \u0027324252006\u0027 \u003d \u0027Azithromycin 250mg capsule\u0027, given as \u0027Azithromycin 250mg capsule (product)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eencounter who leads to this prescription\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esupportingInformation\u003c/b\u003e: \u003ca\u003eCoverage/SP1234\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Traveller\u0027s Diarrhea (disorder) \u003cspan\u003e(Details : {SNOMED CT code \u002711840006\u0027 \u003d \u0027Traveler\u0027s diarrhea\u0027, given as \u0027Traveller\u0027s Diarrhea (disorder)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: Patient told to take with food\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: , \u003c/p\u003e\u003ch3\u003eDispenseRequests\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eValidityPeriod\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eNumberOfRepeatsAllowed\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eQuantity\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eExpectedSupplyDuration\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e15/01/2015 --\u0026gt; 15/01/2016\u003c/td\u003e\u003ctd\u003e1\u003c/td\u003e\u003ctd\u003e6 TAB\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB \u003d \u0027Tablet\u0027)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e5 days\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003ch3\u003eSubstitutions\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAllowed[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eReason\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003etrue\u003c/td\u003e\u003ctd\u003eformulary policy \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code \u0027FP\u0027 \u003d \u0027formulary policy\u0027, given as \u0027formulary policy\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0320",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "324252006",
              "display": "Azithromycin 250mg capsule (product)"
            }
          ]
        }
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "active",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0320"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "supportingInformation": [
      {
        "reference": "Coverage/SP1234"
      }
    ],
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "11840006",
            "display": "Traveller\u0027s Diarrhea (disorder)"
          }
        ]
      }
    ],
    "note": [
      {
        "text": "Patient told to take with food"
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Two tablets at once",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "311504000",
                "display": "With or after food"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
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
                  "code": "ordered",
                  "display": "Ordered"
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
        "sequence": 2,
        "text": "One tablet daily for 4 days",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "311504000",
                "display": "With or after food"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 4,
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
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "numberOfRepeatsAllowed": 1,
      "quantity": {
        "value": 6,
        "unit": "TAB",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "TAB"
      },
      "expectedSupplyDuration": {
        "value": 5,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      }
    },
    "substitution": {
      "allowedBoolean": true,
      "reason": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "FP",
            "display": "formulary policy"
          }
        ]
      }
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
    "resourceType": "MedicationRequest",
    "id": "medrx0303",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0303\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: active\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: id: med0311; Prednisone 5mg tablet (Product) \u003cspan\u003e(Details : {SNOMED CT code \u0027373994007\u0027 \u003d \u0027Prednisone 5mg tablet\u0027, given as \u0027Prednisone 5mg tablet (Product)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eencounter who leads to this prescription\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebasedOn\u003c/b\u003e: \u003ca\u003eCarePlan/gpvisit\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003egroupIdentifier\u003c/b\u003e: 983939393 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: Patient told to take with food\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: , , \u003c/p\u003e\u003ch3\u003eDispenseRequests\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eValidityPeriod\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eNumberOfRepeatsAllowed\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eQuantity\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eExpectedSupplyDuration\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePerformer\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e15/01/2015 --\u0026gt; 15/01/2016\u003c/td\u003e\u003ctd\u003e1\u003c/td\u003e\u003ctd\u003e51 TAB\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB \u003d \u0027Tablet\u0027)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e21 days\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003eOrganization/f001\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003ch3\u003eSubstitutions\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAllowed[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eReason\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eTherapeutic Brand \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution code \u0027TB\u0027 \u003d \u0027therapeutic brand\u0027, given as \u0027Therapeutic Brand\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003eformulary policy \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code \u0027FP\u0027 \u003d \u0027formulary policy\u0027, given as \u0027formulary policy\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0311",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "373994007",
              "display": "Prednisone 5mg tablet (Product)"
            }
          ]
        }
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "active",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0311"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "basedOn": [
      {
        "reference": "CarePlan/gpvisit"
      }
    ],
    "groupIdentifier": {
      "use": "official",
      "system": "http://www.bmc.nl/portal/prescriptions",
      "value": "983939393"
    },
    "note": [
      {
        "text": "Patient told to take with food"
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Take 4 tablets daily for 7 days starting January 16, 2015",
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
                  "code": "ordered",
                  "display": "Ordered"
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
                  "code": "ordered",
                  "display": "Ordered"
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
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "numberOfRepeatsAllowed": 1,
      "quantity": {
        "value": 51,
        "unit": "TAB",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "TAB"
      },
      "expectedSupplyDuration": {
        "value": 21,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      },
      "performer": {
        "reference": "Organization/f001"
      }
    },
    "substitution": {
      "allowedCodeableConcept": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
            "code": "TB",
            "display": "Therapeutic Brand"
          }
        ]
      },
      "reason": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "FP",
            "display": "formulary policy"
          }
        ]
      }
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
    "resourceType": "MedicationRequest",
    "id": "medrx0304",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0304\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Nystatin 100,000 u/ml oral suspension. Generated Summary: id: med0312; Nystatin 100,000 units/ml oral suspension (product) \u003cspan\u003e(Details : {SNOMED CT code \u0027324689003\u0027 \u003d \u0027Nystatin 100,000units/mL oral suspension\u0027, given as \u0027Nystatin 100,000 units/ml oral suspension (product)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003ch3\u003eDispenseRequests\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eValidityPeriod\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eNumberOfRepeatsAllowed\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eQuantity\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eExpectedSupplyDuration\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e15/01/2015 --\u0026gt; 15/01/2016\u003c/td\u003e\u003ctd\u003e3\u003c/td\u003e\u003ctd\u003e10 ml\u003cspan\u003e (Details: UCUM code ml \u003d \u0027ml\u0027)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e10 days\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
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
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "completed",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0312",
      "display": "Nystatin 100,000 u/ml oral suspension"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
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
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "numberOfRepeatsAllowed": 3,
      "quantity": {
        "value": 10,
        "unit": "ml",
        "system": "http://unitsofmeasure.org",
        "code": "ml"
      },
      "expectedSupplyDuration": {
        "value": 10,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      }
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
    "resourceType": "MedicationRequest",
    "id": "medrx0305",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0305\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: id: med0314; Alprazolam 0.25mg Oral Tablet \u003cspan\u003e(Details : {RxNorm code \u0027308047\u0027 \u003d \u0027ALPRAZolam 0.25 MG Oral Tablet\u0027, given as \u0027Alprazolam 0.25mg Oral Tablet\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eencounter who leads to this prescription\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003ch3\u003eDispenseRequests\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eValidityPeriod\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eNumberOfRepeatsAllowed\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eQuantity\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eExpectedSupplyDuration\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e15/01/2015 --\u0026gt; 15/01/2016\u003c/td\u003e\u003ctd\u003e1\u003c/td\u003e\u003ctd\u003e30 TAB\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB \u003d \u0027Tablet\u0027)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e10 days\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003ch3\u003eSubstitutions\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAllowed[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eReason\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003etrue\u003c/td\u003e\u003ctd\u003eformulary policy \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code \u0027FP\u0027 \u003d \u0027formulary policy\u0027, given as \u0027formulary policy\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0314",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "308047",
              "display": "Alprazolam 0.25mg Oral Tablet"
            }
          ]
        }
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "completed",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0314"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "0.25mg PO every 6-12 hours as needed for menses from Jan 15-20, 2015.  Do not exceed more than 4mg per day",
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
            "boundsPeriod": {
              "start": "2015-01-15",
              "end": "2015-01-20"
            },
            "frequency": 1,
            "period": 6,
            "periodMax": 12,
            "periodUnit": "h"
          }
        },
        "asNeededCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "266599000",
              "display": "Dysmenorrhea (disorder)"
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
        ],
        "maxDosePerAdministration": {
          "value": 4,
          "unit": "mg",
          "system": "http://unitsofmeasure.org",
          "code": "mg"
        }
      }
    ],
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "numberOfRepeatsAllowed": 1,
      "quantity": {
        "value": 30,
        "unit": "TAB",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "TAB"
      },
      "expectedSupplyDuration": {
        "value": 10,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      }
    },
    "substitution": {
      "allowedBoolean": true,
      "reason": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "FP",
            "display": "formulary policy"
          }
        ]
      }
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
    "resourceType": "MedicationRequest",
    "id": "medrx0306",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0306\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: active\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Myleran 2mg tablet. Generated Summary: id: med0304; Myleran 2mg tablet, film coated \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u002776388-713-25\u0027 \u003d \u0027n/a\u0027, given as \u0027Myleran 2mg tablet, film coated\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Chronic myeloid Leukemia (disorder) \u003cspan\u003e(Details : {SNOMED CT code \u002792818009\u0027 \u003d \u0027Chronic myeloid leukemia\u0027, given as \u0027Chronic myeloid Leukemia (disorder)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0304",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "76388-713-25",
              "display": "Myleran 2mg tablet, film coated"
            }
          ]
        }
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "active",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0304",
      "display": "Myleran 2mg tablet"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "92818009",
            "display": "Chronic myeloid Leukemia (disorder)"
          }
        ]
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "6 mg PO daily for remission induction; adjust dosage to white blood cell (WBC) count.  With hold treatment if WBC is less than 15,000/µL; resume when WBC is greater than 50,000/µL",
        "timing": {
          "repeat": {
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
              "display": "Oral route (qualifier value)"
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
    "resourceType": "MedicationRequest",
    "id": "medrx0307",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0307\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: id: med0308; Percocet tablet \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u002716590-619-30\u0027 \u003d \u0027n/a\u0027, given as \u0027Percocet tablet\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eencounter who leads to this prescription\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003ch3\u003eDispenseRequests\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eValidityPeriod\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eQuantity\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eExpectedSupplyDuration\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e15/01/2015 --\u0026gt; 15/01/2016\u003c/td\u003e\u003ctd\u003e30 TAB\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB \u003d \u0027Tablet\u0027)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e10 days\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003ch3\u003eSubstitutions\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAllowed[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eReason\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003etrue\u003c/td\u003e\u003ctd\u003eformulary policy \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code \u0027FP\u0027 \u003d \u0027formulary policy\u0027, given as \u0027formulary policy\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
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
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "completed",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0308"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
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
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "quantity": {
        "value": 30,
        "unit": "TAB",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "TAB"
      },
      "expectedSupplyDuration": {
        "value": 10,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      }
    },
    "substitution": {
      "allowedBoolean": true,
      "reason": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "FP",
            "display": "formulary policy"
          }
        ]
      }
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
    "resourceType": "MedicationRequest",
    "id": "medrx0308",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0308\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Vicodin 5/500 Oral Tablet \u003cspan\u003e(Details : {RxNorm code \u0027856907\u0027 \u003d \u0027Vicodin 5 MG / 500 MG Oral Tablet\u0027, given as \u0027Vicodin 5/500 Oral Tablet\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eencounter who leads to this prescription\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003erecorder\u003c/b\u003e: \u003ca\u003eCarla Espinoza\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003ch3\u003eDispenseRequests\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eValidityPeriod\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eQuantity\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eExpectedSupplyDuration\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e15/01/2015 --\u0026gt; 15/01/2016\u003c/td\u003e\u003ctd\u003e30 TAB\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB \u003d \u0027Tablet\u0027)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e10 days\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003ch3\u003eSubstitutions\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAllowed[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eReason\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003efalse\u003c/td\u003e\u003ctd\u003eformulary policy \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code \u0027FP\u0027 \u003d \u0027formulary policy\u0027, given as \u0027formulary policy\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "completed",
    "intent": "order",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "856907",
          "display": "Vicodin 5/500 Oral Tablet"
        }
      ]
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "recorder": {
      "reference": "Practitioner/f204",
      "display": "Carla Espinoza"
    },
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
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "quantity": {
        "value": 30,
        "unit": "TAB",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "TAB"
      },
      "expectedSupplyDuration": {
        "value": 10,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      }
    },
    "substitution": {
      "allowedBoolean": false,
      "reason": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "FP",
            "display": "formulary policy"
          }
        ]
      }
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
    "resourceType": "MedicationRequest",
    "id": "medrx0309",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0309\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: active\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: id: med0321; Capecitabine (product) \u003cspan\u003e(Details : {SNOMED CT code \u0027108761006\u0027 \u003d \u0027Capecitabine\u0027, given as \u0027Capecitabine (product)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eencounter who leads to this prescription\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0321",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "108761006",
              "display": "Capecitabine (product)"
            }
          ]
        }
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "active",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0321"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "1000 mg/m2 orally twice daily from days 1-14 of cycle",
        "timing": {
          "repeat": {
            "boundsPeriod": {
              "start": "2016-01-22",
              "end": "2016-02-04"
            },
            "frequency": 1,
            "period": 2,
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
              "value": 1000,
              "unit": "mg/m2",
              "system": "http://unitsofmeasure.org",
              "code": "mg/m2"
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
    "resourceType": "MedicationRequest",
    "id": "medrx0310",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0310\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: active\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: id: med0309; Tylenol PM \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u002750580-506-02\u0027 \u003d \u0027n/a\u0027, given as \u0027Tylenol PM\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eencounter who leads to this prescription\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
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
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "active",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0309"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
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
  },
  {
    "resourceType": "MedicationRequest",
    "id": "medrx0312",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0312\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: active\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Phenytoin 25mg/ml oral suspension \u003cspan\u003e(Details : {RxNorm code \u00271313112\u0027 \u003d \u0027Phenytoin 25 MG/ML Oral Suspension\u0027, given as \u0027Phenytoin 25mg/ml oral suspension\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Status epilepticus (disorder) \u003cspan\u003e(Details : {SNOMED CT code \u0027230456007\u0027 \u003d \u0027Status epilepticus\u0027, given as \u0027Status epilepticus (disorder)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: Patient should be counselled to ensure good dental hygiene\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003ch3\u003eDispenseRequests\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eValidityPeriod\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eNumberOfRepeatsAllowed\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eQuantity\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eExpectedSupplyDuration\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e15/01/2015 --\u0026gt; 15/01/2016\u003c/td\u003e\u003ctd\u003e3\u003c/td\u003e\u003ctd\u003e360 mL\u003cspan\u003e (Details: UCUM code mL \u003d \u0027mL\u0027)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e30 days\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003ch3\u003eSubstitutions\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAllowed[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eReason\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003etrue\u003c/td\u003e\u003ctd\u003eContinuing therapy \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code \u0027CT\u0027 \u003d \u0027continuing therapy\u0027, given as \u0027Continuing therapy\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003epriorPrescription\u003c/b\u003e: \u003ca\u003eMedicationRequest/medrx0304\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "active",
    "intent": "order",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "1313112",
          "display": "Phenytoin 25mg/ml oral suspension"
        }
      ]
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "230456007",
            "display": "Status epilepticus (disorder)"
          }
        ]
      }
    ],
    "note": [
      {
        "text": "Patient should be counselled to ensure good dental hygiene"
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "100mg (4ml) three times daily",
        "timing": {
          "repeat": {
            "frequency": 3,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route (qualifier value)"
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
              "value": 100,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ]
      }
    ],
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "numberOfRepeatsAllowed": 3,
      "quantity": {
        "value": 360,
        "unit": "mL",
        "system": "http://unitsofmeasure.org",
        "code": "mL"
      },
      "expectedSupplyDuration": {
        "value": 30,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      }
    },
    "substitution": {
      "allowedBoolean": true,
      "reason": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "CT",
            "display": "Continuing therapy"
          }
        ]
      }
    },
    "priorPrescription": {
      "reference": "MedicationRequest/medrx0304"
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
    "resourceType": "MedicationRequest",
    "id": "medrx0313",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medrx0313\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345689 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: order\u003c/p\u003e\u003cp\u003e\u003cb\u003emedication\u003c/b\u003e: Azithromycin 250mg capsule (product) \u003cspan\u003e(Details : {SNOMED CT code \u0027324252006\u0027 \u003d \u0027Azithromycin 250mg capsule\u0027, given as \u0027Azithromycin 250mg capsule (product)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eDonald Duck\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eauthoredOn\u003c/b\u003e: 15/01/2015\u003c/p\u003e\u003cp\u003e\u003cb\u003erequester\u003c/b\u003e: \u003ca\u003ePatrick Pump\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Traveller\u0027s Diarrhea (disorder) \u003cspan\u003e(Details : {SNOMED CT code \u002711840006\u0027 \u003d \u0027Traveler\u0027s diarrhea\u0027, given as \u0027Traveller\u0027s Diarrhea (disorder)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edosageInstruction\u003c/b\u003e: \u003c/p\u003e\u003ch3\u003eDispenseRequests\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eValidityPeriod\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eQuantity\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eExpectedSupplyDuration\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e15/01/2015 --\u0026gt; 15/01/2016\u003c/td\u003e\u003ctd\u003e5 Tab\u003cspan\u003e (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Tab \u003d \u0027Tab\u0027)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e5 days\u003cspan\u003e (Details: UCUM code d \u003d \u0027d\u0027)\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003epriorPrescription\u003c/b\u003e: \u003ca\u003eVancomycin IV\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "completed",
    "intent": "order",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "324252006",
          "display": "Azithromycin 250mg capsule (product)"
        }
      ]
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "11840006",
            "display": "Traveller\u0027s Diarrhea (disorder)"
          }
        ]
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "500mg daily for 5 days",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "421984009",
                "display": "Until finished - dosing instruction fragment (qualifier value)"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
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
              "display": "Oral Route (qualifier value)"
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
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "quantity": {
        "value": 5,
        "unit": "Tab",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "Tab"
      },
      "expectedSupplyDuration": {
        "value": 5,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      }
    },
    "priorPrescription": {
      "reference": "MedicationRequest/medrx0318",
      "display": "Vancomycin IV"
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

export const medicationRequestBundle = bundleResource('MedicationRequest', resourceData);

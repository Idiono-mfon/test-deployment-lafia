import { bundleResource } from './bundleResource';

const resourceData = [
  {
    "fullUrl": "http://local.fhir.org:960/r4/Condition/example",
    "resource": {
      "resourceType": "Condition",
      "id": "example",
      "meta": {
        "versionId": "1",
        "lastUpdated": "2018-11-12T03:34:46.552Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eSevere burn of left ear (Date: 24-May 2012)\u003c/div\u003e"
      },
      "clinicalStatus": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
            "code": "active"
          }
        ]
      },
      "verificationStatus": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            "code": "confirmed"
          }
        ]
      },
      "category": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-category",
              "code": "encounter-diagnosis",
              "display": "Encounter Diagnosis"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "439401001",
              "display": "Diagnosis"
            }
          ]
        }
      ],
      "severity": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "24484000",
            "display": "Severe"
          }
        ]
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "39065001",
            "display": "Burn of ear"
          }
        ],
        "text": "Burnt Ear"
      },
      "bodySite": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "49521004",
              "display": "Left external ear structure"
            }
          ],
          "text": "Left Ear"
        }
      ],
      "subject": {
        "reference": "Patient/example"
      },
      "onsetDateTime": "2012-05-24"
    },
    "search": {
      "mode": "match"
    }
  },
  {
    "fullUrl": "http://local.fhir.org:960/r4/Condition/example2",
    "resource": {
      "resourceType": "Condition",
      "id": "example2",
      "meta": {
        "versionId": "1",
        "lastUpdated": "2018-11-12T03:34:46.626Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eMild Asthma (Date: 12-Nov 2012)\u003c/div\u003e"
      },
      "clinicalStatus": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
            "code": "active"
          }
        ]
      },
      "verificationStatus": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            "code": "confirmed"
          }
        ]
      },
      "category": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-category",
              "code": "problem-list-item",
              "display": "Problem List Item"
            }
          ]
        }
      ],
      "severity": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "255604002",
            "display": "Mild"
          }
        ]
      },
      "code": {
        "text": "Asthma"
      },
      "subject": {
        "reference": "Patient/example"
      },
      "onsetString": "approximately November 2012"
    },
    "search": {
      "mode": "match"
    }
  },
  {
    "fullUrl": "http://local.fhir.org:960/r4/Condition/family-history",
    "resource": {
      "resourceType": "Condition",
      "id": "family-history",
      "meta": {
        "versionId": "1",
        "lastUpdated": "2018-11-12T03:34:47.274Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eFamily history of cancer of colon\u003c/div\u003e"
      },
      "clinicalStatus": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
            "code": "active"
          }
        ]
      },
      "category": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-category",
              "code": "problem-list-item",
              "display": "Problem List Item"
            }
          ]
        }
      ],
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "312824007",
            "display": "Family history of cancer of colon"
          }
        ]
      },
      "subject": {
        "reference": "Patient/example"
      }
    },
    "search": {
      "mode": "match"
    }
  },
  {
    "fullUrl": "http://local.fhir.org:960/r4/Condition/stroke",
    "resource": {
      "resourceType": "Condition",
      "id": "stroke",
      "meta": {
        "versionId": "1",
        "lastUpdated": "2018-11-12T03:34:47.337Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eIschemic stroke, July 18, 2010\u003c/div\u003e"
      },
      "clinicalStatus": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
            "code": "active"
          }
        ]
      },
      "verificationStatus": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            "code": "confirmed"
          }
        ]
      },
      "category": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-category",
              "code": "encounter-diagnosis",
              "display": "Encounter Diagnosis"
            }
          ]
        }
      ],
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "422504002",
            "display": "Ischemic stroke (disorder)"
          }
        ],
        "text": "Stroke"
      },
      "subject": {
        "reference": "Patient/example"
      },
      "onsetDateTime": "2010-07-18"
    },
    "search": {
      "mode": "match"
    }
  },
  {
    "resourceType": "Condition",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f001\u003c/p\u003e\u003cp\u003e\u003cb\u003eclinicalStatus\u003c/b\u003e: Active \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code \u0027active\u0027 \u003d \u0027Active)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003everificationStatus\u003c/b\u003e: Confirmed \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code \u0027confirmed\u0027 \u003d \u0027Confirmed)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: diagnosis \u003cspan\u003e(Details : {SNOMED CT code \u0027439401001\u0027 \u003d \u0027Diagnosis\u0027, given as \u0027diagnosis\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eseverity\u003c/b\u003e: Moderate \u003cspan\u003e(Details : {SNOMED CT code \u00276736007\u0027 \u003d \u0027Moderate\u0027, given as \u0027Moderate\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Heart valve disorder \u003cspan\u003e(Details : {SNOMED CT code \u0027368009\u0027 \u003d \u0027Heart valve disorder\u0027, given as \u0027Heart valve disorder\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: heart structure \u003cspan\u003e(Details : {SNOMED CT code \u002740768004\u0027 \u003d \u0027Left thorax\u0027, given as \u0027Left thorax\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/f001\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eonset\u003c/b\u003e: 05/08/2011\u003c/p\u003e\u003cp\u003e\u003cb\u003erecordedDate\u003c/b\u003e: 05/10/2011\u003c/p\u003e\u003cp\u003e\u003cb\u003easserter\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eEvidences\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eCardiac chest pain \u003cspan\u003e(Details : {SNOMED CT code \u0027426396005\u0027 \u003d \u0027Cardiac chest pain\u0027, given as \u0027Cardiac chest pain\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "439401001",
            "display": "diagnosis"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "6736007",
          "display": "Moderate"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "368009",
          "display": "Heart valve disorder"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "40768004",
            "display": "Left thorax"
          }
        ],
        "text": "heart structure"
      }
    ],
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "encounter": {
      "reference": "Encounter/f001"
    },
    "onsetDateTime": "2011-08-05",
    "recordedDate": "2011-10-05",
    "asserter": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "evidence": [
      {
        "code": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "426396005",
                "display": "Cardiac chest pain"
              }
            ]
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
    "resourceType": "Condition",
    "id": "f002",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f002\u003c/p\u003e\u003cp\u003e\u003cb\u003eclinicalStatus\u003c/b\u003e: Active \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code \u0027active\u0027 \u003d \u0027Active)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003everificationStatus\u003c/b\u003e: Confirmed \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code \u0027confirmed\u0027 \u003d \u0027Confirmed)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: diagnosis \u003cspan\u003e(Details : {SNOMED CT code \u0027439401001\u0027 \u003d \u0027Diagnosis\u0027, given as \u0027diagnosis\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eseverity\u003c/b\u003e: Severe \u003cspan\u003e(Details : {SNOMED CT code \u002724484000\u0027 \u003d \u0027Severe\u0027, given as \u0027Severe\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: NSCLC - Non-small cell lung cancer \u003cspan\u003e(Details : {SNOMED CT code \u0027254637007\u0027 \u003d \u0027Non-small cell lung cancer\u0027, given as \u0027NSCLC - Non-small cell lung cancer\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Thorax \u003cspan\u003e(Details : {SNOMED CT code \u002751185008\u0027 \u003d \u0027Thorax\u0027, given as \u0027Thorax\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/f002\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eonset\u003c/b\u003e: 05/05/2011\u003c/p\u003e\u003cp\u003e\u003cb\u003erecordedDate\u003c/b\u003e: 03/06/2012\u003c/p\u003e\u003cp\u003e\u003cb\u003easserter\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eStages\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eSummary\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eType\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003estage II \u003cspan\u003e(Details : {SNOMED CT code \u0027258219007\u0027 \u003d \u0027Stage 2\u0027, given as \u0027stage II\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003eClinical staging (qualifier value) \u003cspan\u003e(Details : {SNOMED CT code \u0027260998006\u0027 \u003d \u0027cS - Clinical staging\u0027, given as \u0027Clinical staging (qualifier value)\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003ch3\u003eEvidences\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eCT of thorax \u003cspan\u003e(Details : {SNOMED CT code \u0027169069000\u0027 \u003d \u0027CT of chest\u0027, given as \u0027CT of thorax\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "439401001",
            "display": "diagnosis"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "24484000",
          "display": "Severe"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "254637007",
          "display": "NSCLC - Non-small cell lung cancer"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "51185008",
            "display": "Thorax"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "encounter": {
      "reference": "Encounter/f002"
    },
    "onsetDateTime": "2011-05-05",
    "recordedDate": "2012-06-03",
    "asserter": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "stage": [
      {
        "summary": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "258219007",
              "display": "stage II"
            }
          ]
        },
        "type": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "260998006",
              "display": "Clinical staging (qualifier value)"
            }
          ]
        }
      }
    ],
    "evidence": [
      {
        "code": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "169069000",
                "display": "CT of thorax"
              }
            ]
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
    "resourceType": "Condition",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f003\u003c/p\u003e\u003cp\u003e\u003cb\u003eclinicalStatus\u003c/b\u003e: Active \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code \u0027active\u0027 \u003d \u0027Active)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003everificationStatus\u003c/b\u003e: Confirmed \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code \u0027confirmed\u0027 \u003d \u0027Confirmed)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: diagnosis \u003cspan\u003e(Details : {SNOMED CT code \u0027439401001\u0027 \u003d \u0027Diagnosis\u0027, given as \u0027diagnosis\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eseverity\u003c/b\u003e: Mild to moderate \u003cspan\u003e(Details : {SNOMED CT code \u0027371923003\u0027 \u003d \u0027Mild to moderate\u0027, given as \u0027Mild to moderate\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Retropharyngeal abscess \u003cspan\u003e(Details : {SNOMED CT code \u002718099001\u0027 \u003d \u0027Retropharyngeal abscess\u0027, given as \u0027Retropharyngeal abscess\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Entire retropharyngeal area \u003cspan\u003e(Details : {SNOMED CT code \u0027280193007\u0027 \u003d \u0027Retropharyngeal space\u0027, given as \u0027Entire retropharyngeal area\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/f003\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eonset\u003c/b\u003e: 27/02/2012\u003c/p\u003e\u003cp\u003e\u003cb\u003erecordedDate\u003c/b\u003e: 20/02/2012\u003c/p\u003e\u003cp\u003e\u003cb\u003easserter\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eEvidences\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eCT of neck \u003cspan\u003e(Details : {SNOMED CT code \u0027169068008\u0027 \u003d \u0027CT of neck\u0027, given as \u0027CT of neck\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "439401001",
            "display": "diagnosis"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "371923003",
          "display": "Mild to moderate"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "18099001",
          "display": "Retropharyngeal abscess"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "280193007",
            "display": "Entire retropharyngeal area"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "encounter": {
      "reference": "Encounter/f003"
    },
    "onsetDateTime": "2012-02-27",
    "recordedDate": "2012-02-20",
    "asserter": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "evidence": [
      {
        "code": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "169068008",
                "display": "CT of neck"
              }
            ]
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
    "resourceType": "Condition",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f201\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345\u003c/p\u003e\u003cp\u003e\u003cb\u003eclinicalStatus\u003c/b\u003e: Resolved \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code \u0027resolved\u0027 \u003d \u0027Resolved)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003everificationStatus\u003c/b\u003e: Confirmed \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code \u0027confirmed\u0027 \u003d \u0027Confirmed)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Problem \u003cspan\u003e(Details : {SNOMED CT code \u002755607006\u0027 \u003d \u0027Problem\u0027, given as \u0027Problem\u0027}; {http://terminology.hl7.org/CodeSystem/condition-category code \u0027problem-list-item\u0027 \u003d \u0027Problem List Item)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eseverity\u003c/b\u003e: Mild \u003cspan\u003e(Details : {SNOMED CT code \u0027255604002\u0027 \u003d \u0027Mild\u0027, given as \u0027Mild\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Fever \u003cspan\u003e(Details : {SNOMED CT code \u0027386661006\u0027 \u003d \u0027Fever\u0027, given as \u0027Fever\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Entire body as a whole \u003cspan\u003e(Details : {SNOMED CT code \u002738266002\u0027 \u003d \u0027Body as a whole\u0027, given as \u0027Entire body as a whole\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/f201\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eonset\u003c/b\u003e: 02/04/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003eabatement\u003c/b\u003e: around April 9, 2013\u003c/p\u003e\u003cp\u003e\u003cb\u003erecordedDate\u003c/b\u003e: 04/04/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003erecorder\u003c/b\u003e: \u003ca\u003ePractitioner/f201\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003easserter\u003c/b\u003e: \u003ca\u003ePractitioner/f201\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eEvidences\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDetail\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003edegrees C \u003cspan\u003e(Details : {SNOMED CT code \u0027258710007\u0027 \u003d \u0027degrees C\u0027, given as \u0027degrees C\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003eTemperature\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "value": "12345"
      }
    ],
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "resolved"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "55607006",
            "display": "Problem"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "problem-list-item"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "255604002",
          "display": "Mild"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "386661006",
          "display": "Fever"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "38266002",
            "display": "Entire body as a whole"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "encounter": {
      "reference": "Encounter/f201"
    },
    "onsetDateTime": "2013-04-02",
    "abatementString": "around April 9, 2013",
    "recordedDate": "2013-04-04",
    "recorder": {
      "reference": "Practitioner/f201"
    },
    "asserter": {
      "reference": "Practitioner/f201"
    },
    "evidence": [
      {
        "code": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "258710007",
                "display": "degrees C"
              }
            ]
          }
        ],
        "detail": [
          {
            "reference": "Observation/f202",
            "display": "Temperature"
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
    "resourceType": "Condition",
    "id": "f202",
    "meta": {
      "security": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "TBOO",
          "display": "taboo"
        }
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
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f202\u003c/p\u003e\u003cp\u003e\u003cb\u003emeta\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eclinicalStatus\u003c/b\u003e: Resolved \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code \u0027resolved\u0027 \u003d \u0027Resolved)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003everificationStatus\u003c/b\u003e: Confirmed \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code \u0027confirmed\u0027 \u003d \u0027Confirmed)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Encounter Diagnosis \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-category code \u0027encounter-diagnosis\u0027 \u003d \u0027Encounter Diagnosis)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eseverity\u003c/b\u003e: Severe \u003cspan\u003e(Details : {SNOMED CT code \u002724484000\u0027 \u003d \u0027Severe\u0027, given as \u0027Severe\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Malignant neoplastic disease \u003cspan\u003e(Details : {SNOMED CT code \u0027363346000\u0027 \u003d \u0027Malignant tumour\u0027, given as \u0027Malignant neoplastic disease\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Entire head and neck \u003cspan\u003e(Details : {SNOMED CT code \u0027361355005\u0027 \u003d \u0027Entire head and neck\u0027, given as \u0027Entire head and neck\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eonset\u003c/b\u003e: 52 years\u003cspan\u003e (Details: UCUM code a \u003d \u0027a\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eabatement\u003c/b\u003e: 54 years\u003cspan\u003e (Details: UCUM code a \u003d \u0027a\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003erecordedDate\u003c/b\u003e: 01/12/2012\u003c/p\u003e\u003ch3\u003eEvidences\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDetail\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003eErasmus\u0027 diagnostic report of Roel\u0027s tumor\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "resolved"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "encounter-diagnosis"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "24484000",
          "display": "Severe"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "363346000",
          "display": "Malignant neoplastic disease"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "361355005",
            "display": "Entire head and neck"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "onsetAge": {
      "value": 52,
      "unit": "years",
      "system": "http://unitsofmeasure.org",
      "code": "a"
    },
    "abatementAge": {
      "value": 54,
      "unit": "years",
      "system": "http://unitsofmeasure.org",
      "code": "a"
    },
    "recordedDate": "2012-12-01",
    "evidence": [
      {
        "detail": [
          {
            "reference": "DiagnosticReport/f201",
            "display": "Erasmus\u0027 diagnostic report of Roel\u0027s tumor"
          }
        ]
      }
    ]
  },
  {
    "resourceType": "Condition",
    "id": "f203",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f203\u003c/p\u003e\u003cp\u003e\u003cb\u003eclinicalStatus\u003c/b\u003e: Active \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code \u0027active\u0027 \u003d \u0027Active)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003everificationStatus\u003c/b\u003e: Confirmed \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code \u0027confirmed\u0027 \u003d \u0027Confirmed)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Problem \u003cspan\u003e(Details : {SNOMED CT code \u002755607006\u0027 \u003d \u0027Problem\u0027, given as \u0027Problem\u0027}; {http://terminology.hl7.org/CodeSystem/condition-category code \u0027problem-list-item\u0027 \u003d \u0027Problem List Item)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eseverity\u003c/b\u003e: Moderate to severe \u003cspan\u003e(Details : {SNOMED CT code \u0027371924009\u0027 \u003d \u0027Moderate to severe\u0027, given as \u0027Moderate to severe\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Bacterial sepsis \u003cspan\u003e(Details : {SNOMED CT code \u002710001005\u0027 \u003d \u0027Bacterial septicemia\u0027, given as \u0027Bacterial sepsis\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Pulmonary vascular structure \u003cspan\u003e(Details : {SNOMED CT code \u0027281158006\u0027 \u003d \u0027Pulmonary vascular structure\u0027, given as \u0027Pulmonary vascular structure\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eRoel\u0027s encounter on March elevanth\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eonset\u003c/b\u003e: 08/03/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003erecordedDate\u003c/b\u003e: 11/03/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003easserter\u003c/b\u003e: \u003ca\u003ePractitioner/f201\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eEvidences\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDetail\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003eDiagnostic report for Roel\u0027s sepsis\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "55607006",
            "display": "Problem"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "problem-list-item"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "371924009",
          "display": "Moderate to severe"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "10001005",
          "display": "Bacterial sepsis"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "281158006",
            "display": "Pulmonary vascular structure"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "encounter": {
      "reference": "Encounter/f203",
      "display": "Roel\u0027s encounter on March elevanth"
    },
    "onsetDateTime": "2013-03-08",
    "recordedDate": "2013-03-11",
    "asserter": {
      "reference": "Practitioner/f201"
    },
    "evidence": [
      {
        "detail": [
          {
            "reference": "DiagnosticReport/f202",
            "display": "Diagnostic report for Roel\u0027s sepsis"
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
    "resourceType": "Condition",
    "id": "f204",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f204\u003c/p\u003e\u003cp\u003e\u003cb\u003eclinicalStatus\u003c/b\u003e: Inactive \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code \u0027inactive\u0027 \u003d \u0027Inactive)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003everificationStatus\u003c/b\u003e: Differential \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code \u0027differential\u0027 \u003d \u0027Differential)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Problem \u003cspan\u003e(Details : {SNOMED CT code \u002755607006\u0027 \u003d \u0027Problem\u0027, given as \u0027Problem\u0027}; {http://terminology.hl7.org/CodeSystem/condition-category code \u0027problem-list-item\u0027 \u003d \u0027Problem List Item)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eseverity\u003c/b\u003e: Severe \u003cspan\u003e(Details : {SNOMED CT code \u002724484000\u0027 \u003d \u0027Severe\u0027, given as \u0027Severe\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Acute renal insufficiency specified as due to procedure \u003cspan\u003e(Details : {SNOMED CT code \u002736225005\u0027 \u003d \u0027Acute renal failure due to procedure\u0027, given as \u0027Acute renal insufficiency specified as due to procedure\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Kidney \u003cspan\u003e(Details : {SNOMED CT code \u0027181414000\u0027 \u003d \u0027Kidney\u0027, given as \u0027Kidney\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eRoel\u0027s encounter on March elevanth\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eonset\u003c/b\u003e: 11/03/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003eabatement\u003c/b\u003e: 20/03/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003erecordedDate\u003c/b\u003e: 11/03/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003easserter\u003c/b\u003e: \u003ca\u003ePractitioner/f201\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eStages\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eSummary\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAssessment\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eTemporary \u003cspan\u003e(Details : {SNOMED CT code \u002714803004\u0027 \u003d \u0027Transitory\u0027, given as \u0027Temporary\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003eGenetic analysis master panel\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: The patient is anuric.\u003c/p\u003e\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "inactive"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "differential"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "55607006",
            "display": "Problem"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "problem-list-item"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "24484000",
          "display": "Severe"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "36225005",
          "display": "Acute renal insufficiency specified as due to procedure"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "181414000",
            "display": "Kidney"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "encounter": {
      "reference": "Encounter/f203",
      "display": "Roel\u0027s encounter on March elevanth"
    },
    "onsetDateTime": "2013-03-11",
    "abatementDateTime": "2013-03-20",
    "recordedDate": "2013-03-11",
    "asserter": {
      "reference": "Practitioner/f201"
    },
    "stage": [
      {
        "summary": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "14803004",
              "display": "Temporary"
            }
          ]
        },
        "assessment": [
          {
            "display": "Genetic analysis master panel"
          }
        ]
      }
    ],
    "note": [
      {
        "text": "The patient is anuric."
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
    "resourceType": "Condition",
    "id": "f205",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f205\u003c/p\u003e\u003cp\u003e\u003cb\u003eclinicalStatus\u003c/b\u003e: Active \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code \u0027active\u0027 \u003d \u0027Active)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003everificationStatus\u003c/b\u003e: Differential \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code \u0027differential\u0027 \u003d \u0027Differential)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Bacterial infectious disease \u003cspan\u003e(Details : {SNOMED CT code \u002787628006\u0027 \u003d \u0027Bacterial infectious disease\u0027, given as \u0027Bacterial infectious disease\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003erecordedDate\u003c/b\u003e: 04/04/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003easserter\u003c/b\u003e: \u003ca\u003ePractitioner/f201\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "differential"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "87628006",
          "display": "Bacterial infectious disease"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "recordedDate": "2013-04-04",
    "asserter": {
      "reference": "Practitioner/f201"
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
    "resourceType": "Condition",
    "id": "family-history",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eFamily history of cancer of colon\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "problem-list-item",
            "display": "Problem List Item"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "312824007",
          "display": "Family history of cancer of colon"
        }
      ]
    },
    "subject": {
      "reference": "Patient/example"
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
    "resourceType": "Condition",
    "id": "stroke",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eIschemic stroke, July 18, 2010\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "encounter-diagnosis",
            "display": "Encounter Diagnosis"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "422504002",
          "display": "Ischemic stroke (disorder)"
        }
      ],
      "text": "Stroke"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "onsetDateTime": "2010-07-18",
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
    "resourceType": "Condition",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eSevere burn of left ear (Date: 24-May 2012)\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "encounter-diagnosis",
            "display": "Encounter Diagnosis"
          },
          {
            "system": "http://snomed.info/sct",
            "code": "439401001",
            "display": "Diagnosis"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "24484000",
          "display": "Severe"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "39065001",
          "display": "Burn of ear"
        }
      ],
      "text": "Burnt Ear"
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "49521004",
            "display": "Left external ear structure"
          }
        ],
        "text": "Left Ear"
      }
    ],
    "subject": {
      "reference": "Patient/example"
    },
    "onsetDateTime": "2012-05-24",
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
    "resourceType": "Condition",
    "id": "example2",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eMild Asthma (Date: 12-Nov 2012)\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "problem-list-item",
            "display": "Problem List Item"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "255604002",
          "display": "Mild"
        }
      ]
    },
    "code": {
      "text": "Asthma"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "onsetString": "approximately November 2012",
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


export  const conditionBundle = bundleResource('Condition', resourceData);

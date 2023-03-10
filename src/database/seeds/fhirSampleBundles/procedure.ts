import { bundleResource } from './bundleResource';

const resourceData = [
  {
    "resourceType": "Procedure",
    "id": "ambulation",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eAmbulation procedure was not done\u003c/div\u003e"
    },
    "identifier": [
      {
        "value": "12345"
      }
    ],
    "instantiatesUri": [
      "http://example.org/protocol-for-hypertension-during-pregnancy"
    ],
    "basedOn": [
      {
        "reference": "CarePlan/preg",
        "display": "Maternity care plan"
      }
    ],
    "status": "not-done",
    "statusReason": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "398254007",
          "display": "  Pre-eclampsia (disorder)"
        }
      ],
      "text": "Pre-eclampsia"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "62013009",
          "display": "Ambulating patient (procedure)"
        }
      ],
      "text": "Ambulation"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f204",
          "display": "Carla Espinosa"
        },
        "onBehalfOf": {
          "reference": "Organization/f001",
          "display": "University Medical Hospital"
        }
      }
    ],
    "location": {
      "reference": "Location/1",
      "display": "Burgers University Medical Center, South Wing, second floor"
    },
    "reasonReference": [
      {
        "reference": "Observation/blood-pressure",
        "display": "Blood Pressure"
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
    "resourceType": "Procedure",
    "id": "appendectomy-narrative",
    "text": {
      "status": "additional",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eRoutine Appendectomy in April 2013 performed by Dr Cecil Surgeon\u003c/div\u003e"
    },
    "status": "completed",
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
    "resourceType": "Procedure",
    "id": "biopsy",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eBiopsy of suspected melanoma L) arm\u003c/div\u003e"
    },
    "status": "completed",
    "category": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "103693007",
          "display": "Diagnostic procedure (procedure)"
        }
      ],
      "text": "Diagnostic procedure"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "90105005",
          "display": "Biopsy of soft tissue of forearm (Procedure)"
        }
      ],
      "text": "Biopsy of suspected melanoma L) arm"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performedDateTime": "2014-02-03",
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/example",
          "display": "Dr Bert Biopser"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "Dark lesion l) forearm. getting darker last 3 months."
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "368225008",
            "display": "Entire Left Forearm"
          }
        ],
        "text": "Left forearm"
      }
    ],
    "complication": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "67750007",
            "display": "Ineffective airway clearance (finding)"
          }
        ],
        "text": "Ineffective airway clearance"
      }
    ],
    "followUp": [
      {
        "text": "Review in clinic"
      }
    ],
    "note": [
      {
        "text": "Standard Biopsy"
      }
    ],
    "usedCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "79068005",
            "display": "Needle, device (physical object)"
          }
        ],
        "text": "30-guage needle"
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
    "resourceType": "Procedure",
    "id": "colon-biopsy",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eBiopsy of colon, which was part of colonoscopy\u003c/div\u003e"
    },
    "identifier": [
      {
        "value": "12345"
      }
    ],
    "partOf": [
      {
        "reference": "Procedure/colonoscopy",
        "display": "Colonoscopy"
      }
    ],
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "76164006",
          "display": "Biopsy of colon (procedure)"
        }
      ],
      "text": "Biopsy of colon"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/example",
          "display": "Dr Adam Careful"
        }
      }
    ],
    "location": {
      "reference": "Location/1",
      "display": "Burgers University Medical Center, South Wing, second floor"
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
    "resourceType": "Procedure",
    "id": "colonoscopy",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eColonoscopy with complication\u003c/div\u003e"
    },
    "identifier": [
      {
        "value": "12345"
      }
    ],
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "73761001",
          "display": "Colonoscopy (procedure)"
        }
      ],
      "text": "Colonoscopy"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/example",
          "display": "Dr Adam Careful"
        }
      }
    ],
    "location": {
      "reference": "Location/1",
      "display": "Burgers University Medical Center, South Wing, second floor"
    },
    "complicationDetail": [
      {
        "display": "Perforated intestine condition"
      }
    ],
    "usedReference": [
      {
        "display": "Colonoscope device"
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
    "resourceType": "Procedure",
    "id": "education",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eHealth education - breast examination for early detection of breast mass\u003c/div\u003e"
    },
    "basedOn": [
      {
        "reference": "ServiceRequest/education",
        "display": "Order for health education"
      }
    ],
    "status": "completed",
    "category": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "311401005",
          "display": "Patient education (procedure)"
        }
      ],
      "text": "Education"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "48023004",
          "display": "Breast self-examination technique education (procedure)"
        }
      ],
      "text": "Health education - breast examination"
    },
    "subject": {
      "display": "Jane Doe"
    },
    "performedDateTime": "2014-08-16",
    "performer": [
      {
        "actor": {
          "display": "Pamela Educator, RN"
        }
      }
    ],
    "location": {
      "display": "Southside Community Health Center"
    },
    "reasonCode": [
      {
        "text": "early detection of breast mass"
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
    "resourceType": "Procedure",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f001\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Heart valve replacement \u003cspan\u003e(Details : {SNOMED CT code \u002734068001\u0027 \u003d \u0027Heart valve replacement\u0027, given as \u0027Heart valve replacement\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/f001\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformed\u003c/b\u003e: 26/06/2011 --\u0026gt; 27/06/2011\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eFunction\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eCare role \u003cspan\u003e(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code \u002701.000\u0027 \u003d \u002701.000\u0027, given as \u0027Arts\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003eP. Voigt\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Heart valve disorder \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Heart valve structure \u003cspan\u003e(Details : {SNOMED CT code \u002717401000\u0027 \u003d \u0027Cardiac valve\u0027, given as \u0027Heart valve structure\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eoutcome\u003c/b\u003e: improved blood circulation \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereport\u003c/b\u003e: \u003ca\u003eLab results blood test\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efollowUp\u003c/b\u003e: described in care plan \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "34068001",
          "display": "Heart valve replacement"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "encounter": {
      "reference": "Encounter/f001"
    },
    "performedPeriod": {
      "start": "2011-06-26",
      "end": "2011-06-27"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        },
        "actor": {
          "reference": "Practitioner/f002",
          "display": "P. Voigt"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "Heart valve disorder"
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "17401000",
            "display": "Heart valve structure"
          }
        ]
      }
    ],
    "outcome": {
      "text": "improved blood circulation"
    },
    "report": [
      {
        "reference": "DiagnosticReport/f001",
        "display": "Lab results blood test"
      }
    ],
    "followUp": [
      {
        "text": "described in care plan"
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
    "resourceType": "Procedure",
    "id": "f002",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f002\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Partial lobectomy of lung \u003cspan\u003e(Details : {SNOMED CT code \u0027359615001\u0027 \u003d \u0027Partial lobectomy of lung\u0027, given as \u0027Partial lobectomy of lung\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/f002\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformed\u003c/b\u003e: 08/03/2013 9:00:10 AM --\u0026gt; 08/03/2013 9:30:10 AM\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eFunction\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eCare role \u003cspan\u003e(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code \u002701.000\u0027 \u003d \u002701.000\u0027, given as \u0027Arts\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003eM.I.M. Versteegh\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Malignant tumor of lung \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Lung structure \u003cspan\u003e(Details : {SNOMED CT code \u002739607008\u0027 \u003d \u0027Lung\u0027, given as \u0027Lung structure\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eoutcome\u003c/b\u003e: improved blood circulation \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereport\u003c/b\u003e: \u003ca\u003eLab results blood test\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efollowUp\u003c/b\u003e: described in care plan \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "359615001",
          "display": "Partial lobectomy of lung"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "encounter": {
      "reference": "Encounter/f002"
    },
    "performedPeriod": {
      "start": "2013-03-08T09:00:10+01:00",
      "end": "2013-03-08T09:30:10+01:00"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        },
        "actor": {
          "reference": "Practitioner/f003",
          "display": "M.I.M. Versteegh"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "Malignant tumor of lung"
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "39607008",
            "display": "Lung structure"
          }
        ]
      }
    ],
    "outcome": {
      "text": "improved blood circulation"
    },
    "report": [
      {
        "reference": "DiagnosticReport/f001",
        "display": "Lab results blood test"
      }
    ],
    "followUp": [
      {
        "text": "described in care plan"
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
    "resourceType": "Procedure",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f003\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Incision of retropharyngeal abscess \u003cspan\u003e(Details : {SNOMED CT code \u0027172960003\u0027 \u003d \u0027Incision of retropharyngeal abscess\u0027, given as \u0027Incision of retropharyngeal abscess\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/f003\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformed\u003c/b\u003e: 24/03/2013 9:30:10 AM --\u0026gt; 24/03/2013 10:30:10 AM\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eFunction\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eCare role \u003cspan\u003e(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code \u002701.000\u0027 \u003d \u002701.000\u0027, given as \u0027Arts\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003eE.M.J.M. van den broek\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: abcess in retropharyngeal area \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Retropharyngeal area \u003cspan\u003e(Details : {SNOMED CT code \u002783030008\u0027 \u003d \u0027Retropharyngeal area\u0027, given as \u0027Retropharyngeal area\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eoutcome\u003c/b\u003e: removal of the retropharyngeal abscess \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereport\u003c/b\u003e: \u003ca\u003eLab results blood test\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efollowUp\u003c/b\u003e: described in care plan \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "172960003",
          "display": "Incision of retropharyngeal abscess"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "encounter": {
      "reference": "Encounter/f003"
    },
    "performedPeriod": {
      "start": "2013-03-24T09:30:10+01:00",
      "end": "2013-03-24T10:30:10+01:00"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        },
        "actor": {
          "reference": "Practitioner/f001",
          "display": "E.M.J.M. van den broek"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "abcess in retropharyngeal area"
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "83030008",
            "display": "Retropharyngeal area"
          }
        ]
      }
    ],
    "outcome": {
      "text": "removal of the retropharyngeal abscess"
    },
    "report": [
      {
        "reference": "DiagnosticReport/f001",
        "display": "Lab results blood test"
      }
    ],
    "followUp": [
      {
        "text": "described in care plan"
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
    "resourceType": "Procedure",
    "id": "f004",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f004\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Tracheotomy \u003cspan\u003e(Details : {SNOMED CT code \u002748387007\u0027 \u003d \u0027Incision of trachea\u0027, given as \u0027Tracheotomy\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eEncounter/f003\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformed\u003c/b\u003e: 22/03/2013 9:30:10 AM --\u0026gt; 22/03/2013 10:30:10 AM\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eFunction\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eCare role \u003cspan\u003e(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code \u002701.000\u0027 \u003d \u002701.000\u0027, given as \u0027Arts\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003eA. Langeveld\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: ensure breathing during surgery \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Retropharyngeal area \u003cspan\u003e(Details : {SNOMED CT code \u002783030008\u0027 \u003d \u0027Retropharyngeal area\u0027, given as \u0027Retropharyngeal area\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eoutcome\u003c/b\u003e: removal of the retropharyngeal abscess \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereport\u003c/b\u003e: \u003ca\u003e???????????\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efollowUp\u003c/b\u003e: described in care plan \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "48387007",
          "display": "Tracheotomy"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "encounter": {
      "reference": "Encounter/f003"
    },
    "performedPeriod": {
      "start": "2013-03-22T09:30:10+01:00",
      "end": "2013-03-22T10:30:10+01:00"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        },
        "actor": {
          "reference": "Practitioner/f005",
          "display": "A. Langeveld"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "ensure breathing during surgery"
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "83030008",
            "display": "Retropharyngeal area"
          }
        ]
      }
    ],
    "outcome": {
      "text": "removal of the retropharyngeal abscess"
    },
    "report": [
      {
        "reference": "DiagnosticReport/f001",
        "display": "???????????"
      }
    ],
    "followUp": [
      {
        "text": "described in care plan"
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
    "resourceType": "Procedure",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f201\u003c/p\u003e\u003cp\u003e\u003cb\u003einstantiatesCanonical\u003c/b\u003e: \u003ca\u003ePlanDefinition/KDN5\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Chemotherapy \u003cspan\u003e(Details : {SNOMED CT code \u0027367336001\u0027 \u003d \u0027Chemotherapy\u0027, given as \u0027Chemotherapy\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eencounter\u003c/b\u003e: \u003ca\u003eRoel\u0027s encounter on January 28th, 2013\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformed\u003c/b\u003e: 28/01/2013 1:31:00 PM --\u0026gt; 28/01/2013 2:27:00 PM\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eFunction\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eMedical oncologist \u003cspan\u003e(Details : {SNOMED CT code \u0027310512001\u0027 \u003d \u0027Medical oncologist\u0027, given as \u0027Medical oncologist\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003eDokter Bronsig\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: DiagnosticReport/f201 \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebodySite\u003c/b\u003e: Sphenoid bone \u003cspan\u003e(Details : {SNOMED CT code \u0027272676008\u0027 \u003d \u0027Entire sphenoid bone\u0027, given as \u0027Sphenoid bone\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: Eerste neo-adjuvante TPF-kuur bij groot proces in sphenoid met intracraniale uitbreiding.\u003c/p\u003e\u003c/div\u003e"
    },
    "instantiatesCanonical": [
      "PlanDefinition/KDN5"
    ],
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "367336001",
          "display": "Chemotherapy"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "encounter": {
      "reference": "Encounter/f202",
      "display": "Roel\u0027s encounter on January 28th, 2013"
    },
    "performedPeriod": {
      "start": "2013-01-28T13:31:00+01:00",
      "end": "2013-01-28T14:27:00+01:00"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "310512001",
              "display": "Medical oncologist"
            }
          ]
        },
        "actor": {
          "reference": "Practitioner/f201",
          "display": "Dokter Bronsig"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "DiagnosticReport/f201"
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "272676008",
            "display": "Sphenoid bone"
          }
        ]
      }
    ],
    "note": [
      {
        "text": "Eerste neo-adjuvante TPF-kuur bij groot proces in sphenoid met intracraniale uitbreiding."
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
    "resourceType": "Procedure",
    "id": "HCBS",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003e Personal care services provided at person\u0027s home\u003c/b\u003e\n\t\t\t\u003c/p\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003e Based On\u003c/b\u003e : Peter\u0027s Long Term Services and Supports (LTSS) care plan\u003c/p\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003e Status\u003c/b\u003e : completed\u003c/p\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003e Beneficiary\u003c/b\u003e : Peter James\u003c/p\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003e Service Name/Code\u003c/b\u003e : Personal care services \u003cspan\u003e (Details : {HCPCS code \u0027T1019\u0027 \u003d \u0027Personal care services, per 15 minutes\u0027})\u003c/span\u003e\n\t\t\t\u003c/p\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003e Service Date\u003c/b\u003e : Apr 5, 2018\u003c/p\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003e Service Provider\u003c/b\u003e : Adam Careful\u003c/p\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003e Service Delivery Address\u003c/b\u003e : Peter\u0027s home\u003c/p\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003e Service Comment\u003c/b\u003e : Assisted with bathing and dressing, doing laundry, and meal preparation\u003c/p\u003e\n\t\t\u003c/div\u003e"
    },
    "basedOn": [
      {
        "display": "Peter\u0027s Long Term Service and Supports (LTSS) Care Plan"
      }
    ],
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets/Alpha-Numeric-HCPCS.html",
          "code": "T1019",
          "display": "Personal care services, per 15 minutes, not for an inpatient or resident of a hospital, nursing facility, icf/mr or imd, part of the individualized plan of treatment."
        }
      ],
      "text": "Personal care services"
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James"
    },
    "performedDateTime": "2018-04-05",
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/example",
          "display": "Adam Careful"
        }
      }
    ],
    "location": {
      "reference": "Location/ph",
      "display": "Peter\u0027s Home"
    },
    "note": [
      {
        "text": "Assisted with bathing and dressing, doing laundry, and meal preparation"
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
    "resourceType": "Procedure",
    "id": "example-implant",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: example-implant\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Implant Pacemaker \u003cspan\u003e(Details : {SNOMED CT code \u002725267002\u0027 \u003d \u0027Insertion of intracardiac pacemaker\u0027, given as \u0027Insertion of intracardiac pacemaker (procedure)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformed\u003c/b\u003e: 05/04/2015\u003c/p\u003e\u003ch3\u003ePerformers\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eActor\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003eDr Cecil Surgeon\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Bradycardia \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003efollowUp\u003c/b\u003e: ROS 5 days  - 2013-04-10 \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: Routine Appendectomy. Appendix was inflamed and in retro-caecal position\u003c/p\u003e\u003ch3\u003eFocalDevices\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAction\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eManipulated\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eImplanted \u003cspan\u003e(Details : {http://hl7.org/fhir/device-action code \u0027implanted\u0027 \u003d \u0027Implanted)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003eDevice/example-pacemaker\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "25267002",
          "display": "Insertion of intracardiac pacemaker (procedure)"
        }
      ],
      "text": "Implant Pacemaker"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performedDateTime": "2015-04-05",
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/example",
          "display": "Dr Cecil Surgeon"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "Bradycardia"
      }
    ],
    "followUp": [
      {
        "text": "ROS 5 days  - 2013-04-10"
      }
    ],
    "note": [
      {
        "text": "Routine Appendectomy. Appendix was inflamed and in retro-caecal position"
      }
    ],
    "focalDevice": [
      {
        "action": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/device-action",
              "code": "implanted"
            }
          ]
        },
        "manipulated": {
          "reference": "Device/example-pacemaker"
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
    "resourceType": "Procedure",
    "id": "ob",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eVaginal delivery of healthy male infant on June 2, 2012\u003c/div\u003e"
    },
    "status": "completed",
    "category": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "386637004",
          "display": "Obstetric procedure (procedure)"
        }
      ],
      "text": "OB"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "22633006",
          "display": "Vaginal delivery, medical personnel present (procedure)"
        }
      ],
      "text": "Vaginal delivery"
    },
    "subject": {
      "display": "Jane Doe"
    },
    "performedDateTime": "2012-06-02",
    "performer": [
      {
        "actor": {
          "display": "Martha Midwife, RNP"
        }
      }
    ],
    "location": {
      "display": "Women???s Hospital"
    },
    "reasonCode": [
      {
        "text": "term pregnancy, active labor"
      }
    ],
    "outcome": {
      "text": "delivery of healthy male infant"
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
    "resourceType": "Procedure",
    "id": "physical-therapy",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eAssessment of passive range of motion for both knees on Sept 27, 2016 due to osteoarthritis\u003c/div\u003e"
    },
    "basedOn": [
      {
        "reference": "ServiceRequest/physical-therapy",
        "display": "Order for the assessment of passive range of motion"
      }
    ],
    "status": "completed",
    "category": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "386053000",
          "display": "Evaluation procedure (procedure)"
        }
      ],
      "text": "Evaluation"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "710830005",
          "display": "Assessment of passive range of motion (procedure)"
        }
      ],
      "text": "Assessment of passive range of motion"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performedDateTime": "2016-09-27",
    "performer": [
      {
        "actor": {
          "display": "Paul Therapist, PT"
        }
      }
    ],
    "location": {
      "display": "Sawbones Orthopedic Clinic"
    },
    "reasonCode": [
      {
        "text": "assessment of mobility limitations due to osteoarthritis"
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "36701003",
            "display": "Both knees (body structure)"
          }
        ],
        "text": "Both knees"
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

export const procedureBundle = bundleResource('Procedure', resourceData);

import { bundleResource } from './bundleResource';

const resourceData = [
  {
    "resourceType": "AllergyIntolerance",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: example\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 49476534\u003c/p\u003e\u003cp\u003e\u003cb\u003eclinicalStatus\u003c/b\u003e: Active \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical code \u0027active\u0027 \u003d \u0027Active\u0027, given as \u0027Active\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003everificationStatus\u003c/b\u003e: Confirmed \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-verification code \u0027confirmed\u0027 \u003d \u0027Confirmed\u0027, given as \u0027Confirmed\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: allergy\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: food\u003c/p\u003e\u003cp\u003e\u003cb\u003ecriticality\u003c/b\u003e: high\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Cashew nuts \u003cspan\u003e(Details : {SNOMED CT code \u0027227493005\u0027 \u003d \u0027Cashew nuts\u0027, given as \u0027Cashew nuts\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epatient\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eonset\u003c/b\u003e: 01/01/2004\u003c/p\u003e\u003cp\u003e\u003cb\u003erecordedDate\u003c/b\u003e: 09/10/2014 2:58:00 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003erecorder\u003c/b\u003e: \u003ca\u003ePractitioner/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003easserter\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003elastOccurrence\u003c/b\u003e: 01/06/2012\u003c/p\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract.\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ereaction\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubstance\u003c/b\u003e: cashew nut allergenic extract Injectable Product \u003cspan\u003e(Details : {RxNorm code \u00271160593\u0027 \u003d \u0027cashew nut allergenic extract Injectable Product\u0027, given as \u0027cashew nut allergenic extract Injectable Product\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003emanifestation\u003c/b\u003e: Anaphylactic reaction \u003cspan\u003e(Details : {SNOMED CT code \u002739579001\u0027 \u003d \u0027Anaphylaxis\u0027, given as \u0027Anaphylactic reaction\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003edescription\u003c/b\u003e: Challenge Protocol. Severe reaction to subcutaneous cashew extract. Epinephrine administered\u003c/p\u003e\u003cp\u003e\u003cb\u003eonset\u003c/b\u003e: 12/06/2012\u003c/p\u003e\u003cp\u003e\u003cb\u003eseverity\u003c/b\u003e: severe\u003c/p\u003e\u003cp\u003e\u003cb\u003eexposureRoute\u003c/b\u003e: Subcutaneous route \u003cspan\u003e(Details : {SNOMED CT code \u002734206005\u0027 \u003d \u0027Subcutaneous route\u0027, given as \u0027Subcutaneous route\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ereaction\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003emanifestation\u003c/b\u003e: Urticaria \u003cspan\u003e(Details : {SNOMED CT code \u002764305001\u0027 \u003d \u0027Urticaria\u0027, given as \u0027Urticaria\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eonset\u003c/b\u003e: 01/01/2004\u003c/p\u003e\u003cp\u003e\u003cb\u003eseverity\u003c/b\u003e: moderate\u003c/p\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: The patient reports that the onset of urticaria was within 15 minutes of eating cashews.\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "http://acme.com/ids/patients/risks",
        "value": "49476534"
      }
    ],
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          "code": "active",
          "display": "Active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          "code": "confirmed",
          "display": "Confirmed"
        }
      ]
    },
    "type": "allergy",
    "category": [
      "food"
    ],
    "criticality": "high",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "227493005",
          "display": "Cashew nuts"
        }
      ]
    },
    "patient": {
      "reference": "Patient/example"
    },
    "onsetDateTime": "2004",
    "recordedDate": "2014-10-09T14:58:00+11:00",
    "recorder": {
      "reference": "Practitioner/example"
    },
    "asserter": {
      "reference": "Patient/example"
    },
    "lastOccurrence": "2012-06",
    "note": [
      {
        "text": "The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract."
      }
    ],
    "reaction": [
      {
        "substance": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "1160593",
              "display": "cashew nut allergenic extract Injectable Product"
            }
          ]
        },
        "manifestation": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "39579001",
                "display": "Anaphylactic reaction"
              }
            ]
          }
        ],
        "description": "Challenge Protocol. Severe reaction to subcutaneous cashew extract. Epinephrine administered",
        "onset": "2012-06-12",
        "severity": "severe",
        "exposureRoute": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "34206005",
              "display": "Subcutaneous route"
            }
          ]
        }
      },
      {
        "manifestation": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "64305001",
                "display": "Urticaria"
              }
            ]
          }
        ],
        "onset": "2004",
        "severity": "moderate",
        "note": [
          {
            "text": "The patient reports that the onset of urticaria was within 15 minutes of eating cashews."
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
    "resourceType": "AllergyIntolerance",
    "id": "fishallergy",
    "text": {
      "status": "additional",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003eallergy is to fresh fish. Tolerates canned fish\u003c/p\u003e\n      \u003cp\u003erecordedDate:2015-08-06T00:00:00-06:00\u003c/p\u003e\n      \u003cp\u003esubstance:Fish - dietary (substance)\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "http://acme.com/ids/patients/risks",
        "value": "49476535"
      }
    ],
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          "code": "active",
          "display": "Active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          "code": "confirmed",
          "display": "Confirmed"
        }
      ]
    },
    "category": [
      "food"
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "227037002",
          "display": "Fish - dietary (substance)"
        }
      ],
      "text": "Allergic to fresh fish. Tolerates canned fish"
    },
    "patient": {
      "reference": "Patient/example"
    },
    "recordedDate": "2015-08-06T15:37:31-06:00",
    "recorder": {
      "reference": "Practitioner/example"
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
    "resourceType": "AllergyIntolerance",
    "id": "medication",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: medication\u003c/p\u003e\u003cp\u003e\u003cb\u003eclinicalStatus\u003c/b\u003e: Active \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical code \u0027active\u0027 \u003d \u0027Active\u0027, given as \u0027Active\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003everificationStatus\u003c/b\u003e: Unconfirmed \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-verification code \u0027unconfirmed\u0027 \u003d \u0027Unconfirmed\u0027, given as \u0027Unconfirmed\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: medication\u003c/p\u003e\u003cp\u003e\u003cb\u003ecriticality\u003c/b\u003e: high\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Penicillin G \u003cspan\u003e(Details : {RxNorm code \u00277980\u0027 \u003d \u0027Penicillin G\u0027, given as \u0027Penicillin G\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epatient\u003c/b\u003e: \u003ca\u003ePatient/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003erecordedDate\u003c/b\u003e: 01/03/2010\u003c/p\u003e\u003cp\u003e\u003cb\u003erecorder\u003c/b\u003e: \u003ca\u003ePractitioner/13\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eReactions\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eManifestation\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eHives \u003cspan\u003e(Details : {SNOMED CT code \u0027247472004\u0027 \u003d \u0027Weal\u0027, given as \u0027Hives\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          "code": "active",
          "display": "Active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          "code": "unconfirmed",
          "display": "Unconfirmed"
        }
      ]
    },
    "category": [
      "medication"
    ],
    "criticality": "high",
    "code": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "7980",
          "display": "Penicillin G"
        }
      ]
    },
    "patient": {
      "reference": "Patient/example"
    },
    "recordedDate": "2010-03-01",
    "recorder": {
      "reference": "Practitioner/13"
    },
    "reaction": [
      {
        "manifestation": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "247472004",
                "display": "Hives"
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
    "resourceType": "AllergyIntolerance",
    "id": "nka",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003eNo Known Allergy\u003c/p\u003e\n      \u003cp\u003erecordedDate:2015-08-06\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          "code": "active",
          "display": "Active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          "code": "confirmed",
          "display": "Confirmed"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "716186003",
          "display": "No Known Allergy (situation)"
        }
      ],
      "text": "NKA"
    },
    "patient": {
      "reference": "Patient/mom"
    },
    "recordedDate": "2015-08-06T15:37:31-06:00",
    "recorder": {
      "reference": "Practitioner/example"
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
    "resourceType": "AllergyIntolerance",
    "id": "nkda",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003eNo Known Drug Allergy\u003c/p\u003e\n      \u003cp\u003erecordedDate:2015-08-06\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          "code": "active",
          "display": "Active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          "code": "confirmed",
          "display": "Confirmed"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "409137002",
          "display": "No Known Drug Allergy (situation)"
        }
      ],
      "text": "NKDA"
    },
    "patient": {
      "reference": "Patient/mom"
    },
    "recordedDate": "2015-08-06T15:37:31-06:00",
    "recorder": {
      "reference": "Practitioner/example"
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
    "resourceType": "AllergyIntolerance",
    "id": "nkla",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003eNo Known Latex Allergy\u003c/p\u003e\n      \u003cp\u003erecordedDate:2015-08-06\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          "code": "active",
          "display": "Active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          "code": "confirmed",
          "display": "Confirmed"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "716184000",
          "display": "No Known Latex Allergy (situation)"
        }
      ],
      "text": "No Known Latex Allergy"
    },
    "patient": {
      "reference": "Patient/example"
    },
    "recordedDate": "2015-08-06T15:37:31-06:00",
    "recorder": {
      "reference": "Practitioner/example"
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
];

export const allergyIntoleranceBundle = bundleResource('AllergyIntolerance', resourceData);

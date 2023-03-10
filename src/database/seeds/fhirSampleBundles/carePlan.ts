import { bundleResource } from './bundleResource';

const resourceData = [
  {
    "resourceType": "CarePlan",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f001\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: , \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: CP2903 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: plan\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperiod\u003c/b\u003e: 26/06/2011 --\u0026gt; 27/06/2011\u003c/p\u003e\u003cp\u003e\u003cb\u003ecareTeam\u003c/b\u003e: id: careteam\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddresses\u003c/b\u003e: \u003ca\u003e?????\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003egoal\u003c/b\u003e: id: goal; lifecycleStatus: completed; Achieved \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/goal-achievement code \u0027achieved\u0027 \u003d \u0027Achieved\u0027, given as \u0027Achieved\u0027})\u003c/span\u003e; recovery surgery on heart of patient \u003cspan\u003e(Details )\u003c/span\u003e; Annotation: goal accomplished without complications\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eactivity\u003c/b\u003e\u003c/p\u003e\u003ch3\u003eDetails\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eKind\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eStatus\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDoNotPerform\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eScheduled[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePerformer\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eServiceRequest\u003c/td\u003e\u003ctd\u003eOperation on heart \u003cspan\u003e(Details : {SNOMED CT code \u002764915003\u0027 \u003d \u0027Operative procedure on heart\u0027, given as \u0027Operation on heart\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003ecompleted\u003c/td\u003e\u003ctd\u003etrue\u003c/td\u003e\u003ctd\u003e2011-06-27T09:30:10+01:00\u003c/td\u003e\u003ctd\u003e\u003ca\u003eP. Voigt\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "member": {
              "reference": "Practitioner/f002",
              "display": "P. Voigt"
            }
          }
        ]
      },
      {
        "resourceType": "Goal",
        "id": "goal",
        "lifecycleStatus": "completed",
        "achievementStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/goal-achievement",
              "code": "achieved",
              "display": "Achieved"
            }
          ],
          "text": "Achieved"
        },
        "description": {
          "text": "recovery surgery on heart of patient"
        },
        "subject": {
          "reference": "Patient/f001",
          "display": "P. van de Heuvel"
        },
        "note": [
          {
            "text": "goal accomplished without complications"
          }
        ]
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/careplans",
        "value": "CP2903"
      }
    ],
    "status": "completed",
    "intent": "plan",
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "period": {
      "start": "2011-06-26",
      "end": "2011-06-27"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "Condition/f201",
        "display": "?????"
      }
    ],
    "goal": [
      {
        "reference": "#goal"
      }
    ],
    "activity": [
      {
        "detail": {
          "kind": "ServiceRequest",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "64915003",
                "display": "Operation on heart"
              }
            ]
          },
          "status": "completed",
          "doNotPerform": true,
          "scheduledString": "2011-06-27T09:30:10+01:00",
          "performer": [
            {
              "reference": "Practitioner/f002",
              "display": "P. Voigt"
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
    "resourceType": "CarePlan",
    "id": "f002",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f002\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: , \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: CP2934 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: plan\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperiod\u003c/b\u003e: 06/07/2011 --\u0026gt; 07/07/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003ecareTeam\u003c/b\u003e: id: careteam\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddresses\u003c/b\u003e: \u003ca\u003e?????\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003egoal\u003c/b\u003e: id: goal; lifecycleStatus: completed; Achieved \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/goal-achievement code \u0027achieved\u0027 \u003d \u0027Achieved\u0027, given as \u0027Achieved\u0027})\u003c/span\u003e; succesful surgery on lung of patient \u003cspan\u003e(Details )\u003c/span\u003e; Annotation: goal accomplished with minor complications\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eactivity\u003c/b\u003e\u003c/p\u003e\u003ch3\u003eDetails\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eKind\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eStatus\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDoNotPerform\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eScheduled[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePerformer\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eServiceRequest\u003c/td\u003e\u003ctd\u003ePartial lobectomy of lung \u003cspan\u003e(Details : {SNOMED CT code \u0027359615001\u0027 \u003d \u0027Partial lobectomy of lung\u0027, given as \u0027Partial lobectomy of lung\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003ecompleted\u003c/td\u003e\u003ctd\u003etrue\u003c/td\u003e\u003ctd\u003e2011-07-07T09:30:10+01:00\u003c/td\u003e\u003ctd\u003e\u003ca\u003eM.I.M. Versteegh\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "member": {
              "reference": "Practitioner/f003",
              "display": "M.I.M. Versteegh"
            }
          }
        ]
      },
      {
        "resourceType": "Goal",
        "id": "goal",
        "lifecycleStatus": "completed",
        "achievementStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/goal-achievement",
              "code": "achieved",
              "display": "Achieved"
            }
          ],
          "text": "Achieved"
        },
        "description": {
          "text": "succesful surgery on lung of patient"
        },
        "subject": {
          "reference": "Patient/f001",
          "display": "P. van de Heuvel"
        },
        "note": [
          {
            "text": "goal accomplished with minor complications"
          }
        ]
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/careplans",
        "value": "CP2934"
      }
    ],
    "status": "completed",
    "intent": "plan",
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "period": {
      "start": "2011-07-06",
      "end": "2013-07-07"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "Condition/f201",
        "display": "?????"
      }
    ],
    "goal": [
      {
        "reference": "#goal"
      }
    ],
    "activity": [
      {
        "detail": {
          "kind": "ServiceRequest",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "359615001",
                "display": "Partial lobectomy of lung"
              }
            ]
          },
          "status": "completed",
          "doNotPerform": true,
          "scheduledString": "2011-07-07T09:30:10+01:00",
          "performer": [
            {
              "reference": "Practitioner/f003",
              "display": "M.I.M. Versteegh"
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
    "resourceType": "CarePlan",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f003\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: , \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: CP3953 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: plan\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperiod\u003c/b\u003e: 08/03/2013 9:00:10 AM --\u0026gt; 08/03/2013 9:30:10 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003ecareTeam\u003c/b\u003e: id: careteam\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddresses\u003c/b\u003e: \u003ca\u003e?????\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003egoal\u003c/b\u003e: id: goal; lifecycleStatus: completed; Achieved \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/goal-achievement code \u0027achieved\u0027 \u003d \u0027Achieved\u0027, given as \u0027Achieved\u0027})\u003c/span\u003e; Retropharyngeal abscess removal \u003cspan\u003e(Details )\u003c/span\u003e; Annotation: goal accomplished without complications\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eactivity\u003c/b\u003e\u003c/p\u003e\u003ch3\u003eDetails\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eKind\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eStatus\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDoNotPerform\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eScheduled[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePerformer\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eServiceRequest\u003c/td\u003e\u003ctd\u003eIncision of retropharyngeal abscess \u003cspan\u003e(Details : {SNOMED CT code \u0027172960003\u0027 \u003d \u0027Incision of retropharyngeal abscess\u0027, given as \u0027Incision of retropharyngeal abscess\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003ecompleted\u003c/td\u003e\u003ctd\u003etrue\u003c/td\u003e\u003ctd\u003e2011-06-27T09:30:10+01:00\u003c/td\u003e\u003ctd\u003e\u003ca\u003eE.M. van den broek\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "member": {
              "reference": "Practitioner/f001",
              "display": "E.M. van den broek"
            }
          }
        ]
      },
      {
        "resourceType": "Goal",
        "id": "goal",
        "lifecycleStatus": "completed",
        "achievementStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/goal-achievement",
              "code": "achieved",
              "display": "Achieved"
            }
          ],
          "text": "Achieved"
        },
        "description": {
          "text": "Retropharyngeal abscess removal"
        },
        "subject": {
          "reference": "Patient/f001",
          "display": "P. van de Heuvel"
        },
        "note": [
          {
            "text": "goal accomplished without complications"
          }
        ]
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/careplans",
        "value": "CP3953"
      }
    ],
    "status": "completed",
    "intent": "plan",
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "period": {
      "start": "2013-03-08T09:00:10+01:00",
      "end": "2013-03-08T09:30:10+01:00"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "Condition/f201",
        "display": "?????"
      }
    ],
    "goal": [
      {
        "reference": "#goal"
      }
    ],
    "activity": [
      {
        "detail": {
          "kind": "ServiceRequest",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "172960003",
                "display": "Incision of retropharyngeal abscess"
              }
            ]
          },
          "status": "completed",
          "doNotPerform": true,
          "scheduledString": "2011-06-27T09:30:10+01:00",
          "performer": [
            {
              "reference": "Practitioner/f001",
              "display": "E.M. van den broek"
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
    "resourceType": "CarePlan",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f201\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: , \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: draft\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: proposal\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperiod\u003c/b\u003e: 11/03/2013 --\u0026gt; 13/03/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003ecareTeam\u003c/b\u003e: id: careteam\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddresses\u003c/b\u003e: \u003ca\u003eRoel\u0027s renal insufficiency\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003egoal\u003c/b\u003e: id: goal; lifecycleStatus: completed; Achieved \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/goal-achievement code \u0027achieved\u0027 \u003d \u0027Achieved\u0027, given as \u0027Achieved\u0027})\u003c/span\u003e; Re-established renal function with at least healthy nutrients. \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eactivity\u003c/b\u003e\u003c/p\u003e\u003ch3\u003eDetails\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eKind\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eStatus\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDoNotPerform\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eScheduled[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eProduct[x]\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDailyAmount\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eNutritionOrder\u003c/td\u003e\u003ctd\u003ePotassium supplementation \u003cspan\u003e(Details : {SNOMED CT code \u0027284093001\u0027 \u003d \u0027Potassium supplementation\u0027, given as \u0027Potassium supplementation\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003ecompleted\u003c/td\u003e\u003ctd\u003efalse\u003c/td\u003e\u003ctd\u003edaily\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePotassium\u003c/a\u003e\u003c/td\u003e\u003ctd\u003e80 mmol\u003cspan\u003e (Details: SNOMED CT code 258718000 \u003d \u0027millimole\u0027)\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eactivity\u003c/b\u003e\u003c/p\u003e\u003ch3\u003eDetails\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eKind\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eStatus\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDoNotPerform\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eServiceRequest\u003c/td\u003e\u003ctd\u003eEchography of kidney \u003cspan\u003e(Details : {SNOMED CT code \u0027306005\u0027 \u003d \u0027Echography of kidney\u0027, given as \u0027Echography of kidney\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003ecompleted\u003c/td\u003e\u003ctd\u003efalse\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "425268008",
                    "display": "Review of care plan"
                  }
                ]
              }
            ],
            "member": {
              "reference": "Practitioner/f201",
              "display": "Dokter Bronsig"
            }
          },
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "229774002",
                    "display": "Carer"
                  }
                ]
              }
            ],
            "member": {
              "reference": "Practitioner/f204",
              "display": "Nurse Carla Espinosa"
            }
          }
        ]
      },
      {
        "resourceType": "Goal",
        "id": "goal",
        "lifecycleStatus": "completed",
        "achievementStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/goal-achievement",
              "code": "achieved",
              "display": "Achieved"
            }
          ],
          "text": "Achieved"
        },
        "description": {
          "text": "Re-established renal function with at least healthy nutrients."
        },
        "subject": {
          "reference": "Patient/f201",
          "display": "Roel"
        }
      }
    ],
    "status": "draft",
    "intent": "proposal",
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "period": {
      "start": "2013-03-11",
      "end": "2013-03-13"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "Condition/f204",
        "display": "Roel\u0027s renal insufficiency"
      }
    ],
    "goal": [
      {
        "reference": "#goal"
      }
    ],
    "activity": [
      {
        "detail": {
          "kind": "NutritionOrder",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "284093001",
                "display": "Potassium supplementation"
              }
            ]
          },
          "status": "completed",
          "doNotPerform": false,
          "scheduledString": "daily",
          "productReference": {
            "reference": "Substance/f203",
            "display": "Potassium"
          },
          "dailyAmount": {
            "value": 80,
            "unit": "mmol",
            "system": "http://snomed.info/sct",
            "code": "258718000"
          }
        }
      },
      {
        "detail": {
          "kind": "ServiceRequest",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "306005",
                "display": "Echography of kidney"
              }
            ]
          },
          "status": "completed",
          "doNotPerform": false
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
    "resourceType": "CarePlan",
    "id": "f202",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f202\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: , , , , , \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: active\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: plan\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecareTeam\u003c/b\u003e: id: careteam\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddresses\u003c/b\u003e: \u003ca\u003eRoel\u0027s head-neck tumor\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003egoal\u003c/b\u003e: id: goal; lifecycleStatus: active; Elimination of the spenoid bone tumor \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eactivity\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eoutcomeReference\u003c/b\u003e: \u003ca\u003eRoel\u0027s Chemotherapy\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eDetails\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eKind\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eStatus\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDoNotPerform\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eProduct[x]\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eServiceRequest\u003c/td\u003e\u003ctd\u003eChemotherapy \u003cspan\u003e(Details : {SNOMED CT code \u0027367336001\u0027 \u003d \u0027Chemotherapy\u0027, given as \u0027Chemotherapy\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003ein-progress\u003c/td\u003e\u003ctd\u003efalse\u003c/td\u003e\u003ctd\u003eid: tpf; TPF \u003cspan\u003e(Details )\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "doce",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "108806006",
              "display": "Docetaxel"
            }
          ]
        }
      },
      {
        "resourceType": "Medication",
        "id": "cisp",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "57066004",
              "display": "Cisplatin"
            }
          ]
        }
      },
      {
        "resourceType": "Medication",
        "id": "fluo",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "3127006",
              "display": "Fluorouracil"
            }
          ]
        }
      },
      {
        "resourceType": "Medication",
        "id": "tpf",
        "code": {
          "text": "TPF"
        },
        "ingredient": [
          {
            "itemReference": {
              "reference": "#doce"
            }
          },
          {
            "itemReference": {
              "reference": "#cisp"
            }
          },
          {
            "itemReference": {
              "reference": "#fluo"
            }
          }
        ]
      },
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "28995006",
                    "display": "Treated with"
                  }
                ]
              }
            ],
            "member": {
              "reference": "Practitioner/f201",
              "display": "Dokter Bronsig"
            }
          }
        ]
      },
      {
        "resourceType": "Goal",
        "id": "goal",
        "lifecycleStatus": "active",
        "description": {
          "text": "Elimination of the spenoid bone tumor"
        },
        "subject": {
          "reference": "Patient/f201",
          "display": "Roel"
        }
      }
    ],
    "status": "active",
    "intent": "plan",
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "Condition/f202",
        "display": "Roel\u0027s head-neck tumor"
      }
    ],
    "goal": [
      {
        "reference": "#goal"
      }
    ],
    "activity": [
      {
        "outcomeReference": [
          {
            "reference": "Procedure/f201",
            "display": "Roel\u0027s Chemotherapy"
          }
        ],
        "detail": {
          "kind": "ServiceRequest",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "367336001",
                "display": "Chemotherapy"
              }
            ]
          },
          "status": "in-progress",
          "doNotPerform": false,
          "productReference": {
            "reference": "#tpf"
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
    "resourceType": "CarePlan",
    "id": "f203",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f203\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: , \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: completed\u003c/p\u003e\u003cp\u003e\u003cb\u003eintent\u003c/b\u003e: plan\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperiod\u003c/b\u003e: 14/04/2013 --\u0026gt; 21/04/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003ecareTeam\u003c/b\u003e: id: careteam\u003c/p\u003e\u003cp\u003e\u003cb\u003eaddresses\u003c/b\u003e: \u003ca\u003eRoel\u0027s sepsis\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003egoal\u003c/b\u003e: id: goal; lifecycleStatus: cancelled; Check whether further treatment of sepsis/pulmonary abcess is required \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eactivity\u003c/b\u003e\u003c/p\u003e\u003ch3\u003eDetails\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eKind\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eCode\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eStatus\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDoNotPerform\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eServiceRequest\u003c/td\u003e\u003ctd\u003eHigh resolution computed tomography of lungs \u003cspan\u003e(Details : {SNOMED CT code \u0027241541005\u0027 \u003d \u0027High resolution CT of lungs\u0027, given as \u0027High resolution computed tomography of lungs\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003enot-started\u003c/td\u003e\u003ctd\u003efalse\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "425268008",
                    "display": "Review of care plan"
                  }
                ]
              }
            ],
            "member": {
              "reference": "Practitioner/f201",
              "display": "Dokter Bronsig"
            }
          },
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "278110001",
                    "display": "Radiographic imaging"
                  }
                ]
              }
            ],
            "member": {
              "reference": "Practitioner/f202",
              "display": "Luigi Maas"
            }
          }
        ]
      },
      {
        "resourceType": "Goal",
        "id": "goal",
        "lifecycleStatus": "cancelled",
        "description": {
          "text": "Check whether further treatment of sepsis/pulmonary abcess is required"
        },
        "subject": {
          "reference": "Patient/f201",
          "display": "Roel"
        }
      }
    ],
    "status": "completed",
    "intent": "plan",
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "period": {
      "start": "2013-04-14",
      "end": "2013-04-21"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "Condition/f203",
        "display": "Roel\u0027s sepsis"
      }
    ],
    "goal": [
      {
        "reference": "#goal"
      }
    ],
    "activity": [
      {
        "detail": {
          "kind": "ServiceRequest",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "241541005",
                "display": "High resolution computed tomography of lungs"
              }
            ]
          },
          "status": "not-started",
          "doNotPerform": false
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
    "resourceType": "CarePlan",
    "id": "gpvisit",
    "text": {
      "status": "additional",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003e  Represents the flow of a patient within a practice. The plan is created when\n        they arrive and represents the \u0027care\u0027 of the patient over the course of that encounter.\n        They first see the nurse for basic observations (BP, pulse, temp) then the doctor for\n        the consultation and finally the nurse again for a tetanus immunization. As the plan is\n        updated (e.g. a new activity added), different versions of the plan exist, and workflow timings\n        for reporting can be gained by examining the plan history. This example is the version after\n        seeing the doctor, and waiting for the nurse.The plan can either be created \u0027ad hoc\u0027 and modified as\n        the parient progresses, or start with a standard template (which can, of course, be altered to suit the patient.\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Condition",
        "id": "p1",
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
        "code": {
          "text": "Overseas encounter"
        },
        "subject": {
          "reference": "Patient/100",
          "display": "Peter James Chalmers"
        }
      },
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "id": "part1",
            "role": [
              {
                "coding": [
                  {
                    "system": "http://example.org/local",
                    "code": "nur"
                  }
                ],
                "text": "nurse"
              }
            ],
            "member": {
              "reference": "Practitioner/13",
              "display": "Nurse Nancy"
            }
          },
          {
            "id": "part2",
            "role": [
              {
                "coding": [
                  {
                    "system": "http://example.org/local",
                    "code": "doc"
                  }
                ],
                "text": "doctor"
              }
            ],
            "member": {
              "reference": "Practitioner/14",
              "display": "Doctor Dave"
            }
          }
        ]
      },
      {
        "resourceType": "Goal",
        "id": "goal",
        "lifecycleStatus": "planned",
        "description": {
          "text": "Complete consultation"
        },
        "subject": {
          "reference": "Patient/100",
          "display": "Peter James Chalmers"
        }
      }
    ],
    "status": "active",
    "intent": "plan",
    "subject": {
      "reference": "Patient/100",
      "display": "Peter James Chalmers"
    },
    "period": {
      "start": "2013-01-01T10:30:00+00:00"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "#p1",
        "display": "obesity"
      }
    ],
    "goal": [
      {
        "reference": "#goal"
      }
    ],
    "activity": [
      {
        "outcomeReference": [
          {
            "reference": "Encounter/example"
          }
        ],
        "detail": {
          "kind": "Appointment",
          "code": {
            "coding": [
              {
                "system": "http://example.org/local",
                "code": "nursecon"
              }
            ],
            "text": "Nurse Consultation"
          },
          "status": "completed",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2013-01-01T10:38:00+00:00",
            "end": "2013-01-01T10:50:00+00:00"
          },
          "performer": [
            {
              "reference": "Practitioner/13",
              "display": "Nurse Nancy"
            }
          ]
        }
      },
      {
        "detail": {
          "kind": "Appointment",
          "code": {
            "coding": [
              {
                "system": "http://example.org/local",
                "code": "doccon"
              }
            ],
            "text": "Doctor Consultation"
          },
          "status": "scheduled",
          "doNotPerform": false,
          "performer": [
            {
              "reference": "Practitioner/14",
              "display": "Doctor Dave"
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
    "resourceType": "CarePlan",
    "id": "integrate",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003ePatient family is not ready to commit to goal setting at this time.  Goal setting will be addressed in the future\u003c/p\u003e\n      \u003ctable\u003e\n        \u003cthead\u003e\n          \u003ctr\u003e\n            \u003cth\u003eStart Date\u003c/th\u003e\n            \u003cth\u003eGoal\u003c/th\u003e\n            \u003cth\u003eAction Steps\u003c/th\u003e\n            \u003cth\u003eStatus\u003c/th\u003e\n            \u003cth\u003eDate Last Updated\u003c/th\u003e\n            \u003cth\u003eComments\u003c/th\u003e\n          \u003c/tr\u003e\n        \u003c/thead\u003e\n        \u003ctbody\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e10 Sep 2012\u003c/td\u003e\n            \u003ctd\u003eEve will lose weight and reduce her GERDS symptoms by improving her diet\u003c/td\u003e\n            \u003ctd\u003eEve will review photos of high and low density foods and share with her parents\u003c/td\u003e\n            \u003ctd\u003eNew Goal\u003c/td\u003e\n            \u003ctd\u003e10 Sep 2012\u003c/td\u003e\n            \u003ctd\u003e9/10/12 Eve eats one meal a day with her parents\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e10 Sep 2012\u003c/td\u003e\n            \u003ctd\u003eEve will lose weight and reduce her GERDS symptoms by improving her diet\u003c/td\u003e\n            \u003ctd\u003eEve will ask her dad to asist her to put the head of her bed on blocks\u003c/td\u003e\n            \u003ctd\u003eNew Goal\u003c/td\u003e\n            \u003ctd\u003e10 Sep 2012\u003c/td\u003e\n            \u003ctd\u003e9/10/12 Eve will sleep in her bed more often than the couch\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e10 Sep 2012\u003c/td\u003e\n            \u003ctd\u003eEve will improve her GERDS symptoms\u003c/td\u003e\n            \u003ctd\u003eEve will reduce her intake of coffee and chocolate\u003c/td\u003e\n            \u003ctd\u003eIn Process\u003c/td\u003e\n            \u003ctd\u003e10 Sep 2012\u003c/td\u003e\n            \u003ctd/\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e27 Aug 2012\u003c/td\u003e\n            \u003ctd\u003eEve will increase her energy by being more active\u003c/td\u003e\n            \u003ctd\u003eEve will walk her friend\u0027s dog up and down a big hill 15-30 minutes 3 days a week\u003c/td\u003e\n            \u003ctd\u003eIn Process\u003c/td\u003e\n            \u003ctd\u003e10 Sep 2012\u003c/td\u003e\n            \u003ctd\u003e8/27/12 Eve would like to try for 5 days a week.  9/10/12 Eve is still walking the dogs.\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e23 Jul 2012\u003c/td\u003e\n            \u003ctd\u003eEve will increase her energy by being more active\u003c/td\u003e\n            \u003ctd\u003eEve will walk 3 blocks to her parents house twice a week\u003c/td\u003e\n            \u003ctd\u003eIn Process\u003c/td\u003e\n            \u003ctd\u003e10 Sep 2012\u003c/td\u003e\n            \u003ctd\u003e8/13/12 Eve walked 4 times the last week.  9/10/12 Eve did not walk to her parents the last week, but has plans to start again\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e23 Jul 2012\u003c/td\u003e\n            \u003ctd\u003eEve will set up her medications and take as prescribed\u003c/td\u003e\n            \u003ctd\u003eEve will us a calendar to check off after medications are taken\u003c/td\u003e\n            \u003ctd\u003eIn Process\u003c/td\u003e\n            \u003ctd\u003e13 Aug 2012\u003c/td\u003e\n            \u003ctd/\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e23 Jul 2012\u003c/td\u003e\n            \u003ctd\u003eEve will restart her light treatments\u003c/td\u003e\n            \u003ctd\u003eEve will use her lights MWF after her shower for 3 minutes\u003c/td\u003e\n            \u003ctd\u003eIn Process\u003c/td\u003e\n            \u003ctd\u003e27 Aug 2012\u003c/td\u003e\n            \u003ctd\u003e8/13/12 After restarting the vinegar soaks the psoriasis is improved and Eve plans to treat the remainder with light treatments.  She plans to start this week.  8/27/12 Since her skin is improved Eve has not been using the light treatment as often, maybe once a week.  She would like to increase to 3 times a week again\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e10 Jul 2012\u003c/td\u003e\n            \u003ctd\u003eEve will set up her medications and take as prescribed\u003c/td\u003e\n            \u003ctd\u003eEve will use a calendar of a chart to help her remember when to take her medications\u003c/td\u003e\n            \u003ctd\u003eIn Process\u003c/td\u003e\n            \u003ctd\u003e10 Sep 2012\u003c/td\u003e\n            \u003ctd\u003e7/23/12 Eve created a chart as a reminer to take the medications that do not fit in her pill box\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e23 Jul 2012\u003c/td\u003e\n            \u003ctd\u003eEve will increase her energy by being more active\u003c/td\u003e\n            \u003ctd\u003eEve will start using stretch bands and one step 2 days a week Mon/Wed 6-7am and maybe Friday afternoon\u003c/td\u003e\n            \u003ctd\u003eOn-Hold\u003c/td\u003e\n            \u003ctd\u003e23 Aug 2012\u003c/td\u003e\n            \u003ctd\u003e7/30/12 will be able to esume exercise.  8/13/12 Eve prefers to focus on walking at this time\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e10 Jul 2012\u003c/td\u003e\n            \u003ctd\u003eEve will set up her medications and take as prescribed\u003c/td\u003e\n            \u003ctd\u003eEve will match a printed medication worksheet with the medication bottles at home\u003c/td\u003e\n            \u003ctd\u003eCompleted\u003c/td\u003e\n            \u003ctd\u003e23 Jul 2012\u003c/td\u003e\n            \u003ctd/\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e10 Jul 2012\u003c/td\u003e\n            \u003ctd\u003eEve will set up her medications and take as prescribed\u003c/td\u003e\n            \u003ctd\u003eEve will get a medication box to sort her pills.  She will have one for scheduled medications and one for as needed\u003c/td\u003e\n            \u003ctd\u003eCompleted\u003c/td\u003e\n            \u003ctd\u003e16 Jul 2012\u003c/td\u003e\n            \u003ctd\u003e7/16/12 Eve now has some of her medications set up in pill packs by her pharmacist\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e23 Jul 2012\u003c/td\u003e\n            \u003ctd\u003eEve will increase her energy by being more active\u003c/td\u003e\n            \u003ctd\u003eEve will open \u0026quot;The Firm\u0026quot; DVD workout package and listen to it\u003c/td\u003e\n            \u003ctd\u003eDiscontinued\u003c/td\u003e\n            \u003ctd\u003e13 Aug 2012\u003c/td\u003e\n            \u003ctd\u003e7/30/12 Eve will be able to resume exercise on 7/30/12.  8/13/12 -hold until \u0026quot;less busy\u0026quot;\u003c/td\u003e\n          \u003c/tr\u003e\n        \u003c/tbody\u003e\n      \u003c/table\u003e\n    \u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Condition",
        "id": "p1",
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
        "code": {
          "text": "GERDS"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Condition",
        "id": "p2",
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
        "code": {
          "text": "Obesity"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Condition",
        "id": "p3",
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
        "code": {
          "text": "Psoriasis"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Goal",
        "id": "g1",
        "lifecycleStatus": "active",
        "description": {
          "text": "Eve will lose weight and reduce her GERDS symptoms by improving her diet"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Goal",
        "id": "g2",
        "lifecycleStatus": "active",
        "description": {
          "text": "Eve will improve her GERDS symptoms"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Goal",
        "id": "g3",
        "lifecycleStatus": "active",
        "description": {
          "text": "Eve will increase her energy by being more active"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Goal",
        "id": "g4",
        "lifecycleStatus": "active",
        "description": {
          "text": "Eve will set up her medications and take as prescribed"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Goal",
        "id": "g5",
        "lifecycleStatus": "active",
        "description": {
          "text": "Eve will restart her light treatments"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      }
    ],
    "status": "active",
    "intent": "plan",
    "subject": {
      "reference": "Patient/1",
      "display": "Eve Everywoman"
    },
    "addresses": [
      {
        "reference": "#p1",
        "display": "GERDS"
      },
      {
        "reference": "#p2",
        "display": "Obesity"
      },
      {
        "reference": "#p3",
        "display": "Psoriasis"
      }
    ],
    "goal": [
      {
        "reference": "#g1"
      },
      {
        "reference": "#g2"
      },
      {
        "reference": "#g3"
      },
      {
        "reference": "#g4"
      },
      {
        "reference": "#g5"
      }
    ],
    "activity": [
      {
        "progress": [
          {
            "time": "2012-09-10",
            "text": "Eve eats one meal a day with her parents"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "goal": [
            {
              "reference": "#g1"
            }
          ],
          "status": "not-started",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-09-10"
          },
          "description": "Eve will review photos of high and low density foods and share with her parents"
        }
      },
      {
        "progress": [
          {
            "time": "2012-09-10",
            "text": "Eve will sleep in her bed more often than the couch"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "kind": "CommunicationRequest",
          "goal": [
            {
              "reference": "#g1"
            }
          ],
          "status": "not-started",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-09-10"
          },
          "description": "Eve will ask her dad to asist her to put the head of her bed on blocks"
        }
      },
      {
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "goal": [
            {
              "reference": "#g2"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-09-10"
          },
          "description": "Eve will reduce her intake of coffee and chocolate"
        }
      },
      {
        "progress": [
          {
            "time": "2012-08-27",
            "text": "Eve would like to try for 5 days a week."
          },
          {
            "time": "2012-09-10",
            "text": "Eve is still walking the dogs."
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "goal": [
            {
              "reference": "#g3"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-08-27"
          },
          "description": "Eve will walk her friend\u0027s dog up and down a big hill 15-30 minutes 3 days a week"
        }
      },
      {
        "progress": [
          {
            "time": "2012-08-13",
            "text": "Eve walked 4 times the last week."
          },
          {
            "time": "2012-09-10",
            "text": "Eve did not walk to her parents the last week, but has plans to start again"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "goal": [
            {
              "reference": "#g3"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-23"
          },
          "description": "Eve will walk 3 blocks to her parents house twice a week"
        }
      },
      {
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-08-13"
            }
          ],
          "goal": [
            {
              "reference": "#g4"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-23"
          },
          "description": "Eve will use a calendar to check off after medications are taken"
        }
      },
      {
        "progress": [
          {
            "time": "2012-08-13",
            "text": "After restarting the vinegar soaks the psoriasis is improved and Eve plans to treat the remainder with light treatments.  She plans to start this week."
          },
          {
            "time": "2012-08-27",
            "text": "Since her skin is improved Eve has not been using the light treatment as often, maybe once a week.  She would like to increase to 3 times a week again"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-08-27"
            }
          ],
          "goal": [
            {
              "reference": "#g5"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-23"
          },
          "description": "Eve will use her lights MWF after her shower for 3 minutes"
        }
      },
      {
        "progress": [
          {
            "time": "2012-07-23",
            "text": "Eve created a chart as a reminer to take the medications that do not fit in her pill box"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "goal": [
            {
              "reference": "#g4"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-10"
          },
          "description": "Eve will use a calendar of a chart to help her remember when to take her medications"
        }
      },
      {
        "progress": [
          {
            "time": "2012-07-30",
            "text": "Will be able to esume exercise."
          },
          {
            "time": "2012-08-13",
            "text": "Eve prefers to focus on walking at this time"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-08-23"
            }
          ],
          "goal": [
            {
              "reference": "#g3"
            }
          ],
          "status": "on-hold",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-23"
          },
          "description": "Eve will start using stretch bands and one step 2 days a week Mon/Wed 6-7am and maybe Friday afternoon"
        }
      },
      {
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-07-23"
            }
          ],
          "goal": [
            {
              "reference": "#g4"
            }
          ],
          "status": "completed",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-10"
          },
          "description": "Eve will match a printed medication worksheet with the medication bottles at home"
        }
      },
      {
        "progress": [
          {
            "time": "2012-07-16",
            "text": "Eve now has some of her medications set up in pill packs by her pharmacist"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-07-16"
            }
          ],
          "goal": [
            {
              "reference": "#g4"
            }
          ],
          "status": "completed",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-10"
          },
          "description": "Eve will get a medication box to sort her pills.  She will have one for scheduled medications and one for as needed"
        }
      },
      {
        "progress": [
          {
            "time": "2012-07-12",
            "text": "Eve will be able to resume exercise on 7/30/12"
          },
          {
            "time": "2012-08-13",
            "text": "hold until \"less busy\""
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-08-13"
            }
          ],
          "goal": [
            {
              "reference": "#g3"
            }
          ],
          "status": "on-hold",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-23"
          },
          "description": "Eve will open \"The Firm\" DVD workout package and listen to it"
        }
      }
    ],
    "note": [
      {
        "text": "Patient family is not ready to commit to goal setting at this time.  Goal setting will be addressed in the future"
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
    "resourceType": "CarePlan",
    "id": "obesity-narrative",
    "text": {
      "status": "additional",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003e Care plan to address obesity.  Goal is a target weight of 160 to 180 lbs.  Activities include diet and exercise.\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "status": "active",
    "intent": "plan",
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
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
    "resourceType": "CarePlan",
    "id": "preg",
    "text": {
      "status": "additional",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003eA maternity care plan (for a pregnant woman).\u003c/p\u003e\n      \u003cp\u003eLMP is 1st Jan, 2013 (a great new years party!) The plan has activities to take prenatal vitamins, schedule first antenatal,\n            and \u0027placeholders\u0027 for the second antenatal and delivery (there would be lots of others of course)\u003c/p\u003e\n      \u003cp\u003eNote that where is a proposed \u0027status\u0027 element against each activity\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Condition",
        "id": "p1",
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
        "code": {
          "text": "pregnancy"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Practitioner",
        "id": "pr1",
        "name": [
          {
            "family": "Midwife",
            "given": [
              "Mavis"
            ]
          }
        ]
      },
      {
        "resourceType": "Practitioner",
        "id": "pr2",
        "name": [
          {
            "family": "Obstetrician",
            "given": [
              "Oscar"
            ]
          }
        ]
      },
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://example.org/mysys",
                    "code": "lmc"
                  }
                ],
                "text": "Midwife"
              }
            ],
            "member": {
              "reference": "#pr1",
              "display": "Mavis Midwife"
            }
          },
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://example.org/mysys",
                    "code": "obs"
                  }
                ],
                "text": "Obstretitian"
              }
            ],
            "member": {
              "reference": "#pr2",
              "display": "Oscar Obstetrician"
            }
          }
        ]
      },
      {
        "resourceType": "Goal",
        "id": "goal",
        "lifecycleStatus": "active",
        "description": {
          "text": "Maintain patient\u0027s health throughout pregnancy and ensure a healthy child"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      }
    ],
    "extension": [
      {
        "url": "http://example.org/fhir/StructureDefinition/careplan#lmp",
        "valueDateTime": "2013-01-01"
      }
    ],
    "status": "active",
    "intent": "plan",
    "subject": {
      "reference": "Patient/1",
      "display": "Eve Everywoman"
    },
    "period": {
      "start": "2013-01-01",
      "end": "2013-10-01"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "#p1",
        "display": "pregnancy"
      }
    ],
    "goal": [
      {
        "reference": "#goal"
      }
    ],
    "activity": [
      {
        "reference": {
          "display": "Prenatal vitamin MedicationRequest"
        }
      },
      {
        "extension": [
          {
            "url": "http://example.org/fhir/StructureDefinition/careplan#andetails",
            "valueUri": "http://orionhealth.com/fhir/careplan/1andetails"
          }
        ],
        "detail": {
          "kind": "Appointment",
          "code": {
            "coding": [
              {
                "system": "http://example.org/mySystem",
                "code": "1an"
              }
            ],
            "text": "First Antenatal encounter"
          },
          "status": "scheduled",
          "doNotPerform": false,
          "scheduledTiming": {
            "repeat": {
              "boundsPeriod": {
                "start": "2013-02-14",
                "end": "2013-02-28"
              }
            }
          },
          "performer": [
            {
              "reference": "#pr1",
              "display": "Mavis Midwife"
            }
          ],
          "description": "The first antenatal encounter. This is where a detailed physical examination is performed.             and the pregnanacy discussed with the mother-to-be."
        }
      },
      {
        "detail": {
          "kind": "Appointment",
          "code": {
            "coding": [
              {
                "system": "http://example.org/mySystem",
                "code": "an"
              }
            ],
            "text": "Follow-up Antenatal encounter"
          },
          "status": "not-started",
          "doNotPerform": false,
          "scheduledTiming": {
            "repeat": {
              "boundsPeriod": {
                "start": "2013-03-01",
                "end": "2013-03-14"
              }
            }
          },
          "performer": [
            {
              "reference": "#pr1",
              "display": "Mavis Midwife"
            }
          ],
          "description": "The second antenatal encounter. Discuss any issues that arose from the first antenatal encounter"
        }
      },
      {
        "detail": {
          "kind": "Appointment",
          "code": {
            "coding": [
              {
                "system": "http://example.org/mySystem",
                "code": "del"
              }
            ],
            "text": "Delivery"
          },
          "status": "not-started",
          "doNotPerform": false,
          "scheduledTiming": {
            "repeat": {
              "boundsPeriod": {
                "start": "2013-09-01",
                "end": "2013-09-14"
              }
            }
          },
          "performer": [
            {
              "reference": "#pr1",
              "display": "Mavis Midwife"
            }
          ],
          "description": "The delivery."
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
    "resourceType": "CarePlan",
    "id": "example",
    "text": {
      "status": "additional",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003e A simple care plan to indicate a patient taking their weight once a day because of obesity.\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Condition",
        "id": "p1",
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
        "code": {
          "text": "Obesity"
        },
        "subject": {
          "reference": "Patient/example",
          "display": "Peter James Chalmers"
        }
      }
    ],
    "identifier": [
      {
        "value": "12345"
      }
    ],
    "instantiatesUri": [
      "http://example.org/protocol-for-obesity"
    ],
    "basedOn": [
      {
        "display": "Management of Type 2 Diabetes"
      }
    ],
    "replaces": [
      {
        "display": "Plan from urgent care clinic"
      }
    ],
    "partOf": [
      {
        "display": "Overall wellness plan"
      }
    ],
    "status": "active",
    "intent": "plan",
    "category": [
      {
        "text": "Weight management plan"
      }
    ],
    "description": "Manage obesity and weight loss",
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "encounter": {
      "reference": "Encounter/home"
    },
    "period": {
      "end": "2017-06-01"
    },
    "created": "2016-01-01",
    "author": {
      "reference": "Practitioner/example",
      "display": "Dr Adam Careful"
    },
    "careTeam": [
      {
        "reference": "CareTeam/example"
      }
    ],
    "addresses": [
      {
        "reference": "#p1",
        "display": "obesity"
      }
    ],
    "goal": [
      {
        "reference": "Goal/example"
      }
    ],
    "activity": [
      {
        "outcomeCodeableConcept": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "161832001",
                "display": "Progressive weight loss"
              }
            ]
          }
        ],
        "outcomeReference": [
          {
            "reference": "Observation/example",
            "display": "Weight Measured"
          }
        ],
        "detail": {
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "3141-9",
                "display": "Weight Measured"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "27113001",
                "display": "Body weight"
              }
            ]
          },
          "status": "completed",
          "statusReason": {
            "text": "Achieved weight loss to mitigate diabetes risk."
          },
          "doNotPerform": false,
          "scheduledTiming": {
            "repeat": {
              "frequency": 1,
              "period": 1,
              "periodUnit": "d"
            }
          },
          "location": {
            "display": "Patient\u0027s home"
          },
          "performer": [
            {
              "reference": "Patient/example",
              "display": "Peter James Chalmers"
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
  }
];


export const carePlanBundle = bundleResource('CarePlan', resourceData);

import { bundleResource } from './bundleResource';

const resourceData = [
  {
    "resourceType": "List",
    "id": "current-allergies",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003ePatient Peter Chalmers, DOB \u003d Dec 25, 1974, MRN \u003d 12345 (Acme Healthcare) has the following allergies\u003c/p\u003e\n      \u003cul\u003e\n        \u003cli\u003ecashew nut allergenic extract Injectable Product (\u003cb\u003eHigh\u003c/b\u003e)\u003c/li\u003e\n        \u003cli\u003eAllergenic extract, penicillin (high)\u003c/li\u003e\n      \u003c/ul\u003e\n    \u003c/div\u003e"
    },
    "status": "current",
    "mode": "working",
    "title": "Current Allergy List",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "52472-8",
          "display": "Allergies and Adverse Drug Reactions"
        }
      ],
      "text": "Current Allergy List"
    },
    "date": "2015-07-14T23:10:23+11:00",
    "source": {
      "reference": "Patient/example"
    },
    "orderedBy": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/list-order",
          "code": "entry-date"
        }
      ]
    },
    "entry": [
      {
        "item": {
          "reference": "AllergyIntolerance/example"
        }
      },
      {
        "item": {
          "reference": "AllergyIntolerance/medication"
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
    "resourceType": "List",
    "id": "example-double-cousin-relationship",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: example-double-cousin-relationship\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: , , , , , \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: current\u003c/p\u003e\u003cp\u003e\u003cb\u003emode\u003c/b\u003e: snapshot\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal \u003cspan\u003e(Details : {LOINC code \u002780738-8\u0027 \u003d \u0027TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal\u0027, given as \u0027TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePam Taylor\u003c/a\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eentry\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eitem\u003c/b\u003e: id: 1; status: completed; name: Mary; natural mother \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code \u0027NMTH\u0027 \u003d \u0027natural mother\u0027, given as \u0027natural mother\u0027})\u003c/span\u003e; deceased\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eentry\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eitem\u003c/b\u003e: id: 2; status: completed; name: Bob; paternal uncle \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code \u0027PUNCLE\u0027 \u003d \u0027paternal uncle\u0027, given as \u0027paternal uncle\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eentry\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eitem\u003c/b\u003e: id: 3; status: completed; name: Jon; maternal uncle \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code \u0027MUNCLE\u0027 \u003d \u0027maternal uncle\u0027, given as \u0027maternal uncle\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eentry\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eitem\u003c/b\u003e: id: 4; status: completed; name: Alica; maternal grandmother \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code \u0027MGRMTH\u0027 \u003d \u0027maternal grandmother\u0027, given as \u0027maternal grandmother\u0027})\u003c/span\u003e; 70 yr\u003cspan\u003e (Details: UCUM code a \u003d \u0027a\u0027)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eentry\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eitem\u003c/b\u003e: id: 5; status: completed; name: Aunt with Parent ID; maternal aunt \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code \u0027MAUNT\u0027 \u003d \u0027maternal aunt\u0027, given as \u0027maternal aunt\u0027})\u003c/span\u003e; Female \u003cspan\u003e(Details : {http://hl7.org/fhir/administrative-gender code \u0027female\u0027 \u003d \u0027Female\u0027, given as \u0027Female\u0027})\u003c/span\u003e; 55 yr\u003cspan\u003e (Details: UCUM code a \u003d \u0027a\u0027)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eentry\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eitem\u003c/b\u003e: id: 6; status: completed; name: Paul; Paternal grandfather \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code \u0027PGRFTH\u0027 \u003d \u0027paternal grandfather\u0027, given as \u0027Paternal grandfather\u0027})\u003c/span\u003e; 74 yr\u003cspan\u003e (Details: UCUM code b \u003d \u0027b\u0027)\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "FamilyMemberHistory",
        "id": "1",
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Mary",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "NMTH",
              "display": "natural mother"
            }
          ],
          "text": "natural mother"
        },
        "deceasedBoolean": true,
        "condition": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "73211009",
                  "display": "Diabetes mellitus"
                }
              ],
              "text": "Diabetes mellitus"
            },
            "onsetAge": {
              "value": 45,
              "unit": "yr",
              "system": "http://unitsofmeasure.org",
              "code": "a"
            }
          }
        ]
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "2",
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Bob",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "PUNCLE",
              "display": "paternal uncle"
            }
          ],
          "text": "paternal uncle"
        },
        "condition": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "1481000119100",
                  "display": "Diabetes mellitus type 2 without retinopathy"
                }
              ],
              "text": "Diabetes mellitus type 2 without retinopathy"
            },
            "onsetAge": {
              "value": 35,
              "unit": "yr",
              "system": "http://unitsofmeasure.org",
              "code": "a"
            }
          }
        ]
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "3",
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Jon",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "MUNCLE",
              "display": "maternal uncle"
            }
          ],
          "text": "maternal uncle"
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "4",
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-sibling",
            "extension": [
              {
                "url": "type",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                      "code": "NSIS",
                      "display": "natural sister"
                    }
                  ],
                  "text": "natural sister"
                }
              },
              {
                "url": "reference",
                "valueReference": {
                  "reference": "FamilyMemberHistory/mother",
                  "display": "paternal grandmother"
                }
              }
            ]
          }
        ],
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Alica",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "MGRMTH",
              "display": "maternal grandmother"
            }
          ],
          "text": "maternal grandmother"
        },
        "ageAge": {
          "value": 70,
          "unit": "yr",
          "system": "http://unitsofmeasure.org",
          "code": "a"
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "5",
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-parent",
            "extension": [
              {
                "url": "type",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                      "code": "MTH",
                      "display": "mother"
                    }
                  ],
                  "text": "mother"
                }
              },
              {
                "url": "reference",
                "valueReference": {
                  "reference": "FamilyMemberHistory/147146",
                  "display": "maternal grandmother"
                }
              }
            ]
          }
        ],
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Aunt with Parent ID",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "MAUNT",
              "display": "maternal aunt"
            }
          ],
          "text": "maternal aunt"
        },
        "sex": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/administrative-gender",
              "code": "female",
              "display": "Female"
            }
          ]
        },
        "ageAge": {
          "value": 55,
          "unit": "yr",
          "system": "http://unitsofmeasure.org",
          "code": "a"
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "6",
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-sibling",
            "extension": [
              {
                "url": "type",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                      "code": "NBRO",
                      "display": "natural brother"
                    }
                  ],
                  "text": "natural brother"
                }
              },
              {
                "url": "reference",
                "valueReference": {
                  "reference": "FamilyMemberHistory/father",
                  "display": "maternal grandfather"
                }
              }
            ]
          }
        ],
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Paul",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "PGRFTH",
              "display": "Paternal grandfather"
            }
          ],
          "text": "Paternal grandfather"
        },
        "ageAge": {
          "value": 74,
          "unit": "yr",
          "system": "http://unitsofmeasure.org",
          "code": "b"
        }
      }
    ],
    "status": "current",
    "mode": "snapshot",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "80738-8",
          "display": "TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal"
        }
      ],
      "text": "TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal"
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Pam Taylor"
    },
    "entry": [
      {
        "item": {
          "reference": "#1"
        }
      },
      {
        "item": {
          "reference": "#2"
        }
      },
      {
        "item": {
          "reference": "#3"
        }
      },
      {
        "item": {
          "reference": "#4"
        }
      },
      {
        "item": {
          "reference": "#5"
        }
      },
      {
        "item": {
          "reference": "#6"
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
    "resourceType": "List",
    "id": "example-empty",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003eThe patient is not on any medications\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "status": "current",
    "mode": "snapshot",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "182836005",
          "display": "Review of medication"
        }
      ],
      "text": "Medication Review"
    },
    "date": "2012-11-26T07:30:23+11:00",
    "source": {
      "reference": "Patient/example"
    },
    "emptyReason": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/list-empty-reason",
          "code": "nilknown",
          "display": "Nil Known"
        }
      ],
      "text": "The patient is not on any medications"
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
    "resourceType": "List",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f201\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: , \u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: current\u003c/p\u003e\u003cp\u003e\u003cb\u003emode\u003c/b\u003e: snapshot\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: History of family member diseases \u003cspan\u003e(Details : {LOINC code \u00278670-2\u0027 \u003d \u0027History of family member diseases\u0027, given as \u0027History of family member diseases\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003enote\u003c/b\u003e: Both parents, both brothers and both children (twin) are still alive.\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eentry\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eitem\u003c/b\u003e: id: fmh-1; status: completed; Mother \u003cspan\u003e(Details : {SNOMED CT code \u002772705000\u0027 \u003d \u0027Mother\u0027, given as \u0027Mother\u0027})\u003c/span\u003e; \u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003eentry\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eitem\u003c/b\u003e: id: fmh-2; status: completed; Uncle \u003cspan\u003e(Details : {SNOMED CT code \u002738048003\u0027 \u003d \u0027Uncle\u0027, given as \u0027Uncle\u0027})\u003c/span\u003e; deceased\u003c/p\u003e\u003c/blockquote\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "FamilyMemberHistory",
        "id": "fmh-1",
        "status": "completed",
        "patient": {
          "reference": "Patient/f201",
          "display": "Roel"
        },
        "relationship": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "72705000",
              "display": "Mother"
            }
          ]
        },
        "deceasedBoolean": false,
        "condition": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "39839004",
                  "display": "Diaphragmatic hernia"
                }
              ]
            }
          }
        ]
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "fmh-2",
        "status": "completed",
        "patient": {
          "reference": "Patient/f201",
          "display": "Roel"
        },
        "relationship": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "38048003",
              "display": "Uncle"
            }
          ]
        },
        "deceasedBoolean": true,
        "condition": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "115665000",
                  "display": "Atopy"
                }
              ]
            },
            "outcome": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "419099009",
                  "display": "Died"
                }
              ]
            }
          }
        ]
      }
    ],
    "status": "current",
    "mode": "snapshot",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "8670-2",
          "display": "History of family member diseases"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "note": [
      {
        "text": "Both parents, both brothers and both children (twin) are still alive."
      }
    ],
    "entry": [
      {
        "item": {
          "reference": "#fmh-1"
        }
      },
      {
        "item": {
          "reference": "#fmh-2"
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
    "resourceType": "List",
    "id": "med-list",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003eAdd hydroxocobalamin\u003c/p\u003e\n      \u003cp\u003eCancel Morphine Sulphate\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "status": "current",
    "mode": "changes",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "182836005",
          "display": "Review of medication"
        }
      ],
      "text": "Medication Review"
    },
    "date": "2013-11-20T23:10:23+11:00",
    "source": {
      "reference": "Patient/example"
    },
    "entry": [
      {
        "flag": {
          "coding": [
            {
              "system": "http://nehta.gov.au/codes/medications/changetype",
              "code": "01",
              "display": "Prescribed"
            }
          ]
        },
        "item": {
          "display": "hydroxocobalamin"
        }
      },
      {
        "flag": {
          "coding": [
            {
              "system": "http://nehta.gov.au/codes/medications/changetype",
              "code": "02",
              "display": "Cancelled"
            }
          ]
        },
        "deleted": true,
        "item": {
          "display": "Morphine Sulfate"
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
    "resourceType": "List",
    "id": "example-simple-empty",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003cp\u003ePatient Admission Waitoing list\u003c/p\u003e\n    \u003c/div\u003e"
    },
    "status": "current",
    "mode": "snapshot",
    "code": {
      "coding": [
        {
          "system": "http://acme.com/list-codes",
          "code": "346638",
          "display": "Patient Admission List"
        }
      ]
    },
    "date": "2016-07-14T11:54:05+10:00",
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
    "resourceType": "List",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n      \u003ctable\u003e\n        \u003cthead\u003e\n          \u003ctr\u003e\n            \u003cth\u003eCondition\u003c/th\u003e\n            \u003cth\u003eSeverity\u003c/th\u003e\n            \u003cth\u003eDate\u003c/th\u003e\n            \u003cth\u003eLocation\u003c/th\u003e\n            \u003cth\u003eStatus\u003c/th\u003e\n          \u003c/tr\u003e\n        \u003c/thead\u003e\n        \u003ctbody\u003e\n          \u003ctr\u003e\n            \u003ctd\u003eBurnt Ear\u003c/td\u003e\n            \u003ctd\u003eSevere\u003c/td\u003e\n            \u003ctd\u003e24-May 2012\u003c/td\u003e\n            \u003ctd\u003eLeft Ear\u003c/td\u003e\n            \u003ctd\u003edeleted\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003eAsthma\u003c/td\u003e\n            \u003ctd\u003eMild\u003c/td\u003e\n            \u003ctd\u003e21-Nov 2012\u003c/td\u003e\n            \u003ctd\u003e--\u003c/td\u003e\n            \u003ctd\u003eadded\u003c/td\u003e\n          \u003c/tr\u003e\n        \u003c/tbody\u003e\n      \u003c/table\u003e\n    \u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "urn:uuid:a9fcea7c-fcdf-4d17-a5e0-f26dda030b59",
        "value": "23974652"
      }
    ],
    "status": "current",
    "mode": "changes",
    "subject": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "date": "2012-11-25T22:17:00+11:00",
    "source": {
      "reference": "Patient/example"
    },
    "entry": [
      {
        "flag": {
          "text": "Deleted due to error"
        },
        "deleted": true,
        "item": {
          "reference": "Condition/example"
        }
      },
      {
        "flag": {
          "text": "Added"
        },
        "item": {
          "reference": "Condition/example2"
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

export const listBundle = bundleResource('List', resourceData);

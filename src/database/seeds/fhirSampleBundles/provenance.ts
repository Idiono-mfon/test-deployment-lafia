import { bundleResource } from './bundleResource';

const resourceData = [
  {
    "resourceType": "Provenance",
    "id": "consent-signature",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: consent-signature\u003c/p\u003e\u003cp\u003e\u003cb\u003etarget\u003c/b\u003e: \u003ca\u003eConsent/consent-example-signature\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003erecorded\u003c/b\u003e: 26/05/2016 12:41:10 AM\u003c/p\u003e\u003ch3\u003eAgents\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eRole\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eWho\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eauthor (originator) \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ParticipationType code \u0027AUT\u0027 \u003d \u0027author (originator))\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePatient/72\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003esignature\u003c/b\u003e: \u003c/p\u003e\u003c/div\u003e"
    },
    "target": [
      {
        "reference": "Consent/consent-example-signature"
      }
    ],
    "recorded": "2016-05-26T00:41:10-04:00",
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
          "reference": "Patient/72"
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
        "when": "2016-05-26T00:41:10-04:00",
        "who": {
          "reference": "Patient/72"
        },
        "targetFormat": "application/fhir+xml",
        "sigFormat": "application/signature+xml",
        "data": "dGhpcyBibG9iIGlzIHNuaXBwZWQ\u003d"
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
    "resourceType": "Provenance",
    "id": "example-biocompute-object",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\n\t\t\t\u003c/p\u003e\u003cp\u003e\n\t\t\t\t\u003cb\u003eid\u003c/b\u003e: example-biocompute-object\u003c/p\u003e\u003cp\u003e\n\t\t\t\t\u003cb\u003etarget\u003c/b\u003e: \u003ca href\u003d\"http://build.fhir.org/sequence-example.html\"\u003eMolecularSequence/example\u003c/a\u003e\n\t\t\t\u003c/p\u003e\u003cp\u003e\n\t\t\t\t\u003cb\u003eperiod\u003c/b\u003e: 2017-6-6 --\u0026gt; (ongoing)\u003c/p\u003e\u003cp\u003e\n\t\t\t\t\u003cb\u003erecorded\u003c/b\u003e: 2016-6-9 8:12:14\u003c/p\u003e\u003cp\u003e\n\t\t\t\t\u003cb\u003ereason\u003c/b\u003e: antiviral resistance detection (Details: [not stated] code null \u003d \u0027null\u0027, stated as\n         \u0027antiviral resistance detection\u0027)\u003c/p\u003e\n\t\t\t\u003ch3\u003eAgents\u003c/h3\u003e\n\t\t\t\u003ctable\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003cb\u003eRole\u003c/b\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003cb\u003eWho\u003c/b\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003e*\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eAuthor (Details: http://hl7.org/fhir/provenance-participant-role code author \u003d \u0027Author\u0027,\n             stated as \u0027null\u0027)\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003ca href\u003d\"http://build.fhir.org/practitioner-example.html\"\u003ePractitioner/example\u003c/a\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\u003c/table\u003e\n\t\t\t\u003ch3\u003eEntities\u003c/h3\u003e\n\t\t\t\u003ctable\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003cb\u003eRole\u003c/b\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003cb\u003eReference\u003c/b\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003e*\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003esource\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003ca href\u003d\"https://hive.biochemistry.gwu.edu/cgi-bin/prd/htscsrs/servlet.cgi?pageid\u003dbcoexample_1\"\u003eBiocompute example\u003c/a\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\u003c/table\u003e\n\t\t\u003c/div\u003e"
    },
    "target": [
      {
        "reference": "MolecularSequence/example"
      }
    ],
    "occurredPeriod": {
      "start": "2017-06-06"
    },
    "recorded": "2016-06-09T08:12:14+10:00",
    "reason": [
      {
        "text": "antiviral resistance detection"
      }
    ],
    "agent": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              "code": "AUT"
            }
          ]
        },
        "who": {
          "reference": "Practitioner/example"
        }
      }
    ],
    "entity": [
      {
        "role": "source",
        "what": {
          "identifier": {
            "type": {
              "coding": [
                {
                  "system": "https://hive.biochemistry.gwu.edu",
                  "code": "biocompute",
                  "display": "obj.1001"
                }
              ]
            },
            "value": "https://hive.biochemistry.gwu.edu/cgi-bin/prd/htscsrs/servlet.cgi?pageid\u003dbcoexample_1"
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
    "resourceType": "Provenance",
    "id": "example-cwl",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\n\t\t\t\u003c/p\u003e\u003cp\u003e\n\t\t\t\t\u003cb\u003eid\u003c/b\u003e: cwl-example\u003c/p\u003e\u003cp\u003e\n\t\t\t\t\u003cb\u003etarget\u003c/b\u003e: \u003ca href\u003d\"http://build.fhir.org/sequence-example-pgx-1.html\"\u003eMolecularSequence/example-pgx-1\u003c/a\u003e\n\t\t\t\u003c/p\u003e\u003cp\u003e\n\t\t\t\t\u003cb\u003eperiod\u003c/b\u003e: Nov 30, 2016 --\u0026gt; (ongoing)\u003c/p\u003e\u003cp\u003e\n\t\t\t\t\u003cb\u003erecorded\u003c/b\u003e: Dec 1, 2016 8:12:14 AM\u003c/p\u003e\u003cp\u003e\n\t\t\t\t\u003cb\u003ereason\u003c/b\u003e: profiling Short Tandem Repeats (STRs) from high throughput sequencing data. (Details:\n         [not stated] code null \u003d \u0027null\u0027, stated as \u0027profiling Short Tandem Repeats (STRs) from\n         high throughput sequencing data.\u0027)\u003c/p\u003e\n\t\t\t\u003ch3\u003eAgents\u003c/h3\u003e\n\t\t\t\u003ctable\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003cb\u003eRole\u003c/b\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003cb\u003eWho\u003c/b\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003e*\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eAuthor (Details: http://hl7.org/fhir/provenance-participant-role code author \u003d \u0027Author\u0027,\n             stated as \u0027null\u0027)\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003ca href\u003d\"http://build.fhir.org/patient-example.html\"\u003ePatient/example\u003c/a\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\u003c/table\u003e\n\t\t\t\u003ch3\u003eEntities\u003c/h3\u003e\n\t\t\t\u003ctable\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003cb\u003eRole\u003c/b\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003cb\u003eReference\u003c/b\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003e*\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003esource\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e\n\t\t\t\t\t\t\u003ca href\u003d\"https://github.com/common-workflow-language/workflows/blob/master/workflows/lobSTR/lobSTR-workflow.cwl\"\u003eCWL example\u003c/a\u003e\n\t\t\t\t\t\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\u003c/table\u003e\n\t\t\u003c/div\u003e"
    },
    "target": [
      {
        "reference": "MolecularSequence/example-pgx-1"
      }
    ],
    "occurredPeriod": {
      "start": "2016-11-30"
    },
    "recorded": "2016-12-01T08:12:14+10:00",
    "reason": [
      {
        "text": "profiling Short Tandem Repeats (STRs) from high throughput sequencing data."
      }
    ],
    "agent": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              "code": "AUT"
            }
          ]
        },
        "who": {
          "reference": "Patient/example"
        }
      }
    ],
    "entity": [
      {
        "role": "source",
        "what": {
          "identifier": {
            "type": {
              "coding": [
                {
                  "system": "https://github.com/common-workflow-language/workflows",
                  "code": "CWL",
                  "display": "lobSTR"
                }
              ]
            },
            "value": "https://github.com/common-workflow-language/workflows/blob/master/workflows/lobSTR/lobSTR-workflow.cwl"
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
    "resourceType": "Provenance",
    "id": "signature",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eprocedure record authored on 27-June 2015 by Harold Hippocrates, MD Content extracted from Referral received 26-June\u003c/div\u003e"
    },
    "target": [
      {
        "reference": "DocumentReference/example"
      }
    ],
    "recorded": "2015-08-27T08:39:24+10:00",
    "reason": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "TREAT",
            "display": "treatment"
          }
        ]
      }
    ],
    "activity": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-DocumentCompletion",
          "code": "AU",
          "display": "authenticated"
        }
      ]
    },
    "agent": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
              "code": "VERF"
            }
          ]
        },
        "who": {
          "identifier": {
            "system": "urn:ietf:rfc:3986",
            "value": "mailto://hhd@ssa.gov"
          }
        }
      }
    ],
    "signature": [
      {
        "type": [
          {
            "system": "urn:iso-astm:E1762-95:2013",
            "code": "1.2.840.10065.1.12.1.5",
            "display": "Verification Signature"
          }
        ],
        "when": "2015-08-27T08:39:24+10:00",
        "who": {
          "reference": "Practitioner/xcda-author"
        },
        "targetFormat": "application/fhir+xml",
        "sigFormat": "application/signature+xml",
        "data": "Li4u"
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
    "resourceType": "Provenance",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eprocedure record authored on 27-June 2015 by Harold Hippocrates, MD Content extracted from XDS managed CDA Referral received 26-June as authorized by a referenced Consent.\u003c/div\u003e"
    },
    "target": [
      {
        "reference": "Procedure/example/_history/1"
      }
    ],
    "occurredPeriod": {
      "start": "2015-06-27",
      "end": "2015-06-28"
    },
    "recorded": "2015-06-27T08:39:24+10:00",
    "policy": [
      "http://acme.com/fhir/Consent/25"
    ],
    "location": {
      "reference": "Location/1"
    },
    "reason": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "3457005",
            "display": "Referral"
          }
        ]
      }
    ],
    "agent": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              "code": "AUT"
            }
          ]
        },
        "who": {
          "reference": "Practitioner/xcda-author"
        }
      },
      {
        "id": "a1",
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              "code": "DEV"
            }
          ]
        },
        "who": {
          "reference": "Device/software"
        }
      }
    ],
    "entity": [
      {
        "role": "source",
        "what": {
          "reference": "DocumentReference/example",
          "display": "CDA Document in XDS repository"
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

];

export const provenanceBundle = bundleResource('Provenance', resourceData);

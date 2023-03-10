import { bundleResource } from './bundleResource';

const resourceData = [
  {
    "resourceType": "Encounter",
    "id": "emerg",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eEmergency visit that escalated into inpatient patient @example\u003c/div\u003e"
    },
    "status": "in-progress",
    "statusHistory": [
      {
        "status": "arrived",
        "period": {
          "start": "2017-02-01T07:15:00+10:00",
          "end": "2017-02-01T07:35:00+10:00"
        }
      },
      {
        "status": "triaged",
        "period": {
          "start": "2017-02-01T07:35:00+10:00",
          "end": "2017-02-01T08:45:00+10:00"
        }
      },
      {
        "status": "in-progress",
        "period": {
          "start": "2017-02-01T08:45:00+10:00",
          "end": "2017-02-01T12:15:00+10:00"
        }
      },
      {
        "status": "onleave",
        "period": {
          "start": "2017-02-01T12:15:00+10:00",
          "end": "2017-02-01T12:45:00+10:00"
        }
      },
      {
        "status": "in-progress",
        "period": {
          "start": "2017-02-01T12:45:00+10:00"
        }
      }
    ],
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "IMP",
      "display": "inpatient encounter"
    },
    "classHistory": [
      {
        "class": {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "EMER",
          "display": "emergency"
        },
        "period": {
          "start": "2017-02-01T07:15:00+10:00",
          "end": "2017-02-01T09:27:00+10:00"
        }
      },
      {
        "class": {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "IMP",
          "display": "inpatient encounter"
        },
        "period": {
          "start": "2017-02-01T09:27:00+10:00"
        }
      }
    ],
    "subject": {
      "reference": "Patient/example"
    },
    "period": {
      "start": "2017-02-01T07:15:00+10:00"
    },
    "hospitalization": {
      "admitSource": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/admit-source",
            "code": "emd",
            "display": "From accident/emergency department"
          }
        ]
      }
    },
    "location": [
      {
        "location": {
          "display": "Emergency Waiting Room"
        },
        "status": "active",
        "period": {
          "start": "2017-02-01T07:15:00+10:00",
          "end": "2017-02-01T08:45:00+10:00"
        }
      },
      {
        "location": {
          "display": "Emergency"
        },
        "status": "active",
        "period": {
          "start": "2017-02-01T08:45:00+10:00",
          "end": "2017-02-01T09:27:00+10:00"
        }
      },
      {
        "location": {
          "display": "Ward 1, Room 42, Bed 1"
        },
        "status": "active",
        "period": {
          "start": "2017-02-01T09:27:00+10:00",
          "end": "2017-02-01T12:15:00+10:00"
        }
      },
      {
        "location": {
          "display": "Ward 1, Room 42, Bed 1"
        },
        "status": "reserved",
        "period": {
          "start": "2017-02-01T12:15:00+10:00",
          "end": "2017-02-01T12:45:00+10:00"
        }
      },
      {
        "location": {
          "display": "Ward 1, Room 42, Bed 1"
        },
        "status": "active",
        "period": {
          "start": "2017-02-01T12:45:00+10:00"
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
    "resourceType": "Encounter",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f001\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: v1451 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: finished\u003c/p\u003e\u003cp\u003e\u003cb\u003eclass\u003c/b\u003e: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB \u003d \u0027ambulatory\u0027, stated as \u0027ambulatory\u0027)\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Patient-initiated encounter \u003cspan\u003e(Details : {SNOMED CT code \u0027270427003\u0027 \u003d \u0027Patient-initiated encounter\u0027, given as \u0027Patient-initiated encounter\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epriority\u003c/b\u003e: Non-urgent cardiological admission \u003cspan\u003e(Details : {SNOMED CT code \u0027310361003\u0027 \u003d \u0027Non-urgent cardiological admission\u0027, given as \u0027Non-urgent cardiological admission\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eParticipants\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eIndividual\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003eP. Voigt\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003elength\u003c/b\u003e: 140 min\u003cspan\u003e (Details: UCUM code min \u003d \u0027min\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Heart valve replacement \u003cspan\u003e(Details : {SNOMED CT code \u002734068001\u0027 \u003d \u0027Heart valve replacement\u0027, given as \u0027Heart valve replacement\u0027})\u003c/span\u003e\u003c/p\u003e\u003ch3\u003eHospitalizations\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePreAdmissionIdentifier\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAdmitSource\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDischargeDisposition\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e93042 (OFFICIAL)\u003c/td\u003e\u003ctd\u003eReferral by physician \u003cspan\u003e(Details : {SNOMED CT code \u0027305956004\u0027 \u003d \u0027Referral from physician\u0027, given as \u0027Referral by physician\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003eDischarge to home \u003cspan\u003e(Details : {SNOMED CT code \u0027306689006\u0027 \u003d \u0027Discharge to home\u0027, given as \u0027Discharge to home\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eserviceProvider\u003c/b\u003e: \u003ca\u003eBurgers University Medical Center\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.amc.nl/zorgportal/identifiers/visits",
        "value": "v1451"
      }
    ],
    "status": "finished",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "AMB",
      "display": "ambulatory"
    },
    "type": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "270427003",
            "display": "Patient-initiated encounter"
          }
        ]
      }
    ],
    "priority": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "310361003",
          "display": "Non-urgent cardiological admission"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "participant": [
      {
        "individual": {
          "reference": "Practitioner/f002",
          "display": "P. Voigt"
        }
      }
    ],
    "length": {
      "value": 140,
      "unit": "min",
      "system": "http://unitsofmeasure.org",
      "code": "min"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "34068001",
            "display": "Heart valve replacement"
          }
        ]
      }
    ],
    "hospitalization": {
      "preAdmissionIdentifier": {
        "use": "official",
        "system": "http://www.amc.nl/zorgportal/identifiers/pre-admissions",
        "value": "93042"
      },
      "admitSource": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "305956004",
            "display": "Referral by physician"
          }
        ]
      },
      "dischargeDisposition": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "306689006",
            "display": "Discharge to home"
          }
        ]
      }
    },
    "serviceProvider": {
      "reference": "Organization/f001",
      "display": "Burgers University Medical Center"
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
    "resourceType": "Encounter",
    "id": "f002",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f002\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: v3251 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: finished\u003c/p\u003e\u003cp\u003e\u003cb\u003eclass\u003c/b\u003e: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB \u003d \u0027ambulatory\u0027, stated as \u0027ambulatory\u0027)\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Patient-initiated encounter \u003cspan\u003e(Details : {SNOMED CT code \u0027270427003\u0027 \u003d \u0027Patient-initiated encounter\u0027, given as \u0027Patient-initiated encounter\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epriority\u003c/b\u003e: Urgent \u003cspan\u003e(Details : {SNOMED CT code \u0027103391001\u0027 \u003d \u0027Urgency\u0027, given as \u0027Urgent\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eParticipants\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eIndividual\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003eM.I.M Versteegh\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003elength\u003c/b\u003e: 140 min\u003cspan\u003e (Details: UCUM code min \u003d \u0027min\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Partial lobectomy of lung \u003cspan\u003e(Details : {SNOMED CT code \u002734068001\u0027 \u003d \u0027Heart valve replacement\u0027, given as \u0027Partial lobectomy of lung\u0027})\u003c/span\u003e\u003c/p\u003e\u003ch3\u003eHospitalizations\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePreAdmissionIdentifier\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAdmitSource\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDischargeDisposition\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e98682 (OFFICIAL)\u003c/td\u003e\u003ctd\u003eReferral by radiologist \u003cspan\u003e(Details : {SNOMED CT code \u0027305997006\u0027 \u003d \u0027Referral by radiologist\u0027, given as \u0027Referral by radiologist\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003eDischarge to home \u003cspan\u003e(Details : {SNOMED CT code \u0027306689006\u0027 \u003d \u0027Discharge to home\u0027, given as \u0027Discharge to home\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eserviceProvider\u003c/b\u003e: \u003ca\u003eBMC\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/encounters",
        "value": "v3251"
      }
    ],
    "status": "finished",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "AMB",
      "display": "ambulatory"
    },
    "type": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "270427003",
            "display": "Patient-initiated encounter"
          }
        ]
      }
    ],
    "priority": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "103391001",
          "display": "Urgent"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "participant": [
      {
        "individual": {
          "reference": "Practitioner/f003",
          "display": "M.I.M Versteegh"
        }
      }
    ],
    "length": {
      "value": 140,
      "unit": "min",
      "system": "http://unitsofmeasure.org",
      "code": "min"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "34068001",
            "display": "Partial lobectomy of lung"
          }
        ]
      }
    ],
    "hospitalization": {
      "preAdmissionIdentifier": {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/pre-admissions",
        "value": "98682"
      },
      "admitSource": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "305997006",
            "display": "Referral by radiologist"
          }
        ]
      },
      "dischargeDisposition": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "306689006",
            "display": "Discharge to home"
          }
        ]
      }
    },
    "serviceProvider": {
      "reference": "Organization/f001",
      "display": "BMC"
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
    "resourceType": "Encounter",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f003\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: v6751 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: finished\u003c/p\u003e\u003cp\u003e\u003cb\u003eclass\u003c/b\u003e: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB \u003d \u0027ambulatory\u0027, stated as \u0027ambulatory\u0027)\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Patient-initiated encounter \u003cspan\u003e(Details : {SNOMED CT code \u0027270427003\u0027 \u003d \u0027Patient-initiated encounter\u0027, given as \u0027Patient-initiated encounter\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epriority\u003c/b\u003e: Non-urgent ear, nose and throat admission \u003cspan\u003e(Details : {SNOMED CT code \u0027103391001\u0027 \u003d \u0027Urgency\u0027, given as \u0027Non-urgent ear, nose and throat admission\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van de Heuvel\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eParticipants\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eIndividual\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003eE.M. van den Broek\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003elength\u003c/b\u003e: 90 min\u003cspan\u003e (Details: UCUM code min \u003d \u0027min\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Retropharyngeal abscess \u003cspan\u003e(Details : {SNOMED CT code \u002718099001\u0027 \u003d \u0027Retropharyngeal abscess\u0027, given as \u0027Retropharyngeal abscess\u0027})\u003c/span\u003e\u003c/p\u003e\u003ch3\u003eHospitalizations\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePreAdmissionIdentifier\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAdmitSource\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDischargeDisposition\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e93042 (OFFICIAL)\u003c/td\u003e\u003ctd\u003eReferral by physician \u003cspan\u003e(Details : {SNOMED CT code \u0027305956004\u0027 \u003d \u0027Referral from physician\u0027, given as \u0027Referral by physician\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003eDischarge to home \u003cspan\u003e(Details : {SNOMED CT code \u0027306689006\u0027 \u003d \u0027Discharge to home\u0027, given as \u0027Discharge to home\u0027})\u003c/span\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eserviceProvider\u003c/b\u003e: \u003ca\u003eOrganization/f001\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/encounters",
        "value": "v6751"
      }
    ],
    "status": "finished",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "AMB",
      "display": "ambulatory"
    },
    "type": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "270427003",
            "display": "Patient-initiated encounter"
          }
        ]
      }
    ],
    "priority": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "103391001",
          "display": "Non-urgent ear, nose and throat admission"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "participant": [
      {
        "individual": {
          "reference": "Practitioner/f001",
          "display": "E.M. van den Broek"
        }
      }
    ],
    "length": {
      "value": 90,
      "unit": "min",
      "system": "http://unitsofmeasure.org",
      "code": "min"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "18099001",
            "display": "Retropharyngeal abscess"
          }
        ]
      }
    ],
    "hospitalization": {
      "preAdmissionIdentifier": {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/pre-admissions",
        "value": "93042"
      },
      "admitSource": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "305956004",
            "display": "Referral by physician"
          }
        ]
      },
      "dischargeDisposition": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "306689006",
            "display": "Discharge to home"
          }
        ]
      }
    },
    "serviceProvider": {
      "reference": "Organization/f001"
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
    "resourceType": "Encounter",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f201\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: Encounter_Roel_20130404 (TEMP)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: finished\u003c/p\u003e\u003cp\u003e\u003cb\u003eclass\u003c/b\u003e: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB \u003d \u0027ambulatory\u0027, stated as \u0027ambulatory\u0027)\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Consultation \u003cspan\u003e(Details : {SNOMED CT code \u002711429006\u0027 \u003d \u0027Consultation\u0027, given as \u0027Consultation\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epriority\u003c/b\u003e: Normal \u003cspan\u003e(Details : {SNOMED CT code \u002717621005\u0027 \u003d \u0027Normal\u0027, given as \u0027Normal\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eParticipants\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eIndividual\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f201\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: The patient had fever peaks over the last couple of days. He is worried about these peaks. \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eserviceProvider\u003c/b\u003e: \u003ca\u003eOrganization/f201\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "temp",
        "value": "Encounter_Roel_20130404"
      }
    ],
    "status": "finished",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "AMB",
      "display": "ambulatory"
    },
    "type": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "11429006",
            "display": "Consultation"
          }
        ]
      }
    ],
    "priority": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "17621005",
          "display": "Normal"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "participant": [
      {
        "individual": {
          "reference": "Practitioner/f201"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "The patient had fever peaks over the last couple of days. He is worried about these peaks."
      }
    ],
    "serviceProvider": {
      "reference": "Organization/f201"
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
    "resourceType": "Encounter",
    "id": "f202",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f202\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: Encounter_Roel_20130128 (TEMP)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: finished\u003c/p\u003e\u003cp\u003e\u003cb\u003eclass\u003c/b\u003e: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB \u003d \u0027ambulatory\u0027, stated as \u0027ambulatory\u0027)\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Chemotherapy \u003cspan\u003e(Details : {SNOMED CT code \u0027367336001\u0027 \u003d \u0027Chemotherapy\u0027, given as \u0027Chemotherapy\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epriority\u003c/b\u003e: Urgent \u003cspan\u003e(Details : {SNOMED CT code \u0027103391001\u0027 \u003d \u0027Urgency\u0027, given as \u0027Urgent\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eParticipants\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eIndividual\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f201\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003elength\u003c/b\u003e: 56 minutes\u003cspan\u003e (Details: UCUM code min \u003d \u0027min\u0027)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: The patient is treated for a tumor. \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ediagnosis\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003econdition\u003c/b\u003e: Complications from Roel\u0027s TPF chemotherapy on January 28th, 2013\u003c/p\u003e\u003cp\u003e\u003cb\u003euse\u003c/b\u003e: Admission diagnosis \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/diagnosis-role code \u0027AD\u0027 \u003d \u0027Admission diagnosis\u0027, given as \u0027Admission diagnosis\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003erank\u003c/b\u003e: 2\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ediagnosis\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003econdition\u003c/b\u003e: The patient is treated for a tumor\u003c/p\u003e\u003cp\u003e\u003cb\u003euse\u003c/b\u003e: Chief complaint \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/diagnosis-role code \u0027CC\u0027 \u003d \u0027Chief complaint\u0027, given as \u0027Chief complaint\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003erank\u003c/b\u003e: 1\u003c/p\u003e\u003c/blockquote\u003e\u003cp\u003e\u003cb\u003eserviceProvider\u003c/b\u003e: \u003ca\u003eOrganization/f201\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "temp",
        "value": "Encounter_Roel_20130128"
      }
    ],
    "status": "finished",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "AMB",
      "display": "ambulatory"
    },
    "type": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "367336001",
            "display": "Chemotherapy"
          }
        ]
      }
    ],
    "priority": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "103391001",
          "display": "Urgent"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "participant": [
      {
        "individual": {
          "reference": "Practitioner/f201"
        }
      }
    ],
    "length": {
      "value": 56,
      "unit": "minutes",
      "system": "http://unitsofmeasure.org",
      "code": "min"
    },
    "reasonCode": [
      {
        "text": "The patient is treated for a tumor."
      }
    ],
    "diagnosis": [
      {
        "condition": {
          "display": "Complications from Roel\u0027s TPF chemotherapy on January 28th, 2013"
        },
        "use": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
              "code": "AD",
              "display": "Admission diagnosis"
            }
          ]
        },
        "rank": 2
      },
      {
        "condition": {
          "display": "The patient is treated for a tumor"
        },
        "use": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
              "code": "CC",
              "display": "Chief complaint"
            }
          ]
        },
        "rank": 1
      }
    ],
    "serviceProvider": {
      "reference": "Organization/f201"
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
    "resourceType": "Encounter",
    "id": "f203",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f203\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: Encounter_Roel_20130311 (TEMP)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: finished\u003c/p\u003e\u003ch3\u003eStatusHistories\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eStatus\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003ePeriod\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003earrived\u003c/td\u003e\u003ctd\u003e08/03/2013 --\u0026gt; (ongoing)\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eclass\u003c/b\u003e: inpatient encounter (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code IMP \u003d \u0027inpatient encounter\u0027, stated as \u0027inpatient encounter\u0027)\u003c/p\u003e\u003cp\u003e\u003cb\u003etype\u003c/b\u003e: Inpatient stay for nine days \u003cspan\u003e(Details : {SNOMED CT code \u0027183807002\u0027 \u003d \u0027Inpatient stay 9 days\u0027, given as \u0027Inpatient stay for nine days\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epriority\u003c/b\u003e: High priority \u003cspan\u003e(Details : {SNOMED CT code \u0027394849002\u0027 \u003d \u0027High priority\u0027, given as \u0027High priority\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eepisodeOfCare\u003c/b\u003e: \u003ca\u003eEpisodeOfCare/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ebasedOn\u003c/b\u003e: \u003ca\u003eServiceRequest/myringotomy\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eParticipants\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eType\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eIndividual\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003eParticipation \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-ParticipationType code \u0027PART\u0027 \u003d \u0027Participation)\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/f201\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eappointment\u003c/b\u003e: \u003ca\u003eAppointment/example\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eperiod\u003c/b\u003e: 11/03/2013 --\u0026gt; 20/03/2013\u003c/p\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: The patient seems to suffer from bilateral pneumonia and renal insufficiency, most likely due to chemotherapy. \u003cspan\u003e(Details )\u003c/span\u003e\u003c/p\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ediagnosis\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003econdition\u003c/b\u003e: \u003ca\u003eCondition/stroke\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003euse\u003c/b\u003e: Admission diagnosis \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/diagnosis-role code \u0027AD\u0027 \u003d \u0027Admission diagnosis\u0027, given as \u0027Admission diagnosis\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003erank\u003c/b\u003e: 1\u003c/p\u003e\u003c/blockquote\u003e\u003cblockquote\u003e\u003cp\u003e\u003cb\u003ediagnosis\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003econdition\u003c/b\u003e: \u003ca\u003eCondition/f201\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003euse\u003c/b\u003e: Discharge diagnosis \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/diagnosis-role code \u0027DD\u0027 \u003d \u0027Discharge diagnosis\u0027, given as \u0027Discharge diagnosis\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/blockquote\u003e\u003cp\u003e\u003cb\u003eaccount\u003c/b\u003e: \u003ca\u003eAccount/example\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eHospitalizations\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eOrigin\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eAdmitSource\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eReAdmission\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDietPreference\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eSpecialCourtesy\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eSpecialArrangement\u003c/b\u003e\u003c/td\u003e\u003ctd\u003e\u003cb\u003eDestination\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003eLocation/2\u003c/a\u003e\u003c/td\u003e\u003ctd\u003eClinical Oncology Department \u003cspan\u003e(Details : {SNOMED CT code \u0027309902002\u0027 \u003d \u0027Clinical oncology department\u0027, given as \u0027Clinical Oncology Department\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003ereadmitted \u003cspan\u003e(Details : {[not stated] code \u0027null\u0027 \u003d \u0027null\u0027, given as \u0027readmitted\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003eFluid balance regulation \u003cspan\u003e(Details : {SNOMED CT code \u0027276026009\u0027 \u003d \u0027Fluid balance regulation\u0027, given as \u0027Fluid balance regulation\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003enormal courtesy \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy code \u0027NRM\u0027 \u003d \u0027normal courtesy\u0027, given as \u0027normal courtesy\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003eWheelchair \u003cspan\u003e(Details : {http://terminology.hl7.org/CodeSystem/encounter-special-arrangements code \u0027wheel\u0027 \u003d \u0027Wheelchair\u0027, given as \u0027Wheelchair\u0027})\u003c/span\u003e\u003c/td\u003e\u003ctd\u003e\u003ca\u003eLocation/2\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003eserviceProvider\u003c/b\u003e: \u003ca\u003eOrganization/2\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003epartOf\u003c/b\u003e: \u003ca\u003eEncounter/f203\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "temp",
        "value": "Encounter_Roel_20130311"
      }
    ],
    "status": "finished",
    "statusHistory": [
      {
        "status": "arrived",
        "period": {
          "start": "2013-03-08"
        }
      }
    ],
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "IMP",
      "display": "inpatient encounter"
    },
    "type": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "183807002",
            "display": "Inpatient stay for nine days"
          }
        ]
      }
    ],
    "priority": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "394849002",
          "display": "High priority"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "episodeOfCare": [
      {
        "reference": "EpisodeOfCare/example"
      }
    ],
    "basedOn": [
      {
        "reference": "ServiceRequest/myringotomy"
      }
    ],
    "participant": [
      {
        "type": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                "code": "PART"
              }
            ]
          }
        ],
        "individual": {
          "reference": "Practitioner/f201"
        }
      }
    ],
    "appointment": [
      {
        "reference": "Appointment/example"
      }
    ],
    "period": {
      "start": "2013-03-11",
      "end": "2013-03-20"
    },
    "reasonCode": [
      {
        "text": "The patient seems to suffer from bilateral pneumonia and renal insufficiency, most likely due to chemotherapy."
      }
    ],
    "diagnosis": [
      {
        "condition": {
          "reference": "Condition/stroke"
        },
        "use": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
              "code": "AD",
              "display": "Admission diagnosis"
            }
          ]
        },
        "rank": 1
      },
      {
        "condition": {
          "reference": "Condition/f201"
        },
        "use": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
              "code": "DD",
              "display": "Discharge diagnosis"
            }
          ]
        }
      }
    ],
    "account": [
      {
        "reference": "Account/example"
      }
    ],
    "hospitalization": {
      "origin": {
        "reference": "Location/2"
      },
      "admitSource": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "309902002",
            "display": "Clinical Oncology Department"
          }
        ]
      },
      "reAdmission": {
        "coding": [
          {
            "display": "readmitted"
          }
        ]
      },
      "dietPreference": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "276026009",
              "display": "Fluid balance regulation"
            }
          ]
        }
      ],
      "specialCourtesy": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy",
              "code": "NRM",
              "display": "normal courtesy"
            }
          ]
        }
      ],
      "specialArrangement": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
              "code": "wheel",
              "display": "Wheelchair"
            }
          ]
        }
      ],
      "destination": {
        "reference": "Location/2"
      }
    },
    "serviceProvider": {
      "reference": "Organization/2"
    },
    "partOf": {
      "reference": "Encounter/f203"
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
    "resourceType": "Encounter",
    "id": "home",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eEncounter with patient @example who is at home\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Location",
        "id": "home",
        "description": "Client\u0027s home",
        "mode": "kind"
      }
    ],
    "status": "finished",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "HH",
      "display": "home health"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "participant": [
      {
        "period": {
          "start": "2015-01-17T16:00:00+10:00",
          "end": "2015-01-17T16:30:00+10:00"
        },
        "individual": {
          "reference": "Practitioner/example",
          "display": "Dr Adam Careful"
        }
      }
    ],
    "period": {
      "start": "2015-01-17T16:00:00+10:00",
      "end": "2015-01-17T16:30:00+10:00"
    },
    "location": [
      {
        "location": {
          "reference": "#home",
          "display": "Client\u0027s home"
        },
        "status": "completed",
        "period": {
          "start": "2015-01-17T16:00:00+10:00",
          "end": "2015-01-17T16:30:00+10:00"
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
    "resourceType": "Encounter",
    "id": "xcda",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: xcda\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 1234213.52345873 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: finished\u003c/p\u003e\u003cp\u003e\u003cb\u003eclass\u003c/b\u003e: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB \u003d \u0027ambulatory\u0027, stated as \u0027ambulatory\u0027)\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePatient/xcda\u003c/a\u003e\u003c/p\u003e\u003ch3\u003eParticipants\u003c/h3\u003e\u003ctable\u003e\u003ctr\u003e\u003ctd\u003e-\u003c/td\u003e\u003ctd\u003e\u003cb\u003eIndividual\u003c/b\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e*\u003c/td\u003e\u003ctd\u003e\u003ca\u003ePractitioner/xcda1\u003c/a\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cp\u003e\u003cb\u003ereasonCode\u003c/b\u003e: Arm \u003cspan\u003e(Details : {http://ihe.net/xds/connectathon/eventCodes code \u0027T-D8200\u0027 \u003d \u0027T-D8200\u0027, given as \u0027Arm\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://healthcare.example.org/identifiers/enocunter",
        "value": "1234213.52345873"
      }
    ],
    "status": "finished",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "AMB",
      "display": "ambulatory"
    },
    "subject": {
      "reference": "Patient/xcda"
    },
    "participant": [
      {
        "individual": {
          "reference": "Practitioner/xcda1"
        }
      }
    ],
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://ihe.net/xds/connectathon/eventCodes",
            "code": "T-D8200",
            "display": "Arm"
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
    "resourceType": "Encounter",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eEncounter with patient @example\u003c/div\u003e"
    },
    "status": "in-progress",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "IMP",
      "display": "inpatient encounter"
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
  }
];

export const encounterBundle = bundleResource('Encounter', resourceData);

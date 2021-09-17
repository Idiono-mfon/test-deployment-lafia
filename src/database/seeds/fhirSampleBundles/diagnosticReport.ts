import { bundleResource } from "./bundleResource";

const resourceData = [
  {
    "resourceType": "DiagnosticReport",
    "id": "102",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\n\t\t\t\u003ch2\u003eDXA BONE DENSITOMETRY\u003c/h2\u003e\n\t\t\t\u003ctable\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003eNAME\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eXXXXXXX\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003eDOB\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e10/02/1974\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003eREFERRING DR\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eSmith, Jane\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003eINDICATIONS\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eEarly menopause on estrogen levels. No period  for 18 months\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003ePROCEDURE\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eDual energy x-ray absorptiometry (DEXA)\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\u003c/table\u003e\n\t\t\t\u003ch3\u003eBone Mineral Density\u003c/h3\u003e\n\t\t\t\u003ctable\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003eScan Type\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eRegion\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eMeasured\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eAge\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eBMD\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eT-Score\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eZ-Score\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e?BMD(g/cm2)\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e?BMD(%)\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003eAP Spine\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eL1-L4\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e17/06/2008\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e34.4\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e1.148 g/cm²\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-0.4\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-0.5\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003eLeft Femur\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eNeck\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e17/06/2008\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e34.4\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e0.891 g/cm²\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-1.0\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-0.9\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003eLeft Femur\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eTotal\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e17/06/2008\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e34.4\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e0.887 g/cm²\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-1.2\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-1.3\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003eRight Femur\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eNeck\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e17/06/2008\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e34.4\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e0.885 g/cm²\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-1.0\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-1.0\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\t\u003ctr\u003e\n\t\t\t\t\t\u003ctd\u003eRight Femur\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003eTotal\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e17/06/2008\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e34.4\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e0.867 g/cm²\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-1.4\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-1.4\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\t\u003ctd\u003e-\u003c/td\u003e\n\t\t\t\t\u003c/tr\u003e\n\t\t\t\u003c/table\u003e\n\t\t\t\u003cp\u003eAssessment:\u003c/p\u003e\n\t\t\t\u003cul\u003e\n\t\t\t\t\u003cli\u003eThe Spine L1-L4 BMD is normal.\u003c/li\u003e\n\t\t\t\t\u003cli\u003eThe Left Femur Neck BMD is in the osteopenic range. Relative fracture risk is about 2.\u003c/li\u003e\n\t\t\t\t\u003cli\u003eThe Left Femur Total BMD is in the osteopenic range. Relative fracture risk is about 2.\u003c/li\u003e\n\t\t\t\t\u003cli\u003eThe Right Femur Neck BMD is in the osteopenic range. Relative fracture risk is about 2.\u003c/li\u003e\n\t\t\t\t\u003cli\u003eThe Right Femur Total BMD is in the osteopenic range. Relative fracture risk is about 2.\u003c/li\u003e\n\t\t\t\u003c/ul\u003e\n\t\t\t\u003cp\u003e\n\t\t\t\t\u003cb\u003eCOMMENT\u003c/b\u003e\n\t\t\t\u003c/p\u003e\n\t\t\t\u003cp\u003eOsteopenia on measured BMD. The estimated 10-year probability of fracture based on present age, gender and measured BMD is less than 10%. This absolute fracture risk remains low. A follow-up assessment may be considered in 2 to 3 years to monitor the trend in BMD.\u003c/p\u003e\n\t\t\t\u003cp\u003eThank you for your referral.  Dr Henry Seven  17/06/2008\u003c/p\u003e\n\t\t\t\u003cpre\u003e\nNote:\nWHO classification of osteoporosis (WHO Technical Report Series 1994: 843)\n- Normal: T-score equal to -1.0 s.d. or higher\n- Osteopenia: T-score  between -1.0 and -2.5 s.d.\n- Osteoporosis: T-score equal to -2.5 s.d. or lower\n- Severe/Established osteoporosis: Osteoporosis with one or more fragility fracture.\nT-score: The number of s.d. from the mean BMD for a gender-matched young adult population.\nZ-score: The number of s.d. from the mean BMD for an age-, weight- and gender-matched population.\nReference for 10-year probability of fracture risk: Kanis JA, Johnell O, Oden A, Dawson A,  De Laet C, Jonsson B. Ten year probabilities of osteoporotic fractures according to BMD and diagnostic thresholds. Osteoporos.Int. 2001;12(12):989-995.\nGE LUNAR PRODIGY DENSITOMETER\n\u003c/pre\u003e\n\t\t\u003c/div\u003e"
    },
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "38269-7"
        }
      ],
      "text": "DXA BONE DENSITOMETRY"
    },
    "subject": {
      "reference": "Patient/pat2"
    },
    "effectiveDateTime": "2008-06-17",
    "issued": "2008-06-18T09:23:00+10:00",
    "performer": [
      {
        "reference": "Practitioner/3ad0687e-f477-468c-afd5-fcc2bf897809",
        "display": "Dr Henry Seven"
      }
    ],
    "result": [
      {
        "reference": "Observation/bmd"
      }
    ],
    "conclusionCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "391040000",
            "display": "At risk of osteoporotic fracture"
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
    "fullUrl": "https://example.com/base/DiagnosticReport/f001",
    "resource": {
      "resourceType": "DiagnosticReport",
      "id": "f001",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f001\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: nr1239044 (OFFICIAL)\u003c/p\u003e\u003cp\u003e\u003cb\u003ebasedOn\u003c/b\u003e: \u003ca\u003eServiceRequest/req\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Haematology test \u003cspan\u003e(Details : {SNOMED CT code \u0027252275004\u0027 \u003d \u0027Haematology test\u0027, given as \u0027Haematology test\u0027}; {http://terminology.hl7.org/CodeSystem/v2-0074 code \u0027HM\u0027 \u003d \u0027Hematology)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Complete blood count (hemogram) panel - Blood by Automated count \u003cspan\u003e(Details : {LOINC code \u002758410-2\u0027 \u003d \u0027Complete blood count (hemogram) panel - Blood by Automated count\u0027, given as \u0027Complete blood count (hemogram) panel - Blood by Automated count\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eP. van den Heuvel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eissued\u003c/b\u003e: 15/05/2013 7:32:52 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003eBurgers University Medical Centre\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eresult\u003c/b\u003e: \u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003ca\u003eObservation/f001\u003c/a\u003e\u003c/li\u003e\u003cli\u003e\u003ca\u003eObservation/f002\u003c/a\u003e\u003c/li\u003e\u003cli\u003e\u003ca\u003eObservation/f003\u003c/a\u003e\u003c/li\u003e\u003cli\u003e\u003ca\u003eObservation/f004\u003c/a\u003e\u003c/li\u003e\u003cli\u003e\u003ca\u003eObservation/f005\u003c/a\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cb\u003econclusion\u003c/b\u003e: Core lab\u003c/p\u003e\u003c/div\u003e"
      },
      "identifier": [
        {
          "use": "official",
          "system": "http://www.bmc.nl/zorgportal/identifiers/reports",
          "value": "nr1239044"
        }
      ],
      "basedOn": [
        {
          "reference": "ServiceRequest/req"
        }
      ],
      "status": "final",
      "category": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "252275004",
              "display": "Haematology test"
            },
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
              "code": "HM"
            }
          ]
        }
      ],
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "58410-2",
            "display": "Complete blood count (hemogram) panel - Blood by Automated count"
          }
        ]
      },
      "subject": {
        "reference": "Patient/f001",
        "display": "P. van den Heuvel"
      },
      "issued": "2013-05-15T19:32:52+01:00",
      "performer": [
        {
          "reference": "Organization/f001",
          "display": "Burgers University Medical Centre"
        }
      ],
      "result": [
        {
          "reference": "Observation/f001"
        },
        {
          "reference": "Observation/f002"
        },
        {
          "reference": "Observation/f003"
        },
        {
          "reference": "Observation/f004"
        },
        {
          "reference": "Observation/f005"
        }
      ],
      "conclusion": "Core lab"
    }
  },
  {
    "resourceType": "DiagnosticReport",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f201\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Radiology \u003cspan\u003e(Details : {SNOMED CT code \u0027394914008\u0027 \u003d \u0027Radiology - speciality\u0027, given as \u0027Radiology\u0027}; {http://terminology.hl7.org/CodeSystem/v2-0074 code \u0027RAD\u0027 \u003d \u0027Radiology)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: CT of head-neck \u003cspan\u003e(Details : {SNOMED CT code \u0027429858000\u0027 \u003d \u0027Computed tomography (CT) of head and neck\u0027, given as \u0027Computed tomography (CT) of head and neck\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 01/12/2012 12:00:00 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003eissued\u003c/b\u003e: 01/12/2012 12:00:00 PM\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003eBlijdorp MC\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eimagingStudy\u003c/b\u003e: HEAD and NECK CT DICOM imaging study\u003c/p\u003e\u003cp\u003e\u003cb\u003econclusion\u003c/b\u003e: CT brains: large tumor sphenoid/clivus.\u003c/p\u003e\u003cp\u003e\u003cb\u003econclusionCode\u003c/b\u003e: Malignant tumor of craniopharyngeal duct \u003cspan\u003e(Details : {SNOMED CT code \u0027188340000\u0027 \u003d \u0027Malignant tumor of craniopharyngeal duct\u0027, given as \u0027Malignant tumor of craniopharyngeal duct\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
    },
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "394914008",
            "display": "Radiology"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
            "code": "RAD"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "429858000",
          "display": "Computed tomography (CT) of head and neck"
        }
      ],
      "text": "CT of head-neck"
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "effectiveDateTime": "2012-12-01T12:00:00+01:00",
    "issued": "2012-12-01T12:00:00+01:00",
    "performer": [
      {
        "reference": "Organization/f203",
        "display": "Blijdorp MC"
      }
    ],
    "imagingStudy": [
      {
        "display": "HEAD and NECK CT DICOM imaging study"
      }
    ],
    "conclusion": "CT brains: large tumor sphenoid/clivus.",
    "conclusionCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "188340000",
            "display": "Malignant tumor of craniopharyngeal duct"
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
    "fullUrl": "https://example.com/base/DiagnosticReport/f202",
    "resource": {
      "resourceType": "DiagnosticReport",
      "id": "f202",
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f202\u003c/p\u003e\u003cp\u003e\u003cb\u003ebasedOn\u003c/b\u003e: \u003ca\u003eServiceRequest/req\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecategory\u003c/b\u003e: Laboratory test \u003cspan\u003e(Details : {SNOMED CT code \u002715220000\u0027 \u003d \u0027Laboratory test\u0027, given as \u0027Laboratory test\u0027}; {http://terminology.hl7.org/CodeSystem/v2-0074 code \u0027LAB\u0027 \u003d \u0027Laboratory)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Blood culture for bacteria, including anaerobic screen \u003cspan\u003e(Details : {SNOMED CT code \u0027104177005\u0027 \u003d \u0027Blood culture for bacteria, including anaerobic screen\u0027, given as \u0027Blood culture for bacteria, including anaerobic screen\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003eRoel\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eissued\u003c/b\u003e: 11/03/2013 10:28:00 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003eAUMC\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eresult\u003c/b\u003e: \u003ca\u003eResults for staphylococcus analysis on Roel\u0027s blood culture\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003econclusion\u003c/b\u003e: Blood culture tested positive on staphylococcus aureus\u003c/p\u003e\u003cp\u003e\u003cb\u003econclusionCode\u003c/b\u003e: Bacteremia due to staphylococcus \u003cspan\u003e(Details : {SNOMED CT code \u0027428763004\u0027 \u003d \u0027Bacteremia due to Staphylococcus aureus\u0027, given as \u0027Bacteremia due to staphylococcus\u0027})\u003c/span\u003e\u003c/p\u003e\u003c/div\u003e"
      },
      "basedOn": [
        {
          "reference": "ServiceRequest/req"
        }
      ],
      "status": "final",
      "category": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "15220000",
              "display": "Laboratory test"
            },
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
              "code": "LAB"
            }
          ]
        }
      ],
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "104177005",
            "display": "Blood culture for bacteria, including anaerobic screen"
          }
        ]
      },
      "subject": {
        "reference": "Patient/f201",
        "display": "Roel"
      },
      "issued": "2013-03-11T10:28:00+01:00",
      "performer": [
        {
          "reference": "Organization/f201",
          "display": "AUMC"
        }
      ],
      "result": [
        {
          "reference": "Observation/f206",
          "display": "Results for staphylococcus analysis on Roel\u0027s blood culture"
        }
      ],
      "conclusion": "Blood culture tested positive on staphylococcus aureus",
      "conclusionCode": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "428763004",
              "display": "Bacteremia due to staphylococcus"
            }
          ]
        }
      ]
    }
  },
  {
    "fullUrl": "https://example.com/base/DiagnosticReport/ghp",
    "resource": {
      "resourceType": "DiagnosticReport",
      "id": "ghp",
      "meta": {
        "lastUpdated": "2015-08-16T10:35:23Z"
      },
      "text": {
        "status": "generated",
        "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: ghp\u003c/p\u003e\u003cp\u003e\u003cb\u003emeta\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: ghp-example\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: final\u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: General Health Profile \u003cspan\u003e(Details : {http://acme.com/labs/reports code \u0027GHP\u0027 \u003d \u0027GHP\u0027, given as \u0027General Health Profile\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003esubject\u003c/b\u003e: \u003ca\u003ePatient/pat2\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eeffective\u003c/b\u003e: 16/08/2015 6:40:17 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003eissued\u003c/b\u003e: 17/08/2015 6:40:17 AM\u003c/p\u003e\u003cp\u003e\u003cb\u003eperformer\u003c/b\u003e: \u003ca\u003eAcme Laboratory, Inc\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003especimen\u003c/b\u003e: \u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003ca\u003eRed Top Tube\u003c/a\u003e\u003c/li\u003e\u003cli\u003e\u003ca\u003eLavender Top Tube\u003c/a\u003e\u003c/li\u003e\u003cli\u003e\u003ca\u003eUrine Sample\u003c/a\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cb\u003eresult\u003c/b\u003e: \u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003ca\u003eChemistry Panel\u003c/a\u003e\u003c/li\u003e\u003cli\u003e\u003ca\u003eCBC\u003c/a\u003e\u003c/li\u003e\u003cli\u003e\u003ca\u003eUrinalysis\u003c/a\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e"
      },
      "identifier": [
        {
          "system": "http://acme.com/lab/reports",
          "value": "ghp-example"
        }
      ],
      "status": "final",
      "code": {
        "coding": [
          {
            "system": "http://acme.com/labs/reports",
            "code": "GHP",
            "display": "General Health Profile"
          }
        ]
      },
      "subject": {
        "reference": "Patient/pat2"
      },
      "effectiveDateTime": "2015-08-16T06:40:17Z",
      "issued": "2015-08-17T06:40:17Z",
      "performer": [
        {
          "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
          "display": "Acme Laboratory, Inc"
        }
      ],
      "specimen": [
        {
          "reference": "Specimen/rtt",
          "display": "Red Top Tube"
        },
        {
          "reference": "Specimen/ltt",
          "display": "Lavender Top Tube"
        },
        {
          "reference": "Specimen/urine",
          "display": "Urine Sample"
        }
      ],
      "result": [
        {
          "reference": "Observation/p1",
          "display": "Chemistry Panel"
        },
        {
          "reference": "Observation/p2",
          "display": "CBC"
        },
        {
          "reference": "Observation/p3",
          "display": "Urinalysis"
        }
      ]
    }
  },
];

export const diagnosticReportBundle = bundleResource('DiagnosticReport', resourceData);

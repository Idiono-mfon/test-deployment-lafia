import { bundleResource } from "./bundleResource";

const resourceData = [
  {
    "resourceType": "MedicationKnowledge",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: example\u003c/p\u003e\u003cp\u003e\u003cb\u003econtained\u003c/b\u003e: \u003c/p\u003e\u003cp\u003e\u003cb\u003ecode\u003c/b\u003e: Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE) \u003cspan\u003e(Details : {http://hl7.org/fhir/sid/ndc code \u00270069-2587-10\u0027 \u003d \u0027n/a\u0027, given as \u0027Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: active\u003c/p\u003e\u003cp\u003e\u003cb\u003emanufacturer\u003c/b\u003e: id: org4; name: Pfizer Laboratories Div Pfizer Inc\u003c/p\u003e\u003cp\u003e\u003cb\u003edoseForm\u003c/b\u003e: Injection Solution (qualifier value) \u003cspan\u003e(Details : {SNOMED CT code \u0027385219001\u0027 \u003d \u0027Injection solution\u0027, given as \u0027Injection Solution (qualifier value)\u0027})\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eamount\u003c/b\u003e: 50 mg/ml\u003c/p\u003e\u003cp\u003e\u003cb\u003esynonym\u003c/b\u003e: Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)\u003c/p\u003e\u003c/div\u003e"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org4",
        "name": "Pfizer Laboratories Div Pfizer Inc"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "0069-2587-10",
          "display": "Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)"
        }
      ]
    },
    "status": "active",
    "manufacturer": {
      "reference": "#org4"
    },
    "doseForm": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection Solution (qualifier value)"
        }
      ]
    },
    "amount": {
      "value": 50,
      "unit": "mg/ml"
    },
    "synonym": [
      "Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)"
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

export const medicationKnowledgeBundle = bundleResource('MedicationKnowledge', resourceData);

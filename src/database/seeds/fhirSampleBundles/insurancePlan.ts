import { bundleResource } from "./bundleResource";

const resourceData = [
  {
    "resourceType": "InsurancePlan",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: example\u003c/p\u003e\u003cp\u003e\u003cb\u003ename\u003c/b\u003e: foo\u003c/p\u003e\u003c/div\u003e"
    },
    "name": "foo",
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

export const insurancePlanBundle = bundleResource('InsurancePlan', resourceData);

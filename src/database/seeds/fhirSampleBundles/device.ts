import { bundleResource } from "./bundleResource";

const resourceData = [
  {
    "resourceType": "Device",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: f001\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 12345\u003c/p\u003e\u003cp\u003e\u003cb\u003estatus\u003c/b\u003e: active\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "http:/goodhealthhospital/identifier/devices",
        "value": "12345"
      }
    ],
    "status": "active",
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
    "resourceType": "Device",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003e\u003cp\u003e\u003cb\u003eGenerated Narrative with Details\u003c/b\u003e\u003c/p\u003e\u003cp\u003e\u003cb\u003eid\u003c/b\u003e: example\u003c/p\u003e\u003cp\u003e\u003cb\u003eidentifier\u003c/b\u003e: 345675\u003c/p\u003e\u003c/div\u003e"
    },
    "identifier": [
      {
        "system": "http://goodcare.org/devices/id",
        "value": "345675"
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


export const deviceBundle = bundleResource('Device', resourceData);

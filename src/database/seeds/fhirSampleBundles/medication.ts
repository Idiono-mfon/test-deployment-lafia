import { bundleResource } from './bundleResource';

const resourceData = [
  {
    "resourceType": "Medication",
    "id": "med0301",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0301</p><p><b>contained</b>: </p><p><b>code</b>: Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE) <span>(Details : {http://hl7.org/fhir/sid/ndc code '0069-2587-10' = 'n/a', given as 'Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)'})</span></p><p><b>status</b>: active</p><p><b>manufacturer</b>: id: org4; name: Pfizer Laboratories Div Pfizer Inc</p><p><b>form</b>: Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>IsActive</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Vancomycin Hydrochloride <span>(Details : {RxNorm code '66955' = 'Vancomycin Hydrochloride', given as 'Vancomycin Hydrochloride'})</span></td><td>true</td><td>500 mg<span> (Details: UCUM code mg = 'mg')</span>/10 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>"
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
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection Solution (qualifier value)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "66955",
              "display": "Vancomycin Hydrochloride"
            }
          ]
        },
        "isActive": true,
        "strength": {
          "numerator": {
            "value": 500,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 10,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ],
    "batch": {
      "lotNumber": "9494788",
      "expirationDate": "2017-05-22"
    }
  },
  {
    "resourceType": "Medication",
    "id": "med0302",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0302</p><p><b>contained</b>: </p><p><b>code</b>: Zosyn (piperacillin/tazobactam) 4.5gm injection <span>(Details : {http://hl7.org/fhir/sid/ndc code '0206-8862-02' = 'n/a', given as 'Zosyn (piperacillin/tazobactam) 4.5gm injection'})</span></p><p><b>manufacturer</b>: id: org7; name: Wyeth Pharmaceuticals Inc</p><p><b>form</b>: Injection solution (qualifier vallue) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier vallue)'})</span></p><blockquote><p><b>ingredient</b></p><p><b>item</b>: Piperacillin Sodium <span>(Details : {RxNorm code '203134' = 'Piperacillin Sodium', given as 'Piperacillin Sodium'})</span></p><p><b>strength</b>: 4 g<span> (Details: UCUM code g = 'g')</span>/20 mL<span> (Details: UCUM code mL = 'mL')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: Tazobactam Sodium <span>(Details : {RxNorm code '221167' = 'TAZOBACTAM SODIUM', given as 'Tazobactam Sodium'})</span></p><p><b>strength</b>: 0.5 g<span> (Details: UCUM code g = 'g')</span>/20 mL<span> (Details: UCUM code mL = 'mL')</span></p></blockquote></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org7",
        "name": "Wyeth Pharmaceuticals Inc"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "0206-8862-02",
          "display": "Zosyn (piperacillin/tazobactam) 4.5gm injection"
        }
      ]
    },
    "manufacturer": {
      "reference": "#org7"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection solution (qualifier vallue)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "203134",
              "display": "Piperacillin Sodium"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 4,
            "system": "http://unitsofmeasure.org",
            "code": "g"
          },
          "denominator": {
            "value": 20,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      },
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "221167",
              "display": "Tazobactam Sodium"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 0.5,
            "system": "http://unitsofmeasure.org",
            "code": "g"
          },
          "denominator": {
            "value": 20,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ]
  },
  {
    "resourceType": "Medication",
    "id": "med0303",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0303</p><p><b>contained</b>: </p><p><b>code</b>: Alemtuzumab 10mg/ml (Lemtrada) <span>(Details : {RxNorm code '1594660' = 'alemtuzumab 10 MG/ML [Lemtrada]', given as 'Alemtuzumab 10mg/ml (Lemtrada)'})</span></p><p><b>manufacturer</b>: id: org6; name: Genzyme</p><p><b>form</b>: Injection solution (qualifier vallue) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier vallue)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Alemtuzamab (substance) <span>(Details : {SNOMED CT code '129472003' = 'Alemtuzumab', given as 'Alemtuzamab (substance)'})</span></td><td>12 mg<span> (Details: UCUM code mg = 'mg')</span>/1.2 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org6",
        "name": "Genzyme"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "1594660",
          "display": "Alemtuzumab 10mg/ml (Lemtrada)"
        }
      ]
    },
    "manufacturer": {
      "reference": "#org6"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection solution (qualifier vallue)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "129472003",
              "display": "Alemtuzamab (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 12,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1.2,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ],
    "batch": {
      "lotNumber": "9494788",
      "expirationDate": "2017-05-22"
    }
  },
  {
    "resourceType": "Medication",
    "id": "med0304",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0304</p><p><b>contained</b>: </p><p><b>code</b>: Myleran 2mg tablet, film coated <span>(Details : {http://hl7.org/fhir/sid/ndc code '76388-713-25' = 'n/a', given as 'Myleran 2mg tablet, film coated'})</span></p><p><b>manufacturer</b>: id: org6; name: Aspen Global Inc</p><p><b>form</b>: Film-coated tablet (qualifier value) <span>(Details : {SNOMED CT code '385057009' = 'Film-coated tablet', given as 'Film-coated tablet (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Busulfan (substance) <span>(Details : {SNOMED CT code '387138002' = 'Busulphan', given as 'Busulfan (substance)'})</span></td><td>2 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tab<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Tab = 'Tab')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org6",
        "name": "Aspen Global Inc"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "76388-713-25",
          "display": "Myleran 2mg tablet, film coated"
        }
      ]
    },
    "manufacturer": {
      "reference": "#org6"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385057009",
          "display": "Film-coated tablet (qualifier value)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "387138002",
              "display": "Busulfan (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 2,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1,
            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            "code": "Tab"
          }
        }
      }
    ],
    "batch": {
      "lotNumber": "9494788",
      "expirationDate": "2017-05-22"
    }
  },
  {
    "resourceType": "Medication",
    "id": "med0305",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0305</p><p><b>contained</b>: </p><p><b>code</b>: Timoptic 5mg/ml solution <span>(Details : {http://hl7.org/fhir/sid/ndc code '2501-813-16' = 'n/a', given as 'Timoptic 5mg/ml solution'})</span></p><p><b>manufacturer</b>: id: org5; name: Aton Pharma Inc</p><p><b>form</b>: Opthalmic Solution (qualifier value) <span>(Details : {SNOMED CT code '75359005' = 'Timolol maleate', given as 'Opthalmic Solution (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Timolol Maleate (substance) <span>(Details : {SNOMED CT code '75359005' = 'Timolol maleate', given as 'Timolol Maleate (substance)'})</span></td><td>5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org5",
        "name": "Aton Pharma Inc"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "2501-813-16",
          "display": "Timoptic 5mg/ml solution"
        }
      ]
    },
    "manufacturer": {
      "reference": "#org5"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "75359005",
          "display": "Opthalmic Solution (qualifier value)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "75359005",
              "display": "Timolol Maleate (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 5,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ],
    "batch": {
      "lotNumber": "9494788",
      "expirationDate": "2017-05-22"
    }
  },
  {
    "resourceType": "Medication",
    "id": "med0306",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0306</p><p><b>contained</b>: </p><p><b>code</b>: Adcetris <span>(Details : {http://hl7.org/fhir/sid/ndc code '51144-050-01' = 'n/a', given as 'Adcetris'})</span></p><p><b>manufacturer</b>: id: org3; name: Seattle Genetics Inc</p><p><b>form</b>: Lyophilized powder for injectable solution (qualifier value)  <span>(Details : {SNOMED CT code '421637006' = 'Lyophilised powder for injectable solution', given as 'Lyophilized powder for injectable solution (qualifier value) '})</span></p><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>12345</td><td>31/10/2019</td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org3",
        "name": "Seattle Genetics Inc"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "51144-050-01",
          "display": "Adcetris"
        }
      ]
    },
    "manufacturer": {
      "reference": "#org3"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "421637006",
          "display": "Lyophilized powder for injectable solution (qualifier value) "
        }
      ]
    },
    "batch": {
      "lotNumber": "12345",
      "expirationDate": "2019-10-31"
    }
  },
  {
    "resourceType": "Medication",
    "id": "med0307",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0307</p><p><b>contained</b>: </p><p><b>code</b>: Novolog 100u/ml <span>(Details : {http://hl7.org/fhir/sid/ndc code '0169-7501-11' = 'n/a', given as 'Novolog 100u/ml'})</span></p><p><b>manufacturer</b>: id: org3; name: Novo Nordisk</p><p><b>form</b>: Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Insulin Aspart (substance) <span>(Details : {SNOMED CT code '325072002' = 'Insulin aspart', given as 'Insulin Aspart (substance)'})</span></td><td>100 U<span> (Details: UCUM code U = 'U')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>12345</td><td>31/10/2019</td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org3",
        "name": "Novo Nordisk"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "0169-7501-11",
          "display": "Novolog 100u/ml"
        }
      ]
    },
    "manufacturer": {
      "reference": "#org3"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection solution (qualifier value)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "325072002",
              "display": "Insulin Aspart (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 100,
            "system": "http://unitsofmeasure.org",
            "code": "U"
          },
          "denominator": {
            "value": 1,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ],
    "batch": {
      "lotNumber": "12345",
      "expirationDate": "2019-10-31"
    }
  }
];

export const medicationBundle = bundleResource('Medication', resourceData);

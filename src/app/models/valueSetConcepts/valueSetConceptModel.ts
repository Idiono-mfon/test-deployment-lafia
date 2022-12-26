import { JSONSchema, Modifiers, QueryBuilder, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IValueSetConcept } from './interfaces';
import { ValueSetConceptValidation } from './validation';

export class ValueSetConceptModel extends BaseModel implements IValueSetConcept {
  id!: IValueSetConcept['id'];
  code!: IValueSetConcept['code'];
  value_set_id: IValueSetConcept['value_set_id'];
  display!: IValueSetConcept['display'];
  system!: IValueSetConcept['system'];
  version!: IValueSetConcept['version'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.value_set_concepts}`;
  }

  static get jsonSchema(): JSONSchema {
    return ValueSetConceptValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt'];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(`${Schema.lafiaService}.${Table.value_set_concepts}.id`);
      },
    };
  }

  //   @TODO: Define Relationships latter
}

// ValueSetDTO

// name
// title
// status: string
// experimental: boolean
// immutable: boolean
// description: string;
// copyright: string
// publisherName:; string;
// publisherEmail: string;
// publisherUrl: string;
// PublisherPhone: string;
// publisherIsLafia: boolean
// hasConcept (boolean)

// ValueSetConceptDTO

// system: string;
// version: string;
// concepts: ArrayOfObject
// ValueSetId: string;

// [
// {code: '0', display: 'testt'}
// ]

//   id: 123345,
// resourceId
// date: "Date last change"
// resourceType:"ValueSet",
// url: "http://hl7.org/fhir/ValueSet/12345",
// version: "0.1"
// name: "SNOMEDCTClinicalAndMedicalSpecialty"
// title: "SNOMED CT Clinical and Medical speciality"
// status: "published",
// experimental: "false",
// publisher: "LAFHIR Project team",
// immutable: false,
// contact: [
//     {
//        "telecom":[{

//                 system: "url",
//                  "value":"https://fhir.staging.lafia.io/fhir"
//
//              }]
//      }
// ]

// description: "This value set includes codes from [SNOMED CT] (http://snomed.info/sct) where concept is-a 394658006 and 394733009",
// copyright: "This specification includes content from SNOMED Clinical Terms® (SNOMED CT®) which is copyright of the International Health Terminology Standards Development Organisation (IHTSDO) (trading as SNOMED International)"
// compose: {
// "include":[{
//     system: "http://snomed.info/sct",
//     concept:[

//    {
//       code : "28351000087106",
//     display: "Addiction specialty"
// }
//

// ]

// }]

// }

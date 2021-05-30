import {
  JSONSchema, Modifiers, QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { ICodeableConcept } from './interfaces';
import { CodeableConceptValidation } from './validation';

export class CodeableConceptModel extends BaseModel implements ICodeableConcept {
  coding!: ICodeableConcept['coding'];
  text! : ICodeableConcept['text'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.codeable_concepts}`;
  }

  static get jsonSchema(): JSONSchema {
    return CodeableConceptValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt'];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(
          `${Schema.lafiaService}.${Table.codeable_concepts}.id`
        );
      },
    };
  }

  static get relationMappings(): RelationMappings {
    return {
      coding: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../codings',
        join: {
          from: `${Schema.lafiaService}.${Table.codeable_concepts}.id`,
          through: {
            modelClass: '../codeableConceptsCodings',
            from: `${Schema.lafiaService}.${Table.codeable_concepts_codings}.codeable_concept_id`,
            to: `${Schema.lafiaService}.${Table.codeable_concepts_codings}.coding_id`
          },
          to: `${Schema.lafiaService}.${Table.codings}.id`
        }
      },

      language: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../communications',
        join: {
          from: `${Schema.lafiaService}.${Table.codeable_concepts}.id`,
          to: `${Schema.lafiaService}.${Table.communications}.codeable_concept_id`
        }
      },

      identifier: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../identifiers',
        join: {
          from: `${Schema.lafiaService}.${Table.codeable_concepts}.id`,
          to: `${Schema.lafiaService}.${Table.identifiers}.codeable_concept_id`
        }
      },

      patientContact: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../patientContacts',
        join: {
          from: `${Schema.lafiaService}.${Table.codeable_concepts}.id`,
          through: {
            modelClass: '../patientContactsCodeableConcepts',
            from: `${Schema.lafiaService}.${Table.patient_contacts_codeable_concepts}.codeable_concept_id`,
            to: `${Schema.lafiaService}.${Table.patient_contacts_codeable_concepts}.patient_contact_id`
          },
          to: `${Schema.lafiaService}.${Table.patient_contacts}.id`
        }
      },

      qualification: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../qualifications',
        join: {
          from: `${Schema.lafiaService}.${Table.codeable_concepts}.id`,
          to: `${Schema.lafiaService}.${Table.qualifications}.id`
        }
      },
    }
  }
}

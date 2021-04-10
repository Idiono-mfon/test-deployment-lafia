import {
  JSONSchema,
  Modifiers,
  QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IQualification } from './interfaces';
import { QualificationValidation } from './validation';

export class QualificationModel extends BaseModel implements IQualification {
  code!: IQualification['code'];
  issuer!: IQualification['issuer'];
  period!: IQualification['period'];
  identifier!: IQualification['identifier'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.qualifications}`;
  }

  static get jsonSchema(): JSONSchema {
    return QualificationValidation;
  }

  static get hidden(): string[] {
    return [
      'updatedAt',
      'createdAt',
      'referenceId',
      'codeableConceptId',
      'periodId'
    ];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(
          `${Schema.lafiaService}.${Table.qualifications}.id`
        );
      },
    };
  }

  static get relationMappings(): RelationMappings {
    return {
      identifier: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../identifiers',
        join: {
          from: `${Schema.lafiaService}.${Table.qualifications}.id`,
          through: {
            modelClass: '../qualificationsIdentifiers',
            from: `${Schema.lafiaService}.${Table.qualifications_identifiers}.qualification_id`,
            to: `${Schema.lafiaService}.${Table.qualifications_identifiers}.identifier_id`
          },
          to: `${Schema.lafiaService}.${Table.identifiers}.id`
        }
      },

      code: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../codeableConcepts',
        join: {
          from: `${Schema.lafiaService}.${Table.qualifications}.id`,
          to: `${Schema.lafiaService}.${Table.codeable_concepts}.id`
        }
      },

      period: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../periods',
        join: {
          from: `${Schema.lafiaService}.${Table.qualifications}.id`,
          to: `${Schema.lafiaService}.${Table.periods}.id`
        }
      },

      issuer: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../references',
        join: {
          from: `${Schema.lafiaService}.${Table.qualifications}.id`,
          to: `${Schema.lafiaService}.${Table.references}.id`
        }
      },

      practitioner: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../qualifications',
        join: {
          from: `${Schema.lafiaService}.${Table.qualifications}.id`,
          through: {
            modelClass: '../practitionersQualifications',
            from: `${Schema.lafiaService}.${Table.practitioners_qualifications}.qualification_id`,
            to: `${Schema.lafiaService}.${Table.practitioners_qualifications}.practitioner_id`
          },
          to: `${Schema.lafiaService}.${Table.practitioners}.id`
        }
      },
    }
  }
}

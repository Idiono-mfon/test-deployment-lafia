import {
  JSONSchema, Modifiers, QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IReference } from './interfaces';
import { ReferenceValidation } from './validation';

export class ReferenceModel extends BaseModel implements IReference {
  type!: IReference['type'];
  display!: IReference['display'];
  reference!: IReference['reference'];
  identifier!: IReference['identifier'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.references}`;
  }

  static get jsonSchema(): JSONSchema {
    return ReferenceValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt', 'identifierId'];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(
          `${Schema.lafiaService}.${Table.references}.id`
        );
      },
    };
  }

  static get relationMappings(): RelationMappings {
    return {
      identifier: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../identifiers',
        join: {
          from: `${Schema.lafiaService}.${Table.references}.identifier_id`,
          to: `${Schema.lafiaService}.${Table.identifiers}.id`
        }
      },

      patientLink: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../patientLinks',
        join: {
          from: `${Schema.lafiaService}.${Table.references}.id`,
          to: `${Schema.lafiaService}.${Table.patient_links}.reference_id`
        }
      },

      patientContact: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../patientContacts',
        join: {
          from: `${Schema.lafiaService}.${Table.references}.id`,
          to: `${Schema.lafiaService}.${Table.patient_contacts}.reference_id`
        }
      },

    }
  }
}

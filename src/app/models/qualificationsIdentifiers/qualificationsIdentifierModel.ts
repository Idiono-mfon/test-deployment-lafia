import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IQualificationsIdentifier } from './interfaces';
import { QualificationsIdentifierValidation } from './validation';

export class QualificationsIdentifierModel extends BaseModel implements IQualificationsIdentifier {
  qualification_id!: IQualificationsIdentifier['qualification_id'];
  identifier_id!: IQualificationsIdentifier['identifier_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.qualifications_identifiers}`;
  }

  static get jsonSchema(): JSONSchema {
    return QualificationsIdentifierValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      qualification: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../qualifications',
        join: {
          from: `${Schema.lafiaService}.${Table.qualifications_identifiers}.qualification_id`,
          to: `${Schema.lafiaService}.${Table.qualifications}.id`
        }
      },

      identifier: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../identifiers',
        join: {
          from: `${Schema.lafiaService}.${Table.qualifications_identifiers}.identifier_id`,
          to: `${Schema.lafiaService}.${Table.identifiers}.id`
        }
      },
    }
  }
}

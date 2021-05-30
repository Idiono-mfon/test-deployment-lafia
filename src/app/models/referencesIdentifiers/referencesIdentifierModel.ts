import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IReferenceIdentifier } from './interfaces';
import { ReferenceIdentifierValidation } from './validation';

export class ReferencesIdentifierModel extends BaseModel implements IReferenceIdentifier {
  reference_id!: IReferenceIdentifier['reference_id'];
  identifier_id!: IReferenceIdentifier['identifier_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.identifiers_references}`;
  }

  static get jsonSchema(): JSONSchema {
    return ReferenceIdentifierValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      identifier: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../identifiers',
        join: {
          from: `${Schema.lafiaService}.${Table.identifiers_references}.identifier_id`,
          to: `${Schema.lafiaService}.${Table.identifiers}.id`
        }
      },

      reference: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../references',
        join: {
          from: `${Schema.lafiaService}.${Table.identifiers_references}.reference_id`,
          to: `${Schema.lafiaService}.${Table.references}.id`
        }
      },

    }
  }
}

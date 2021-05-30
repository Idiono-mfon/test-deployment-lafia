import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPractitionersIdentifier } from './interfaces';
import { PractitionersIdentifierValidation } from './validation';

export class PractitionersIdentifierModel extends BaseModel implements IPractitionersIdentifier {
  practitioner_id!: IPractitionersIdentifier['practitioner_id'];
  identifier_id!: IPractitionersIdentifier['identifier_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.practitioners_identifiers}`;
  }

  static get jsonSchema(): JSONSchema {
    return PractitionersIdentifierValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      practitioner: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../practitioners',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_identifiers}.practitioner_id`,
          to: `${Schema.lafiaService}.${Table.practitioners}.id`
        }
      },

      identifier: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../identifiers',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_identifiers}.identifier_id`,
          to: `${Schema.lafiaService}.${Table.identifiers}.id`
        }
      },
    }
  }
}

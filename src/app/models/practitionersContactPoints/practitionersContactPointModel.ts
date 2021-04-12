import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPractitionersContactPoint } from './interfaces';
import { PractitionersContactPointValidation } from './validation';

export class PractitionersContactPointModel extends BaseModel implements IPractitionersContactPoint {
  practitioner_id!: IPractitionersContactPoint['practitioner_id'];
  contact_point_id!: IPractitionersContactPoint['contact_point_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.practitioners_contact_points}`;
  }

  static get jsonSchema(): JSONSchema {
    return PractitionersContactPointValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      practitioner: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../practitioners',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_contact_points}.practitioner_id`,
          to: `${Schema.lafiaService}.${Table.practitioners}.id`
        }
      },

      contactPoint: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../contactPoints',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_contact_points}.contact_point_id`,
          to: `${Schema.lafiaService}.${Table.contact_points}.id`
        }
      },
    }
  }
}

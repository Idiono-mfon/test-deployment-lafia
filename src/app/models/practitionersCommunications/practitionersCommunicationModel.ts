import { JSONSchema, RelationMappings } from 'objection';
import { BaseModel } from '../base';
import { Schema, Table } from '../../../database';
import { IPractitionersCommunication } from './interfaces';
import { PractitionersCommunicationValidation } from './validation';

export class PractitionersCommunicationModel extends BaseModel implements IPractitionersCommunication {
  practitioner_id!: IPractitionersCommunication['practitioner_id'];
  communication_id!: IPractitionersCommunication['communication_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.practitioners_communications}`;
  }

  static get jsonSchema(): JSONSchema {
    return PractitionersCommunicationValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      practitioner: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../practitioners',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_communications}.practitioner_id`,
          to: `${Schema.lafiaService}.${Table.practitioners}.id`
        }
      },

      communication: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../communications',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_communications}.communication_id`,
          to: `${Schema.lafiaService}.${Table.communications}.id`
        }
      },
    }
  }
}

import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPractitionersHumanName } from './interfaces';
import { PractitionersHumanNameValidation } from './validation';

export class PractitionersHumanNameModel extends BaseModel implements IPractitionersHumanName {
  practitioner_id!: IPractitionersHumanName['practitioner_id'];
  human_name_id!: IPractitionersHumanName['human_name_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.practitioners_human_names}`;
  }

  static get jsonSchema(): JSONSchema {
    return PractitionersHumanNameValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      practitioner: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../practitioners',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_human_names}.practitioner_id`,
          to: `${Schema.lafiaService}.${Table.practitioners}.id`
        }
      },

      humanName: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../humanNames',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_human_names}.human_name_id`,
          to: `${Schema.lafiaService}.${Table.human_names}.id`
        }
      },
    }
  }
}

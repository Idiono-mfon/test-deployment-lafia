import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientsHumanName } from './interfaces';
import { PatientsHumanNameValidation } from './validation';

export class PatientsHumanNameModel extends BaseModel implements IPatientsHumanName {
  patient_id!: IPatientsHumanName['patient_id'];
  human_name_id!: IPatientsHumanName['human_name_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patients_human_names}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientsHumanNameValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      patient: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patients',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_human_names}.patient_id`,
          to: `${Schema.lafiaService}.${Table.patients}.id`
        }
      },

      humanName: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../humanNames',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_human_names}.human_name_id`,
          to: `${Schema.lafiaService}.${Table.human_names}.id`
        }
      },
    }
  }
}

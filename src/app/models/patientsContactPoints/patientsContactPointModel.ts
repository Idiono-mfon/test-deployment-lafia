import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientsContactPoint } from './interfaces';
import { PatientsContactPointValidation } from './validation';

export class PatientsContactPointModel extends BaseModel implements IPatientsContactPoint {
  patient_id!: IPatientsContactPoint['patient_id'];
  contact_point_id!: IPatientsContactPoint['contact_point_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patients_contact_points}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientsContactPointValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      patient: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patients',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_contact_points}.patient_id`,
          to: `${Schema.lafiaService}.${Table.patients}.id`
        }
      },

      contact_point: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../contactPoints',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_contact_points}.contact_point_id`,
          to: `${Schema.lafiaService}.${Table.contact_points}.id`
        }
      },
    }
  }
}

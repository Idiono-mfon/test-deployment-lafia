import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientsPatientLink } from './interfaces';
import { PatientsPatientLinkValidation } from './validation';

export class PatientsPatientLinkModel extends BaseModel implements IPatientsPatientLink {
  patient_id!: IPatientsPatientLink['patient_id'];
  patient_link_id!: IPatientsPatientLink['patient_link_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patients_patient_links}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientsPatientLinkValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      patient: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patients',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_patient_links}.patient_id`,
          to: `${Schema.lafiaService}.${Table.patients}.id`
        }
      },

      patient_link: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patientLinks',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_patient_links}.patient_link_id`,
          to: `${Schema.lafiaService}.${Table.patient_links}.id`
        }
      },
    }
  }
}

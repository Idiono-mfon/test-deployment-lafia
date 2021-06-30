import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientsPatientContact } from './interfaces';
import { PatientsPatientContactValidation } from './validation';

export class PatientsPatientContactModel extends BaseModel implements IPatientsPatientContact {
  patient_id!: IPatientsPatientContact['patient_id'];
  patient_contact_id!: IPatientsPatientContact['patient_contact_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patients_patient_contacts}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientsPatientContactValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      patient: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patients',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_patient_contacts}.patient_id`,
          to: `${Schema.lafiaService}.${Table.patients}.id`
        }
      },

      patientContact: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patientContacts',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_patient_contacts}.patient_contact_id`,
          to: `${Schema.lafiaService}.${Table.patient_contacts}.id`
        }
      },
    }
  }
}

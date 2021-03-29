import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientContactsContactPoint } from './interfaces';
import { PatientContactsContactPointValidation } from './validation';

export class PatientContactsContactPointModel extends BaseModel implements IPatientContactsContactPoint {
  contact_point_id!: IPatientContactsContactPoint['contact_point_id'];
  patient_contact_id!: IPatientContactsContactPoint['patient_contact_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patient_contacts_contact_points}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientContactsContactPointValidation;
  }

  static get relationships(): RelationMappings {
    return {
      patient_contact: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patientContacts',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_contacts_contact_points}.patient_contact_id`,
          to: `${Schema.lafiaService}.${Table.patient_contacts}.id`
        }
      },

      contact_point: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../contactPoints',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_contacts_contact_points}.contact_point_id`,
          to: `${Schema.lafiaService}.${Table.contact_points}.id`
        }
      }
    }
  }
}

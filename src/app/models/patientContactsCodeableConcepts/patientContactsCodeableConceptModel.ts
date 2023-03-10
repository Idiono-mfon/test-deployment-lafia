import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientContactsCodeableConcept } from './interfaces';
import { PatientContactsCodeableConceptValidation } from './validation';

export class PatientContactsCodeableConceptModel extends BaseModel implements IPatientContactsCodeableConcept {
  patientContactId!: IPatientContactsCodeableConcept['patientContactId'];
  codeableConceptId!: IPatientContactsCodeableConcept['codeableConceptId'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patient_contacts_codeable_concepts}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientContactsCodeableConceptValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      patientContact: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patientContacts',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_contacts_codeable_concepts}.patient_contact_id`,
          to: `${Schema.lafiaService}.${Table.patient_contacts}.id`
        }
      },

      codeableConcept: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../codeableConcepts',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_contacts_codeable_concepts}.codeable_concept_id`,
          to: `${Schema.lafiaService}.${Table.codeable_concepts}.id`
        }
      }
    }
  }
}

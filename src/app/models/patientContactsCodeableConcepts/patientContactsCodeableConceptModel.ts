import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientContactsCodeableConcept } from './interfaces';
import { PatientContactsCodeableConceptValidation } from './validation';

export class PatientContactsCodeableConceptModel extends BaseModel implements IPatientContactsCodeableConcept {
  patient_contact_id!: IPatientContactsCodeableConcept['patient_contact_id'];
  codeable_concept_id!: IPatientContactsCodeableConcept['codeable_concept_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patient_contacts_codeable_concepts}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientContactsCodeableConceptValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      patient_contact: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patientContacts',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_contacts_codeable_concepts}.patient_contact_id`,
          to: `${Schema.lafiaService}.${Table.patient_contacts}.id`
        }
      },

      codeable_concept: {
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

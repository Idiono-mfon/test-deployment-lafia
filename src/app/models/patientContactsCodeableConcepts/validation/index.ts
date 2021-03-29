import { JSONSchema } from 'objection';

export const PatientContactsCodeableConceptValidation: JSONSchema = {
  type: 'object',
  title: 'PatientContactsCodeableConcept Schema Validation',
  properties: {
    patient_contact_id: { format: 'uuid' },
    codeable_concept_id: { format: 'uuid' },
  }
}

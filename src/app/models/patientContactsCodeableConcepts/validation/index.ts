import { JSONSchema } from 'objection';

export const PatientContactsCodeableConceptValidation: JSONSchema = {
  type: 'object',
  title: 'PatientContactsCodeableConcept Schema Validation',
  properties: {
    patientContactId: { format: 'uuid' },
    codeableConceptId: { format: 'uuid' },
  }
}

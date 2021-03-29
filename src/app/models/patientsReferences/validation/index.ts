import { JSONSchema } from 'objection';

export const PatientsReferenceValidation: JSONSchema = {
  type: 'object',
  title: 'PatientsReference Schema Validation',
  properties: {
    patient_id: { format: 'uuid' },
    reference_id: { format: 'uuid' },
  }
}

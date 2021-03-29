import { JSONSchema } from 'objection';

export const PatientsIdentifierValidation: JSONSchema = {
  type: 'object',
  title: 'PatientsIdentifier Schema Validation',
  properties: {
    patient_id: { format: 'uuid' },
    identifier_id: { format: 'uuid' },
  }
}

import { JSONSchema } from 'objection';

export const PatientsContactPointValidation: JSONSchema = {
  type: 'object',
  title: 'PatientsContactPoint Schema Validation',
  properties: {
    patient_id: { format: 'uuid' },
    contact_point_id: { format: 'uuid' },
  }
}

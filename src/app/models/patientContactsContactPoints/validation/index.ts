import { JSONSchema } from 'objection';

export const PatientContactsContactPointValidation: JSONSchema = {
  type: 'object',
  title: 'PatientContactsContactPoint Schema Validation',
  properties: {
    patient_contact_id: { type: 'string' },
    contact_point_id: { type: 'string' },
  }
}

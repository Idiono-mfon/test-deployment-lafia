import { JSONSchema } from 'objection';

export const PatientsPatientContactValidation: JSONSchema = {
  type: 'object',
  title: 'PatientsPatientContact Schema Validation',
  properties: {
    patient_id: { format: 'uuid' },
    patient_contact_id: { format: 'uuid' },
  }
}

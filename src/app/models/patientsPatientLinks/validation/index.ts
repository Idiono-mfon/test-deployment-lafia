import { JSONSchema } from 'objection';

export const PatientsPatientLinkValidation: JSONSchema = {
  type: 'object',
  title: 'PatientsPatientLink Schema Validation',
  properties: {
    patient_id: { format: 'uuid' },
    patient_link_id: { format: 'uuid' },
  }
}

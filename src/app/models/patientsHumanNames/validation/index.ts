import { JSONSchema } from 'objection';

export const PatientsHumanNameValidation: JSONSchema = {
  type: 'object',
  title: 'PatientsHumanName Schema Validation',
  properties: {
    patient_id: { format: 'uuid' },
    human_name_id: { format: 'uuid' },
  }
}

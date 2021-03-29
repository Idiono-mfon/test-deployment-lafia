import { JSONSchema } from 'objection';

export const PatientsCommunicationValidation: JSONSchema = {
  type: 'object',
  title: 'PatientsCommunication Schema Validation',
  properties: {
    patient_id: { format: 'uuid' },
    communication_id: { format: 'uuid' },
  }
}

import { JSONSchema } from 'objection';

export const AppointmentValidation: JSONSchema = {
  type: 'object',
  required: ['resource_id'],
  title: 'Appointment Schema Validation',
  properties: {
    resource_id: { type: 'string' },
    resource_type: { type: 'string' },
    patient_participant: { type: 'string' },
    practitioner_participant: { type: 'string' },
    priority: { type: 'number' },
    description: { type: 'string' }
  }
}

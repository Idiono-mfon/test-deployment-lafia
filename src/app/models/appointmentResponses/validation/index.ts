import { JSONSchema } from 'objection';

export const AppointmentResponseValidation: JSONSchema = {
  type: 'object',
  required: ['resource_id'],
  title: 'Appointment Responses Schema Validation',
  properties: {
    resource_id: { type: 'string' },
    resource_type: { type: 'string' },
    appointment: { type: 'string' },
    participant_status: { type: 'string' },
    comment: { type: 'string' }
  }
}

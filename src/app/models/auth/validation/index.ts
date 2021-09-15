import { JSONSchema } from 'objection';

export const ConnectionValidation: JSONSchema = {
  type: 'object',
  title: 'Connection Schema Validation',
  required: ['patient_id', 'access_token', 'refresh_token', 'connection_name'],
  properties: {
    patient_id: { type: 'string' },
    access_token: { type: 'string' },
    refresh_token: { type: 'string' },
    connection_name: { type: 'string' }
  }
};
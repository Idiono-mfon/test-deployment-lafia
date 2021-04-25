import { JSONSchema } from 'objection';

export const UserValidation: JSONSchema = {
  type: 'object',
  required: ['email', 'token'],
  title: 'User Schema Validation',
  properties: {
    email: { type: 'string', format: 'email' },
    token: { type: 'string' },
    resource_type: { type: 'string' },
    resource_id: { type: 'string' },
  }
}

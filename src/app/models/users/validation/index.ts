import { JSONSchema } from 'objection';

export const UserValidation: JSONSchema = {
  type: 'object',
  required: ['email'],
  title: 'User Schema Validation',
  properties: {
    email: { type: 'string' },
    phone: { type: 'string', minLength: 11 },
    photo: { type: 'string' },
    provider: { type: 'string' },
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    gender: { type: 'string' },
    password: { type: 'string' },
    care_type: { type: 'string' },
    birth_date: { type: 'string' },
    country: { type: 'string' },
    password_reset_token: { type: 'string' },
    token: { type: 'string' },
    resource_type: { type: 'string' },
    resource_id: { type: 'string' },
  },
};

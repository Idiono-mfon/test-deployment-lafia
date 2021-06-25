import { JSONSchema } from 'objection';

export const ComponentValidation: JSONSchema = {
  type: 'object',
  title: 'Component Schema Validation',
  required: ['name', 'code'],
  properties: {
    name: { type: 'string' },
    code: { type: 'string' },
  }
}

import { JSONSchema } from 'objection';

export const LabelValidation: JSONSchema = {
  type: 'object',
  title: 'Label Schema Validation',
  required: ['name'],
  properties: {
    name: { type: 'string' }
  }
}

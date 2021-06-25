import { JSONSchema } from 'objection';

export const LanguageValidation: JSONSchema = {
  type: 'object',
  title: 'Language Schema Validation',
  required: ['name', 'fields'],
  properties: {
    name: { type: 'string' },
    fields: { type: 'string' },
  }
}

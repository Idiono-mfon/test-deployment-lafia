import { JSONSchema } from 'objection';

export const LanguageValidation: JSONSchema = {
  type: 'object',
  title: 'Language Schema Validation',
  required: ['name', 'code'],
  properties: {
    name: { type: 'string' },
    code: { type: 'string' },
  }
}

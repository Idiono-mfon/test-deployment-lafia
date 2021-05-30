import { JSONSchema } from 'objection';

export const CodeSystemValidation: JSONSchema = {
  type: 'object',
  title: 'CodeSystem Schema Validation',
  required: ['code', 'type', 'system'],
  properties: {
    code: { type: 'string' },
    display: { type: 'string' },
    type: { type: 'string' },
    system: { type: 'string' },
  }
}

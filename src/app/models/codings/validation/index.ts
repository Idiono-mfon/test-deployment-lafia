import { JSONSchema } from 'objection';

export const CodingValidation: JSONSchema = {
  type: 'object',
  title: 'Coding Schema Validation',
  properties: {
    system: { type: 'string' },
    version: { type: 'string' },
    code: { type: 'string' },
    display: { type: 'string' },
    user_selected: { type: 'boolean' }
  }
};

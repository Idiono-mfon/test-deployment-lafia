import { JSONSchema } from 'objection';

export const NarrativeValidation: JSONSchema = {
  type: 'object',
  title: 'Narrative Schema Validation',
  properties: {
    status: { type: 'string' },
    div: { type: 'string' },
  }
}

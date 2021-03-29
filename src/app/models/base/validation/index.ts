import { JSONSchema } from 'objection';

export const BaseValidation: JSONSchema = {
  type: 'object',
  title: 'Base Schema Validation',
  properties: {
    id: { format: 'uuid' },
    created_at: { format: 'date-time' },
    updated_at: { format: 'date-time' },
  }
};

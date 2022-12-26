import { JSONSchema } from 'objection';

export const ValueSetValidation: JSONSchema = {
  type: 'object',
  required: ['resource_id', 'name', 'title'],
  title: 'ValueSet Schema Validation',
  properties: {
    resourceId: { type: 'string' },
    resourceType: { type: 'string' },
    status: { type: 'boolean' },
    name: { type: 'string' },
    title: { type: 'string' },
    experimental: { type: 'boolean' },
    publisher: { type: 'string' },
  },
};

import { JSONSchema } from 'objection';

export const OrganizationValidation: JSONSchema = {
  type: 'object',
  required: ['resource_id'],
  title: 'Organization Schema Validation',
  properties: {
    resource_id: { type: 'string' },
    resource_type: { type: 'string' },
    name: { type: 'string' },
    active: { type: 'boolean' }
  }
}

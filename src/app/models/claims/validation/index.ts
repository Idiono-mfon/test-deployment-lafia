import { JSONSchema } from 'objection';

export const ClaimValidation: JSONSchema = {
  type: 'object',
  required: ['resource_id'],
  title: 'Claim Schema Validation',
  properties: {
    resource_id: { type: 'string' },
    resource_type: { type: 'string' },
    subject: { type: 'string' },
    status: { type: 'string' },
    provider: { type: 'string' }
  }
}

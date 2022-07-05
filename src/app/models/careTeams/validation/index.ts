import { JSONSchema } from 'objection';

export const CareTeamValidation: JSONSchema = {
  type: 'object',
  required: ['resource_id'],
  title: 'Care Team Schema Validation',
  properties: {
    resource_id: { type: 'string' },
    resource_type: { type: 'string' },
    subject: { type: 'string' },
    status: { type: 'string' },
    encounter: { type: 'string' }
  }
}

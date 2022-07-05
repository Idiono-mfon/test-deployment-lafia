import { JSONSchema } from 'objection';

export const EncounterValidation: JSONSchema = {
  type: 'object',
  required: ['resource_id'],
  title: 'Encounter Schema Validation',
  properties: {
    resource_id: { type: 'string' },
    resource_type: { type: 'string' },
    subject: { type: 'string' },
    participant: { type: 'string' },
    service_provider: { type: 'string' }
  }
}

import { JSONSchema } from 'objection';

export const AddressValidator: JSONSchema = {
  title: 'Address Validation',
  type: 'object',
  required: ['use', 'type'],
  properties: {
    id: { type: 'string' },
    use: { type: 'string' },
    type: { type: 'string' },
    text: { type: 'string' },
    line: { type: 'string' },
    city: { type: 'string' },
    district: { type: 'string' },
    state: { type: 'string' },
    postal_code: { type: 'string' },
    country: { type: 'string' },
    period: {
      type: 'object',
      required: ['start'],
      properties: {
        id: { type: 'string' },
        start: { format: 'date-time' },
        end: { type: 'date-time' }
      }
    }
  }
};

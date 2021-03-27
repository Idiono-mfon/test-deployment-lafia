import { JSONSchema } from 'objection';

export const attachmentValidator: JSONSchema = {
  type: 'object',
  required: ['content_type', 'creation'],
  properties: {
    content_type: { type: 'string' },
    language: { type: 'string' },
    data: { type: 'string' },
    url: { type: 'string' },
    size: { type: 'number' },
    hash: { type: 'string' },
    title: { type: 'string' },
    creation: { format: 'date-time' }
  }
}

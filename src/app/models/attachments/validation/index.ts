import { JSONSchema } from 'objection';

export const AttachmentValidation: JSONSchema = {
  type: 'object',
  title: 'Attachment Schema Validation',
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

import { JSONSchema } from 'objection';

export const AttachmentValidation: JSONSchema = {
  type: 'object',
  title: 'Attachment Schema Validation',
  required: ['contentType', 'creation'],
  properties: {
    contentType: { type: 'string' },
    language: { type: 'string' },
    data: { type: 'string' },
    url: { type: 'string' },
    size: { type: 'number' },
    hash: { type: 'string' },
    title: { type: 'string' },
    creation: { format: 'date-time' }
  }
}

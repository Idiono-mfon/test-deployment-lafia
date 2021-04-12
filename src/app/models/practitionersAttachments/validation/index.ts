import { JSONSchema } from 'objection';

export const PractitionersAttachmentValidation: JSONSchema = {
  type: 'object',
  title: 'PractitionersAttachment Schema Validation',
  properties: {
    practitioner_id: { format: 'uuid' },
    attachment_id: { format: 'uuid' },
  }
}

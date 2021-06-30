import { JSONSchema } from 'objection';

export const PatientsAttachmentValidation: JSONSchema = {
  type: 'object',
  title: 'PatientsAttachment Schema Validation',
  properties: {
    patient_id: { format: 'uuid' },
    attachment_id: { format: 'uuid' },
  }
}

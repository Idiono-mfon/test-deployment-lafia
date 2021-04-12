import { JSONSchema } from 'objection';

export const QualificationsIdentifierValidation: JSONSchema = {
  type: 'object',
  title: 'QualificationsIdentifier Schema Validation',
  properties: {
    qualification_id: { format: 'uuid' },
    identifier_id: { format: 'uuid' },
  }
}

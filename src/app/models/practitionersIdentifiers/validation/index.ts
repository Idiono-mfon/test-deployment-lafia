import { JSONSchema } from 'objection';

export const PractitionersIdentifierValidation: JSONSchema = {
  type: 'object',
  title: 'PractitionersIdentifier Schema Validation',
  properties: {
    practitioner_id: { format: 'uuid' },
    identifier_id: { format: 'uuid' },
  }
}

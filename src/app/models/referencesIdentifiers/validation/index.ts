import { JSONSchema } from 'objection';

export const ReferenceIdentifierValidation: JSONSchema = {
  type: 'object',
  title: 'ReferenceIdentifier Schema Validation',
  properties: {
    reference_id: { type: 'string' },
    identifier_id: { type: 'string' }
  }
};

import { JSONSchema } from 'objection';
import { IdentifierValidation } from '../../identifiers';

export const ReferenceValidation: JSONSchema = {
  type: 'object',
  title: 'Reference Schema Validation',
  required: ['type'],
  properties: {
    reference: { type: 'string' },
    display: { type: 'string' },
    identifier: {
      ...IdentifierValidation
    }
  }
}

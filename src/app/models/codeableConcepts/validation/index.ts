import { JSONSchema } from 'objection';
import { CodingValidation } from '../../codings';

export const CodeableConceptValidation: JSONSchema = {
  type: 'object',
  title: 'CodeableConcept Schema Validation',
  required: ['text'],
  properties: {
    text: { type: 'string' },
    coding: {
      ...CodingValidation
    }
  }
}

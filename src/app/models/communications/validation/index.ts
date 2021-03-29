import { JSONSchema } from 'objection';
import { CodeableConceptValidation } from '../../codeableConcepts';

export const CommunicationValidation: JSONSchema = {
  type: 'object',
  title: 'Communications Schema Validation',
  properties: {
    language: {
      ...CodeableConceptValidation
    },
    preferred: { type: 'boolean' }
  }
}

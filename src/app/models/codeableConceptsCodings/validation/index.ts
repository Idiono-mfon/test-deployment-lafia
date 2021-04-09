import { JSONSchema } from 'objection';

export const CodeableConceptsCodingsValidation: JSONSchema = {
  type: 'object',
  title: 'CodeableConceptsCodings Schema Validation',
  properties: {
    codingId: { format: 'uuid' },
    codeableConceptId: { format: 'uuid' },
  }
}

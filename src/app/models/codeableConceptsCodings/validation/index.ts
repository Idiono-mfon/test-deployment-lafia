import { JSONSchema } from 'objection';

export const CodeableConceptsCodingsValidation: JSONSchema = {
  type: 'object',
  title: 'CodeableConceptsCodings Schema Validation',
  properties: {
    coding_id: { format: 'uuid' },
    codeable_concept_id: { format: 'uuid' },
  }
}

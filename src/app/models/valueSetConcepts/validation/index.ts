import { JSONSchema } from 'objection';

export const ValueSetConceptValidation: JSONSchema = {
  type: 'object',
  required: ['code'],
  title: 'ValueSetConcept Schema Validation',
  properties: {
    code: { type: 'string' },
    display: { type: 'string' },
    system: { type: 'string' },
    version: { type: 'string' },
    value_set_Id: { type: 'string' },
  },
};

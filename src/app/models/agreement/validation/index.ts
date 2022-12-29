import { JSONSchema } from 'objection';

export const AgreementValidation: JSONSchema = {
  type: 'object',
  required: ['name', 'contents', 'title'],
  title: 'Agreement Schema Validation',
  properties: {
    name: { type: 'string' },
    title: { type: 'string' },
    contents: { type: 'string' },
  },
};

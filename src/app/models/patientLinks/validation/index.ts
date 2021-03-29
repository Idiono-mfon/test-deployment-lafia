import { JSONSchema } from 'objection';
import { ReferenceValidation } from '../../references';

export const PatientLinkValidation: JSONSchema = {
  type: 'object',
  title: 'PatientLink Schema Validation',
  required: ['type'],
  properties: {
    type: {
      type: 'string',
      enum: ['replaced_by', 'replaces', 'refer', 'seealso']
    },
    other: {
      ...ReferenceValidation
    }
  }
}

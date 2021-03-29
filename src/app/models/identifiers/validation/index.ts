import { JSONSchema } from 'objection';
import { CodeableConceptValidation } from '../../codeableConcepts';
import { PeriodValidation } from '../../periods';
import { ReferenceValidation } from '../../references';

export const IdentifierValidation: JSONSchema = {
  type: 'object',
  title: 'Identifier Schema Validation',
  required: ['use', 'type'],
  properties: {
    use: {
      type: 'string',
      enum: ['usual', 'official', 'temp', 'secondary', 'old']
    },
    type: {
      ...CodeableConceptValidation
    },
    system: { type: 'string' },
    value: { type: 'string' },
    period: {
      ...PeriodValidation
    },
    assigner: {
      ...ReferenceValidation
    }
  }
}

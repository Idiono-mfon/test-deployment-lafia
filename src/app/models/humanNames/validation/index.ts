import { JSONSchema } from 'objection';
import { PeriodValidation } from '../../periods';

export const HumanNameValidation: JSONSchema = {
  type: 'object',
  title: 'HumanName Schema Validation',
  required: ['use'],
  properties: {
    use: {
      type: 'string',
      enum: ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden']
    },
    text: { type: 'string' },
    family: { type: 'string' },
    given: {
      type: 'array',
      items: { type: 'string' }
    },
    prefix: {
      type: 'array',
      items: { type: 'string' }
    },
    suffix: {
      type: 'array',
      items: { type: 'string' }
    },
    period: {
      ...PeriodValidation
    }
  }
};

import { JSONSchema } from 'objection';
import { PeriodValidation } from '../../periods';

export const AddressValidation: JSONSchema = {
  title: 'Address Validation',
  type: 'object',
  required: ['use', 'type'],
  properties: {
    use: { type: 'string' },
    type: { type: 'string' },
    text: { type: 'string' },
    line: { type: 'string' },
    city: { type: 'string' },
    district: { type: 'string' },
    state: { type: 'string' },
    postalCode: { type: 'string' },
    country: { type: 'string' },
    period: {
      ...PeriodValidation
    }
  }
};

import { JSONSchema } from 'objection';
import { PeriodValidation } from '../../periods';

export const ContactPointValidation: JSONSchema = {
  type: 'object',
  title: 'ContactPoint Schema Validation',
  required: ['system', 'use'],
  properties: {
    system: {
      type: 'string',
      enum: ['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other']
    },
    use: {
      type: 'string',
      enum: ['home', 'work', 'temp', 'old', 'mobile']
    },
    value: { type: 'string' },
    rank: { type: 'number', enum: [0, 1] },
    period: {
      ...PeriodValidation
    }
  }
}

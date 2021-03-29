import { JSONSchema } from 'objection';

export const PeriodValidation: JSONSchema = {
  title: 'Period Validation',
  type: 'object',
  required: ['start'],
  properties: {
    start: { format: 'date-time' },
    end: { format: 'date-time' }
  }
}

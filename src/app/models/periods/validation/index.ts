import { JSONSchema } from 'objection';

export const PeriodValidator: JSONSchema = {
  title: 'Period Validation',
  type: 'object',
  required: ['start'],
  properties: {
    id: { type: 'string'},
    start: { format: 'date-time' },
    end: { format: 'date-time' }
  }
}

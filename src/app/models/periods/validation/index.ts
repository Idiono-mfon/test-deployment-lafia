import { JSONSchema } from 'objection';

export const PeriodValidation: JSONSchema = {
  title: 'Period Validation',
  type: 'object',
  properties: {
    start: { format: 'date-time' },
    end: { format: 'date-time' }
  }
}

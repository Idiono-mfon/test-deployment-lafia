import { JSONSchema } from 'objection';

export const PractitionersHumanNameValidation: JSONSchema = {
  type: 'object',
  title: 'PractitionersHumanName Schema Validation',
  properties: {
    practitioner_id: { format: 'uuid' },
    human_name_id: { format: 'uuid' },
  }
}

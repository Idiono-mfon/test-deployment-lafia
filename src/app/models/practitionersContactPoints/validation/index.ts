import { JSONSchema } from 'objection';

export const PractitionersContactPointValidation: JSONSchema = {
  type: 'object',
  title: 'PractitionersContactPoint Schema Validation',
  properties: {
    practitioner_id: { format: 'uuid' },
    contact_point_id: { format: 'uuid' },
  }
}

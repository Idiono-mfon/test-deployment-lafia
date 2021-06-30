import { JSONSchema } from 'objection';

export const PractitionersAddressValidation: JSONSchema = {
  type: 'object',
  title: 'PractitionersAddress Schema Validation',
  properties: {
    practitioner_id: { format: 'uuid' },
    address_id: { format: 'uuid' },
  }
}

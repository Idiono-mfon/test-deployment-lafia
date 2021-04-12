import { JSONSchema } from 'objection';

export const PatientsAddressValidation: JSONSchema = {
  type: 'object',
  title: 'PatientsAddress Schema Validation',
  properties: {
    patient_id: { format: 'uuid' },
    address_id: { format: 'uuid' },
  }
}

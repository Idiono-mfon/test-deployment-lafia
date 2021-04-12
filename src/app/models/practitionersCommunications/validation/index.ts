import { JSONSchema } from 'objection';

export const PractitionersCommunicationValidation: JSONSchema = {
  type: 'object',
  title: 'PractitionersCommunication Schema Validation',
  properties: {
    practitioner_id: { format: 'uuid' },
    communication_id: { format: 'uuid' },
  }
}

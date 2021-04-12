import { JSONSchema } from 'objection';

export const PractitionersQualificationValidation: JSONSchema = {
  type: 'object',
  title: 'PractitionersQualification Schema Validation',
  properties: {
    practitioner_id: { format: 'uuid' },
    qualification_id: { format: 'uuid' },
  }
}

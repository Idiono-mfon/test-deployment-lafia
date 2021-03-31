import { JSONSchema } from 'objection';
import { AddressValidation } from '../../address';
import { HumanNameValidation } from '../../humanNames';
import { NarrativeValidation } from '../../narratives';
import { ReferenceValidation } from '../../references';
import { AttachmentValidation } from '../../attachments';
import { IdentifierValidation } from '../../identifiers';
import { PatientLinkValidation } from '../../patientLinks';
import { ContactPointValidation } from '../../contactPoints';
import { CommunicationValidation } from '../../communications';
import { CodeableConceptValidation } from '../../codeableConcepts';
import { PatientContactValidation } from '../../patientContacts';

export const PatientValidation: JSONSchema = {
  type: 'object',
  title: 'Patient Schema Validation',
  required: ['active', 'gender'],
  properties: {
    resource_type: {
      type: 'string',
      default: 'Patient'
    },
    narrative_id: { format: 'uuid' },
    text: {
      ...NarrativeValidation
    },
    active: { type: 'boolean' },
    gender: {
      type: 'string',
      enum: ['male', 'female', 'other', 'unknown']
    },
    birth_date: { format: 'date' },
    deceased_boolean: { type: 'boolean' },
    deceased_date_time: { format: 'date-time' },
    codeable_concept_id: { format: 'uuid' },
    marital_status: {
      ...CodeableConceptValidation
    },
    multiple_birth_boolean: { type: 'boolean' },
    multiple_birth_integer: { type: 'integer' },
    reference_id: { format: 'uuid' },
    managing_organization: {
      ...ReferenceValidation
    },
    identifier: {
      ...IdentifierValidation
    },
    name: {
      ...HumanNameValidation
    },
    telecom: {
      ...ContactPointValidation
    },
    address: {
      ...AddressValidation
    },
    photo: {
      ...AttachmentValidation
    },
    contact: {
      ...PatientContactValidation
    },
    communication: {
      ...CommunicationValidation
    },
    general_practitioner: {
      ...ReferenceValidation
    },
    link: {
      ...PatientLinkValidation
    }
  }
};

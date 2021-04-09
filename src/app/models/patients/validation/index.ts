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
    resourceType: {
      type: 'string',
      default: 'Patient'
    },
    narrativeId: { format: 'uuid' },
    text: {
      ...NarrativeValidation
    },
    active: { type: 'boolean' },
    gender: {
      type: 'string',
      enum: ['male', 'female', 'other', 'unknown']
    },
    birthDate: { format: 'date' },
    deceasedBoolean: { type: 'boolean' },
    deceasedDateTime: { format: 'date-time' },
    codeableConceptId: { format: 'uuid' },
    maritalStatus: {
      ...CodeableConceptValidation
    },
    multipleBirthBoolean: { type: 'boolean' },
    multipleBirthInteger: { type: 'integer' },
    referenceId: { format: 'uuid' },
    managingOrganization: {
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
    generalPractitioner: {
      ...ReferenceValidation
    },
    link: {
      ...PatientLinkValidation
    }
  }
};

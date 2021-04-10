import { JSONSchema } from 'objection';
import { AddressValidation } from '../../address';
import { AttachmentValidation } from '../../attachments';
import { CommunicationValidation } from '../../communications';
import { ContactPointValidation } from '../../contactPoints';
import { HumanNameValidation } from '../../humanNames';
import { IdentifierValidation } from '../../identifiers';
import { NarrativeValidation } from '../../narratives';
import { QualificationValidation } from '../../qualifications';

export const PractitionerValidation: JSONSchema = {
  type: 'object',
  title: 'Practitioner Schema Validation',
  required: ['active', 'gender'],
  properties: {
    resourceType: {
      type: 'string',
      default: 'Practitioner'
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
    identifier: {
      ...IdentifierValidation
    },
    name: {
      ...HumanNameValidation
    },
    telecom: {
      ...ContactPointValidation
    },
    photo: {
      ...AttachmentValidation
    },
    communication: {
      ...CommunicationValidation
    },
    address: {
      ...AddressValidation
    },
    qualification: {
      ...QualificationValidation
    }
  }
}

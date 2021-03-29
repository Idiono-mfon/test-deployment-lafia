import { JSONSchema } from 'objection';
import { AddressValidation } from '../../address';
import { CodeableConceptValidation } from '../../codeableConcepts';
import { ContactPointValidation } from '../../contactPoints';
import { HumanNameValidation } from '../../humanNames';
import { PeriodValidation } from '../../periods';
import { ReferenceValidation } from '../../references';

export const PatientContactValidation: JSONSchema = {
  type: 'object',
  title: 'PatientContact Schema Validation',
  required: ['gender'],
  properties: {
    gender: { type: 'string' },
    name: {
      ...HumanNameValidation
    },
    address: {
      ...AddressValidation
    },
    organization: {
      ...ReferenceValidation
    },
    period: {
      ...PeriodValidation
    },
    relationship: {
      ...CodeableConceptValidation
    },
    telecom: {
      ...ContactPointValidation
    }
  }
}

import { JSONSchema } from 'objection';
import { CodeableConceptValidation } from '../../codeableConcepts';
import { IdentifierValidation } from '../../identifiers';
import { PeriodValidation } from '../../periods';
import { ReferenceValidation } from '../../references';

export const QualificationValidation: JSONSchema = {
  type: 'object',
  title: 'Qualification Schema Validation',
  properties: {
    identifier: {
      ...IdentifierValidation
    },
    code: {
      ...CodeableConceptValidation
    },
    period: {
      ...PeriodValidation
    },
    issuer: {
      ...ReferenceValidation
    }
  }
}

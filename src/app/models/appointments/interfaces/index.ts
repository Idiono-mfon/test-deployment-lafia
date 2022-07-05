import { IBase } from '../../base';
import { ICodeableConcept } from '../../codeableConcepts';
import { IIdentifier } from '../../identifiers';
import { IPeriod } from '../../periods';
import { IReference } from '../../references';

export interface IAppointment extends IBase {
  id?: string;
  resource_type?: string;
  resource_id?: string;
  status?: string;
  patient_participant?: string;
  practitioner_participant?: string;
  priority?: number;
  description?: string;
}

interface IParticipant {
  type?: ICodeableConcept;
  actor?: IReference;
  required?: string;
  status?: string;
  period?: IPeriod;
}

export interface IFhirAppointment extends IBase {
  id?: string;
  identifier?: IIdentifier[];
  resourceType?: string;
  status?: string;
  cancelationReason?: ICodeableConcept;
  serviceCategory?: ICodeableConcept;
  serviceType?: ICodeableConcept;
  specialty?: ICodeableConcept;
  appointmentType?: ICodeableConcept;
  reasonCode?: ICodeableConcept;
  reasonReference?: IReference;
  priority?: number;
  description?: string;
  supportingInformation?: IReference;
  start?: Date;
  end?: Date;
  minutesDuration?: number;
  slot?: IReference;
  created?: Date;
  comment?: string;
  patientInstruction?: string;
  basedOn?: IReference;
  participant?: IParticipant[];
  requestedPeriod?: IPeriod;
}

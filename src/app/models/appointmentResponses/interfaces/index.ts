import { IBase } from '../../base';
import { ICodeableConcept } from '../../codeableConcepts';
import { IIdentifier } from '../../identifiers';
import { IReference } from '../../references';

export interface IAppointmentResponse extends IBase {
  id?: string;
  resource_type?: string;
  resource_id?: string;
  appointment?: string;
  participant_status?: string;
  comment?: string;
  patient_participant?: string;
  practitioner_participant?: string;
}


export interface IFhirAppointmentResponse extends IBase {
  id?: string;
  identifier?: IIdentifier[];
  resourceType?: string;
  appointment?: IReference;
  start?: Date;
  end?: Date;
  participantType?: ICodeableConcept;
  actor?: IReference;
  participantStatus?: string;
  comment?: string;
}

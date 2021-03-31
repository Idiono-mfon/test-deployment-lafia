import { IBase } from '../../base';
import { IAddress } from '../../address';
import { IHumanName } from '../../humanNames';
import { INarrative } from '../../narratives';
import { IReference } from '../../references';
import { IAttachment } from '../../attachments';
import { IIdentifier } from '../../identifiers';
import { IPatientLink } from '../../patientLinks';
import { IContactPoint } from '../../contactPoints';
import { ICommunication } from '../../communications';
import { IPatientContact } from '../../patientContacts';
import { ICodeableConcept } from '../../codeableConcepts';

export interface IPatient extends IBase {
  resource_type?: string;
  narrative_id?: string;
  text?: INarrative;
  active: boolean;
  gender: string;
  birth_date?: Date | string;
  deceased_boolean?: boolean;
  deceased_date_time?: Date;
  codeable_concept_id?: string;
  marital_status?: ICodeableConcept;
  multiple_birth_boolean?: boolean;
  multiple_birth_integer?: number;
  reference_id?: string;
  managing_organization?: IReference;
  identifier?: IIdentifier;
  name?: IHumanName;
  telecom?: IContactPoint;
  address?: IAddress;
  photo?: IAttachment;
  contact: IPatientContact;
  communication?: ICommunication;
  general_practitioner?: IReference;
  link?: IPatientLink;
}

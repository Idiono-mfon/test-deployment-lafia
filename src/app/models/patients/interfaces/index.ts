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
  resourceType?: string;
  narrativeId?: string;
  text?: INarrative;
  active: boolean;
  gender: string;
  birthDate?: Date | string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: Date;
  codeableConceptId?: string;
  maritalStatus?: ICodeableConcept;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  referenceId?: string;
  managingOrganization?: IReference;
  identifier?: IIdentifier;
  name?: IHumanName;
  telecom?: IContactPoint | IContactPoint[];
  address?: IAddress;
  photo?: IAttachment;
  contact?: IPatientContact | IPatientContact[];
  communication?: ICommunication;
  generalPractitioner?: IReference;
  link?: IPatientLink;
}

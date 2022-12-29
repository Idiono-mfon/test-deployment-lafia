import { IAddress } from '../../address';
import { IAttachment } from '../../attachments';
import { IBase } from '../../base';
import { ICommunication } from '../../communications';
import { IContactPoint } from '../../contactPoints';
import { IHumanName } from '../../humanNames';
import { IIdentifier } from '../../identifiers';
import { INarrative } from '../../narratives';
import { IQualification } from '../../qualifications';
import { ICreatePatientDto } from '../../patients';

export interface IPractitioner extends IBase {
  resourceType?: string;
  narrativeId?: string;
  text?: INarrative;
  active: boolean;
  gender: string;
  birthDate?: Date | string;
  referenceId?: string;
  codeableConceptId?: string;
  name?: IHumanName | IHumanName[];
  telecom?: IContactPoint | IContactPoint[];
  address?: IAddress | IAddress[];
  photo?: IAttachment | IAttachment[];
  communication?: ICommunication | ICommunication[];
  identifier?: IIdentifier | IIdentifier[];
  qualification?: IQualification | IQualification[];
}

export interface IPractitionerWithToken {
  user: IPractitioner;
  auth_token: string;
}

export interface ICreatePractitionerDto extends ICreatePatientDto {
  medical_specialty: string;
  ip?: string;
}

// export interface ICreatePatientDto {
//   first_name: string;
//   last_name: string;
//   birth_date: Date | string;
//   gender: Gender;
//   country: string;
//   care_type?: string;
//   email: string;
//   phone: string;
//   password: string;
//   isEmail: boolean;
//   emailOrPhone?: string;
// }

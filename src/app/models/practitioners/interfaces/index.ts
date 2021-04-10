import { IAddress } from '../../address';
import { IAttachment } from '../../attachments';
import { IBase } from '../../base';
import { ICodeableConcept } from '../../codeableConcepts';
import { ICommunication } from '../../communications';
import { IHumanName } from '../../humanNames';
import { IIdentifier } from '../../identifiers';
import { INarrative } from '../../narratives';
import { IQualification } from '../../qualifications';

export interface IPractitioner extends IBase {
  resourceType?: string;
  narrativeId?: string;
  text?: INarrative;
  active: boolean;
  gender: string;
  birthDate?: Date | string;
  name?: IHumanName | IHumanName[];
  telecom?: ICodeableConcept | ICodeableConcept[];
  address?: IAddress | IAddress[];
  photo?: IAttachment | IAttachment[];
  communication?: ICommunication | ICommunication[];
  identifier?: IIdentifier | IIdentifier[];
  qualification?: IQualification | IQualification[];
}

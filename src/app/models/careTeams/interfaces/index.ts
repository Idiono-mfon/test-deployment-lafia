import { IBase } from '../../base';
import { ICodeableConcept } from '../../codeableConcepts';
import { IContactPoint } from '../../contactPoints';
import { IIdentifier } from '../../identifiers';
import { IPeriod } from '../../periods';
import { IReference } from '../../references';

export interface ICareTeam extends IBase {
  id?: string;
  resource_type?: string;
  resource_id?: string;
  subject?: string;
  name?: string;
  encounter?: string;
  status?: string;
}

interface IParticipant {
  role?: ICodeableConcept;
  member?: IReference;
  onBehalfOf?: IReference;
  period?: IPeriod;
}

export interface IAuthor {
  authorReference?: IReference;
  authorString?: string;
}

export interface IAnnotation {
  author?: IAuthor[];
  time?: Date;
  text?: string;
}

export interface IFhirCareTeam extends IBase {
  id?: string;
  identifier?: IIdentifier[];
  resourceType?: string;
  status?: string;
  category?: ICodeableConcept;
  name?: string;
  subject?: IReference;
  period?: IPeriod;
  participant?: IParticipant[];
  reasonCode?: ICodeableConcept;
  reaconReference?: IReference;
  encounter?: IReference;
  managingOrganization?: IReference;
  telecom?: IContactPoint; 
  note?: IAnnotation[];
}

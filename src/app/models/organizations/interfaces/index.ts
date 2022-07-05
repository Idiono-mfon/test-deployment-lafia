import { IAddress } from '../../address';
import { IBase } from '../../base';
import { ICodeableConcept } from '../../codeableConcepts';
import { IContactPoint } from '../../contactPoints';
import { IHumanName } from '../../humanNames';
import { IIdentifier } from '../../identifiers';
import { IReference } from '../../references';

export interface IOrganization extends IBase {
  id?: string;
  resource_type?: string;
  resource_id?: string;
  name?: string;
  active?: boolean;
}

interface IContact {
  purpose?: ICodeableConcept;
  name?: IHumanName;
  telecom?: IContactPoint[];
  address?: IAddress;
}

export interface IFhirOrganization extends IBase {
  id?: string;
  identifier?: IIdentifier[];
  resourceType?: string;
  name?: string;
  active?: boolean;
  type?: ICodeableConcept;
  alias?: string[];
  telecom?: IContactPoint[];
  address?: IAddress[];
  partOf?: IReference;
  contact?: IContact[];
  endpoint?: IReference[];
}

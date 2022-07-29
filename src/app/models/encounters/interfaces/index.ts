import { IBase } from '../../base';
import { ICodeableConcept } from '../../codeableConcepts';
import { ICoding } from '../../codings';
import { IIdentifier } from '../../identifiers';
import { IPeriod } from '../../periods';
import { IReference } from '../../references';

export interface IEncounter extends IBase {
  id?: string;
  resource_type?: string;
  resource_id?: string;
  subject?: string;
  participant?: string;
  service_provider?: string;
  status?: string;
  class?: string;
  service_type?: string;
  reason_code?: string;
  reason_description?: string;
  start?: Date;
  end?: Date;
}

interface IStatusHistory {
  status?: string;
  period?: IPeriod;
}

interface IParticipant {
  type?: ICodeableConcept;
  period?: IPeriod;
  individual?: IReference;
}

interface ILength {
  value?: string;
  comparator?: string;
  unit?: string;
  system?: string;
  code?: string;
}

interface IDiagnosis {
  condition?: IReference;
  use?: ICodeableConcept;
  rank?: string;
}

interface IPreAdmissionIdentifier {
  use?: string;
  type?: ICodeableConcept;
  system?: string;
  value?: string;
  period: IPeriod;
  assigner: IReference;
}

interface IHospitalization {
  preAdmissionIdentifier?: IPreAdmissionIdentifier;
  origin?: IReference;
  admitSource?: ICodeableConcept;
  reAdmission?: ICodeableConcept;
  dietPreference?: ICodeableConcept[];
  specialCourtesy?: ICodeableConcept[];
  specialArrangement?: ICodeableConcept[];
  destination?: ICodeableConcept;
  dischargeDisposition?: ICodeableConcept;
}

interface ILocation {
  location?: IReference;
  status: string;
  physicalType: ICodeableConcept;
  period?: IPeriod;
}

export interface IFhirEncounter extends IBase {
  id?: string;
  meta?: object;
  identifier?: IIdentifier[];
  resourceType?: string;
  narrativeId?: string;
  status?: string;
  statusHistory?: IStatusHistory[];
  class?: ICoding;
  type?: ICodeableConcept[];
  serviceType?: ICodeableConcept;
  priority?: ICodeableConcept;
  subject?: IReference;
  episodeOfCare?: IReference[];
  basedOn?: IReference[];
  participant?: IParticipant[];
  appointment?: IReference[];
  period?: IPeriod;
  length?: ILength;
  reasonCode?: ICodeableConcept[];
  reasonReference?: IReference[];
  diagnosis?: IDiagnosis[];
  account?: IReference[];
  hospitalization?: IHospitalization;
  location?: ILocation[];
  serviceProvider?: IReference;
  partOf?: IReference;
}
import { IBase } from '../../base';
import { ICodeableConcept } from '../../codeableConcepts';
import { IIdentifier } from '../../identifiers';
import { IPeriod } from '../../periods';
import { IReference } from '../../references';

export interface IClaim extends IBase {
  id?: string;
  resource_type?: string;
  resource_id?: string;
  subject?: string;
  status?: string;
  provider?: string;
  type?: string;
  use?: string;
  billable_period_start?: Date;
  billable_period_end?: Date;
}

interface IDiagnosis {
  sequence?: string;
  type?: ICodeableConcept[];
  onAdmission?: ICodeableConcept;
  packageCode?: ICodeableConcept;
}

interface IProcedure {
  sequence?: string;
  type?: ICodeableConcept[];
  date?: Date;
  udi?: IReference[];
}

interface IClaimReference {
  use?: string;
  type?: ICodeableConcept;
  system?: string;
  value?: string;
  period?: IPeriod;
  assigner: IReference;
}

interface IRelated {
  claim?: IReference;
  relationship?: ICodeableConcept;
  reference?: IClaimReference;
}

interface IPayee {
  type?: ICodeableConcept;
  party?: IReference;
}

interface ICareTeam {
  sequence?: string;
  provider?: IReference;
  responsible?: string;
  role?: ICodeableConcept;
  qualification?: ICodeableConcept;
}

interface ISupportingInfo {
  sequence?: string;
  category?: ICodeableConcept;
  code?: ICodeableConcept;
  reason?: ICodeableConcept;
}

interface IInsurance {
  sequence?: number;
  focal?: boolean;
  identifier?: IIdentifier;
  coverage?: IReference;
  businessArrangement?: string;
  preAuthRef?: string[];
  claimResponse?: IReference;
}

interface IAccident {
  date?: Date;
  type?: ICodeableConcept;
}

interface IQuantity {
  value?: Number;
  unit?: string;
  type?: ICodeableConcept;
  system?: string;
  code?: string;
}

interface IUnitPrice {
  value?: Number;
  currency?: string;
}

interface ISubDetail {
  sequence?: string;
  revenue?: ICodeableConcept;
  category?: ICodeableConcept;
  productOrService?: ICodeableConcept;
  modifier?: ICodeableConcept[];
  programCode?: ICodeableConcept[];
  quantity?: IQuantity;
  unitPrice?: IUnitPrice;
  factor?: Number;
  net?: IUnitPrice;
  udi?: IReference[];
}

interface IDetail {
  sequence?: string;
  revenue?: ICodeableConcept;
  category?: ICodeableConcept;
  productOrService?: ICodeableConcept;
  modifier?: ICodeableConcept[];
  programCode?: ICodeableConcept[];
  quantity?: IQuantity;
  unitPrice?: IUnitPrice;
  factor?: Number;
  net?: IUnitPrice;
  udi?: IReference[];
  subDetail?: ISubDetail;
}

interface IItem {
  sequence?: string;
  careTeamSequence?: Number[];
  diagosisSequence?: Number[];
  procedureSequence?: Number[];
  informationSequence?: Number[];
  revenue?: ICodeableConcept;
  category?: ICodeableConcept;
  productOrService?: ICodeableConcept;
  modifier?: ICodeableConcept[];
  programCode?: ICodeableConcept[];
  quantity?: IQuantity;
  unitPrice?: IUnitPrice;
  factor?: Number;
  net?: IUnitPrice;
  udi?: IReference[];
  bodySite?: ICodeableConcept;
  subSite?: ICodeableConcept[];
  encounter?: IReference[];
  detail?: IDetail[];
}

export interface IFhirClaim extends IBase {
  id?: string;
  identifier?: IIdentifier[];
  resourceType?: string;
  status?: string;
  type?: ICodeableConcept;
  subType?: ICodeableConcept;
  use?: string;
  patient?: IReference;
  billablePeriod?: IPeriod;
  created?: Date;
  enterer?: IReference;
  insurer?: IReference;
  provider?: IReference;
  priority?: ICodeableConcept;
  fundsReserve?: ICodeableConcept;
  related?: IRelated[];
  prescription?: IReference;
  originalPrescription?: IReference;
  payee?: IPayee;
  referral?: IReference;
  facility?: IReference;
  careTeam?: ICareTeam[];
  supportingInfo?: ISupportingInfo[];
  diagnosis?: IDiagnosis;
  procedure?: IProcedure[];
  insurance?: IInsurance[];
  accident?: IAccident;
  item?: IItem[];
  total?: IUnitPrice;
}

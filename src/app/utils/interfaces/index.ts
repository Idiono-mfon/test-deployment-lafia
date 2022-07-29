import {
  IAddress,
  ICodeableConcept,
  ICodeType,
  ICoding,
  IContactPoint,
  IHumanName,
  IQualification,
  IReference
} from '../../models';

export interface RefreshToken {
  access_token: string | null;
  is_refresh_token_expired: boolean;
}

export interface ITokenUtil {
  isTokenExpired(token: string): boolean;

  refreshAccessToken(token: string, provider?: string): Promise<RefreshToken>;
}

export interface IUtilityService {
  extractDateOfBirth(data: any, forWho: string): string;

  extractName(data: any, forWho: string): IHumanName;

  extractAddress(data: any, forWho: string): IAddress;

  getCoding(code: string): Promise<ICoding>;

  extractCodeableConcept(data: any, forWho: string, codeType: string): Promise<ICodeableConcept>;

  checkForRequiredFields(data: any): void;

  extractContactPoint(data: any, forWho: string): IContactPoint[];

  getContact(data: any, forWho: string, codeType: ICodeType): Promise<any>;

  getReference(resourceType: string, refName: string): IReference;

  getQualification(data: any, forWho: string, codeType: string): Promise<IQualification>;
}

export interface IndexAccessor {
  [name: string]: Config;
}

export interface KnexConfigEnvironments extends IndexAccessor {
  development: Config;
  staging: Config;
  production: Config;
  test: Config;
}

export interface Connection {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
  ssl?: any;
}

export interface Pool {
  min: number;
  max: number;
}

export interface Migrations {
  directory: string;
  tableName: string;
  extension: string;
}

export interface Seeds {
  directory: string;
  extension: string;
}

export interface Config {
  client: string;
  connection: Connection;
  pool: Pool;
  migrations: Migrations,
  seeds: Seeds;
  debug?: boolean;
}


export interface IEncounterCsv {
  id: string,
  start: string,
  stop: string,
  patient: string,
  organization: string,
  provider: string,
  payer: string,
  encounter_class: string,
  code: string,
  description: string,
  base_encounter_cost: string,
  total_claim_cost: string,
  payer_coverage: string,
  reasoncode: string,
  reason_description: string
}

export interface IClaimCsv {
  id: string,
  patient_id: string,
  provider_id: string,
  primary_patient_insurance_id: string,
  secondary_patient_insurance_id: string,
  department_id: string,
  patient_department_id: string,
  diagnosis_1: string,
  diagnosis_2: string,
  diagnosis_3: string,
  diagnosis_4: string,
  diagnosis_5: string,
  diagnosis_6: string,
  diagnosis_7: string,
  diagnosis_8: string,
  referring_provider_id: string,
  appointment_id: string,
  current_illness_date: string,
  service_date: string,
  supervising_provider_id: string,
  status_1: string,
  status_2: string,
  status_p: string,
  outstanding_1: string,
  outstanding_2: string,
  outstanding_p: string,
  last_billed_date_1: string,
  last_billed_date_2: string,
  last_billed_date_p: string,
  health_care_claim_type_id_1: string,
  health_care_claim_type_id_2: string
}

interface IFhirEntry {
  fullUrl: string,
  resource: {
    resourceType: string,
    id: string
  },
  request: {
    method: string,
    url: string
  }

}

export interface IFhirBundle {
  resourceType: string
  type: string,
  entry: IFhirEntry[],

}

export interface ICsvImporter {
  uploadEncountersCsv(csvPath: string): void;
}

export interface IFhirImporter {
  uploadEncountersFhirData(path: string): void;

  uploadClaimsFhirData(path: string): void;
}
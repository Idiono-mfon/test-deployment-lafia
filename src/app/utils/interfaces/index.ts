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

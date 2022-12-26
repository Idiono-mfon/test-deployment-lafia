import { IBase } from '../../base';
import { ValueSetStatus, Comparator, filterOPCode } from '../enums';
import { IContactPoint } from '../../contactPoints';

import { IIdentifier } from '../../identifiers';

import { ICoding } from '../../codings';

import { ICodeableConcept } from '../../codeableConcepts';

import { IReference } from '../../references';

export interface IContactDetail {
  name?: string;
  telecom?: [IContactPoint];
}

export interface IQuantity {
  value?: number;
  comparator?: Comparator;
  unit?: string;
  system?: string;
  code?: string;
}

export interface ISimpleQuantity {
  value?: number;
  unit?: string;
  system?: string;
  code?: string;
}

export interface IRange {
  low?: ISimpleQuantity;
  high?: ISimpleQuantity;
}

export interface IUsageContextValue {
  valueCodeableConcept: ICodeableConcept;
  valueQuantity: IQuantity;
  valueRange: IRange;
  valueReference: IReference;
}

export interface IUsageContext {
  code: ICoding;
  value: IUsageContextValue;
}

interface IValueSetComposeInclueConceptDesignation {
  language?: string;
  use?: ICoding;
  value: string;
}

export interface IValueSetComposeIncludeConcept {
  code: string;
  display?: string;
  designation?: IValueSetComposeInclueConceptDesignation;
}

export interface IValueSetComposeIncludeFilter {
  property: string;
  op: filterOPCode;
  value: string;
}

export interface IValueSetComposeInclude {
  system?: string;
  version?: string;
  concept?: [IValueSetComposeIncludeConcept];
  filter?: [IValueSetComposeIncludeFilter];
  valueSet?: [string];
}

export interface IValueSetCompose {
  lockedDate?: Date | string;
  inactive?: boolean;
  include: [IValueSetComposeInclude];
  exclude?: [IValueSetComposeInclude];
}

export interface IValueSetExpansionParamater {
  name: string;
  value?: {
    valueString: string;
    valueBoolearn: boolean;
    valueInteger: number;
    valueDecimal: number;
    valueUri: string;
    valueCode: string;
    valueDateTime: Date | string;
  };
}

export interface IValueSetExpansionContains {
  system?: string;
  abstract?: boolean;
  inactive?: boolean;
  version?: string;
  code?: string;
  display?: string;
  designation?: [IValueSetComposeInclueConceptDesignation];
  contains?: [IValueSetExpansionContains];
}

export interface IValueSetExpansion {
  identifier?: string;
  timestamp?: Date | string;
  total?: number;
  offset?: number;
  parameter?: [IValueSetExpansionParamater];
  contains?: [IValueSetExpansionContains];
}

export interface IValueSet extends IBase {
  resource_type?: string;
  resource_id?: string;
  name?: string;
  title?: string;
  status?: ValueSetStatus;
  experimental?: boolean;
  last_changed?: Date | string;
  publisher?: string;
  description?: string;
  copyright?: string;
}

export interface IFhirValueSet extends IBase {
  resourceType?: string;
  resourceId?: string;
  url?: string;
  identifier?: [IIdentifier];
  name?: string;
  title?: string;
  status: ValueSetStatus;
  experimental?: boolean;
  date?: Date | string;
  publisher?: string;
  contact?: IContactDetail[];
  description?: string;
  useContext?: [IUsageContext];
  jurisdiction?: ICodeableConcept;
  immutable?: boolean;
  purpose?: string;
  copyright?: string;
  compose?: IValueSetCompose;
  expansion?: IValueSetExpansion;
}

export interface IValueSetCreateDto {
  name: string;
  title: string;
  status: ValueSetStatus;
  experimental: boolean;
  immutable: boolean;
  description?: string;
  copyright?: string;
  publisherName: string;
  publisherEmail?: string;
  publisherUrl?: string;
  publisherPhone?: string;
  publisherIsLafia: boolean;
}

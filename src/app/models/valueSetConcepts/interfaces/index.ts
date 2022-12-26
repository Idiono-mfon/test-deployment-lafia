import { IBase } from '../../base';

export interface IValueSetConcept extends IBase {
  code?: string;
  display?: string;
  system?: string;
  version?: string;
  value_set_id?: string;
}

export interface IValueSetConceptCreateDto {
  value_set_id: string;
  system: string;
  concepts: [{ code: string; display: string }];
}

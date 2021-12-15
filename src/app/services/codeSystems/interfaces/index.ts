import { ICodeSystem } from '../../../models';

export interface ICodeSystemService {
  getCodeSystemByType(type: string): Promise<ICodeSystem[]>;

  getCodeSystemByCode(code: string): Promise<ICodeSystem>;

  create<T = ICodeSystem>(data: T): Promise<ICodeSystem>;
}

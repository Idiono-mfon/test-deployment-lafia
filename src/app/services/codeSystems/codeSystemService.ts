import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { ICodeSystem } from '../../models';
import { CodeSystemRepository } from '../../repository/codeSystems';

@injectable()
export class CodeSystemService {
  @inject(TYPES.CodeSystemRepository)
  private readonly codeSystemRepo: CodeSystemRepository;

  public async getCodeSystemByType(type: string): Promise<ICodeSystem[]> {
    return this.codeSystemRepo.getCodeSystemByType(type);
  }

  public async addCodeSystem(data: ICodeSystem): Promise<ICodeSystem> {
    return this.codeSystemRepo.addCodeSystem(data);
  }

  public async getCodeSystemByCode(code: string): Promise<ICodeSystem> {
    return this.codeSystemRepo.getCodeSystemByCode(code);
  }
}

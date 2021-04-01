import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { ICodeSystem } from '../../models/codeSystems';
import { CodeSystemRepository } from '../../repository/codeSystems';

@injectable()
export class CodeSystemService {
  @inject(TYPES.CodeSystemRepository)
  private readonly codeSystemRepo: CodeSystemRepository;

  public async getCodeSystem(type?: string): Promise<ICodeSystem[]> {
    return this.codeSystemRepo.getCodeSystem(type);
  }

  public async addCodeSystem(data: ICodeSystem): Promise<ICodeSystem> {
    return this.codeSystemRepo.addCodeSystem(data);
  }
}

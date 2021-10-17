import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { ICodeSystem } from '../../models';
import { CodeSystemRepository } from '../../repository';
import { logger } from '../../utils';

@injectable()
export class CodeSystemService {
  @inject(TYPES.CodeSystemRepository)
  private readonly codeSystemRepo: CodeSystemRepository;

  public async getCodeSystemByType(type: string): Promise<ICodeSystem[]> {
    logger.info('Running CodeSystemService::getCodeSystemByType');
    return this.codeSystemRepo.getCodeSystemByType(type);
  }

  public async addCodeSystem(data: ICodeSystem): Promise<ICodeSystem> {
    logger.info('Running CodeSystemService::addCodeSystem');
    return this.codeSystemRepo.addCodeSystem(data);
  }

  public async getCodeSystemByCode(code: string): Promise<ICodeSystem> {
    logger.info('Running CodeSystemService::getCodeSystemByCode');
    return this.codeSystemRepo.getCodeSystemByCode(code);
  }
}

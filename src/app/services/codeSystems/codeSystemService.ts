import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { ICodeSystem, IFindCodeSystem } from '../../models';
import { DbAccess } from '../../repository';
import { logger } from '../../utils';
import { ICodeSystemService } from './interfaces';

@injectable()
export class CodeSystemService implements ICodeSystemService {
  @inject(TYPES.CodeSystemRepository)
  private readonly codeSystemRepo: DbAccess;

  public async getCodeSystemByType(type: string): Promise<ICodeSystem[]> {
    logger.info('Running CodeSystemService.getCodeSystemByType');
    return this.codeSystemRepo.findMany<IFindCodeSystem>({ type });
  }

  public async create<T = ICodeSystem>(data: T): Promise<ICodeSystem> {
    logger.info('Running CodeSystemService.create');
    return this.codeSystemRepo.create<T>(data);
  }

  public async getCodeSystemByCode(code: string): Promise<ICodeSystem> {
    logger.info('Running CodeSystemService.getCodeSystemByCode');
    return this.codeSystemRepo.findOne<IFindCodeSystem>({ code });
  }
}

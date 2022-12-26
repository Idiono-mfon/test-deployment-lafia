import { injectable } from 'inversify';
import { IValueSetConcept, ValueSetConceptModel } from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';
import { IValueSetConceptRepository } from './interfaces';

@injectable()
export class ValueSetConceptRepository
  extends BaseRepository
  implements IValueSetConceptRepository {
  constructor() {
    super(ValueSetConceptModel);
  }

  public async getConceptByCode(code: string): Promise<IValueSetConcept | undefined> {
    logger.info('Running ValueSetConceptRepository.getConceptByCode');
    try {
      return await ValueSetConceptModel.query().where('code', code).first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}

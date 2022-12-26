import { injectable } from 'inversify';
import { IValueSet, ValueSetModel } from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';
import { IValueSetRepository } from './interfaces';

@injectable()
export class ValueSetRepository extends BaseRepository implements IValueSetRepository {
  constructor() {
    super(ValueSetModel);
  }

  public async getValueSetByName(value: string): Promise<IValueSet | undefined> {
    logger.info('Running ValueSetRepository.getValueSetByName');
    try {
      return await ValueSetModel.query().where('name', value).first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}

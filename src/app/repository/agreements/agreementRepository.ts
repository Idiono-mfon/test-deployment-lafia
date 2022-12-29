import { injectable } from 'inversify';
import { IAgreement, AgreementModel } from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';
import { IAgreementRepository } from './interfaces';

@injectable()
export class AgreementRepository extends BaseRepository implements IAgreementRepository {
  constructor() {
    super(AgreementModel);
  }

  public async getAgreementByName(value: string): Promise<IAgreement> {
    logger.info('Running AgreementRepository.getAgreementByName');
    try {
      return (await AgreementModel.query().where('name', value).first()) as IAgreement;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}

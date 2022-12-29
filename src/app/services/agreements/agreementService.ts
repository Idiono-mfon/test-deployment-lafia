import { inject, injectable } from 'inversify';
// import { v4 as uuid } from 'uuid';
import TYPES from '../../config/types';
import { IAgreementService } from './interfaces';
import { Env, IEnv } from '../../config/env';
import { IAgreementRepository } from '../../repository';
import { IAgreement, ICreateAgreementDto } from '../../models';
import { GenericResponseError, logger, throwError, error } from '../../utils';

@injectable()
export class AgreementService implements IAgreementService {
  @inject(TYPES.AgreementRepository)
  private agreementRepository: IAgreementRepository;

  private readonly env: IEnv;

  constructor() {
    this.env = Env.all();
  }

  public async findOne(data: IAgreement): Promise<IAgreement> {
    logger.info('Running AgreementService.findOne');
    return this.agreementRepository.findOne<IAgreement>(data);
  }

  public async findById(data: string): Promise<IAgreement> {
    logger.info('Running AgreementService.findById');
    return this.agreementRepository.findById(data);
  }

  public async exists(data: IAgreement): Promise<boolean> {
    logger.info('Running AgreementService.exists');

    try {
      const agreement = await this.findOne(data);
      return !!agreement;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async create(data: ICreateAgreementDto): Promise<IAgreement> {
    logger.info('Running AgreementService.create');

    try {
      return await this.agreementRepository.create<IAgreement>({
        ...data,
      });
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getAgreementByName(name: string): Promise<IAgreement> {
    logger.info('Running AgreementService.getAgreementByName');

    try {
      return await this.agreementRepository.getAgreementByName(name);
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async update(id: string, data: IAgreement): Promise<IAgreement> {
    try {
      logger.info('Running AgreementService.update');

      const agreementExists = this.exists({ id });

      if (!agreementExists) {
        throwError('Invalid Id. Agreement resource not found!', error.unauthorized);
      }

      return await this.agreementRepository.update<IAgreement>(id, data);
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }
}

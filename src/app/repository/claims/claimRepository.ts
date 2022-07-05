import { injectable } from 'inversify';
import { ClaimModel, IClaim } from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';
import { IClaimRepository } from './interfaces';

@injectable()
export class ClaimRepository extends BaseRepository implements IClaimRepository {

  constructor() {
    super(ClaimModel);
  }

  public async getClaimByResourceId(resource_id: string): Promise<IClaim | undefined> {
    logger.info('Running ClaimRepository.getClaimByResourceId');
    try {
      return await ClaimModel.query()
        .where('resource_id', resource_id)
        .first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  // public async create(data: IClaim): Promise<IClaim> {

  // }

  public async update<T = IClaim>(id: string, data: T): Promise<IClaim> {
    logger.info('Running ClaimRepository.update');
    try {
      const result = await ClaimModel.query()
        .patch(data)
        .where({ resource_id: id })
        .returning('*');

      const claim = result as unknown as IClaim;

      return claim as IClaim;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

}

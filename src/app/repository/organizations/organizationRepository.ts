import { injectable } from 'inversify';
import { OrganizationModel, IOrganization } from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';
import { IOrganizationRepository } from './interfaces';

@injectable()
export class OrganizationRepository extends BaseRepository implements IOrganizationRepository {

  constructor() {
    super(OrganizationModel);
  }

  public async getOrganizationByResourceId(resource_id: string): Promise<IOrganization | undefined> {
    logger.info('Running OrganizationRepository.getOrganizationByResourceId');
    try {
      return await OrganizationModel.query()
        .where('resource_id', resource_id)
        .first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  // public async create(data: IOrganization): Promise<IOrganization> {

  // }

  public async update<T = IOrganization>(id: string, data: T): Promise<IOrganization> {
    logger.info('Running OrganizationRepository.update');
    try {
      const result = await OrganizationModel.query()
        .patch(data)
        .where({ resource_id: id })
        .returning('*');

      const organization = result as unknown as IOrganization;

      return organization as IOrganization;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

}

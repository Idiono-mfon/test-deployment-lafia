import { injectable } from 'inversify';
import { CareTeamModel, ICareTeam } from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';
import { ICareTeamRepository } from './interfaces';

@injectable()
export class CareTeamRepository extends BaseRepository implements ICareTeamRepository {

  constructor() {
    super(CareTeamModel);
  }

  public async getCareTeamByResourceId(resource_id: string): Promise<ICareTeam | undefined> {
    logger.info('Running CareTeamRepository.getCareTeamByResourceId');
    try {
      return await CareTeamModel.query()
        .where('resource_id', resource_id)
        .first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  // public async create(data: ICareTeam): Promise<ICareTeam> {

  // }

  public async update<T = ICareTeam>(id: string, data: T): Promise<ICareTeam> {
    logger.info('Running CareTeamRepository.update');
    try {
      const result = await CareTeamModel.query()
        .patch(data)
        .where({ resource_id: id })
        .returning('*');

      const care_team = result as unknown as ICareTeam;

      return care_team as ICareTeam;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

}

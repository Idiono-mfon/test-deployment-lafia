import { injectable } from 'inversify';
import { EncounterModel, IEncounter } from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';
import { IEncounterRepository } from './interfaces';

@injectable()
export class EncounterRepository extends BaseRepository implements IEncounterRepository {

  constructor() {
    super(EncounterModel);
  }

  public async getEncounterByResourceId(resource_id: string): Promise<IEncounter | undefined> {
    logger.info('Running EncounterModel.getEncounterByResourceId');
    try {
      return await EncounterModel.query()
        .where('resource_id', resource_id)
        .first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  // public async create(data: IEncounter): Promise<IEncounter> {

  // }

  public async update<T = IEncounter>(id: string, data: T): Promise<IEncounter> {
    logger.info('Running EncounterRepository.update');
    try {
      const result = await EncounterModel.query()
        .patch(data)
        .where({ resource_id: id })
        .returning('*');

      const encounter = result as unknown as IEncounter;

      return encounter as IEncounter;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

}

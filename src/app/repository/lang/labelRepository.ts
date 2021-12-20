import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { logger } from '../../utils';
import { BaseRepository, DbAccess } from '../base';
import { LabelModel } from '../../models';
import { ILabelRepository } from './interfaces';

@injectable()
export class LabelRepository extends BaseRepository implements ILabelRepository {

  @inject(TYPES.ComponentRepository)
  private readonly componentRepository: DbAccess;

  constructor() {
    super(LabelModel);
  }

  public async fetchLabelByName(name: string): Promise<any> {
    logger.info('Running LabelRepository.fetchLabelByName');

    return this.findOne({ name });
  }

  public async addComponent(id: string, data: object): Promise<any> {
    logger.info('Running LabelRepository.createComponent');

    return LabelModel.relatedQuery('components')
      .for(id)
      .insert(data);
  }

  public async attachComponent(labelId: string, componentId: string): Promise<any> {
    logger.info('Running LabelRepository.attachComponent');

    const label = await this.findById(labelId);
    const component = await this.componentRepository.findById(componentId);

    return label.$relatedQuery('components')
      .relate(component);
  }

  public async detachComponent(labelId: string, componentId: string): Promise<any> {
    logger.info('Running LabelRepository.detachComponent');

    const label = await this.findById(labelId);

    return label.$relatedQuery('components')
      .unrelate().where('id', componentId);
  }

}

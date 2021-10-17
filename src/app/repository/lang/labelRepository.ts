import { injectable } from 'inversify';
import { ComponentModel } from '../../models/lang/componentModel';
import { ILabel } from '../../models/lang/interfaces';
import { LabelModel } from '../../models/lang/labelModel';
import { InternalServerError, logger } from '../../utils';

@injectable()
export class LabelRepository {

  public async fetchLabelByID(id: string) {
    logger.info('Running LabelRepository::fetchLabelByID');
    return LabelModel.query().findById(id);
  }

  public async fetchLabelByName(name: string) {
    logger.info('Running LabelRepository::fetchLabelByName');
    return LabelModel.query().where('name', name).first();
  }

  public async fetchLabels() {
    logger.info('Running LabelRepository::fetchLabels');
    return LabelModel.query();
  }

  public async addLabel(data: ILabel): Promise<ILabel> {
    logger.info('Running LabelRepository::addLabel');
    try {
      return await LabelModel.query().insertAndFetch(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async addComponent(id: string, data: object): Promise<any> {
    logger.info('Running LabelRepository::addComponent');
    return LabelModel.relatedQuery('components')
      .for(id)
      .insert(data);
  }

  public async attachComponent(labelId: string, componentId: string): Promise<any> {
    logger.info('Running LabelRepository::attachComponent');
    return (await LabelModel.query().findById(labelId)).$relatedQuery('components')
      .relate(await ComponentModel.query().findById(componentId));
  }

  public async detachComponent(labelId: string, componentId: string): Promise<any> {
    logger.info('Running LabelRepository::detachComponent');
    return (await LabelModel.query().findById(labelId)).$relatedQuery('components')
      .unrelate().where('id', componentId);
  }

  public async updateLabel(id: string, data: ILabel): Promise<ILabel> {
    logger.info('Running LabelRepository::updateLabel');
    try {
      return await LabelModel.query().patchAndFetchById(id, data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async deleteLabel(id: string) {
    logger.info('Running LabelRepository::deleteLabel');
    return LabelModel.query().deleteById(id);
  }

}

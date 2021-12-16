import { injectable } from 'inversify';
import { ComponentModel, } from '../../models';
import { InternalServerError, logger } from '../../utils';

@injectable()
export class ComponentRepository {

  public async fetchComponents() {
    logger.info('Running ComponentRepository::fetchComponents');
    return ComponentModel.query();
  }

  public async fetchComponentByID(id: string) {
    logger.info('Running ComponentRepository::fetchComponentByID');
    return ComponentModel.query().findById(id);
  }

  public async addComponent(data: any): Promise<any> {
    logger.info('Running ComponentRepository::addComponent');
    return ComponentModel.query().insertAndFetch(data);
  }

  public async updateComponent(id: string, data: any): Promise<any> {
    logger.info('Running ComponentRepository::updateComponent');
    try {
      return await ComponentModel.query().patchAndFetchById(id, data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }


  public async deleteComponent(id: string) {
    logger.info('Running ComponentRepository::deleteComponent');
    return ComponentModel.query().deleteById(id);
  }


}

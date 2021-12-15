import { injectable, unmanaged } from 'inversify';
import { Model, ModelClass, transaction } from 'objection';
import { InternalServerError, logger } from '../../utils';
import { DbAccess } from './interfaces';

@injectable()
export class BaseRepository implements DbAccess {
  private readonly model: ModelClass<Model>;

  constructor(@unmanaged() model: ModelClass<Model>) {
    this.model = model;
  }

  public async create<T = any>(data: T): Promise<any> {
    logger.info('BaseRepository.create');
    try {
      return await transaction(this.model, async (Model) => {
        return Model.query().insertGraphAndFetch(data);
      });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async findAll<T = any>(params?: T): Promise<any[]> {
    logger.info('BaseRepository.findAll');
    return this.model.query().skipUndefined();
  }

  public async findOne<T = any>(obj: T): Promise<any> {
    logger.info('BaseRepository.findOne');
    return this.model.query().findOne(obj);
  }

  public async findMany<T = any>(obj: T): Promise<any[]> {
    logger.info('BaseRepository.findOne');
    return this.model.query().where(obj).skipUndefined();
  }

  public async findById(id: string): Promise<any> {
    logger.info('BaseRepository.findById');
    return this.model.query().findById(id);
  }

  public async update<T = any>(id: string, data: T): Promise<any> {
    logger.info('BaseRepository.update');
    return this.model.query().patchAndFetchById(id, data);
  }

  public async delete(id: string): Promise<any> {
    logger.info('BaseRepository.delete');
    return this.model.query().deleteById(id);
  }
}

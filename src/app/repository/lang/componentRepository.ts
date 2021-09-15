import { injectable } from 'inversify';
import { ComponentModel } from '../../models/lang/componentModel';
import { IComponent } from '../../models/lang/interfaces';
import { InternalServerError } from '../../utils';

@injectable()
export class ComponentRepository {

  public async fetchComponents() {
    return ComponentModel.query();
  }

  public async fetchComponentByID(id: string) {
    return ComponentModel.query().findById(id);
  }

  public async addComponent(data: IComponent): Promise<IComponent> {
    return ComponentModel.query().insertAndFetch(data);
  }

  public async updateComponent(id: string, data: IComponent): Promise<IComponent> {
    try {
      return await ComponentModel.query().patchAndFetchById(id, data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }


  public async deleteComponent(id: string) {
    return ComponentModel.query().deleteById(id);
  }


}

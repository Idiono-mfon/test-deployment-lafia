import { injectable } from "inversify";
import { transaction } from "objection";
import { ComponentModel } from "../../models/lang/componentModel";
import { IComponent, ILabel } from "../../models/lang/interfaces";
import { LabelModel } from "../../models/lang/labelModel";
import { GenericResponseError, HttpStatusCode, InternalServerError } from "../../utils";

@injectable()
export class LabelRepository {

    public async fetchLabelByID(id: string) {
      const label = await LabelModel.query().findById(id);
      console.log(label);
      return label;
    }

    public async fetchLabels() {
        return LabelModel.query();
    }
    
    public async addLabel(data: ILabel): Promise<ILabel> {
      try {
        return LabelModel.query().insertAndFetch(data);
      } catch (e) {
        throw new InternalServerError(e.message);
      }
    }

    public async addComponent(id: string, data: object): Promise<any> {
      return await LabelModel.relatedQuery('components')
                        .for(id)
                        .insert(data);
    }

    public async attachComponent(labelId: string, componentId: string): Promise<any> {
      return await ( await LabelModel.query().findById(labelId) ).$relatedQuery('components')
                        .relate( await ComponentModel.query().findById(componentId) );
      // return await LabelModel.relatedQuery('components').for(labelId).relate(componentId);                  
    }

    public async detachComponent(labelId: string, componentId: string): Promise<any> {
      return await ( await LabelModel.query().findById(labelId) ).$relatedQuery('components')
                        .unrelate().where("id", componentId );                  
    }
    
    public async updateLabel(id:string, data: ILabel): Promise<ILabel> {
        try {
            return await LabelModel.query().patchAndFetchById(id, data);
        } catch (e) {
            throw new InternalServerError(e.message);
        }
    }

    public async deleteLabel(id: string) {
        return LabelModel.query().deleteById(id);
    }

}

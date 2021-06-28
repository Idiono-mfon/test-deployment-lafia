import { injectable } from "inversify";
import { transaction } from "objection";
import { ComponentModel } from "../../models/lang/componentModel";
import { IComponent } from "../../models/lang/interfaces";
import { GenericResponseError, HttpStatusCode, InternalServerError } from "../../utils";

@injectable()
export class ComponentRepository {

    public async fetchComponents() {
        return ComponentModel.query();
    }
    
    public async addComponent(data: IComponent): Promise<IComponent> {
        return ComponentModel.query().insertAndFetch(data);
    }

    public async updateComponent(id:string, data: IComponent): Promise<IComponent> {
        try {
            return await ComponentModel.query().patchAndFetchById(id, data);
        } catch (e) {
            throw new InternalServerError(e.message);
        }
    }


    public async deleteComponent(id: string) {
        return ComponentModel.query().deleteById(id);
    }
      

}
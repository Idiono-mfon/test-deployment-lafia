import { injectable } from "inversify";
import { transaction } from "objection";
import { ILabel } from "../../models/lang/interfaces";
import { LabelModel } from "../../models/lang/labelModel";
import { GenericResponseError, HttpStatusCode, InternalServerError } from "../../utils";

@injectable()
export class LabelRepository {

    public async fetchLabels() {
        return LabelModel.query();
    }
    
    public async addLabel(data: ILabel): Promise<ILabel> {
        return LabelModel.query().insertAndFetch(data);
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
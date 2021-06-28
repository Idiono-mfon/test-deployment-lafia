import { injectable } from "inversify";
import { transaction } from "objection";
import { ILangauge } from "../../models/lang/interfaces";
import { LanguageModel } from "../../models/lang/languageModel";
import { GenericResponseError, HttpStatusCode, InternalServerError } from "../../utils";

@injectable()
export class LanguageRepository {


    public async fetchLanguages() {
        return LanguageModel.query();
    }

    public async addLanguage(data: ILangauge): Promise<ILangauge> {
        return LanguageModel.query().insertAndFetch(data);
    }

    public async updateLanguage(id:string, data: ILangauge): Promise<ILangauge> {
        try {
            return await LanguageModel.query().patchAndFetchById(id, data);
        } catch (e) {
            console.error(e);
            throw new InternalServerError(e.message);
        }
    }

    public async deleteLanguage(id: string) {
        return LanguageModel.query().deleteById(id);
    }
}
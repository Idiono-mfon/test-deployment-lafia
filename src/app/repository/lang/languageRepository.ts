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

    public async fetchLanguageByID(id: string) {
        return LanguageModel.query().findById(id);
    }

    public async fetchLanguageByCode(code: string) {
        return LanguageModel.query().where('code', code).first();
    }

    public async fetchLanguagesWithContent(code: string) {
        return LanguageModel.query()
        .withGraphFetched('[labels.components]')
        .where('code', code).first();
    }

    public async addLanguage(data: ILangauge): Promise<ILangauge> {
        return LanguageModel.query().insertAndFetch(data);
    }

    public async attachLabel(languageId: string, labelId: string): Promise<any> {
        return await LanguageModel.relatedQuery('labels').for(languageId).relate(labelId);                  
    }

    public async detachLabel(languageId: string, labelId: string): Promise<any> {
        return await ( await LanguageModel.query().findById( languageId ) ).$relatedQuery('labels')
                          .unrelate().where("id", labelId );                  
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
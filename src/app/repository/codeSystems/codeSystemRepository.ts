import { injectable } from 'inversify';
import { CodeSystemModel, ICodeSystem } from '../../models';
import { InternalServerError } from '../../utils';

@injectable()
export class CodeSystemRepository {
  public async getCodeSystemByType(codeType: string): Promise<ICodeSystem[]> {
    try {
      let codeSystems = CodeSystemModel.query();

      if (codeType) {
        codeSystems = codeSystems
          .where({ type: codeType })
          .skipUndefined();
      }

      return await codeSystems;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async addCodeSystem(data: ICodeSystem): Promise<ICodeSystem> {
    return CodeSystemModel.query().insertAndFetch(data);
  }

  public async getCodeSystemByCode(code: string): Promise<ICodeSystem> {
    try {
      return await CodeSystemModel.query()
        .where({ code })
        .skipUndefined()
        .first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}

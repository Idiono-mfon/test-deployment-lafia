import { injectable } from 'inversify';
import { CodeSystemModel, ICodeSystem } from '../../models/codeSystems';
import { InternalServerError } from '../../utils';

@injectable()
export class CodeSystemRepository {
  public async getCodeSystem(codeType?: string): Promise<ICodeSystem[]> {
    try {
      let codeSystems = CodeSystemModel.query();

      if (codeType) {
        codeSystems = codeSystems.where({ type: codeType });
      }

      return codeSystems;
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async addCodeSystem(data: ICodeSystem): Promise<ICodeSystem> {
    return CodeSystemModel.query().insertAndFetch(data);
  }
}

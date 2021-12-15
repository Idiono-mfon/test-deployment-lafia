import { injectable } from 'inversify';
import { CodeSystemModel } from '../../models';
import { BaseRepository } from '../base';

@injectable()
export class CodeSystemRepository extends BaseRepository {
  constructor() {
    super(CodeSystemModel);
  }

  // public async getCodeSystemByType(codeType: string): Promise<ICodeSystem[]> {
  //   logger.info('Running CodeSystemRepository::getCodeSystemByType');
  //   try {
  //     let codeSystems = CodeSystemModel.query();
  //
  //     if (codeType) {
  //       codeSystems = codeSystems
  //         .where({ type: codeType })
  //         .skipUndefined();
  //     }
  //
  //     return await codeSystems;
  //   } catch (e: any) {
  //     throw new InternalServerError(e.message);
  //   }
  // }
  //
  // public async addCodeSystem(data: ICodeSystem): Promise<ICodeSystem> {
  //   logger.info('Running CodeSystemRepository::addCodeSystem');
  //   return CodeSystemModel.query().insertAndFetch(data);
  // }
  //
  // public async getCodeSystemByCode(code: string): Promise<ICodeSystem> {
  //   logger.info('Running CodeSystemRepository::getCodeSystemByCode');
  //   try {
  //     return await CodeSystemModel.query()
  //       .where({ code })
  //       .skipUndefined()
  //       .first();
  //   } catch (e: any) {
  //     throw new InternalServerError(e.message);
  //   }
  // }
}

import { injectable } from 'inversify';
import { ICodeSystem } from '../../../app/models';

@injectable()
export class TestCodeSystemRepository {
  private cs = [
    {
      code: '1',
      display: 'CodeSystem 1',
      system: 'https://example.org/codesystems/1',
      type: 'relationship'
    },
    {
      code: '2',
      display: 'CodeSystem 2',
      system: 'https://example.org/codesystems/2',
      type: 'relationship'
    },
    {
      code: '2',
      display: 'CodeSystem 3',
      system: 'https://example.org/codesystems/3',
      type: 'language',
    },
    {
      code: '2',
      display: 'CodeSystem 4',
      system: 'https://example.org/codesystems/4',
      type: 'marital_status',
    },
  ]

  async getCodeSystemByType(codeType: string): Promise<ICodeSystem[]> {
    const cs = this.cs.filter(cs => cs.type === codeType);

    return Promise.resolve(cs);
  }

  async getCodeSystemByCode(code: string): Promise<ICodeSystem> {
    const cs = this.cs.filter(cs => cs.code === code);

    return Promise.resolve(cs[0]);
  }

  async addCodeSystem(codeSystem: ICodeSystem): Promise<ICodeSystem> {
    // @ts-ignore
    this.cs.push(codeSystem);

    return Promise.resolve(codeSystem);
  }
}

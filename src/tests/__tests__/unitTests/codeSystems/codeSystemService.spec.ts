import { container } from '../../../../app/config';
import TYPES from '../../../../app/config/types';
import { ICodeSystem } from '../../../../app/models';
import { DbAccess } from '../../../../app/repository';
import { ICodeSystemService } from '../../../../app/services';
import { TestCodeSystemRepository, TestBaseRepository } from '../../../fixtures/repositories';

describe('Code System Service Unit Test', () => {
  let testCodeSystemService: ICodeSystemService;

  beforeEach(() => {
    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();

    // @ts-ignore
    container.rebind<DbAccess>(TYPES.BaseRepository).to(TestBaseRepository);
    // @ts-ignore
    container.rebind<DbAccess>(TYPES.CodeSystemRepository).to(TestCodeSystemRepository);

    testCodeSystemService = container.get<ICodeSystemService>(TYPES.CodeSystemService);
  });

  afterEach(() => {

    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.restore();
  });

  afterAll((done) => {
    done();
  })

  it('should be defined', () => {

    expect(testCodeSystemService).toBeDefined();
  });

  it('should get code system by type', async () => {
    const codeSystem = await testCodeSystemService.getCodeSystemByType('language');

    expect(codeSystem).not.toBeFalsy();
    expect(codeSystem[0].type).toBe('language');
    expect(codeSystem[0].system).toBe('https://example.org/codesystems/3');
  });

  it('should get code system by code system name', async () => {
    const codeSystem = await testCodeSystemService.getCodeSystemByCode('1');

    expect(codeSystem).not.toBeFalsy();
    expect(codeSystem.code).toBe('1');
  });

  it('should add new code system', async () => {
    const data = {
      code: '12',
      display: 'CodeSystem 12',
      type: 'language',
      system: 'https://example.org/codesystems/12',

    };

    const newCodeSystem = await testCodeSystemService.create<ICodeSystem>(data);

    expect(newCodeSystem).not.toBeFalsy();
    expect(newCodeSystem.code).toBe('12');
  });
});

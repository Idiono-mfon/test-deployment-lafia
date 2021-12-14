import container from '../../../app/config/inversify.config';
import TYPES from '../../../app/config/types';
import { CodeSystemRepository } from '../../../app/repository';
import { CodeSystemService } from '../../../app/services';
import { TestCodeSystemRepository } from '../../fixtures/repositories';


describe('Code System Unit Test', () => {
  let testCodeSystemService: CodeSystemService;
  let testCodeSystemRepository: CodeSystemRepository;

  beforeEach(() => {

    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();

    // container.unbind(TYPES.CodeSystemRepository);
    container.rebind<CodeSystemRepository>(TYPES.CodeSystemRepository).to(TestCodeSystemRepository);

    testCodeSystemService = container.get<CodeSystemService>(TYPES.CodeSystemService);
    testCodeSystemRepository = container.get<CodeSystemRepository>(TYPES.CodeSystemRepository);
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
    expect(testCodeSystemRepository).toBeDefined();
  });

  it('should get code system by type', async () => {
    const codeSystem = await testCodeSystemService.getCodeSystemByType('language');

    expect(codeSystem).not.toBeFalsy();
    expect(codeSystem[0].type).toBe('language');
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

    const newCodeSystem = await testCodeSystemService.addCodeSystem(data);

    expect(newCodeSystem).not.toBeFalsy();
    expect(newCodeSystem.code).toBe('12');
  });
});

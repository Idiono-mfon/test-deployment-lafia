import TYPES from '../app/config/types';
import { container } from '../app/index';
import { CodeSystemRepository } from '../app/repository';
import { CodeSystemService } from '../app/services';
import { TestCodeSystemRepository } from './fixtures/repository';

describe('Code System Test', () => {
  let testCodeSystemService: CodeSystemService;
  let testCodeSystemRepository: CodeSystemRepository;

  beforeEach(() => {

    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();

    container.unbind(TYPES.CodeSystemRepository);
    container.bind<CodeSystemRepository>(TYPES.CodeSystemRepository).toConstantValue(TestCodeSystemRepository);

    // testCodeSystemService = container.get<CodeSystemService>(TYPES.CodeSystemService);
    testCodeSystemRepository = container.get<CodeSystemRepository>(TYPES.CodeSystemRepository);
  });

  afterEach(() => {

    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.restore();

  });

  it('should be defined', () => {

    expect(testCodeSystemRepository).toBeDefined();
  });

  it('should get code system by type', async () => {
    const codeSystem = await testCodeSystemRepository.getCodeSystemByType('language');

    expect(codeSystem).not.toBeFalsy();
    expect(codeSystem[0].type).toBe('language');
  });

  it('should get code system by code system name', async () => {
    const codeSystem = await testCodeSystemRepository.getCodeSystemByCode('1');

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

    const newCodeSystem = await testCodeSystemRepository.addCodeSystem(data);

    expect(newCodeSystem).not.toBeFalsy();
    expect(newCodeSystem.code).toBe('12');
  });
});

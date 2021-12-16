import sinon from 'sinon';
import request from 'supertest';
import container from '../../../app/config/inversify.config';
import TYPES from '../../../app/config/types';
import { CodeSystemController } from '../../../app/controllers';
import { DbAccess } from '../../../app/repository';
import { appServer } from '../../../app/server';
import { TestBaseRepository, TestCodeSystemRepository } from '../../fixtures/repositories';

describe('CodeSystem [Controller] Integration Test', () => {
  let app = appServer;
  let codeSystemController: CodeSystemController;

  beforeEach(() => {
    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();

    // @ts-ignore
    container.rebind<DbAccess>(TYPES.BaseRepository).to(TestBaseRepository);
    // @ts-ignore
    container.rebind<DbAccess>(TYPES.CodeSystemRepository).to(TestCodeSystemRepository);

    codeSystemController = container.get<CodeSystemController>(TYPES.CodeSystemController);
  });

  afterEach(() => {
    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.restore();
  });

  describe('POST /systems', () => {
    describe('when passed in correct data', () => {
      it('should create a new code system', async () => {
        const cs = await request(app)
          .post('/systems')
          .send({
            id: '010',
            code: '10',
            display: 'CodeSystem 10',
            system: 'https://example.org/codesystems/10',
            type: 'test',
            created_at: '2021-12-16T02:32:21.768Z',
            updated_at: '2021-12-16T02:32:21.768Z',
          });

        expect(cs.status).toBe(201);

        expect(cs.body.status).toBe('success');

        expect(cs.body).toHaveProperty('message');
        expect(cs.body.message).toBe('Code system successfully added');

        expect(cs.body).toHaveProperty('data');
        expect(cs.body.data).toEqual({
          id: '010',
          code: '10',
          display: 'CodeSystem 10',
          system: 'https://example.org/codesystems/10',
          type: 'test',
          created_at: '2021-12-16T02:32:21.768Z',
          updated_at: '2021-12-16T02:32:21.768Z',
        });
      });
    });

    describe('when the passed in data is incorrect', () => {

      it('should throw an error', async () => {

        sinon.stub(codeSystemController, 'addCodeSystem').throws(Error('Could not get systems:'));

        try {
          await request(app)
            .post('/systems')
            .send({
              code: '910',
              display: 'CodeSystem 910',
            });
        } catch (e: any) {
          console.log(e.message);
          console.log(e.code);
          expect(e.message).toContain('Could not get systems');
        }
      });
    });
  });

  describe('GET /systems/marital_status', () => {
    describe('when there is data with type of marital_status', () => {
      it('should return code systems with type marital_status', async () => {
        const cs = await request(app)
          .get('/systems/marital_status');

        expect(cs.ok).toBeTruthy();
        expect(cs.status).toBe(200);

        expect(cs.body).toHaveProperty('status');
        expect(cs.body.status).toBe('success');

        expect(cs.body).toHaveProperty('message');
        expect(cs.body.message).toBe('Request Successful');

        expect(cs.body).toHaveProperty('data');
        expect(cs.body.data).toHaveLength(1);
        expect(cs.body.data[0]).toHaveProperty('code');
        expect(cs.body.data[0]).toHaveProperty('type');
        expect(cs.body.data[0]).toHaveProperty('system');
        expect(cs.body.data[0]).toHaveProperty('display');
        expect(cs.body.data[0]).toEqual({
          code: '4',
          display: 'CodeSystem 4',
          system: 'https://example.org/codesystems/4',
          type: 'marital_status',
        });
      });
    });

    describe('when there is no data with the type of marital_status', () => {

      it('should throw an error', async () => {

        sinon.stub(codeSystemController, 'getMaritalStatus').throws(Error('Could not get systems:'));

        try {
          await request(app)
            .get('/systems/marital_status');
        } catch (e: any) {
          expect(e.message).toContain('Could not get systems');
        }
      });
    });
  });

  it('GET /systems/languages', async () => {
    const cs = await request(app)
      .get('/systems/languages');

    expect(cs.ok).toBeTruthy();
    expect(cs.status).toBe(200);

    expect(cs.body).toHaveProperty('status');
    expect(cs.body.status).toBe('success');

    expect(cs.body).toHaveProperty('message');
    expect(cs.body.message).toBe('Request Successful');

    expect(cs.body).toHaveProperty('data');
    expect(cs.body.data).toHaveLength(1);
    expect(cs.body.data[0]).toHaveProperty('code');
    expect(cs.body.data[0]).toHaveProperty('type');
    expect(cs.body.data[0]).toHaveProperty('system');
    expect(cs.body.data[0]).toHaveProperty('display');
    expect(cs.body.data[0]).toEqual({
      code: '3',
      display: 'CodeSystem 3',
      system: 'https://example.org/codesystems/3',
      type: 'language',
    });
  });

  it('GET /systems/relationships', async () => {
    const cs = await request(app)
      .get('/systems/relationships');

    expect(cs.ok).toBeTruthy();
    expect(cs.status).toBe(200);

    expect(cs.body).toHaveProperty('status');
    expect(cs.body.status).toBe('success');

    expect(cs.body).toHaveProperty('message');
    expect(cs.body.message).toBe('Request Successful');

    expect(cs.body).toHaveProperty('data');
    expect(cs.body.data).toHaveLength(1);
    expect(cs.body.data[0]).toHaveProperty('code');
    expect(cs.body.data[0]).toHaveProperty('type');
    expect(cs.body.data[0]).toHaveProperty('system');
    expect(cs.body.data[0]).toHaveProperty('display');
    expect(cs.body.data[0]).toEqual({
      code: '2',
      display: 'CodeSystem 2',
      system: 'https://example.org/codesystems/2',
      type: 'relationship',
    });
  });

  it('GET /systems/qualifications', async () => {
    const cs = await request(app)
      .get('/systems/qualifications');

    expect(cs.ok).toBeTruthy();
    expect(cs.status).toBe(200);

    expect(cs.body).toHaveProperty('status');
    expect(cs.body.status).toBe('success');

    expect(cs.body).toHaveProperty('message');
    expect(cs.body.message).toBe('Request Successful');

    expect(cs.body).toHaveProperty('data');
    expect(cs.body.data).toHaveLength(1);
    expect(cs.body.data[0]).toHaveProperty('code');
    expect(cs.body.data[0]).toHaveProperty('type');
    expect(cs.body.data[0]).toHaveProperty('system');
    expect(cs.body.data[0]).toHaveProperty('display');
    expect(cs.body.data[0]).toEqual({
      code: '1',
      display: 'CodeSystem 1',
      system: 'https://example.org/codesystems/1',
      type: 'qualification',
    });
  });

  it('GET /systems/durations', async () => {
    const cs = await request(app)
      .get('/systems/durations');

    expect(cs.ok).toBeTruthy();
    expect(cs.status).toBe(200);

    expect(cs.body).toHaveProperty('status');
    expect(cs.body.status).toBe('success');

    expect(cs.body).toHaveProperty('message');
    expect(cs.body.message).toBe('Request Successful');

    expect(cs.body).toHaveProperty('data');
    expect(cs.body.data).toHaveLength(1);
    expect(cs.body.data[0]).toHaveProperty('code');
    expect(cs.body.data[0]).toHaveProperty('type');
    expect(cs.body.data[0]).toHaveProperty('system');
    expect(cs.body.data[0]).toHaveProperty('display');
    expect(cs.body.data[0]).toEqual({
      code: '0',
      display: 'CodeSystem 0',
      system: 'https://example.org/codesystems/0',
      type: 'duration',
    });
  });
});

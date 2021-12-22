import { NextFunction, Request, Response } from 'express';
import { Readable } from 'stream';
import request from 'supertest';
import { container } from '../../../app/config';
import TYPES from '../../../app/config/types';
import { PatientController } from '../../../app/controllers';
import { IFhirServer } from '../../../app/models';
import { DbAccess, IUserRepository } from '../../../app/repository';
import { appServer } from '../../../app/server';
import { IS3Service } from '../../../app/services';
import { getE164Format } from '../../../app/utils';
import { TestBaseRepository, TestUserRepository, TestVideoBroadcastRepository } from '../../fixtures/repositories';
import { TestFhirServerService, TestS3Service } from '../../fixtures/services';
import { getE164FormatMockImpl } from '../../fixtures/utils';

jest.mock('../../../app/utils/phone.util');
jest.mock('multer', () => {
  const multer = () => ({
    single: () => {
      return (req: Request, res: Response, next: NextFunction) => {
        req.body = { userName: 'testUser' }
        req.file = {
          destination: '',
          encoding: '',
          fieldname: 'file',
          filename: 'testfile.jpeg',
          size: 1421,
          stream: Readable.from([]),
          originalname: 'testfile.jpeg',
          mimetype: 'image/jpeg',
          path: 'test.url',
          buffer: Buffer.from('whatever') // this is required since `formData` needs access to the buffer
        };

        return next()
      }
    },
  })
  multer.memoryStorage = () => jest.fn();

  return multer
})

describe('User Service Unit Test', () => {
  const getE164FormatMock = getE164Format as jest.Mocked<any>;
  let testPatientController: PatientController;
  let app = appServer;


  beforeEach(() => {
    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();

    container.rebind<IS3Service>(TYPES.EmailService).to(TestS3Service);
    container.rebind<DbAccess>(TYPES.BaseRepository).to(TestBaseRepository);
    container.rebind<DbAccess>(TYPES.VideoBroadcastRepository).to(TestVideoBroadcastRepository);
    container.rebind<IFhirServer>(TYPES.FhirServerService).to(TestFhirServerService);
    container.rebind<IUserRepository>(TYPES.UserRepository).to(TestUserRepository);

    testPatientController = container.get<PatientController>(TYPES.PatientController);
  });

  afterEach(() => {

    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.restore();

    // @ts-ignore
    getE164Format.mockClear();

    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  afterAll((done) => {
    done();
  })

  describe('Patient [Controller] Integration Test', () => {
    describe('Patient Controller', () => {
      it('should be defined', async () => {
        expect(testPatientController).toBeDefined();
      });
    });

    describe('PUT /patients/:id', () => {
      it('should update patient data', async () => {
        const dataToUpdate = {
          'resourceType': 'Patient',
          'id': '11',
          'text': {
            'status': 'generated',
            'div': '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">Joy <b>Test </b></div><table class="hapiPropertyTable"><tbody/></table></div>'
          },
          'active': true,
          'name': [
            {
              'use': 'official',
              'text': 'David Ekene',
              'family': 'Ekene',
              'given': [
                'David'
              ]
            }
          ],
          'telecom': [
            {
              'system': 'email',
              'value': 'david@ekene.com',
              'use': 'home',
              'rank': 0
            },
            {
              'system': 'phone',
              'value': '09082315532',
              'use': 'mobile',
              'rank': 0
            }
          ],
          'gender': 'male'
        };

        const response = await request(app)
          .put('/patients/11')
          .send(dataToUpdate);

        expect(response.status).toEqual(200);
        expect(response.body.data.meta.versionId).toEqual('2');
        expect(response.body.data.name[0].text).toEqual('David Ekene');
      });

      it('should throw error if the resourceType is missing', async () => {
        const dataToUpdate = {
          'id': '11',
          'text': {
            'status': 'generated',
            'div': '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">Joy <b>Test </b></div><table class="hapiPropertyTable"><tbody/></table></div>'
          },
          'active': true,
          'name': [
            {
              'use': 'official',
              'text': 'David Ekene',
              'family': 'Ekene',
              'given': [
                'David'
              ]
            }
          ],
          'telecom': [
            {
              'system': 'email',
              'value': 'david@ekene.com',
              'use': 'home',
              'rank': 0
            },
            {
              'system': 'phone',
              'value': '09082315532',
              'use': 'mobile',
              'rank': 0
            }
          ],
          'gender': 'male'
        };

        const response = await request(app)
          .put('/patients/11')
          .send(dataToUpdate);

        expect(response.status).toEqual(400);
        expect(response.body.status).toEqual('error');
        expect(response.body.message).toEqual('Resource type is required');
      });
    });

    describe('GET /patients/:id', () => {
      it('should get patient data by ID', async () => {
        const response = await request(app)
          .get('/patients/11');

        expect(response.status).toEqual(200);
        expect(response.body.data).toBeDefined();
      });

      it('should throw error if the patient does not exist', async () => {
        const response = await request(app)
          .get('/patients/49');

        expect(response.status).toEqual(404);
        expect(response.body.status).toEqual('error');
        expect(response.body.message).toEqual('Resource with the provided id does not exist');
      });
    });

    describe('POST /patients', () => {
      it('should create new patient', async () => {
        const dataToCreate = {
          'first_name': 'Michael',
          'last_name': 'Nwankwo',
          'gender': 'male',
          'email': 'michael.nwankwo@gmail.com',
          'phone': '+2347145862156',
          'password': 'Password1#'
        };

        const response = await request(app)
          .post('/patients')
          .send(dataToCreate);

        expect(response.status).toEqual(201);

        expect(response.body.data).toBeDefined();
        expect(response.body.status).toEqual('success');
        expect(response.body.message).toEqual('Patient registration successful');

        expect(response.body.data.user.id).toBeDefined();
        expect(response.body.data.user).toBeDefined();
        expect(response.body.data.auth_token).toBeDefined();

        expect(response.body.data.user.name.text).toBe('Michael Nwankwo');
      });

      it('should not create patient if email is missing', async () => {
        const dataToCreate = {
          'first_name': 'Michael',
          'last_name': 'Nwankwo',
          'gender': 'male',
          'phone': '+2347145862156',
          'password': 'Password1#'
        };

        const response = await request(app)
          .post('/patients')
          .send(dataToCreate);

        expect(response.status).toEqual(400);
        expect(response.body.status).toEqual('error');
        expect(response.body.message).toEqual('Email is required!');
      });

      it('should throw error if user email already exist', async () => {
        const dataToCreate = {
          'email': 'david@test.com',
          'first_name': 'David',
          'last_name': 'Test',
          'gender': 'male',
          'phone': '+2347145862156',
          'password': 'Password1#'
        };

        const response = await request(app)
          .post('/patients')
          .send(dataToCreate);

        expect(response.status).toEqual(400);
        expect(response.body.status).toEqual('error');
        expect(response.body.message).toEqual('User already exists!');
      });

      it('should throw error if user phone already exist', async () => {
        const dataToCreate = {
          'email': 'david12@test.com',
          'first_name': 'David',
          'last_name': 'Test',
          'gender': 'male',
          'phone': '09082315532',
          'password': 'Password1#'
        };

        getE164FormatMock.mockReturnValue(getE164FormatMockImpl(dataToCreate.phone!));

        const response = await request(app)
          .post('/patients')
          .send(dataToCreate);

        expect(response.status).toEqual(400);
        expect(response.body.status).toEqual('error');
        expect(response.body.message).toEqual('User already exists!');
      });
    });

    describe('POST /patients/:id/attachments', () => {
      it('should upload patient [image] attachment', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpveUB0ZXN0LmNvbSIsImlhdCI6MTYzOTcxMjQwNiwiYXVkIjoiMjIifQ.4jZ7c8smeGOUFgS-Sc2Kh6P9_AXAooi7a_vtPrge8KQ';

        const response = await request(app)
          .post('/patients/11/attachments')
          .set('Authorization', `Bearer ${token}`);

        expect(response.status).toEqual(200);

        expect(response.body.data).toBeDefined();
        expect(response.body.status).toEqual('success');
        expect(response.body.message).toEqual('Request completed successfully');

        expect(response.body.data.contentType).toBe('image/jpeg');
        expect(response.body.data.title).toBe('testfile.jpeg');
        expect(response.body.data.url).toBeDefined();
      });

      it('should fail if the user is not authenticated', async () => {
        const response = await request(app)
          .post('/patients/11/attachments');

        expect(response.status).toEqual(401);

        expect(response.body.status).toEqual('error');
        expect(response.body.message).toEqual('Unable to authenticate');
      });

      it('should fail if the user is not found', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpveUB0ZXN0LmNvbSIsImlhdCI6MTYzOTcxMjQwNiwiYXVkIjoiMjIifQ.4jZ7c8smeGOUFgS-Sc2Kh6P9_AXAooi7a_vtPrge8KQ';

        const response = await request(app)
          .post('/patients/2123/attachments')
          .set('Authorization', `Bearer ${token}`);

        expect(response.status).toEqual(404);

        expect(response.body.status).toEqual('error');
        expect(response.body.message).toEqual('Resource with the provided id does not exist');
      });
    });

    describe('POST /patients/:id/broadcast/videos', () => {
      it('should get patient broadcasts', async () => {
        const response = await request(app)
          .get('/patients/11/broadcast/videos');

        expect(response.status).toEqual(200);

        expect(response.body.data).toBeDefined();
        expect(response.body.status).toEqual('success');
        expect(response.body.message).toEqual('Request completed successfully');
      });

      it('should fail if the user is not found', async () => {
        const response = await request(app)
          .get('/patients/2108/broadcast/videos');

        expect(response.status).toEqual(404);

        expect(response.body.status).toEqual('error');
        expect(response.body.message).toEqual('Resource with the provided id does not exist');
      });
    });
  });
})

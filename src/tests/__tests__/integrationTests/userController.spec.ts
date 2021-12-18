import bcrypt from 'bcryptjs';
import request from 'supertest';
import faker from 'faker';
import container from '../../../app/config/inversify.config';
import TYPES from '../../../app/config/types';
import { UserController } from '../../../app/controllers';
import { IFhirServer } from '../../../app/models';
import { DbAccess } from '../../../app/repository';
import { appServer } from '../../../app/server';
import { IEmailService, TwilioService } from '../../../app/services';
import { getE164Format } from '../../../app/utils';
import { TestBaseRepository, TestUserRepository } from '../../fixtures/repositories';
import { TestEmailService, TestFhirServerService, TestTwilioService } from '../../fixtures/services';
import { getE164FormatMockImpl } from '../../fixtures/utils';

jest.mock('bcryptjs');
jest.mock('../../../app/utils/phone.util');

describe('User [Controller] Integration Test', () => {
  const getE164FormatMock = getE164Format as jest.Mocked<any>;
  const bcryptMock = bcrypt as jest.Mocked<any>;
  let app = appServer;
  let userController: UserController;

  beforeEach(() => {
    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();

    container.rebind<DbAccess>(TYPES.BaseRepository).to(TestBaseRepository);
    container.rebind<DbAccess>(TYPES.UserRepository).to(TestUserRepository);
    // @ts-ignore
    container.rebind<TwilioService>(TYPES.TwilioService).to(TestTwilioService);
    container.rebind<IFhirServer>(TYPES.FhirServerService).to(TestFhirServerService);
    container.rebind<IEmailService>(TYPES.EmailService).to(TestEmailService);

    userController = container.get<UserController>(TYPES.UserController);
  });

  afterEach(() => {
    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.restore();

    // Clear mocks
    bcryptMock.hash.mockClear();
    bcryptMock.compare.mockClear();

    jest.clearAllMocks();
  });

  describe('POST /users/register', () => {
    describe('when the data is correct', () => {
      it('should create a new user', async () => {
        const user = await request(app)
          .post('/users/register')
          .send({
            id: faker.datatype.uuid(),
            resource_type: 'practitioner',
            resource_id: '66',
            email: faker.internet.email(),
            password: 'GH.sl32#2!',
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            gender: faker.name.gender(),
            phone: faker.phone.phoneNumber(),
            photo: faker.internet.avatar(),
            provider: 'lafia'
          });

        expect(user.status).toBe(201);

        expect(user.body.status).toBe('success');

        expect(user.body).toHaveProperty('message');
        expect(user.body.message).toBe('User created');

        expect(user.body).toHaveProperty('data');
        expect(user.body.data.resource_id).toBe('66');
        expect(user.body.data.resource_type).toBe('practitioner');
      });
    });

    describe('when the email address is invalid', () => {

      it('should throw an error - Email is not valid', async () => {
        const response = await request(app)
          .post('/users/register')
          .send({
            id: faker.datatype.uuid(),
            resource_type: 'practitioner',
            resource_id: '46',
            email: 'invalid@email',
            password: 'GH.sl32#2!',
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            gender: faker.name.gender(),
            phone: faker.phone.phoneNumber(),
            photo: faker.internet.avatar(),
            provider: 'lafia',
          });

        expect(response.status).toBe(400);
        expect(response.body.status).toBe('error');
        expect(response.body.message).toBe('Email is not valid');
      });
    });

    describe('when the password is less than 6 characters', () => {

      it('should throw an error with a message for acceptable password patterns', async () => {
        const response = await request(app)
          .post('/users/register')
          .send({
            id: faker.datatype.uuid(),
            resource_type: 'practitioner',
            resource_id: '46',
            email: 'valid@email.com',
            password: 'passNo',
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            gender: faker.name.gender(),
            phone: faker.phone.phoneNumber(),
            photo: faker.internet.avatar(),
            provider: 'lafia',
          });

        expect(response.status).toBe(400);
        expect(response.body.status).toBe('error');
        expect(response.body.message).toBe('Hint: password must be minimum ' +
          'of 6 characters and must have a ' +
          'combination of at least one Upper case, one Lower case, ' +
          'one digit and one or more of ' +
          'these special characters - !@#$%^&-.+=()');
      });
    });

    describe('when there is no upper case letter in the password', () => {

      it('should throw an error with a message for acceptable password patterns', async () => {
        const response = await request(app)
          .post('/users/register')
          .send({
            id: faker.datatype.uuid(),
            resource_type: 'practitioner',
            resource_id: '46',
            email: 'valid@email.com',
            password: 'passwrong',
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            gender: faker.name.gender(),
            phone: faker.phone.phoneNumber(),
            photo: faker.internet.avatar(),
            provider: 'lafia',
          });

        expect(response.status).toBe(400);
        expect(response.body.status).toBe('error');
        expect(response.body.message).toBe('Hint: password must be minimum ' +
          'of 6 characters and must have a ' +
          'combination of at least one Upper case, one Lower case, ' +
          'one digit and one or more of ' +
          'these special characters - !@#$%^&-.+=()');
      });
    });

    describe('when the password contains no integer', () => {

      it('should throw an error with a message for acceptable password patterns', async () => {
        const response = await request(app)
          .post('/users/register')
          .send({
            id: faker.datatype.uuid(),
            resource_type: 'practitioner',
            resource_id: '46',
            email: 'valid@email.com',
            password: 'passWronG',
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            gender: faker.name.gender(),
            phone: faker.phone.phoneNumber(),
            photo: faker.internet.avatar(),
            provider: 'lafia',
          });

        expect(response.status).toBe(400);
        expect(response.body.status).toBe('error');
        expect(response.body.message).toBe('Hint: password must be minimum ' +
          'of 6 characters and must have a ' +
          'combination of at least one Upper case, one Lower case, ' +
          'one digit and one or more of ' +
          'these special characters - !@#$%^&-.+=()');
      });
    });

    describe('when there is no special character in the password', () => {

      it('should throw an error with a message for acceptable password patterns', async () => {
        const response = await request(app)
          .post('/users/register')
          .send({
            id: faker.datatype.uuid(),
            resource_type: 'practitioner',
            resource_id: '46',
            email: 'valid@email.com',
            password: 'pa13ssWronG2',
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            gender: faker.name.gender(),
            phone: faker.phone.phoneNumber(),
            photo: faker.internet.avatar(),
            provider: 'lafia',
          });

        expect(response.status).toBe(400);
        expect(response.body.status).toBe('error');
        expect(response.body.message).toBe('Hint: password must be minimum ' +
          'of 6 characters and must have a ' +
          'combination of at least one Upper case, one Lower case, ' +
          'one digit and one or more of ' +
          'these special characters - !@#$%^&-.+=()');
      });
    });
  });

  describe('POST /users/validate', () => {
    describe('when there is an existing user with the same email', () => {
      it('should throw an error - a user with this email already exist', async () => {
        const user = await request(app)
          .post('/users/validate')
          .send({
            id: faker.datatype.uuid(),
            resource_type: 'patient',
            resource_id: '22',
            email: 'joy@test.com',
            password: 'GH.sl32#2!',
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            gender: faker.name.gender(),
            phone: faker.phone.phoneNumber(),
            photo: faker.internet.avatar(),
            provider: 'lafia'
          });

        expect(user.status).toBe(400);

        expect(user.body.status).toBe('error');

        expect(user.body).toHaveProperty('message');
        expect(user.body.message).toBe('a user with this email already exist');
      });
    });

    describe('when there is an existing user with the same phone number', () => {
      it('should throw an error - a user with this phone already exist', async () => {
        const userData = {
          id: faker.datatype.uuid(),
          resource_type: 'patient',
          resource_id: '22',
          email: 'joy.unique@test.com',
          password: 'GH.sl32#2!',
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          gender: faker.name.gender(),
          phone: '07065182394',
          photo: faker.internet.avatar(),
          provider: 'lafia'
        };

        getE164FormatMock.mockReturnValue(getE164FormatMockImpl(userData.phone!));

        const user = await request(app)
          .post('/users/validate')
          .send(userData);

        expect(user.status).toBe(400);

        expect(user.body.status).toBe('error');

        expect(user.body).toHaveProperty('message');
        expect(user.body.message).toBe('a user with this phone already exist');
      });
    });

    describe('when all the validation pass', () => {
      it('should send OTP to the phone number of the user', async () => {
        const user = await request(app)
          .post('/users/validate')
          .send({
            id: faker.datatype.uuid(),
            resource_type: 'patient',
            resource_id: '224',
            email: 'joy.unique@test.com',
            password: 'GH.sl32#2!#@',
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            gender: faker.name.gender(),
            phone: '09000009231',
            photo: faker.internet.avatar(),
            provider: 'lafia'
          });

        expect(user.status).toBe(201);
        expect(user.body.data).toBe(true);
      });
    });
  });

  describe('GET /users/photo', () => {
    it('should throw an error if the user is not authenticated', async () => {
      const response = await request(app)
        .get('/users/photo');

      expect(response.status).toBe(401);

      expect(response.body.status).toBe('error');

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Unable to authenticate');
    });

    it('should return photo', async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpveUB0ZXN0LmNvbSIsImlhdCI6MTYzOTcxMjQwNiwiYXVkIjoiMjIifQ.4jZ7c8smeGOUFgS-Sc2Kh6P9_AXAooi7a_vtPrge8KQ';

      const user = await request(app)
        .get('/users/photo')
        .set('Authorization', `Bearer ${token}`);

      expect(user.status).toBe(200);

      expect(user.body.status).toBe('success');

      expect(user.body).toHaveProperty('data');
      expect(user.body.data).toBeDefined();
    });
  });

  describe('POST /users/update', () => {
    it('should throw an error if the user is not authenticated', async () => {
      const response = await request(app)
        .post('/users/update')
        .send({
          first_name: 'Joy',
          last_name: 'Ogbonna'
        });

      expect(response.status).toBe(401);

      expect(response.body.status).toBe('error');

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Unable to authenticate');
    });

    it('should update user data', async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpveUB0ZXN0LmNvbSIsImlhdCI6MTYzOTcxMjQwNiwiYXVkIjoiMjIifQ.4jZ7c8smeGOUFgS-Sc2Kh6P9_AXAooi7a_vtPrge8KQ';

      const user = await request(app)
        .post('/users/update')
        .set('Authorization', `Bearer ${token}`)
        .send({
          first_name: 'Joy',
          last_name: 'Ogbonna'
        });

      expect(user.body.status).toBe('success');

      expect(user.body).toHaveProperty('data');
      expect(user.body.data).toBeDefined();
      expect(user.body.data.first_name).toBe('Joy');
      expect(user.body.data.last_name).toBe('Ogbonna');
    });
  });

  describe('PUT /users/:id/change-password', () => {
    it('should throw an error if the user does not exist', async () => {
      const response = await request(app)
        .put('/users/20/change-password')
        .send({
          old_password: 'LKamd.4h&',
          new_password: 'amsk29s.o'
        });

      expect(response.status).toBe(400);

      expect(response.body.status).toBe('error');

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Unable to update password: user does not exist');
    });


    it('should throw an error if the user old password does not match', async () => {
      bcryptMock.compare.mockResolvedValue(false);

      const response = await request(app)
        .put('/users/22/change-password')
        .send({
          old_password: 'si2Jmd.4h&',
          new_password: 'ams.oM#$as21'
        });

      expect(response.status).toBe(400);

      expect(response.body.status).toBe('error');

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Invalid old password');
    });


    it('should throw an error if the user new password fails validation', async () => {
      const response = await request(app)
        .put('/users/22/change-password')
        .send({
          old_password: 'LKamd.4h&',
          new_password: 'ams.o'
        });

      expect(response.status).toBe(400);

      expect(response.body.status).toBe('error');

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Hint: new password must be minimum ' +
        'of 6 characters and must have a ' +
        'combination of at least one Upper case, one Lower case, ' +
        'one digit and one or more of ' +
        'these special characters - !@#$%^&-.+=()');
    });

    it('should update user password if all the validation checks are passed', async () => {
      bcryptMock.hash.mockResolvedValueOnce('$2a-23kdcd-dfas$$10$');
      bcryptMock.compare.mockResolvedValue(true);

      const user = await request(app)
        .put('/users/11/change-password')
        .send({
          old_password: '13Jmsl*2#',
          new_password: 'ams.oLJa32%'
        });

      expect(user.status).toBe(200);
      expect(user.body.status).toBe('success');

      expect(user.body).toHaveProperty('message');
      expect(user.body.message).toBe('User password changed successfully');

      expect(user.body).toHaveProperty('data');
      expect(user.body.data).toBeDefined();
      expect(user.body.data.first_name).toBe('david');
      expect(user.body.data.last_name).toBe('test');
    });
  });

  describe('POST /users/reset-password', () => {
    it('should provide email address', async () => {
      const response = await request(app)
        .post('/users/reset-password');

      expect(response.status).toBe(400);

      expect(response.body.status).toBe('error');

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Please provide an email address to reset your password');
    });


    it('should throw an error if the user does not exist', async () => {
      const response = await request(app)
        .post('/users/reset-password')
        .send({
          email: 'wrong.user@test.com'
        });

      expect(response.status).toBe(400);

      expect(response.body.status).toBe('error');

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain('No user account found with the email');
    });


    it('should reset user password', async () => {
      const response = await request(app)
        .post('/users/reset-password')
        .send({
          email: 'david@test.com'
        });

      expect(response.status).toBe(200);

      expect(response.body.status).toBe('success');

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Password reset guide successfully sent to the users email');
    });
  });

  describe('POST /users/check', () => {
    it('should pass user check', async () => {
      const response = await request(app)
        .post('/users/check')
        .send({
          email: 'david@test.com'
        });

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
    });
  });

  describe('POST /users/otp/send', () => {
    it('should send OTP to the user\'s phone', async () => {
      const response = await request(app)
        .post('/users/otp/send')
        .send({
          phone: '09082740348'
        });

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
      expect(response.body.data.code).toBeDefined();
      expect(response.body.message).toBe('OTP sent');
    });
  });

  describe('POST /users/otp/verify', () => {
    it('should verify user\'s OTP', async () => {
      const response = await request(app)
        .post('/users/otp/verify')
        .send({
          code: '1234',
          phone: '+1234567890'
        });

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
      expect(response.body.data.valid).toBe(true);
      expect(response.body.message).toBe('OTP verification checked');
    });

    it('should fail OTP verification if the code is not correct', async () => {
      const response = await request(app)
        .post('/users/otp/verify')
        .send({
          code: '15294',
          phone: '+1234567890'
        });

      expect(response.body.data.status).toBe('fail');
      expect(response.body.data.valid).toBe(false);
    });

    it('should fail OTP verification if the provided phone is not found', async () => {
      const response = await request(app)
        .post('/users/otp/verify')
        .send({
          code: '1234',
          phone: '06022857820'
        });

      expect(response.body.data.status).toBe('fail');
      expect(response.body.data.valid).toBe(false);
    });
  });

  describe('POST /users/existing', () => {
    it('should throw error if the user already exist', async () => {
      const response = await request(app)
        .post('/users/existing')
        .send({
          email: 'david@test.com',
        });

      expect(response.status).toBe(409);
    });

    it('should not find existing user ', async () => {
      const response = await request(app)
        .post('/users/existing')
        .send({
          email: 'nonuser@test.com'
        });

      expect(response.body.status).toBe('success');
      expect(response.body.message).toBe('User does not exist');
    });
  });

  describe('POST /users/access/generate', () => {
    it('should generate a new twilio token', async () => {
      const response = await request(app)
        .post('/users/access/generate')
        .send({
          identity: 'david@test.com',
          room: '803b1864-161f-471a-ab37-25afe2e020e2:22-11'
        });

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
      expect(response.body.data.token).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpveUB0ZXN0LmNvbSIsImlhdCI6MTYzOTQzMTkxOSwiYXVkIjoiZTQ1NjQzMmItODMzNS00YTA3LWExYTUtMzRmODYwZTJmMzNmIn0.RODj4OzgVPibzheJS2XdD6G3T6XXgEvwtaUfQhh5tYY');
      expect(response.body.data.roomId).toBe('803b1864-161f-471a-ab37-25afe2e020e2:22-11');
    });
  });
});

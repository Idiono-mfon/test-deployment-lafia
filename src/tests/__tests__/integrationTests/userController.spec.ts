import request from 'supertest';
import faker from 'faker';
import container from '../../../app/config/inversify.config';
import TYPES from '../../../app/config/types';
import { UserController } from '../../../app/controllers';
import { DbAccess } from '../../../app/repository';
import { appServer } from '../../../app/server';
import { TwilioService } from '../../../app/services';
import { getE164Format } from '../../../app/utils';
import { TestBaseRepository, TestUserRepository } from '../../fixtures/repositories';
import { TestTwilioService } from '../../fixtures/services';
import { getE164FormatMockImpl } from '../../fixtures/utils';

jest.mock('../../../app/utils/phone.util');

describe('User [Controller] Integration Test', () => {
  const getE164FormatMock = getE164Format as jest.Mocked<any>;
  let app = appServer;
  let userController: UserController;

  beforeEach(() => {
    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();

    // @ts-ignore
    container.rebind<DbAccess>(TYPES.BaseRepository).to(TestBaseRepository);
    // @ts-ignore
    container.rebind<DbAccess>(TYPES.UserRepository).to(TestUserRepository);
    // @ts-ignore
    container.rebind<TwilioService>(TYPES.TwilioService).to(TestTwilioService);

    userController = container.get<UserController>(TYPES.UserController);
  });

  afterEach(() => {
    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.restore();
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
});

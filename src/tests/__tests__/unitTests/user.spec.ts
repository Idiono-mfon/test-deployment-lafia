import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Env } from '../../../app/config/env';
import container from '../../../app/config/inversify.config';
import TYPES from '../../../app/config/types';
import { IJwtPayload, IUser } from '../../../app/models';
import { TwilioRoomRepository, UserRepository } from '../../../app/repository';
import { EmailService, UserService } from '../../../app/services';
import { TestTwilioRoomRepository, TestUserRepository } from '../../fixtures/repositories';
import { TestEmailService } from '../../fixtures/services';

jest.mock('bcryptjs');

describe('User Unit Test', () => {
  let testUserService: UserService;
  let testUserRepository: UserRepository;
  let emailService: TestEmailService;
  let axiosMock: any;

  beforeAll(() => {
    axiosMock = new MockAdapter(axios);
  })

  beforeEach(() => {

    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();

    container.rebind<TwilioRoomRepository>(TYPES.TwilioRoomRepository).to(TestTwilioRoomRepository);
    container.rebind<EmailService>(TYPES.UserRepository).to(TestEmailService);
    container.rebind<UserRepository>(TYPES.UserRepository).to(TestUserRepository);

    testUserService = container.get<UserService>(TYPES.UserService);
    testUserRepository = container.get<UserRepository>(TYPES.UserRepository);
    emailService = container.get<EmailService>(TYPES.EmailService);
  });

  afterEach(() => {

    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.restore();

    // Clear all mocks after each test
    // @ts-ignore
    bcrypt.hash.mockClear();
    // @ts-ignore
    bcrypt.compare.mockClear();

    axiosMock.reset();

    // Clear all mocks after each test
    jest.clearAllMocks();

  });

  afterAll((done) => {
    done();
  })

  it('should be defined', () => {

    expect(testUserService).toBeDefined();
    expect(testUserRepository).toBeDefined();
  });

  it('should create a new user', async () => {
    // @ts-ignore
    bcrypt.hash.mockResolvedValueOnce('1S896xPD#$')

    const userData: IUser = {
      email: 'test@example.com',
      first_name: 'Test',
      gender: 'male',
      has_verified_email: false,
      has_verified_phone: false,
      last_name: 'User',
      password: 'Asdc#21dB0',
      phone: '09087235321',
      resource_id: '52',
      resource_type: 'patient'

    }

    const newUser = await testUserService.createUser(userData);

    expect(newUser).toBeDefined();
  });

  it('should not create a new user if email is invalid', async () => {
    // @ts-ignore
    bcrypt.hash.mockResolvedValueOnce('1S896xPD#$')

    const userData: IUser = {
      email: 'test@example',
      first_name: 'Test',
      gender: 'male',
      has_verified_email: false,
      has_verified_phone: false,
      last_name: 'User',
      password: 'Asdc#21dB0',
      phone: '09087235321',
      resource_id: '52',
      resource_type: 'patient'

    }

    try {
      await testUserService.createUser(userData);
    } catch (e: any) {
      const errorMessage = 'Email is not valid';
      expect(e.message).toContain(errorMessage);
    }
  });

  it('should not create a user if password is less than 6 characters', async () => {
    // @ts-ignore
    bcrypt.hash.mockResolvedValueOnce('1S896xPD#$')

    const userData: IUser = {
      email: 'test@example.com',
      first_name: 'Test',
      gender: 'male',
      has_verified_email: false,
      has_verified_phone: false,
      last_name: 'User',
      password: 'Asdc#',
      phone: '09087235321',
      resource_id: '52',
      resource_type: 'patient'

    }

    try {
      await testUserService.createUser(userData);
    } catch (e: any) {
      const errorMessage = 'Hint: password must be minimum of 6 characters and must have a combination of at least one Upper case, one Lower case, one digit and one or more of these special characters - !@#$%^&-.+=()';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should get a user by field', async () => {
    const user = await testUserService.getUserByField('email', 'david@test.com');

    expect(user).not.toBeFalsy();
    expect(user.email).toBe('david@test.com');
  });

  // it('should validate user ', async () => {
  //
  //   const userData: IUser = {
  //     email: 'test@example.com',
  //     first_name: 'Test',
  //     gender: 'male',
  //     has_verified_email: false,
  //     has_verified_phone: false,
  //     last_name: 'User',
  //     password: 'Asdc#21dB0',
  //     phone: '+2349087235321',
  //     resource_id: '52',
  //     resource_type: 'patient'
  //
  //   }
  //
  //   await testUserService.validateUser(userData);
  //
  //   expect(true).toBeTruthy();
  //
  // });

  it('should get one user by', async () => {
    const user = await testUserService.getOneBy('email', 'david@test.com');

    expect(user).not.toBeFalsy();
    expect(user.email).toBe('david@test.com');
  });

  it('should get one user', async () => {
    const user = await testUserService.getOneUser({ email: 'david@test.com' });

    expect(user).not.toBeFalsy();
    expect(user.phone).toBe('09082315532');
  });

  it('should login a user with email', async () => {
    // @ts-ignore
    bcrypt.compare.mockResolvedValueOnce(true);

    const user = await testUserService.userLogin('david@test.com', '13Jmsl*2#');

    expect(user).not.toBeFalsy();
    expect(user.resource_type).toBe('patient');
    expect(user.resource_id).toBe('11');
    expect(user.first_name).toBe('david');
  });

  it('should login a user with phone', async () => {
    // @ts-ignore
    bcrypt.compare.mockResolvedValueOnce(true);

    const user = await testUserService.userLogin('09082315532', '13Jmsl*2#');

    expect(user).not.toBeFalsy();
    expect(user.phone).toBe('09082315532');
    expect(user.email).toBe('david@test.com');
  });

  it('should not login with invalid email', async () => {
    // @ts-ignore
    bcrypt.compare.mockResolvedValueOnce(true);

    try {
      await testUserService.userLogin('error@test.com', '13Jmsl*2#');
    } catch (e: any) {
      const errorMessage = 'Invalid credentials. User not found!';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should not login with invalid password', async () => {
    // @ts-ignore
    bcrypt.compare.mockResolvedValueOnce(false);

    try {
      await testUserService.userLogin('joy@test.com', 'wrongPass');
    } catch (e: any) {
      const errorMessage = 'Invalid username or password';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should log a user out', async () => {

    const loggedOutUser = await testUserService.userLogout('e456432b-8335-4a07-a1a5-34f860e2f33f');

    expect(loggedOutUser).toBeDefined();
    expect(loggedOutUser.token).toBeFalsy();
    expect(loggedOutUser.email).toBe('joy@test.com');
  });

  it('should generate JWT token', async () => {
    const userData: IJwtPayload = {
      id: 'e456432b-8335-4a07-a1a5-34f860e2f33f',
      email: 'joy@test.com',
    }
    const token = testUserService.generateJwtToken(userData);

    expect(token).toBeDefined();
  });

  it('should throw error generating JWT token', async () => {
    const userData: IJwtPayload | any = {
      email: 'joy@test.com',
    }

    try {
      testUserService.generateJwtToken(userData);
    } catch (e: any) {
      expect(e.message).toBeTruthy();
      expect(e.code).toBeTruthy();
    }
  });

  it('should decode JWT token', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpveUB0ZXN0LmNvbSIsImlhdCI6MTYzOTQzMTkxOSwiYXVkIjoiZTQ1NjQzMmItODMzNS00YTA3LWExYTUtMzRmODYwZTJmMzNmIn0.RODj4OzgVPibzheJS2XdD6G3T6XXgEvwtaUfQhh5tYY';
    const decodedToken: IJwtPayload | any = testUserService.decodeJwtToken(token);

    expect(decodedToken).toBeDefined();
    expect(decodedToken.email).toBe('joy@test.com');
    expect(decodedToken.aud).toBe('e456432b-8335-4a07-a1a5-34f860e2f33f');
  });

  it('should throw error while decoding JWT token', async () => {
    const wrongToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.RODj4OzgVPibzheJS2XdD6G3T6XXgEvwtaUfQhh5tYY';

    try {
      testUserService.decodeJwtToken(wrongToken);
    } catch (e: any) {
      expect(e.message).toBeTruthy();
      expect(e.code).toBeTruthy();
    }

  });

  it('should update user password', async () => {
    // @ts-ignore
    bcrypt.hash.mockResolvedValueOnce('Laksm*@!mlawaw$%.@!makso');
    // @ts-ignore
    bcrypt.compare.mockResolvedValueOnce(true);

    const id = 'e59d4aee-3f4e-461a-9057-ba4677d9b057';
    const oldPassword = '13Jmsl*2#';
    const newPassword = 'newPass12$';

    const updatedUser: IUser = await testUserService.changePassword(id, oldPassword, newPassword);

    expect(updatedUser).toBeDefined();
    expect(updatedUser.email).toBe('david@test.com');
  });

  it('should not update user password if old password is incorrect', async () => {
    // @ts-ignore
    bcrypt.hash.mockResolvedValueOnce('@!maksoMKa.soged');
    // @ts-ignore
    bcrypt.compare.mockResolvedValueOnce(false);

    const id = 'e59d4aee-3f4e-461a-9057-ba4677d9b057';
    const oldPassword = 'lslkMie@.alsK';
    const newPassword = 'anotherNewPass3$';

    try {
      await testUserService.changePassword(id, oldPassword, newPassword);
    } catch (e: any) {
      const errorMessage = 'Invalid old password';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should not update user password if password validation fails', async () => {
    // @ts-ignore
    bcrypt.hash.mockResolvedValueOnce('@!maksoMKa.soged');
    // @ts-ignore
    bcrypt.compare.mockResolvedValueOnce(true);

    const id = 'e59d4aee-3f4e-461a-9057-ba4677d9b057';
    const oldPassword = 'lslkMie@.alsK';
    const newPassword = 'NewWrongPass';

    try {
      await testUserService.changePassword(id, oldPassword, newPassword);
    } catch (e: any) {
      const errorMessage = 'Hint: new password must be minimum ' +
        'of 6 characters and must have a ' +
        'combination of at least one Upper case, one Lower case, ' +
        'one digit and one or more of ' +
        'these special characters - !@#$%^&-.+=()';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should not update user password if the user does not exist', async () => {
    // @ts-ignore
    bcrypt.hash.mockResolvedValueOnce('@!maksoMKa.soged');
    // @ts-ignore
    bcrypt.compare.mockResolvedValueOnce(true);

    const id = '091';
    const oldPassword = 'lslkMie@.alsK';
    const newPassword = 'NewWrongPass';

    try {
      await testUserService.changePassword(id, oldPassword, newPassword);
    } catch (e: any) {
      const errorMessage = 'Unable to update password: user does not exist';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should not reset user password if an email is not provided', async () => {
    try {
      await testUserService.resetPassword('');
    } catch (e: any) {
      const errorMessage = 'Please provide an email address to reset your password';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should not reset user password if a user with the email does not exist', async () => {
    try {
      await testUserService.resetPassword('wrongEmail@test.com');
    } catch (e: any) {
      const errorMessage = 'No user account found with the email: wrongEmail@test.com';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should reset user password if an email is provided and a user with the email exist', async () => {
    await testUserService.resetPassword('joy@test.com');

    expect(true).toBeTruthy();
  });

  it('should update user', async () => {
    const updateData = {
      email: 'user@updated.com',
      phone: '08140835726'
    }
    const user = await testUserService.updateUser('e59d4aee-3f4e-461a-9057-ba4677d9b057', updateData);

    expect(user.email).toBe('user@updated.com');
    expect(user.phone).toBe('08140835726');
  });

  it('should check for existing user', async () => {
    try {
      axiosMock.onGet(`${Env.all().fhir_server_base_url}/Patient/22`).networkError();

      await testUserService.checkExistingUser({ email: 'joy@test.com' });
    } catch (e: any) {
      expect(e.message).toBeDefined();
    }
  });
});

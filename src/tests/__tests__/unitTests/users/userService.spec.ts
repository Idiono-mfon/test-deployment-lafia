import bcrypt from 'bcryptjs';
import { container } from '../../../../app/config';
import TYPES from '../../../../app/config/types';
import { IFhirServer, IJwtPayload, IUser, ICreateAccount } from '../../../../app/models';
import { DbAccess, IUserRepository } from '../../../../app/repository';
import { IEmailService, IUserService, ITwilioService } from '../../../../app/services';
import { getE164Format } from '../../../../app/utils';
import {
  TestTwilioRoomRepository,
  TestUserRepository,
  TestBaseRepository,
} from '../../../fixtures/repositories';
import {
  TestEmailService,
  TestFhirServerService,
  TestTwilioService,
} from '../../../fixtures/services';
import { getE164FormatMockImpl } from '../../../fixtures/utils';

jest.mock('bcryptjs');
jest.mock('../../../../app/utils/phone.util');

describe('User Service Unit Test', () => {
  const getE164FormatMock = getE164Format as jest.Mocked<any>;
  const bcryptMock = bcrypt as jest.Mocked<any>;
  let testUserService: IUserService;
  let emailService: TestEmailService;

  beforeEach(() => {
    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();

    container.rebind<DbAccess>(TYPES.TwilioRoomRepository).to(TestTwilioRoomRepository);
    container.rebind<ITwilioService>(TYPES.TwilioService).to(TestTwilioService);
    container.rebind<IEmailService>(TYPES.EmailService).to(TestEmailService);
    container.rebind<DbAccess>(TYPES.BaseRepository).to(TestBaseRepository);
    container.rebind<IFhirServer>(TYPES.FhirServerService).to(TestFhirServerService);
    container.rebind<IUserRepository>(TYPES.UserRepository).to(TestUserRepository);

    testUserService = container.get<IUserService>(TYPES.UserService);
    emailService = container.get<IEmailService>(TYPES.EmailService);
  });

  afterEach(() => {
    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.restore();

    // Clear all mocks after each test
    bcryptMock.hash.mockClear();
    bcryptMock.compare.mockClear();
    // @ts-ignore
    getE164Format.mockClear();

    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  afterAll((done) => {
    done();
  });

  it('should be defined', () => {
    expect(testUserService).toBeDefined();
  });

  it('should create a new user', async () => {
    bcryptMock.hash.mockResolvedValueOnce('1S896xPD#$');

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
      resource_type: 'patient',
    };

    const newUser = await testUserService.create(userData);

    expect(newUser).toBeDefined();
  });

  it('should not create a new user if email is invalid', async () => {
    bcryptMock.hash.mockResolvedValueOnce('1S896xPD#$');

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
      resource_type: 'patient',
    };

    try {
      await testUserService.create(userData);
    } catch (e: any) {
      const errorMessage = 'Email is not valid';
      expect(e.message).toContain(errorMessage);
    }
  });

  it('should not create a user if password is less than 6 characters', async () => {
    bcryptMock.hash.mockResolvedValueOnce('1S896xPD#$');

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
      resource_type: 'patient',
    };

    try {
      await testUserService.create(userData);
    } catch (e: any) {
      const errorMessage =
        'Hint: password must be minimum of 6 characters and must have a combination of at least one Upper case, one Lower case, one digit and one or more of these special characters - !@#$%^&-.+=()';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should validate a user ', async () => {
    // const userData: IUser = {
    //   email: 'test1@example.com',
    //   first_name: 'Test',
    //   gender: 'male',
    //   has_verified_email: false,
    //   has_verified_phone: false,
    //   last_name: 'User',
    //   password: 'Asdc#21dB0',
    //   phone: '+2349080005321',
    //   resource_id: '52',
    //   resource_type: 'patient',
    // };

    const userData: ICreateAccount = {
      email: 'test1@example.com',
      phone: '+2349080005321',
      password: 'Asdc#21dB0',
      confirmPassword: 'Asdc#21dB0',
      isEmail: false,
    };

    getE164FormatMock.mockReturnValue(getE164FormatMockImpl(userData.phone!));

    const isValidUser = await testUserService.validate(userData);

    expect(isValidUser).toBeTruthy();
  });

  it('should fail validation if user email already exists ', async () => {
    // const userData: IUser = {
    //   email: 'david@test.com',
    //   first_name: 'Test',
    //   gender: 'male',
    //   has_verified_email: false,
    //   has_verified_phone: false,
    //   last_name: 'User',
    //   password: 'Asdc#21dB0',
    //   phone: '+2349080005321',
    //   resource_id: '52',
    //   resource_type: 'patient',
    // };

    const userData: ICreateAccount = {
      email: 'test1@example.com',
      phone: '+2349080005321',
      password: 'Asdc#21dB0',
      confirmPassword: 'Asdc#21dB0',
      isEmail: true,
    };

    getE164FormatMock.mockReturnValue(getE164FormatMockImpl(userData.phone!));

    try {
      await testUserService.validate(userData);
    } catch (e: any) {
      const errorMessage = 'a user with this email already exist';

      expect(e.message).toBe(errorMessage);
    }
  });

  it('should fail validation if user phone already exists ', async () => {
    // const userData: IUser = {
    //   email: 'david23@test1.com',
    //   first_name: 'Test',
    //   gender: 'male',
    //   has_verified_email: false,
    //   has_verified_phone: false,
    //   last_name: 'User',
    //   password: 'Asdc#21dB0',
    //   phone: '09082315532',
    //   resource_id: '52',
    //   resource_type: 'patient',
    // };

    const userData: ICreateAccount = {
      email: 'test1@example.com',
      phone: '+2349080005321',
      password: 'Asdc#21dB0',
      confirmPassword: 'Asdc#21dB0',
      isEmail: false,
    };

    getE164FormatMock.mockReturnValue(getE164FormatMockImpl(userData.phone!));

    try {
      await testUserService.validate(userData);
    } catch (e: any) {
      const errorMessage = 'a user with this phone already exist';

      expect(e.message).toBe(errorMessage);
    }
  });

  it('should get one user', async () => {
    const user = await testUserService.findOne({ email: 'david@test.com' });

    expect(user).not.toBeFalsy();
    expect(user.phone).toBe('09082315532');
  });

  it('should login a user with email', async () => {
    bcryptMock.compare.mockResolvedValueOnce(true);

    const user = await testUserService.login('david@test.com', '13Jmsl*2#');

    expect(user).not.toBeFalsy();
    expect(user.resource_type).toBe('patient');
    expect(user.resource_id).toBe('11');
    expect(user.first_name).toBe('david');
  });

  it('should login a user with phone', async () => {
    bcryptMock.compare.mockResolvedValueOnce(true);

    const user = await testUserService.login('09082315532', '13Jmsl*2#');

    expect(user).not.toBeFalsy();
    expect(user.phone).toBe('09082315532');
    expect(user.email).toBe('david@test.com');
  });

  it('should not login with invalid email', async () => {
    bcryptMock.compare.mockResolvedValueOnce(true);

    try {
      await testUserService.login('error@test.com', '13Jmsl*2#');
    } catch (e: any) {
      const errorMessage = 'Invalid credentials. User not found!';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should not login with invalid phone', async () => {
    bcryptMock.compare.mockResolvedValueOnce(true);

    try {
      await testUserService.login('08099324359', '13Jmsl*2#');
    } catch (e: any) {
      const errorMessage = 'Invalid credentials. User not found!';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should not login with invalid password', async () => {
    bcryptMock.compare.mockResolvedValueOnce(false);

    try {
      await testUserService.login('joy@test.com', 'wrongPass');
    } catch (e: any) {
      const errorMessage = 'Invalid username or password';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should log a user out', async () => {
    const loggedOutUser = await testUserService.logout('e456432b-8335-4a07-a1a5-34f860e2f33f');

    expect(loggedOutUser).toBeDefined();
    expect(loggedOutUser.token).toBeFalsy();
    expect(loggedOutUser.email).toBe('joy@test.com');
  });

  it('should generate JWT token', async () => {
    const userData: IJwtPayload = {
      id: '22',
      email: 'joy@test.com',
    };
    const token = testUserService.generateJwtToken(userData);

    expect(token).toBeDefined();
  });

  it('should throw error generating JWT token if id is not provided', async () => {
    const userData: IJwtPayload | any = {
      email: 'joy@test.com',
    };

    try {
      testUserService.generateJwtToken(userData);
    } catch (e: any) {
      expect(e.message).toBeTruthy();
      expect(e.code).toBeTruthy();
    }
  });

  it('should decode JWT token', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpveUB0ZXN0LmNvbSIsImlhdCI6MTYzOTcxMjQwNiwiYXVkIjoiMjIifQ.4jZ7c8smeGOUFgS-Sc2Kh6P9_AXAooi7a_vtPrge8KQ';
    const decodedToken: IJwtPayload | any = testUserService.decodeJwtToken(token);

    expect(decodedToken).toBeDefined();
    expect(decodedToken.email).toBe('joy@test.com');
    expect(decodedToken.aud).toBe('22');
  });

  it('should throw error while decoding JWT token', async () => {
    const wrongToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.RODj4OzgVPibzheJS2XdD6G3T6XXgEvwtaUfQhh5tYY';

    try {
      testUserService.decodeJwtToken(wrongToken);
    } catch (e: any) {
      expect(e.message).toBeTruthy();
      expect(e.code).toBeTruthy();
    }
  });

  it('should update user password', async () => {
    bcryptMock.hash.mockResolvedValueOnce('Laksm*@!mlawaw$%.@!makso');
    bcryptMock.compare.mockResolvedValueOnce(true);

    const id = '11';
    const oldPassword = '13Jmsl*2#';
    const newPassword = 'newPass12$';

    const updatedUser: IUser = await testUserService.changePassword(id, oldPassword, newPassword);

    expect(updatedUser).toBeDefined();
    expect(updatedUser.email).toBe('david@test.com');
  });

  it('should not update user password if old password is incorrect', async () => {
    bcryptMock.hash.mockResolvedValueOnce('@!maksoMKa.soged');
    bcryptMock.compare.mockResolvedValueOnce(false);

    const id = '11';
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
    bcryptMock.hash.mockResolvedValueOnce('@!maksoMKa.soged');
    bcryptMock.compare.mockResolvedValueOnce(true);

    const id = '11';
    const oldPassword = 'lslkMie@.alsK';
    const newPassword = 'NewWrongPass';

    try {
      await testUserService.changePassword(id, oldPassword, newPassword);
    } catch (e: any) {
      const errorMessage =
        'Hint: new password must be minimum ' +
        'of 6 characters and must have a ' +
        'combination of at least one Upper case, one Lower case, ' +
        'one digit and one or more of ' +
        'these special characters - !@#$%^&-.+=()';
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should not update user password if the user does not exist', async () => {
    bcryptMock.hash.mockResolvedValueOnce('@!maksoMKa.soged');
    bcryptMock.compare.mockResolvedValueOnce(true);

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
      phone: '08140835726',
      gender: 'male',
    };
    const user = await testUserService.update('e59d4aee-3f4e-461a-9057-ba4677d9b057', updateData);

    expect(user.email).toBe('user@updated.com');
    expect(user.phone).toBe('08140835726');
  });

  it('should check for existing user and throw error if the user already exist', async () => {
    try {
      await testUserService.checkExistingUser({ email: 'david@test.com' });
    } catch (e: any) {
      const errorMessage = 'Patient already exists';

      expect(e.message).toBeDefined();
      expect(e.message).toEqual(errorMessage);
    }
  });

  it('should check for existing user and not throw error if the user does not exist already', async () => {
    const isExistingUser = await testUserService.checkExistingUser({ email: 'new.user@test.com' });

    expect(isExistingUser).toBeFalsy();
  });
});

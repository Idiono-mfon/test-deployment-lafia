import { inject, injectable } from 'inversify';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import TYPES from '../../config/types';
import { IUserService } from './interfaces';
import { ITwilioService, TwilioOTP } from '../twilio';
import { Env, IEnv } from '../../config/env';
import { Password } from '../../utils/password';
import { IUserRepository } from '../../repository';
import { IComposeEmail, IEmailService } from '../email';
import {
  IFhirServer,
  IFindUser,
  IJwtPayload,
  IUser,
  ICreateAccount,
  IVerifyOTP,
  IValidateUser,
} from '../../models';
import {
  error,
  GenericResponseError,
  getE164Format,
  HttpStatusCode,
  logger,
  throwError,
  Validations,
  random6Digits,
  OTPExpiryTime,
  OTPIsValid,
} from '../../utils';

@injectable()
export class UserService implements IUserService {
  @inject(TYPES.UserRepository)
  private userRepository: IUserRepository;

  @inject(TYPES.EmailService)
  private readonly emailService: IEmailService;

  @inject(TYPES.TwilioService)
  private readonly twilioService: ITwilioService;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;

  private readonly env: IEnv;

  constructor() {
    this.env = Env.all();
  }

  public async findOne(data: IFindUser): Promise<IUser> {
    return this.userRepository.findOne<IFindUser>(data);
  }

  public async validate(data: ICreateAccount, ip?: string): Promise<IValidateUser> {
    logger.info('Running UserService.validate');

    const { isEmail, email, phone: phoneNos, password } = data;

    const userPassword = await Password.hash(password);

    try {
      if (isEmail) {
        // find user by email
        let emailUser: IFindUser = await this.userRepository.findOne<IFindUser>({ email });

        const isValidOtp = OTPIsValid(emailUser?.otpCodeExpiration as Date);

        if (emailUser && !emailUser?.otpCode && !emailUser?.otp_code_expiration) {
          // User is verified
          const ERROR_MESSAGE = 'a user with this email already exists';
          throwError(ERROR_MESSAGE, error.badRequest);
        }

        if (emailUser && emailUser.otpCode && isValidOtp) {
          //System already generated an OTP code for User
          // @TODO: Update here latter to inform user about the previous OTP code
          return { status: true, message: "OTP previously sent to user's email address" };
          // throwError("Verification code previously sent to user's email address", error.badRequest);
        }

        if (emailUser && emailUser.otpCode && !isValidOtp) {
          //User Created OTP code which is currently invalid
          // Delete previous credential and continue
          await this.userRepository.delete(emailUser.id as string);
        }

        const OTPCode = random6Digits();

        // Send the new password details to the user
        const emailMessage = this.emailService.emailOTPMsg(OTPCode);

        const composedEmail: IComposeEmail = {
          html: emailMessage,
          to: email,
          subject: 'Send Verification code',
        };

        await this.emailService.sendEmail(composedEmail);

        // Save user OTP record temporarily for latter verification purpose;
        const user: IUser = {
          email,
          first_name: `${email}_test_first_name`,
          last_name: `${email}_test_last_name`,
          password: userPassword,
          otp_code: OTPCode,
          otp_code_expiration: OTPExpiryTime(),
        };

        await this.userRepository.create<IUser>(user);
      } else {
        const phone = getE164Format(phoneNos!, ip);

        // find user by phone number
        let phoneUser = await this.userRepository.findOne<IFindUser>({ phone });

        if (phoneUser) {
          const ERROR_MESSAGE = 'a user with this phone already exist';
          throwError(ERROR_MESSAGE, error.badRequest);
        }

        await this.twilioService.sendOTP(phone);

        // Save user OTP record temporarily for latter verification purpose;
        const user: IUser = {
          email: `${phone}@test.com`,
          first_name: `${phone}_test_first_name`,
          last_name: `${phone}_test_last_name`,
          password: userPassword,
          phone,
          otp_code_expiration: OTPExpiryTime(),
        };

        await this.userRepository.create<IUser>(user);
      }

      return { status: true, message: 'User created' };
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async verifyOTP(data: IVerifyOTP): Promise<TwilioOTP> {
    logger.info('Running UserService.verifyOTP');

    const { phone, code, from_email, email } = data;

    if (!from_email) {
      // code was sent to user's phone numbers
      const user: IUser = await this.findOne({ phone });

      if (!user) {
        throwError("user doesn't exists.", error.badRequest);
      }

      if (user.hasVerifiedPhone) {
        throwError('Phone number is already verified', error.badRequest);
      }

      // Delete dummy User
      await this.userRepository.delete(user?.id as string);

      // Verify using TwilioService
      const verify = await this.twilioService.verifyOTP(phone, code);

      return verify;
    }

    const user = await this.findOne({ email });

    if (!user) {
      throwError("user doesn't exists.", error.badRequest);
    }

    if (user.hasVerifiedEmail) {
      throwError('email is already verified', error.badRequest);
    }

    if (!OTPIsValid(user.otpCodeExpiration as Date)) {
      throwError('Verification code has expired. Please try again!!', error.badRequest);
    }

    if (user.otpCode !== code.trim()) {
      throwError('Invalid verification code!!!', error.badRequest);
    }

    // Delete dummy User
    await this.userRepository.delete(user.id as string);

    return { to: email, channel: 'email', status: 'approved', valid: true };
  }

  public async create(user: IUser): Promise<IUser> {
    logger.info('Running UserService.create');

    try {
      // Validate Email
      const isValidEmail = Validations.validateEmail(user.email);

      if (!isValidEmail) {
        throwError('Email is not valid', error.badRequest);
      }

      // Validate password
      const isValidPassword = Password.validatePassword(user.password);

      if (!isValidPassword) {
        const ERROR_MESSAGE = `===${user.password}=== Hint: password must be minimum ' +
          'of 6 characters and must have a ' +
          'combination of at least one Upper case, one Lower case, ' +
          'one digit and one or more of ' +
          'these special characters - !@#$%+.=()`;

        throwError(ERROR_MESSAGE, error.badRequest);
      }

      // Hash user password
      user.password = await Password.hash(user.password);

      const data = {
        id: uuid(),
        ...user,
      };
      return await this.userRepository.create<IUser>(data);
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async checkExistingUser(data: IFindUser): Promise<any> {
    logger.info('Running UserService.checkExistingUser');

    // Get User By Phone
    let existingUser: IUser = await this.findOne({ phone: data?.phone });

    if (!existingUser) {
      // Get User By Email
      existingUser = await this.findOne({ email: data?.email });
    }

    try {
      if (existingUser) {
        let userFhirData: any = await this.fhirServerService.executeQuery(
          `/Patient/${existingUser.resourceId}`,
          'GET'
        );

        throw new GenericResponseError('Patient already exists', {
          status: HttpStatusCode.CONFLICT,
          data: userFhirData.data,
          headers: userFhirData.headers,
        });
      }
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async update(id: string, data: IFindUser): Promise<IFindUser> {
    logger.info('Running UserService.update');

    data.gender = data.gender?.toLowerCase();

    return this.userRepository.update<IFindUser>(id, data);
  }

  public async login(emailOrPhone: string, password: string): Promise<IUser> {
    logger.info('Running UserService.login');
    try {
      // Login with email and phone?
      let user = await this.userRepository.getUserByEmailOrPhone(emailOrPhone);

      if (!user) {
        throwError('Invalid credentials. User not found!', error.unauthorized);
      }

      const isValidPassword = await Password.compare(password, user?.password!);

      if (!isValidPassword) {
        throwError('Invalid username or password', error.unauthorized);
      }

      return user as IUser;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async logout(id: string): Promise<IUser> {
    logger.info('Running UserService.logout');
    return this.userRepository.logout(id);
  }

  public generateJwtToken(data: IJwtPayload): string {
    logger.info('Running UserService.generateJwtToken');
    try {
      const { id } = data;
      delete data.id;
      return jwt.sign(data, this.env.jwt_secrete_key, {
        audience: id,
      });
    } catch (e: any) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public decodeJwtToken(token: string): object | string | IJwtPayload {
    logger.info('Running UserService.decodeJwtToken');

    try {
      return jwt.verify(token, this.env.jwt_secrete_key);
    } catch (e: any) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async changePassword(
    id: string,
    oldPassword: string,
    newPassword: string
  ): Promise<IUser> {
    logger.info('Running UserService.changePassword');

    try {
      const user = await this.userRepository.findOne<IFindUser>({ resource_id: id });

      if (!user) {
        throwError('Unable to update password: user does not exist', error.badRequest);
      }

      const isNewPasswordValid = Password.validatePassword(newPassword);
      if (!isNewPasswordValid) {
        const ERROR_MESSAGE =
          'Hint: new password must be minimum ' +
          'of 6 characters and must have a ' +
          'combination of at least one Upper case, one Lower case, ' +
          'one digit and one or more of ' +
          'these special characters - !@#$%^&-.+=()';

        throwError(ERROR_MESSAGE, error.badRequest);
      }

      const isOldPasswordValid = await Password.compare(oldPassword, user.password);
      if (!isOldPasswordValid) {
        throwError('Invalid old password', error.badRequest);
      }

      const newPasswordHash = await Password.hash(newPassword);

      return await this.userRepository.update<IFindUser>(id, { password: newPasswordHash });
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async resetPassword(email: string): Promise<any> {
    logger.info('Running UserService.resetPassword');
    try {
      if (!email) {
        throwError('Please provide an email address to reset your password', error.badRequest);
      }

      // Does user with the email exist
      const user = await this.userRepository.findOne<IFindUser>({ email });
      if (!user) {
        throwError(`No user account found with the email: ${email}`, error.badRequest);
      }

      // Generate new password
      const newPassword = Math.random().toString(36).substring(2, 12).toUpperCase();

      // Hash the new password
      const hashPassword = await Password.hash(newPassword);

      // Update the user's password
      await this.userRepository.update<IFindUser>(user.resourceId!, { password: hashPassword });

      // Send the new password details to the user
      const emailMessage = `
        <p>Hello <strong>${user.firstName} ${user.lastName}</strong>,</p>
        <p>You receive this email because you requested for a password reset on 
        your lafia account. Your password has now been reset and a new password 
        has been assigned to you. Please log in with the new password and then 
        update it from your account.</p>
        <div>
          <strong>Email:</strong>    <strong style="color: saddlebrown">${email}</strong>
          <br />
          <strong>New Password:</strong>    <strong style="color: saddlebrown">${newPassword}</strong>
        </div>
        <br />
        <p>Thank you</p>
        <p>Lafia Team (support@lafia.io)</p>
      `;

      const composedEmail: IComposeEmail = {
        html: emailMessage,
        to: email,
        subject: 'Reset Password',
      };

      await this.emailService.sendEmail(composedEmail);
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }
}

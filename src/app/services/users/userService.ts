import { inject, injectable } from 'inversify';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { IFindUser, IJwtPayload, IUser } from '../../models';
import { UserRepository } from '../../repository';
import {
  error,
  GenericResponseError,
  getE164Format,
  HttpStatusCode,
  logger,
  throwError,
  Validations
} from '../../utils';
import { Password } from '../../utils/password';
import { EmailService, IComposeEmail } from '../email';
import { FhirServerService } from '../fhirServer';
import { TwilioService } from '../twilio';

const env = Env.all();

@injectable()
export class UserService {
  @inject(TYPES.UserRepository)
  private userRepository: UserRepository;

  @inject(TYPES.EmailService)
  private readonly emailService: EmailService;

  @inject(TYPES.TwilioService)
  private readonly twilioService: TwilioService;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: FhirServerService;

  public async validateUser(data: IUser, ip?: string): Promise<boolean> {
    logger.info('Running UserService.validateUser');

    const user: IUser = data;
    try {
      // find user by email
      let emailUser = await this.getUserByField('email', user.email);

      if (emailUser) {
        const ERROR_MESSAGE = 'a user with this email already exist';
        throwError(ERROR_MESSAGE, error.badRequest);
      }


      user.phone = getE164Format(user.phone!, ip);

      // find user by phone number
      let phoneUser = await this.getUserByField('phone', user.phone!);

      if (phoneUser) {
        const ERROR_MESSAGE = 'a user with this phone already exist';
        throwError(ERROR_MESSAGE, error.badRequest);
      }

      await this.twilioService.sendOTP(user.phone);

      return true;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async createUser(user: IUser): Promise<IUser> {
    logger.info('Running UserService.createUser');

    try {
      // Validate Email
      const isValidEmail = Validations.validateEmail(user.email);

      if (!isValidEmail) {
        throwError('Email is not valid', error.badRequest);
      }

      // Validate password
      const isValidPassword = Password.validatePassword(user.password);

      if (!isValidPassword) {
        const ERROR_MESSAGE = 'Hint: password must be minimum ' +
          'of 6 characters and must have a ' +
          'combination of at least one Upper case, one Lower case, ' +
          'one digit and one or more of ' +
          'these special characters - !@#$%^&-.+=()';

        throwError(ERROR_MESSAGE, error.badRequest);
      }

      // Hash user password
      user.password = await Password.hash(user.password);

      const data = {
        id: uuid(),
        ...user,
      };
      return await this.userRepository.createUser(data);
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getUserByField(field: string, data: string): Promise<IUser> {
    logger.info('Running UserService.getUserByField');
    return this.userRepository.getOneUser({ [field]: data });
  }

  public async checkExistingUser(data: IFindUser): Promise<any> {
    logger.info('Running UserService.checkExistingUser');

    // Get User By Phone
    let existingUser: IUser = await this.getOneUser({ phone: data.phone });

    if (!existingUser) {
      // Get User By Email
      existingUser = await this.getOneUser({ email: data.email });
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
          headers: userFhirData.headers
        });

      }

    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getOneUser(data: IFindUser): Promise<IUser> {
    logger.info('Running UserService.getOneUser');
    return this.userRepository.getOneUser(data);
  }

  public async getOneBy(field: string, value: string): Promise<IUser> {
    logger.info('Running UserService.getOneBy');
    return this.userRepository.getOneBy(field, value);
  }

  public async updateUser(id: string, data: IFindUser): Promise<IFindUser> {
    logger.info('Running UserService.updateUser');
    data.gender = data.gender?.toLowerCase();
    return this.userRepository.updateUser(id, data);
  }

  public async userLogin(data: string, password: string): Promise<IUser> {
    logger.info('Running UserService.userLogin');
    try {
      // Login with email and phone?
      let user = await this.userRepository.getUserByEmailOrPhone(data);

      if (!user) {
        throwError('Invalid credentials. User not found!', error.unauthorized);
      }

      const isValidPassword = await Password.compare(password, user.password);

      if (!isValidPassword) {
        throwError('Invalid username or password', error.unauthorized);
      }

      return user;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async userLogout(id: string): Promise<IUser> {
    logger.info('Running UserService.userLogout');
    return this.userRepository.userLogout(id);
  }

  public generateJwtToken(data: IJwtPayload): string {
    logger.info('Running UserService.generateJwtToken');
    try {
      const { id } = data;
      delete data.id;
      return jwt.sign(data, env.jwt_secrete_key, {
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
      return jwt.verify(token, env.jwt_secrete_key);
    } catch (e: any) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async changePassword(id: string, oldPassword: string, newPassword: string): Promise<IUser> {
    logger.info('Running UserService.changePassword');
    try {
      let user = await this.userRepository.getOneUser({ id });

      if (!user) {
        user = await this.userRepository.getOneUser({ resource_id: id });

        if (!user) {
          throwError('Unable to update password: user does not exist', error.badRequest);
        }
      }

      const isNewPasswordValid = Password.validatePassword(newPassword);
      if (!isNewPasswordValid) {
        const ERROR_MESSAGE = 'Hint: new password must be minimum ' +
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

      const updatedUser = await this.userRepository.updateUser(user.id!, { password: newPasswordHash });

      delete updatedUser.password;

      return updatedUser;
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
      const user = await this.userRepository.getOneUser({ email });
      if (!user) {
        throwError(`No user account found with the email: ${email}`, error.badRequest);
      }

      // Generate new password
      const newPassword = Math.random().toString(36).substring(2, 12).toUpperCase();

      // Hash the new password
      const hashPassword = await Password.hash(newPassword);

      // Update the user's password
      await this.userRepository.updateUser(user.id!, { password: hashPassword });

      // Send the new password details to the user
      const emailMessage = `
        <p>Hello <strong>${user.firstName} ${user.lastName}</strong>,</p>
        <p>You receive this email because you requested for a password reset on 
        your lafia account. You password has now been reset and a new password 
        has been assigned to you. Please login with the new password and then 
        update it from your account.</p>
        <div>
          <strong>Email:</strong>    <strong style="color: saddlebrown">${email}</strong>
          <br />
          <strong>New Password:</strong>    <strong style="color: saddlebrown">${newPassword}</strong>
        </div>
        <br />
        <p>Thank you</p>
        <p>Lafia Team (support@lafia.io)</p>
      `

      const composedEmail: IComposeEmail = {
        html: emailMessage,
        to: email,
        subject: 'Reset Password'
      }

      await this.emailService.sendEmail(composedEmail);
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }
}

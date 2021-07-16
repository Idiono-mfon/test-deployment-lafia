import { inject, injectable } from 'inversify';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { IFindUser, IUser } from '../../models';
import { UserRepository } from '../../repository';
import {
  error,
  GenericResponseError,
  HttpStatusCode,
  throwError
} from '../../utils';
import { Password } from '../../utils/password';
import { EmailService, IComposeEmail } from '../email/emailService';
import { PlatformSdkService } from '../platformSDK';
import { IJwtPayload } from '../platformSDK/interfaces';
import { TwilioService } from '../twilio';

const env = Env.all();

@injectable()
export class UserService {
  @inject(TYPES.UserRepository)
  private userRepository: UserRepository;

  @inject(TYPES.PlatformSdkService)
  private readonly platformSdkService: PlatformSdkService;

  @inject(TYPES.EmailService)
  private readonly emailService: EmailService;

  @inject(TYPES.TwilioService)
  private readonly twilioService: TwilioService;

  public async createUser(user: IUser): Promise<IUser> {
    try {
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

      // find user by email
      let emailUser = await this.getUserByFeild("email", user.email);

      if ( emailUser ) {
        const ERROR_MESSAGE = 'a user with this email already exist';
        throwError(ERROR_MESSAGE, error.badRequest);
      }

      // find user by phone number
      let phoneUser = await this.getUserByFeild("phone", user.phone);

      if ( phoneUser ) {
        const ERROR_MESSAGE = 'a user with this phone already exist';
        throwError(ERROR_MESSAGE, error.badRequest);
      }

      // Hash user password
      user.password = await Password.hash(user.password);

      // this.twilioService.sendOTP(user.phone);

      const data = {
        id: uuid(),
        ...user,
      };
      return await this.userRepository.createUser(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getUserByFeild(field:string, data: string): Promise<IUser> {
    return await this.userRepository.getOneUser({[field]: data});
  }

  public async getOneUser(data: IFindUser): Promise<IUser> {
    return await this.userRepository.getOneUser(data);
  }
  
  public async getOneBy(field: string, value: string): Promise<IUser> {
    return await this.userRepository.getOneBy(field, value);
  }

  public async updateUser(id: string, data: IFindUser): Promise<IFindUser> {
    return await this.userRepository.updateUser(id, data);
  }

  public async userLogin(data: string, password: string): Promise<IUser> {
    try {
      // Login with email and phone?
      let user = await this.userRepository.getUserByEmailOrPhone( data );

      if (!user) {
        throwError('Invalid credentials. User not found!', error.unauthorized);
      }

      const isValidPassword = await Password.compare(password, user.password);

      if (!isValidPassword) {
        throwError('Invalid username or password', error.unauthorized);
      }

      return user;
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async userLogout(id: string): Promise<IUser> {
    return await this.userRepository.userLogout(id);
  }

  public generateJwtToken(data: IJwtPayload): string {
    try {
      const { id } = data;
      delete data.id;
      return jwt.sign(data, env.jwt_secrete_key, {
        audience: id,
      });
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async decodeJwtToken(token: string): Promise<object | string | IJwtPayload> {
    try {
      return await jwt.verify(token, env.jwt_secrete_key);
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async changePassword(id: string, oldPassword: string, newPassword: string): Promise<IUser> {
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
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async resetPassword(email: string): Promise<any> {
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
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }
}

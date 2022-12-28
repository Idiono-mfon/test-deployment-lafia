import {
  ValidateIf,
  IsNotEmpty,
  IsDefined,
  IsBoolean,
  IsEmail,
  IsString,
  Matches,
  MinLength,
  IsOptional,
} from 'class-validator';

import { ICreateAccountDto, IUserLoginDto } from '../../../models';

import { Match } from '../../../decorators';

export const passwordMessage = `password must be minimum ' +
'of 6 characters and must have a ' +
'combination of at least one Upper case, one Lower case, ' +
'one digit and one or more of ' +
'these special characters - !@#$%+.=()`;

export class CreateAccountDto implements ICreateAccountDto {
  /**Request Body Structure Starts Here */

  @IsDefined()
  @IsBoolean()
  isEmail: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  emailOrPhone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[~&\[\]\{\}\*<>!@#$%+.=()])(?=.*[A-Z]).{6,}/, {
    message: passwordMessage,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Match('password')
  confirmPassword: string;

  // emailOrPhone field is required from the frontend and later splitted in the validation middleware

  /**Request Body Structure ends Here */

  /**
   * Extra custom Validations fields testing validity of "emailOrPhone" seperately
   *Implementation is handled in validation middleware
   */

  @ValidateIf((o) => o.isEmail === true)
  @IsNotEmpty()
  @IsEmail()
  @Matches(/\S+@\S+\.\S+/, { message: 'Invalid email address' })
  email: string;

  @ValidateIf((o) => o.isEmail === false)
  @IsNotEmpty()
  @IsString()
  phone: string;

  /**Custom Validation fields End Here */
}

export class UserLoginDto implements IUserLoginDto {
  /**Request Body Structure Starts Here */

  @IsDefined()
  @IsBoolean()
  isEmail: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  emailOrPhone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[~&\[\]\{\}\*<>!@#$%+.=()])(?=.*[A-Z]).{6,}/, {
    message: passwordMessage,
  })
  password: string;
  /**
   *  emailOrPhone field is required from the frontend and later splitted in the validation middleware
   * Request Body Structure ends Here */

  /**
   * Extra custom Validations fields testing validity of "emailOrPhone" seperately
   *Implementation is handled in validation middleware
   */

  @ValidateIf((o) => o.isEmail === true)
  @IsNotEmpty()
  @IsEmail()
  @Matches(/\S+@\S+\.\S+/, { message: 'Invalid email address' })
  email: string;

  @ValidateIf((o) => o.isEmail === false)
  @IsNotEmpty()
  @IsString()
  phone: string;

  /**Custom Validation fields End Here */
}

import {
  ValidateIf,
  IsNotEmpty,
  IsDefined,
  IsBoolean,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  IsOptional,
} from 'class-validator';

import { IVerifyOTPDto } from '../../../models';

export class VerifyOTPDto implements IVerifyOTPDto {
  /**Request Body Structure starts Here */
  @IsDefined()
  @IsBoolean()
  from_email: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  emailOrPhone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(6)
  code: string;

  // emailOrPhone field is required from the frontend and later splitted in the validation middleware

  /**Request Body Structure ends Here */

  /**
   * Extra custom Validations fields testing validity of "emailOrPhone" seperately
   *Implementation is handled in validation middleware
   */

  @ValidateIf((o) => o.from_email === true)
  @IsNotEmpty()
  @IsEmail()
  @Matches(/\S+@\S+\.\S+/, { message: 'Invalid email address' })
  email: string;

  @ValidateIf((o) => o.from_email === false)
  @IsNotEmpty()
  @IsString()
  phone: string;

  /**Custom Validation fields End Here */
}

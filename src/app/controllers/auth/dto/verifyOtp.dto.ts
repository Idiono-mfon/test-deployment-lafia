import {
  ValidateIf,
  IsNotEmpty,
  IsDefined,
  IsBoolean,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';

export class VerifyOTPDto {
  @IsDefined()
  @IsBoolean()
  from_email: boolean;

  @ValidateIf((o) => o.from_email === true)
  @IsNotEmpty()
  @IsEmail()
  @Matches(/\S+@\S+\.\S+/, { message: 'Invalid email address' })
  email: string;

  @ValidateIf((o) => o.from_email === false)
  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(6)
  code: string;
}

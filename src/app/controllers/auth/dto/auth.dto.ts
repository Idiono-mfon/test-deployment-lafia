import {
  ValidateIf,
  IsNotEmpty,
  IsDefined,
  IsBoolean,
  IsEmail,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

import { Match } from '../../../decorators';

const passwordMessage = `password must be minimum ' +
'of 6 characters and must have a ' +
'combination of at least one Upper case, one Lower case, ' +
'one digit and one or more of ' +
'these special characters - !@#$%+.=()`;

export class CreateAccountDto {
  @IsDefined()
  @IsBoolean()
  isEmail: boolean;

  @ValidateIf((o) => o.isEmail === true)
  @IsNotEmpty()
  @IsEmail()
  @Matches(/\S+@\S+\.\S+/, { message: 'Invalid email address' })
  email: string;

  @ValidateIf((o) => o.isEmail === false)
  @IsNotEmpty()
  @IsString()
  phone: string;

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
}

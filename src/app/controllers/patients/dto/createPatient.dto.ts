import {
  ValidateIf,
  IsNotEmpty,
  IsDefined,
  IsBoolean,
  IsEmail,
  IsString,
  Matches,
  IsOptional,
  IsEnum,
} from 'class-validator';

import { ICreatePatientDto, Gender } from '../../../models';

import { passwordMessage } from '../../auth';

export class CreatePatientDto implements ICreatePatientDto {
  /**Request Body Structure Starts Here */
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[~&\[\]\{\}\*<>!@#$%+.=()])(?=.*[A-Z]).{6,}/, {
    message: passwordMessage,
  })
  password: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  birth_date: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  country: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  care_type: string;

  @IsDefined()
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsDefined()
  @IsBoolean()
  isEmail: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  emailOrPhone: string;

  // emailOrPhone field is required from the frontend and optional splitted in the validation middleware

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

const result = {
  resourceType: 'Parameters',
  parameter: [
    {
      name: 'operation',
      part: [
        {
          name: 'type',
          valueCode: 'replace',
        },
        {
          name: 'path',
          valueString: 'Patient.identifier',
        },
        {
          name: 'value',
          valueIdentifier: {
            system: 'http://new-system',
            value: '0001',
          },
        },
      ],
    },
  ],
};

import { IsNotEmpty, IsDefined, IsString } from 'class-validator';

import { ICreateAgreementDto } from '../../../models';

export class CreateAgreementDto implements ICreateAgreementDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  contents: string;
}

import { IsNotEmpty, IsDefined, IsString, IsOptional } from 'class-validator';

import { ICreateAgreementDto } from '../../../models';

export class UpdateAgreementDto implements ICreateAgreementDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  contents: string;
}

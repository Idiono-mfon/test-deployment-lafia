import { CreatePatientDto } from '../../patients';

import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreatePractitionerDto extends CreatePatientDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  medical_specialty: string;
}

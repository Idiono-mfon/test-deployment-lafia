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
  IsEnum,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import {
  IValueSetCreateDto,
  IValueSetConceptCreateDto,
  ValueSetStatus,
  IValueSetComposeIncludeConcept,
  IValueSetComposeInclueConceptDesignation,
  ICoding,
} from '../../../models';

export class CreateValueSetDto implements IValueSetCreateDto {
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
  @IsEnum(ValueSetStatus)
  status: ValueSetStatus;

  @IsOptional()
  @IsBoolean()
  immutable: boolean = false; //Add optional value

  @IsOptional()
  @IsBoolean()
  experimental: boolean = false;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  copyright: string;

  @IsDefined()
  @IsBoolean()
  publisherIsLafia: boolean;

  @ValidateIf((o: IValueSetCreateDto) => o.publisherIsLafia === false)
  @IsNotEmpty()
  @IsString()
  publisherName: string;

  @ValidateIf((o: IValueSetCreateDto) => o.publisherIsLafia === false)
  @IsNotEmpty()
  @IsEmail()
  @Matches(/\S+@\S+\.\S+/, { message: 'Invalid email address' })
  publisherEmail: string;

  @ValidateIf((o: IValueSetCreateDto) => o.publisherIsLafia === false)
  @IsNotEmpty()
  @IsString()
  publisherPhone: string;

  @ValidateIf((o: IValueSetCreateDto) => o.publisherIsLafia === false)
  @IsOptional()
  @IsString()
  publisherUrl: string;
}

export class CodingDto implements ICoding {
  @IsOptional()
  @IsString()
  system: string;

  @IsOptional()
  @IsString()
  version: string;

  @IsOptional()
  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  display: string;

  @IsOptional()
  @IsBoolean()
  userSelected?: boolean;
}

export class ValueSetDesignationDto implements IValueSetComposeInclueConceptDesignation {
  @IsOptional()
  @IsString()
  language: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  value: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CodingDto)
  use: CodingDto;
}

export class ValueSetConceptDto implements IValueSetComposeIncludeConcept {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  display: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ValueSetDesignationDto)
  designation: IValueSetComposeIncludeConcept['designation'];
}

export class CreateValueSetConceptDto implements IValueSetConceptCreateDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  value_set_id: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  system: string;

  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetConceptDto)
  concepts: IValueSetConceptCreateDto['concepts'];
}

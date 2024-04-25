import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsEmail, IsEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';


export class UserDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  birthDate?: Date;

  @ApiProperty({required: false})
  @IsString()
  address: string;

  @ApiProperty({required: true})
  @IsString()
  password: string;

  @ApiProperty({required: false, default: null})
  @IsOptional()
  imageUrl?: string;

  @ApiProperty({default: 0})
  @IsPositive()
  @IsNumber()
  @IsOptional()
  points: number;

  @ApiProperty({default: []})
  @IsArray()
  roles: number[];

  @ApiProperty()
  @IsEmpty()
  createdAt: Date;

  @ApiProperty()
  @IsEmpty()
  updatedAt: Date;

  @ApiProperty({readOnly: true})
  @IsEmpty()
  deletedAt?: Date;


}



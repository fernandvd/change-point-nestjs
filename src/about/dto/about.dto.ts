import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class AuthorDTO {
  firstName: string;
  lastName: string;
}

export class CreateAboutDTO {
  @ApiProperty()
  @IsString()
  readonly text: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly author?: {firstName: string, lastName: string};
}

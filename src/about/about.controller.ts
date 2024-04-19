import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDTO } from './dto/about.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';

@ApiTags('about')
@Controller('about')
export class AboutController {
  constructor(
    private readonly aboutService: AboutService,
  ) {}

  @Post('')
  @HttpCode(201)
  @ApiCreatedResponse({
    description: "about created successfully",
    schema: {
      allOf: [
        {
          $ref: getSchemaPath(CreateAboutDTO),
        }
      ]
    }
  })
  async create(@Body() createAboutDTO: CreateAboutDTO) {
    const about = await this.aboutService.create(createAboutDTO);
    return about;
  }

  @Get('all')
  async findAll() {
    const lists = await this.aboutService.findAll();
    return lists;
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    const list = await this.aboutService.findById(id);
    if (!list) {
      throw new NotFoundException('Id does not exists!');

    }
    return list;
  }

  @Put('/:id/update')
  @Patch('/:id/patch')
  async update(@Param('id') id: string, @Body() createAboutDTO: CreateAboutDTO) {
    const list = await this.aboutService.update(id, createAboutDTO);
    if (!list) {
      throw new NotFoundException('Id does not exist');
    }
    return list;
  }

  @Delete('/:id')
  @HttpCode(204)
  @ApiResponse({status: HttpStatus.NO_CONTENT, description: "No content"})
  async delete(@Param('id') id: string) {
    const instance = await this.aboutService.delete(id);
    if (!instance) {
      throw new NotFoundException("no se pudo eliminar");
    }
    return [];
  }


}

import { Body, Controller, Get, Post, UseGuards, Request, HttpCode, HttpStatus, UseInterceptors, UploadedFiles, UploadedFile, BadRequestException } from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { AuthGuard } from "../auth.guard";
import { UserDto } from "../user.dto";
import { CustomFileUploadInterceptor, Public, removeFile } from "src/utils";
import { FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { IMAGEFOLDER } from "../schemas/user.schema";

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Public()
  @Post('login')
  signIn(@Body() signInDto: Record<string, string>) {
    return this.authService.singIn(signInDto.email, signInDto.password);
  }

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  @UseInterceptors(CustomFileUploadInterceptor.uploadFile('imageUrl', IMAGEFOLDER))
  async signUp(@Body() userDto: UserDto, @UploadedFile() imageUrl: Express.Multer.File ) {
    try {
      if (imageUrl) {
        userDto.imageUrl = '/' + IMAGEFOLDER + '/'+imageUrl.filename;
      }
      return await this.authService.singUp(userDto);
    } catch (err){
      console.log("err signup", err);
      if (imageUrl) {
      await removeFile(imageUrl.path);
      }
      throw new BadRequestException(err)
    }
  }

  //@UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }


}



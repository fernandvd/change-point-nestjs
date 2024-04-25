import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { UserDto } from "../user.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}


  async singIn(email: string, passwo: string) {
    console.log(email, passwo);
    const user = await this.userService.findOneByEmail(email);

    console.log("user", user);
    if (!user) {
      throw new UnauthorizedException("Email or password is wrong")
    }
    if ( this.userService.generatePassword(passwo) != user?.password ) {
      throw new UnauthorizedException("Password not match");
    }

    const payload = {sub: user._id, email: user.email};

    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      imageUrl: user.imageUrl,
      access: await this.jwtService.signAsync(payload),
    };
  }

  async singUp(userDto: UserDto) {
    return await this.userService.create(userDto);
  }
}

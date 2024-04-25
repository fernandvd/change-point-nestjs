import { Body, Controller, Injectable, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../service/auth.service";


@Controller('api/users')
export class UserController {
  constructor(
    private authService: AuthService
  ) {}
}


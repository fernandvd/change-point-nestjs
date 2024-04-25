import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../schemas/user.schema";
import { Model } from "mongoose";
import { UserDto } from "../user.dto";
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async findOneById(id): Promise<User | undefined> {
    return this.userModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({email: email}).exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async delete(id: string): Promise<any> {
    return this.userModel.findByIdAndDelete(id);
  }

  async create(userDto: UserDto): Promise<User> {
    //userDto.password = await bcrypt.hash(userDto.password);
    userDto.password = this.generatePassword(userDto.password); 
    const date = new Date();
    userDto.createdAt = date;
    userDto.updatedAt = date;
    return new this.userModel(userDto).save();
  }

  generatePassword(passwordPlain) {
    return crypto.createHmac('sha256', passwordPlain).digest('hex')

  }

  async update(id: string, userDto: UserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, userDto, {new: true});
  }

}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

export const IMAGEFOLDER = 'users';

@Schema()
export class User {
  _id: any;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  phoneNumber: string;

  @Prop({required: true, unique: true})
  email: string;

  @Prop()
  birthDate?: Date;

  @Prop({required: false})
  address: string;

  @Prop({required: true})
  password: string;

  @Prop({required: false, default: null})
  imageUrl?: string;

  @Prop({default: 0})
  points: number;

  @Prop({default: []})
  roles: number[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt?: Date;


}

export const UserSchema = SchemaFactory.createForClass(User);


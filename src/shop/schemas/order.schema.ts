import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "src/auth/schemas/user.schema";


export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name})
  user: User;

  @Prop()
  ammount: number;

  @Prop()
  items_q: number;

  @Prop()
  shipping_address: string;

  @Prop()
  billing_address: string;

  @Prop()
  email: string;

  @Prop()
  date: Date;

  @Prop()
  status_id: string; //this is a foreing key to status

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);


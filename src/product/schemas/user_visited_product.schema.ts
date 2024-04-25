import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type UserVisitedProductDocument = HydratedDocument<UserVisitedProduct>;

@Schema()
export class UserVisitedProduct {

  @Prop({type: Object})
  user: Object;

  @Prop({type: Object})
  product: any;

  @Prop()
  lastVisited: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;



}

export const UserVisitedProductSchema = SchemaFactory.createForClass(UserVisitedProduct);

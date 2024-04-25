import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type OrderDetailDocumento = HydratedDocument<OrderDetail>;

@Schema()
export class OrderDetail {
  @Prop()
  orderId: string;

  @Prop()
  productId: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;
  
  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);


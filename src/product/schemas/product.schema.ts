import mongoose, { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Category } from "./category.schema";
import { Option } from './option.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  sku: string;

  @Prop()
  productName: string;

  @Prop()
  shortDescription: string;

  @Prop()
  longDescription: string;

  @Prop()
  price: number;

  @Prop()
  discount: number;

  @Prop()
  tags: string;

  @Prop()
  imageUrl: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name})
  categoryId: Category;


  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Option.name }] })
  options: Option[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;

}

export const ProductSchema = SchemaFactory.createForClass(Product);

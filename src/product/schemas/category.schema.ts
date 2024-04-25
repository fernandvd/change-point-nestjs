import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CategorySchema = HydratedDocument<Category>;

export class Category {
  @Prop()
  name: string;

  @Prop({required: false})
  imageUrl?: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);



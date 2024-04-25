import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type OptionDocument = HydratedDocument<Option>

@Schema()
export class Option {
  @Prop()
  name: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}

export const OptionSchema = SchemaFactory.createForClass(Option);


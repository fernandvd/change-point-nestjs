
import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument, Document } from "mongoose";

export type AboutDocument = HydratedDocument<About>;

@Schema()
export class About {
  @Prop()
  text: string;

  @Prop()
  description: string;

  @Prop(raw({
    firstName: {type: String},
    lastName: {type: String}
  }),)
  author: Record<string, any>;
}

export const AboutSchema = SchemaFactory.createForClass(About);

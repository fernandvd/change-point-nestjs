import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type StatusDocument = HydratedDocument<Status>;

@Schema()
export class Status {
  @Prop()
  name: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

 @Prop()
  deletedAt: Date;
}

export const StatusSchema = SchemaFactory.createForClass(Status);

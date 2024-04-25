import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type RoleDocument = HydratedDocument<Role>;

export class Role {
  @Prop()
  name: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;

}

export const RoleSchema = SchemaFactory.createForClass(Role);


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  title: string;
  @Prop()
  body: string;
  @Prop()
  owner: Types.ObjectId;
}

export const PostSchema = SchemaFactory.createForClass(Post);

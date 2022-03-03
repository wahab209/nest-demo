import { Types } from 'mongoose';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  body: string;
  @IsNotEmpty()
  owner: Types.ObjectId;
}

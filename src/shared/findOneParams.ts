import { IsMongoId } from 'class-validator';

export class FindOneParams {
  @IsMongoId({ message: 'Invalid resource id' })
  id: string;
}

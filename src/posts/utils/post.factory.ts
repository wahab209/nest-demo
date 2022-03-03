import { UsersService } from '../../users/users.service';
import { PostDocument, PostSchema } from '../entities/post.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

export const PostFactory = (usersService: UsersService) => {
  const schema = PostSchema;
  schema.pre<PostDocument>('save', async function (next) {
    const user = await usersService.findOne(this.owner.toString());
    if (!user) {
      throw new HttpException(
        `User not found with ID: ${this.owner.toString()}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    next();
  });
  return schema;
};

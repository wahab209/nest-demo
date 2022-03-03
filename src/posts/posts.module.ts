import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post } from './entities/post.entity';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { PostFactory } from './utils/post.factory';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Post.name,
        imports: [UsersModule],
        useFactory: PostFactory,
        inject: [UsersService],
      },
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}

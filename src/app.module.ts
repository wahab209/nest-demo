import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import 'dotenv/config';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(process.env.MONGO_URL), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

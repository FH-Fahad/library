import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { BookauthorModule } from './bookauthor/bookauthor.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot("mongodb://localhost:27017/library"),
    BookModule, AuthorModule, BookauthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

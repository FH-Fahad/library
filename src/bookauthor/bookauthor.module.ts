import { Module } from '@nestjs/common';
import { BookauthorController } from './bookauthor.controller';
import { BookauthorService } from './bookauthor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookAuthorSchema } from './entities/book-author.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'BookAuthor', schema: BookAuthorSchema }])],
  controllers: [BookauthorController],
  providers: [BookauthorService]
})
export class BookauthorModule { }

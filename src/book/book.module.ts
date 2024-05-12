import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './entities/book.entity';
import { BookauthorService } from 'src/bookauthor/bookauthor.service';
import { BookAuthorSchema } from 'src/bookauthor/entities/book-author.entity';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Book', schema: BookSchema },
    { name: 'BookAuthor', schema: BookAuthorSchema }
  ])],
  controllers: [BookController],
  providers: [BookService, BookauthorService],
})
export class BookModule { }

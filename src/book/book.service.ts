import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Model } from 'mongoose';
import { BookauthorService } from '../bookauthor/bookauthor.service';

@Injectable()
export class BookService {
  constructor(
    private bookAuthorService: BookauthorService,
    @InjectModel(Book.name) private bookModel: Model<Book>,
  ) { }

  async create(createBookDto: CreateBookDto) {
    const book = await this.bookModel.create(createBookDto);

    await this.bookAuthorService.create({
      bookId: book._id.toString(),
      authorId: createBookDto.authorId
    })

    return book;
  }

  async findAll() {
    return await this.bookModel.find();
  }

  async findOne(id: number) {
    return await this.bookModel.findOne({ _id: id });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const updatedBook = await this.bookModel.updateOne({ _id: id }, updateBookDto, { new: true });

    return updatedBook;
  }

  async remove(id: string) {
    await this.bookModel.deleteOne({ _id: id });
    await this.bookAuthorService.remove(id);

    return { message: 'Book deleted successfully' };
  }
}

import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
  ) { }

  async create(createBookDto: CreateBookDto) {
    await this.bookModel.create(createBookDto);

    return createBookDto;
  }

  async findAll() {
    return await this.bookModel.find();
  }

  async findOne(id: number) {
    return await this.bookModel.findOne({ _id: id });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    await this.bookModel.updateOne({ _id: id, }, updateBookDto);

    return updateBookDto;
  }

  async remove(id: number) {
    await this.bookModel.deleteOne({ _id: id });

    return { message: 'Book deleted successfully' };
  }
}

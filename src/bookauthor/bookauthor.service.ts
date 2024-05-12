import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BookAuthor } from './entities/book-author.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookauthorService {
    constructor(
        @InjectModel(BookAuthor.name) private bookAuthorModel: Model<BookAuthor>,
    ) { }

    async create(createBookAuthorDto: any): Promise<BookAuthor> {
        await this.bookAuthorModel.create(createBookAuthorDto);

        return createBookAuthorDto;
    }

    async findAll(): Promise<BookAuthor[]> {
        return this.bookAuthorModel.find().exec();
    }

    async findOne(id: string): Promise<BookAuthor> {
        return this.bookAuthorModel.findById(id);
    }

    async remove(id: string): Promise<any> {
        await this.bookAuthorModel.deleteOne({ _id: id });

        return { message: 'Book author deleted successfully' };
    }
}

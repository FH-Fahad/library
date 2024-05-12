import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './entities/author.entity';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name) private authorModel: Model<Author>,
  ) { }

  async create(createAuthorDto: CreateAuthorDto) {
    const author = await this.authorModel.create(createAuthorDto);

    return author;
  }

  async findAll() {
    return await this.authorModel.find();
  }

  async findOne(id: number) {
    return await this.authorModel.findOne({ _id: id });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    await this.authorModel.updateOne({ _id: id, }, updateAuthorDto);

    return updateAuthorDto;
  }

  async remove(id: number) {
    await this.authorModel.deleteOne({ _id: id });

    return { message: 'Author deleted successfully' }
  }
}

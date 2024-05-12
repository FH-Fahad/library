import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsString()
    description?: string;

    @IsString()
    @IsNumber()
    price?: number;
}

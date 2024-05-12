import { Controller, Get } from '@nestjs/common';
import { BookauthorService } from './bookauthor.service';

@Controller('bookauthor')
export class BookauthorController {
    constructor(
        private readonly bookauthorService: BookauthorService
    ) { }

    @Get()
    findAll() {
        return this.bookauthorService.findAll();
    }
}

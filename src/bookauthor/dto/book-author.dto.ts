import { IsNotEmpty } from "class-validator";

export class BookauthorDto {
    @IsNotEmpty()
    readonly bookId: string;

    @IsNotEmpty()
    readonly authorId: string;
}
import { IsNotEmpty } from "class-validator";
import { Types } from "mongoose";

export class BookauthorDto {
    @IsNotEmpty()
    readonly bookId: Types.ObjectId;

    @IsNotEmpty()
    readonly authorId: Types.ObjectId;
}
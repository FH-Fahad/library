import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { mongo } from "mongoose";

@Schema({ timestamps: true })
export class BookAuthor {
    @Prop({ type: mongo.ObjectId, ref: 'Book', required: true })
    bookId: string;

    @Prop({ type: mongo.ObjectId, ref: 'Author', required: true })
    authorId: string;
}

export const BookAuthorSchema = SchemaFactory.createForClass(BookAuthor);
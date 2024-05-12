import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class BookAuthor {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    book: string;
}

export const BookAuthorSchema = SchemaFactory.createForClass(BookAuthor);
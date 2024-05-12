import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({ timestamps: true })
export class Book {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    authorId: Types.ObjectId;
}

export const BookSchema = SchemaFactory.createForClass(Book);

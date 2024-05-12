import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;

    @IsString()
    @IsNumber()
    price: number;
}

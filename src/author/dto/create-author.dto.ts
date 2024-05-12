import { IsNotEmpty, IsString } from "class-validator";

export class CreateAuthorDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;
}

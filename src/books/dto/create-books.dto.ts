import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookDTO{
    
    @IsString()
    @IsNotEmpty()
    readonly title : string;

    @IsString()
    @IsNotEmpty()
    readonly author : string;

    @IsString()
    @IsNotEmpty()
    readonly description : string;


}
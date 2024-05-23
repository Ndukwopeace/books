import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-books.dto';

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService){}

    @Get()
    getAll(): string[] {
        try{
            return this.bookService.getBooks()
        }catch(e){
            console.log("i am in the catch ",e)
        }
    }

    @Post(":id")
    createBook(@Body() CreateBookDTO: CreateBookDTO){
        return this.bookService.createBook(CreateBookDTO);
    }
    

}

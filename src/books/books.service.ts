import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {

    private readonly books = [] ;

    createBook(book : any){
        return this.books.push(book);
    }

    getBooks(){
        return this.books;
    }     
    
    
}

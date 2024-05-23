import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { BooksController } from './books/books.controller';

@Module({
  imports: [ BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      // consumer.apply(LoggerMiddleware).forRoutes('books') ; // option 1 
      // for only Post request
      // consumer
      // .apply(LoggerMiddleware)
      // .forRoutes({ path:'books' , method: RequestMethod.POST }); // option 2 

      consumer
      .apply(LoggerMiddleware)
      .forRoutes(BooksController)
  }
}

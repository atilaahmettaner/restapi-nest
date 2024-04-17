import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...', new Date().toDateString());
    console.log('deneme');
    console.log('req and url: ', req.method, req.url);

    next();
  }
}

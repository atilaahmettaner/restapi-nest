import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('loggerMiddleware');
  use(req: any, res: any, next: () => void) {
    this.logger.log('Request...', new Date().toDateString());

    this.logger.log('req and url: ', req.method, req.url);

    next();
  }
}

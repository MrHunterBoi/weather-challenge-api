import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

import { NextFunction, Request, Response } from 'express';

// Middleware to log all incoming requests and their status codes
@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, baseUrl } = request;

    response.on('close', () => {
      const { statusCode } = response;

      this.logger.log(`${method} ${baseUrl} - ${statusCode}`);
    });

    next();
  }
}

import { NestMiddleware } from '@nestjs/common';

import compression from 'compression';
import { Request, Response, NextFunction } from 'express';

export class CompressionMiddleware implements NestMiddleware {
  public async use(request: Request, response: Response, next: NextFunction) {
    await compression()(request, response, next);
  }
}

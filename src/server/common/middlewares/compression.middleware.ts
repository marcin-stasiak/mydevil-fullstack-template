import { NestMiddleware } from '@nestjs/common';

import * as compression from 'compression';
import { Request, Response, NextFunction } from 'express';

export class CompressionMiddleware implements NestMiddleware {
  public use(request: Request, response: Response, next: NextFunction) {
    compression()(request, response, next);
  }
}

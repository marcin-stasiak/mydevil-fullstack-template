import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';

@Injectable()
export class SecureMiddleware implements NestMiddleware {
  public use(request: Request, response: Response, next: NextFunction): void {
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        scriptSrc: [`'self'`, `'unsafe-inline'`],
      },
    })(request, response, next);

    if (!request.header('X-Forwarded-Proto')) {
      response.redirect(HttpStatus.MOVED_PERMANENTLY, `https://${request.hostname}${request.originalUrl}`);
    }
  }
}

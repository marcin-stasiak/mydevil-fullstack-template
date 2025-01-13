import { Injectable, NestMiddleware } from '@nestjs/common';

import { Request, Response } from 'express';

import { RoutesService } from '../routes.service';

@Injectable()
export class ClientMiddleware implements NestMiddleware {
  constructor(private readonly routesService: RoutesService) {}

  public async use(request: Request, response: Response) {
    const meta = await this.routesService.findOneBySlug(request.path);
    console.log(meta);
    //if (meta) {
    response.render('index', {});
    //}
  }
}

import { HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { renderToString } from 'react-dom/server';

import { Request, Response } from 'express';
import { readFile } from 'node:fs/promises';
import { join } from 'path';

import { StaticMain } from '../../../client/static';
import { RoutesService } from '../routes.service';

interface Manifest extends JSON {
  main: string;
  global: string;
}

@Injectable()
export class ClientMiddleware implements NestMiddleware {
  private readonly logger: Logger;
  private readonly manifest: Promise<Manifest | null>;

  constructor(
    private readonly config: ConfigService,
    private readonly routesService: RoutesService,
  ) {
    this.logger = new Logger(ClientMiddleware.name);
    this.manifest = this.getManifest();
  }

  public async use(request: Request, response: Response) {
    const meta = await this.routesService.findOneBySlug(request.path);
    const manifest = await this.manifest;
    const language = this.config.get<string>('app.language');

    if (meta && manifest) {
      const content = renderToString(StaticMain({ location: request.path }));

      response.render('index', {
        lang: language,
        title: meta?.title,
        description: meta?.description,
        styles: manifest?.global,
        content: content,
        scripts: manifest?.main,
      });
    } else {
      // TODO: Add error pages
      response.status(HttpStatus.NOT_FOUND);
      response.render('error', {
        lang: language,
        title: '',
        description: '',
      });
    }
  }

  private async getManifest(): Promise<Manifest | null> {
    try {
      const buffer = await readFile(join('public', 'assets', 'manifest.json'));

      return JSON.parse(buffer.toString()) as Manifest;
    } catch ({ message }) {
      this.logger.error(message);
    }

    return null;
  }
}

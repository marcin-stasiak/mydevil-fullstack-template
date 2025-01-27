import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Request, Response } from 'express';
import { readFile } from 'node:fs/promises';
import { join } from 'path';

import { RoutesService } from '../routes.service';

interface Manifest extends JSON {
  main: string;
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

    if (manifest) {
      response.render('index', {
        scripts: manifest?.main,
      });
    }
  }

  private async getManifest(): Promise<Manifest | null> {
    try {
      const buffer = await readFile(join('public', 'assets', 'manifest.json'));

      return JSON.parse(buffer.toString());
    } catch ({ message }) {
      this.logger.error(message);
    }

    return null;
  }
}

import { HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { renderToString } from 'react-dom/server';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { getDataFromTree, renderToStringWithData } from '@apollo/client/react/ssr';
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
  private readonly link: HttpLink;

  constructor(
    private readonly config: ConfigService,
    private readonly routesService: RoutesService,
  ) {
    this.logger = new Logger(ClientMiddleware.name);
    this.manifest = this.getManifest();
    this.link = new HttpLink({
      uri: `${config.get('app.baseURL')}/graphql`,
      credentials: 'same-origin',
    });
  }

  public async use(request: Request, response: Response) {
    const meta = await this.routesService.findOneBySlug(request.path);
    const manifest = await this.manifest;
    const language = this.config.get<string>('app.language');
    const client = new ApolloClient({
      ssrMode: true,
      link: this.link,
      cache: new InMemoryCache(),
    });

    if (meta && manifest) {
      const content = await getDataFromTree(StaticMain(request.path, client));
      const state = JSON.stringify(client.extract());

      response.render('index', {
        lang: language,
        title: meta?.title,
        description: meta?.description,
        styles: manifest?.global,
        content: content,
        state: state,
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

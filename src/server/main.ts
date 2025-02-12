import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { join } from 'path';

import { AppModule } from './app.module';

(async function () {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);

  if (config.get('app.serveStatic')) {
    app.useStaticAssets(join(process.cwd(), 'public'));
  }
  app.setBaseViewsDir(join(process.cwd(), 'src/server/common/templates'));
  app.setViewEngine('ejs');

  await app.listen(config.get('port', 3000));
})();

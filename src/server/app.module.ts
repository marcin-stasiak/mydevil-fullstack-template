import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { join } from 'path';

import appConfig from './common/configs/app.config';
import databaseConfig from './common/configs/database.config';
import serverConfig from './common/configs/server.config';

import { RoutesModule } from './common/routes/routes.module';
import { ArticlesModule } from './endpoints/articles/articles.module';
import { CategoriesModule } from './endpoints/categories/categories.module';
import { SettingsModule } from './endpoints/settings/settings.module';
import { TagsModule } from './endpoints/tags/tags.module';

let TypeOrmModule;

@Module({
  imports: [
    import('@adminjs/nestjs').then(({ AdminModule }) => AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [],
        },
      })
    }),
    ConfigModule.forRoot({
      load: [appConfig, databaseConfig, serverConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('database.host'),
        port: config.get('database.port'),
        database: config.get('database.name'),
        username: config.get('database.username'),
        password: config.get('database.password'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        autoLoadEntities: true,
        synchronize: config.get('development'),
        logging: config.get('development'),
      }),
      inject: [ConfigService],
    }),
    // Common
    RoutesModule,
    // Endpoints
    ArticlesModule,
    CategoriesModule,
    SettingsModule,
    TagsModule
    // Integrations
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

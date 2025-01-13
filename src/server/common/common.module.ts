import { ApolloDriver } from '@nestjs/apollo';
import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { join } from 'path';

import { AuthService } from './auth.service';
import appConfig from './configs/app.config';
import databaseConfig from './configs/database.config';
import serverConfig from './configs/server.config';
import { Meta } from './entities/meta-endpoint.entity';
import { ClientMiddleware } from './middlewares/client.middleware';
import { CompressionMiddleware } from './middlewares/compression.middleware';
import { SecureMiddleware } from './middlewares/secure.middleware';
import { RoutesService } from './routes.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, databaseConfig, serverConfig],
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        debug: config.get('development'),
        playground: config.get('development'),
      }),
      inject: [ConfigService],
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
    TypeOrmModule.forFeature([Meta]),
  ],
  providers: [AuthService, RoutesService],
})
export class CommonModule implements NestModule {
  constructor(private readonly config: ConfigService) {}

  configure(consumer: MiddlewareConsumer) {
    if (this.config.get('development')) {
      consumer.apply(ClientMiddleware).exclude('graphql').forRoutes({ path: '*', method: RequestMethod.GET });
    } else {
      consumer.apply(ClientMiddleware).forRoutes({ path: '*', method: RequestMethod.GET });
      consumer.apply(CompressionMiddleware, SecureMiddleware).forRoutes('*');
    }
  }
}

import { ApolloDriver } from '@nestjs/apollo';
import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GraphQLJSON } from 'graphql-scalars';
import { join } from 'path';

import { appConfig, databaseConfig, serverConfig } from './configs';
import { Meta } from './entities/meta-endpoint.entity';
import { ClientMiddleware, CompressionMiddleware, SecureMiddleware } from './middlewares';
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
        resolvers: { JSON: GraphQLJSON },
        debug: config.get<boolean>('debug'),
        playground: config.get<boolean>('development'),
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
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
        logging: config.get<boolean>('debug'),
        synchronize: config.get<boolean>('development'),
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Meta]),
  ],
  providers: [RoutesService],
  exports: [RoutesService],
})
export class CommonModule implements NestModule {
  constructor(private readonly config: ConfigService) {}

  public configure(consumer: MiddlewareConsumer) {
    if (this.config.get<boolean>('development')) {
      consumer.apply(ClientMiddleware).exclude('graphql').forRoutes({ path: '*', method: RequestMethod.GET });
    } else {
      consumer.apply(ClientMiddleware).forRoutes({ path: '*', method: RequestMethod.GET });
      consumer.apply(CompressionMiddleware, SecureMiddleware).forRoutes('*');
    }
  }
}

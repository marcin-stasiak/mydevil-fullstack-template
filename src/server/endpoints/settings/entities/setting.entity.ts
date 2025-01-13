import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEndpointEntity } from '../../../common/entities/base-endpoint.entity';

@ObjectType()
@Entity('settings')
export class Setting extends BaseEndpointEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;
}

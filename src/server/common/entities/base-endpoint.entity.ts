import { Field } from '@nestjs/graphql';

import { BaseEntity, JoinTable, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Meta } from './meta-endpoint.entity';

export abstract class BaseEndpointEntity extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field(() => Meta)
  @OneToOne(() => Meta)
  @JoinTable()
  public meta: Meta;
}

import { Field, ObjectType } from '@nestjs/graphql';

import { BaseEntity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Meta } from './meta-endpoint.entity';

@ObjectType()
export abstract class BaseEndpointEntity extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field(() => Meta)
  @OneToOne(() => Meta, { cascade: true })
  @JoinColumn({ name: 'meta_slug' })
  public meta: Meta;
}

import { ObjectType, Field } from '@nestjs/graphql';

import { Column, Entity, ManyToMany } from 'typeorm';

import { BaseEndpointEntity } from '../../../common/entities/base-endpoint.entity';
import { Entry } from '../../entries/entities/entry.entity';

@ObjectType()
@Entity('categories')
export class Category extends BaseEndpointEntity {
  @Field(() => String)
  @Column({ type: 'varchar', unique: true })
  public slug: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public title: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public description: string;

  @Field(() => [Entry], { nullable: 'items' })
  @ManyToMany(() => Entry, (entry) => entry.categories, { nullable: true })
  public entries?: Entry[];
}

import { ObjectType, Field } from '@nestjs/graphql';

import { Column, Entity, ManyToMany } from 'typeorm';

import { BaseEndpointEntity } from '../../../common/entities/base-endpoint.entity';
import { Entry } from '../../entries/entities/entry.entity';

@ObjectType()
@Entity('tags')
export class Tag extends BaseEndpointEntity {
  @Field(() => String)
  @Column({ type: 'varchar', unique: true })
  public slug: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public title: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public description: string;

  @Field(() => [Entry])
  @ManyToMany(() => Entry, (entry) => entry.tags)
  public entries: Entry[];
}

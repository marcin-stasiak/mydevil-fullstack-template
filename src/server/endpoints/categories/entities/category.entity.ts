import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, ManyToMany } from 'typeorm';

import { BaseEndpointEntity } from '../../../common/entities/base-endpoint.entity';
import { Entry } from '../../entries/entities/entry.entity';

@ObjectType()
@Entity('categories')
export class Category extends BaseEndpointEntity {
  @Field(() => [Entry])
  @ManyToMany(() => Entry, (entry) => entry.categories)
  public entries: Entry[];
}

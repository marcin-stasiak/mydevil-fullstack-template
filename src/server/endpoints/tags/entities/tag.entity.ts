import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, ManyToMany } from 'typeorm';

import { BaseEndpointEntity } from '../../../common/entities/base-endpoint.entity';
import { Entry } from '../../entries/entities/entry.entity';

@ObjectType()
@Entity('tags')
export class Tag extends BaseEndpointEntity {
  @Field(() => [Entry])
  @ManyToMany(() => Entry, (entry) => entry.tags)
  public entries: Entry[];
}

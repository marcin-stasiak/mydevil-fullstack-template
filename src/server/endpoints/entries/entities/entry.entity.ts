import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

import { BaseEndpointEntity } from '../../../common/entities/base-endpoint.entity';
import { Category } from '../../categories/entities/category.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { User } from '../../users/entities/user.entity';

@ObjectType()
@Entity('entries')
export class Entry extends BaseEndpointEntity {
  @Field(() => User)
  @OneToMany(() => User, (user) => user.entries)
  public author: User;

  @Field(() => [Category])
  @ManyToMany(() => Category, (category) => category.entries)
  @JoinTable()
  public categories: Category[];

  @Field(() => [Tag])
  @ManyToMany(() => Tag, (tag) => tag.entries)
  @JoinTable()
  public tags: Tag[];
}

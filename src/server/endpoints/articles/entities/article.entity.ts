import { ObjectType, Field } from '@nestjs/graphql';

import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('articles')
export class Article extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;
}

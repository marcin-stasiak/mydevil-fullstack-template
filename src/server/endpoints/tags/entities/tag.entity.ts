import { ObjectType, Field } from '@nestjs/graphql';

import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('tags')
export class Tag extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;
}

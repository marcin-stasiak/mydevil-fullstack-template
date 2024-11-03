import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('categories')
export class Category {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;
}

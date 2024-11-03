import { Field, ObjectType } from '@nestjs/graphql';

import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity('routes')
export class Route extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  public path: string;
}

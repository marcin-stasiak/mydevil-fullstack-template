import { ObjectType, Field, Int } from '@nestjs/graphql';

import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity('settings')
export class Setting extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  public path: string;
}

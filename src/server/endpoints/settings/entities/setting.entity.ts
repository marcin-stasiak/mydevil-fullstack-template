import { ObjectType, Field } from '@nestjs/graphql';

import { GraphQLJSON } from 'graphql-scalars';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity('settings')
export class Setting extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn({ type: 'varchar', length: 255 })
  public name: string;

  @Field(() => GraphQLJSON)
  @Column({ type: 'jsonb', nullable: false })
  public value: JSON;
}

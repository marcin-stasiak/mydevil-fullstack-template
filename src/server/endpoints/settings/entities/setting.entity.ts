import { ObjectType, Field } from '@nestjs/graphql';

import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity('settings')
export class Setting extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn({ type: 'varchar', length: 255 })
  public path: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 255 })
  public value: string;
}

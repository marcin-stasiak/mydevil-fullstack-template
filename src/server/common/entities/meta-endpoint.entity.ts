import { Field, ObjectType } from '@nestjs/graphql';

import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity('meta')
export class Meta extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn({ type: 'varchar', unique: true })
  public slug: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public title: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public description: string;
}

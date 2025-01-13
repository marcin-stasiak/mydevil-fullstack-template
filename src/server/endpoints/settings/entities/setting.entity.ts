import { ObjectType, Field } from '@nestjs/graphql';

import { Column, Entity, PrimaryColumn } from 'typeorm';

import { BaseEndpointEntity } from '../../../common/entities/base-endpoint.entity';

@ObjectType()
@Entity('settings')
export class Setting extends BaseEndpointEntity {
  @Field(() => String)
  @PrimaryColumn({ type: 'varchar', length: 255 })
  public path: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 255 })
  public value: string;
}

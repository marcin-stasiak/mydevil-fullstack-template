import { Field, ObjectType } from '@nestjs/graphql';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Entry } from './entry.entity';

@ObjectType()
@Entity('comments')
export class Comment extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public content: string;

  @Field(() => Entry)
  @ManyToOne(() => Entry, (entry) => entry.comments)
  public entry: Entry;

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;
}

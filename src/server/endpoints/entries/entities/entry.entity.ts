import { ObjectType, Field } from '@nestjs/graphql';

import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, UpdateDateColumn } from 'typeorm';

import { BaseEndpointEntity } from '../../../common/entities/base-endpoint.entity';
import { EntryStatus } from '../../../common/enums/entry-status.enum';
import { EntryType } from '../../../common/enums/entry-type.enum';
import { Category } from '../../categories/entities/category.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { User } from '../../users/entities/user.entity';

@ObjectType()
@Entity('entries')
export class Entry extends BaseEndpointEntity {
  @Field(() => String)
  @Column({ type: 'text' })
  public title: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public content: string;

  @Field(() => EntryType)
  @Column({ type: 'enum', enum: EntryType, default: EntryType.POST })
  public type: EntryType;

  @Field(() => EntryStatus)
  @Column({ type: 'enum', enum: EntryStatus, default: EntryStatus.DRAFTED })
  public status: EntryStatus;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.entries)
  public author: User;

  @Field(() => [Category])
  @ManyToMany(() => Category, (category) => category.entries)
  @JoinTable({ name: 'entries_categories' })
  public categories: Category[];

  @Field(() => [Tag])
  @ManyToMany(() => Tag, (tag) => tag.entries)
  @JoinTable({ name: 'entries_tags' })
  public tags: Tag[];

  @Field(() => Date)
  @CreateDateColumn()
  public createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  public updatedAt: Date;
}

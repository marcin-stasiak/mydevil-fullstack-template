import { ObjectType, Field } from '@nestjs/graphql';

import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

import { BaseEndpointEntity } from '../../../common/entities/base-endpoint.entity';
import { EntryStatus } from '../../../common/enums/entry-status.enum';
import { EntryType } from '../../../common/enums/entry-type.enum';
import { Category } from '../../categories/entities/category.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { User } from '../../users/entities/user.entity';
import { Comment } from './comment.entity';

@ObjectType()
@Entity('entries')
export class Entry extends BaseEndpointEntity {
  @Field(() => String)
  @Column({ type: 'varchar', unique: true })
  public slug: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public title: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public description: string;

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
  @JoinColumn({ name: 'author_id' })
  public author: User;

  @Field(() => [Category])
  @ManyToMany(() => Category, (category) => category.entries)
  @JoinTable({
    name: 'entries_categories',
    joinColumn: { name: 'entry_id' },
    inverseJoinColumn: { name: 'category_id' },
  })
  public categories: Category[];

  @Field(() => [Tag])
  @ManyToMany(() => Tag, (tag) => tag.entries)
  @JoinTable({
    name: 'entries_tags',
    joinColumn: { name: 'entry_id' },
    inverseJoinColumn: { name: 'tag_id' },
  })
  public tags: Tag[];

  @Field(() => [Comment], { nullable: 'items' })
  @OneToMany(() => Comment, (comment) => comment.entry)
  @JoinColumn({ name: 'entry_id' })
  public comments?: Comment[];
}

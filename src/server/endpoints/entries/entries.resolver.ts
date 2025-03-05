import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { DeleteResult } from 'typeorm';

import { EntryStatus } from '../../common/enums/entry-status.enum';
import { EntryType } from '../../common/enums/entry-type.enum';
import { Sort } from '../../common/enums/sort.enum';
import { NotFoundError } from '../../common/errors/not-found.error';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { Entry } from './entities/entry.entity';
import { EntriesService } from './entries.service';

@Resolver(() => Entry)
export class EntriesResolver {
  constructor(private readonly entriesService: EntriesService) {}

  @Mutation(() => Entry)
  public createEntry(@Args('createEntryInput') createEntryInput: CreateEntryInput): Promise<Entry> {
    return this.entriesService.create(createEntryInput);
  }

  @Query(() => [Entry], { name: 'entries' })
  public findAll(
    @Args('type', { type: () => EntryType, nullable: true }) type: EntryType,
    @Args('status', { type: () => EntryStatus, nullable: true }) status: EntryStatus,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 30 }) limit: number,
    @Args('offset', { type: () => Int, nullable: true, defaultValue: 0 }) offset: number,
    @Args('sort', { type: () => Sort, nullable: true, defaultValue: Sort.DESC }) sort: Sort,
  ): Promise<Entry[]> {
    return this.entriesService.findAll(type, status, limit, offset, sort);
  }

  @Query(() => Entry, { name: 'entry' })
  public async findOne(@Args('path', { type: () => String }) path: string): Promise<Entry> {
    const entry = await this.entriesService.findOneByPath(path);

    if (!entry) {
      throw new NotFoundError(`Entry with path "${path}" not found`);
    }

    return entry;
  }

  @Mutation(() => Entry)
  public updateEntry(@Args('updateEntryInput') updateEntryInput: UpdateEntryInput): Promise<Entry | null> {
    return this.entriesService.update(updateEntryInput);
  }

  @Mutation(() => Entry)
  public removeEntry(@Args('id', { type: () => String }) id: string): Promise<DeleteResult | null> {
    return this.entriesService.remove(id);
  }

  @Query(() => Int, { name: 'countEntries' })
  public count(): Promise<number> {
    return this.entriesService.count();
  }
}

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { Entry } from './entities/entry.entity';
import { EntriesService } from './entries.service';

@Resolver(() => Entry)
export class EntriesResolver {
  constructor(private readonly entriesService: EntriesService) {}

  @Mutation(() => Entry)
  public createEntry(@Args('createEntryInput') createEntryInput: CreateEntryInput) {
    return this.entriesService.create(createEntryInput);
  }

  @Query(() => [Entry], { name: 'entries' })
  public findAll(
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 30 }) limit: number,
    @Args('offset', { type: () => Int, nullable: true, defaultValue: 0 }) offset: number,
  ) {
    return this.entriesService.findAll(limit, offset);
  }

  @Query(() => Entry, { name: 'entry' })
  public findOne(@Args('slug', { type: () => String }) slug: string) {
    return this.entriesService.findOneBySlug(slug);
  }

  @Mutation(() => Entry)
  public updateEntry(@Args('updateEntryInput') updateEntryInput: UpdateEntryInput) {
    return this.entriesService.update(updateEntryInput);
  }

  @Mutation(() => Entry)
  public removeEntry(@Args('id', { type: () => String }) id: string) {
    return this.entriesService.remove(id);
  }

  @Query(() => Int, { name: 'countEntries' })
  public count() {
    return this.entriesService.count();
  }
}

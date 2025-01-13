import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

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
  public findAll() {
    return this.entriesService.findAll();
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

  @Query(() => Number, { name: 'countEntries' })
  public count() {
    return this.entriesService.count();
  }
}

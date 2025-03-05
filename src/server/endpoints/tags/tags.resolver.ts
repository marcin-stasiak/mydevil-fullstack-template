import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { NotFoundError } from 'src/server/common/errors/not-found.error';

import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';
import { TagsService } from './tags.service';

@Resolver(() => Tag)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tag)
  public createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
    return this.tagsService.create(createTagInput);
  }

  @Query(() => [Tag], { name: 'tags' })
  public findAll(
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 30 }) limit: number,
    @Args('offset', { type: () => Int, nullable: true, defaultValue: 0 }) offset: number,
  ) {
    return this.tagsService.findAll(limit, offset);
  }

  @Query(() => Tag, { name: 'tag' })
  public async findOne(@Args('path', { type: () => String }) path: string) {
    const tag = await this.tagsService.findOneByPath(path);

    if (!tag) {
      throw new NotFoundError(`Tag with path "${path}" not found`);
    }

    return tag;
  }

  @Mutation(() => Tag)
  public updateTag(@Args('updateTagInput') updateTagInput: UpdateTagInput) {
    return this.tagsService.update(updateTagInput);
  }

  @Mutation(() => Tag)
  public removeTag(@Args('id', { type: () => String }) id: string) {
    return this.tagsService.remove(id);
  }

  @Query(() => Int, { name: 'countTags' })
  public count() {
    return this.tagsService.count();
  }
}

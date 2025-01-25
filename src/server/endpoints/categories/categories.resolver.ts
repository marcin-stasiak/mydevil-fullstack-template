import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CategoriesService } from './categories.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  public createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categories' })
  public findAll(
    @Args('limit', { type: () => Number, defaultValue: 30 }) limit: number,
    @Args('offset', { type: () => Number, defaultValue: 0 }) offset: number,
  ) {
    return this.categoriesService.findAll(limit, offset);
  }

  @Query(() => Category, { name: 'category' })
  public findOne(@Args('slug', { type: () => String }) slug: string) {
    return this.categoriesService.findOneBySlug(slug);
  }

  @Mutation(() => Category)
  public updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput) {
    return this.categoriesService.update(updateCategoryInput);
  }

  @Mutation(() => Category)
  public removeCategory(@Args('id', { type: () => String }) id: string) {
    return this.categoriesService.remove(id);
  }

  @Query(() => Number, { name: 'countCategories' })
  public count() {
    return this.categoriesService.count();
  }
}

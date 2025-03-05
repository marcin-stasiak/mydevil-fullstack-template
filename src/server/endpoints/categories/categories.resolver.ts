import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { NotFoundError } from '../../common/errors/not-found.error';
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
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 30 }) limit: number,
    @Args('offset', { type: () => Int, nullable: true, defaultValue: 0 }) offset: number,
  ) {
    return this.categoriesService.findAll(limit, offset);
  }

  @Query(() => Category, { name: 'category' })
  public async findOne(@Args('path', { type: () => String }) path: string) {
    const category = await this.categoriesService.findOneByPath(path);

    if (!category) {
      throw new NotFoundError(`Category with path "${path}" not found`);
    }

    return category;
  }

  @Mutation(() => Category)
  public updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput) {
    return this.categoriesService.update(updateCategoryInput);
  }

  @Mutation(() => Category)
  public removeCategory(@Args('id', { type: () => String }) id: string) {
    return this.categoriesService.remove(id);
  }

  @Query(() => Int, { name: 'countCategories' })
  public count() {
    return this.categoriesService.count();
  }
}

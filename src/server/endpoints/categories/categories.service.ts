import { Injectable } from '@nestjs/common';

import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoriesService {
  public create(createCategoryInput: CreateCategoryInput) {
    return 'This action adds a new category';
  }

  public findAll() {
    return `This action returns all categories`;
  }

  public findOne(id: string) {
    return `This action returns a #${id} category`;
  }

  public update(updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${updateCategoryInput} category`;
  }

  public remove(id: string) {
    return `This action removes a #${id} category`;
  }
}

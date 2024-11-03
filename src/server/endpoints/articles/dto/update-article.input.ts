import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

import { CreateArticleInput } from './create-article.input';

@InputType()
export class UpdateArticleInput extends PartialType(CreateArticleInput) {
  @Field(() => Int)
  id: number;
}

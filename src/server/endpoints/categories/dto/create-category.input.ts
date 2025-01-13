import { InputType, Field } from '@nestjs/graphql';

import { BaseEndpointInput } from '../../../common/inputs/base-endpoint.input';

@InputType()
export class CreateCategoryInput extends BaseEndpointInput {
  @Field()
  public title: string;
}

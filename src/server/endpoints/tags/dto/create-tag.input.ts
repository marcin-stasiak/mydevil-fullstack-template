import { InputType, Field } from '@nestjs/graphql';

import { BaseEndpointInput } from '../../../common/inputs/base-endpoint.input';

@InputType()
export class CreateTagInput extends BaseEndpointInput {
  @Field(() => String)
  public slug: string;

  @Field(() => String)
  public name: string;

  @Field(() => String)
  public description: string;
}

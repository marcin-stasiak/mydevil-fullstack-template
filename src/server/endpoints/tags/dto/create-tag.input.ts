import { InputType, Field } from '@nestjs/graphql';

import { BaseEndpointInput } from '../../../common/inputs/base-endpoint.input';

@InputType()
export class CreateTagInput extends BaseEndpointInput {
  @Field()
  public name: string;
}

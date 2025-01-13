import { Field, InputType } from '@nestjs/graphql';

import { MetaEndpointInput } from './meta-endpoint.input';

@InputType()
export abstract class BaseEndpointInput {
  @Field()
  public meta: MetaEndpointInput;
}

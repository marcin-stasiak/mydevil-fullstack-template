import { Field, InputType } from '@nestjs/graphql';

import { BaseEndpointInput } from '../../../common/inputs/base-endpoint.input';

@InputType()
export class CreateSettingInput extends BaseEndpointInput {
  @Field()
  public name: string;
}

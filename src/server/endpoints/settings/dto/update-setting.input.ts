import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateSettingInput {
  @Field(() => String)
  public name: string;

  @Field(() => String)
  public value: string;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MetaEndpointInput {
  @Field(() => String)
  public slug: string;

  @Field(() => String)
  public title: string;

  @Field(() => String)
  public description: string;
}

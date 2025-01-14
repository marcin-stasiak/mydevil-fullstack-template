import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccountArgs {
  @Field(() => String)
  public accessToken: string;

  @Field(() => String)
  public refreshToken: string;
}

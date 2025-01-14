import { Field, InputType } from '@nestjs/graphql';

import { IsEmail, IsString } from 'class-validator';

@InputType()
export class LoginInput {
  @IsEmail()
  @Field(() => String)
  public email: string;

  @IsString()
  @Field(() => String)
  public password: string;
}

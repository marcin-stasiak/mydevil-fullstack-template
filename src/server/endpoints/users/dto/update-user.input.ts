import { InputType, Field, PartialType } from '@nestjs/graphql';

import { IsUUID } from 'class-validator';

import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsUUID()
  @Field(() => String)
  public id: string;
}

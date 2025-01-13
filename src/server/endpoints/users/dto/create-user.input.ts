import { InputType, Field } from '@nestjs/graphql';

import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

import { Gender } from '../../../common/enums/gender.enum';
import { BaseEndpointInput } from '../../../common/inputs/base-endpoint.input';

@InputType()
export class CreateUserInput extends BaseEndpointInput {
  @IsEmail()
  @Field(() => String)
  public email: string;

  @IsNotEmpty()
  @Field(() => String)
  public password: string;

  @IsEnum(Gender)
  @Field(() => Gender)
  public gender: Gender;
}

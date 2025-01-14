import { Field, InputType } from '@nestjs/graphql';

import { IsEmail, IsEnum, IsString } from 'class-validator';

import { Gender } from '../../../common/enums/gender.enum';

@InputType()
export class RegisterInput {
  @IsEmail()
  @Field(() => String)
  public email: string;

  @IsString()
  @Field(() => String)
  public password: string;

  @IsEnum(Gender)
  @Field(() => Gender, { nullable: true })
  public gender?: Gender;
}

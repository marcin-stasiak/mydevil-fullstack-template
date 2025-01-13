import { InputType, Field, PartialType } from '@nestjs/graphql';

import { IsUUID } from 'class-validator';

import { CreateSettingInput } from './create-setting.input';

@InputType()
export class UpdateSettingInput extends PartialType(CreateSettingInput) {
  @IsUUID()
  @Field(() => String)
  id: string;
}

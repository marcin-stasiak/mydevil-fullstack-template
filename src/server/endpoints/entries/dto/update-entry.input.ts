import { InputType, Field, PartialType } from '@nestjs/graphql';

import { IsUUID } from 'class-validator';

import { CreateEntryInput } from './create-entry.input';

@InputType()
export class UpdateEntryInput extends PartialType(CreateEntryInput) {
  @IsUUID()
  @Field(() => String)
  id: string;
}

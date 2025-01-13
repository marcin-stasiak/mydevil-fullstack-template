import { InputType, Field } from '@nestjs/graphql';

import { EntryStatus } from '../../../common/enums/entry-status.enum';
import { EntryType } from '../../../common/enums/entry-type.enum';
import { BaseEndpointInput } from '../../../common/inputs/base-endpoint.input';

@InputType()
export class CreateEntryInput extends BaseEndpointInput {
  @Field(() => String)
  public title: string;

  @Field(() => String)
  public content: string;

  @Field(() => EntryType)
  public type?: EntryType;

  @Field(() => EntryStatus)
  public status?: EntryStatus;
}

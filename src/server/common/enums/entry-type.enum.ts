import { registerEnumType } from '@nestjs/graphql';

export enum EntryType {
  PAGE = 'page',
  POST = 'post',
}

registerEnumType(EntryType, {
  name: 'EntryType',
});

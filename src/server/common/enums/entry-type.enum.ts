import { registerEnumType } from '@nestjs/graphql';

export enum EntryType {
  ARTICLE = 'article',
  POST = 'post',
}

registerEnumType(EntryType, {
  name: 'EntryType',
});

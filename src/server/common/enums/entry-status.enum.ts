import { registerEnumType } from '@nestjs/graphql';

export enum EntryStatus {
  DRAFTED = 'drafted',
  PENDING = 'pending',
  PUBLISHED = 'published',
}

registerEnumType(EntryStatus, {
  name: 'EntryStatus',
});

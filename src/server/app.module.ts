import { Module } from '@nestjs/common';

import { CommonModule } from './common/common.module';
import { AccountsModule } from './endpoints/accounts/accounts.module';
import { CategoriesModule } from './endpoints/categories/categories.module';
import { EntriesModule } from './endpoints/entries/entries.module';
import { SettingsModule } from './endpoints/settings/settings.module';
import { TagsModule } from './endpoints/tags/tags.module';
import { UsersModule } from './endpoints/users/users.module';

@Module({
  imports: [
    CommonModule,
    // Endpoints
    AccountsModule,
    CategoriesModule,
    EntriesModule,
    SettingsModule,
    TagsModule,
    UsersModule,
    // Integrations
  ],
})
export class AppModule {}

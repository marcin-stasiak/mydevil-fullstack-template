import { Module } from '@nestjs/common';

import { UsersModule } from '../users/users.module';
import { AccountsResolver } from './accounts.resolver';
import { AccountsService } from './accounts.service';
import { LocalStrategy } from './strategies/local.strategy';
import { TokenStrategy } from './strategies/token.strategy';

@Module({
  imports: [UsersModule],
  providers: [AccountsResolver, AccountsService, LocalStrategy, TokenStrategy],
})
export class AccountsModule {}

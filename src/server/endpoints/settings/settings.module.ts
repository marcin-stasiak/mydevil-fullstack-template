import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Setting } from './entities/setting.entity';
import { SettingsResolver } from './settings.resolver';
import { SettingsService } from './settings.service';

@Module({
  imports: [TypeOrmModule.forFeature([Setting])],
  providers: [SettingsResolver, SettingsService],
})
export class SettingsModule {}

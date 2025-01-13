import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Entry } from './entities/entry.entity';
import { EntriesResolver } from './entries.resolver';
import { EntriesService } from './entries.service';

@Module({
  imports: [TypeOrmModule.forFeature([Entry])],
  providers: [EntriesResolver, EntriesService],
})
export class EntriesModule {}

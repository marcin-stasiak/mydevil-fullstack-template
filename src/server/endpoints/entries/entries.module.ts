import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Comment } from './entities/comment.entity';
import { Entry } from './entities/entry.entity';
import { EntriesResolver } from './entries.resolver';
import { EntriesService } from './entries.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Entry])],
  providers: [EntriesResolver, EntriesService],
})
export class EntriesModule {}

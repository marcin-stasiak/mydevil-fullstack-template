import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, Repository } from 'typeorm';

import { EntryType } from '../../common/enums/entry-type.enum';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { Entry } from './entities/entry.entity';

@Injectable()
export class EntriesService {
  constructor(
    @InjectRepository(Entry)
    private readonly entryRepository: Repository<Entry>,
  ) {}

  public create(createEntryInput: CreateEntryInput): Promise<Entry> {
    const entry = this.entryRepository.create(createEntryInput);

    return this.entryRepository.save(entry);
  }

  public findAll(type: EntryType, limit: number = 30, offset: number = 0): Promise<Entry[]> {
    return this.entryRepository.find({ where: { type: type }, take: limit, skip: offset, relations: ['meta'] });
  }

  public findOneById(id: string): Promise<Entry | null> {
    return this.entryRepository.findOne({ where: { id: id } });
  }

  public findOneBySlug(slug: string): Promise<Entry | null> {
    return this.entryRepository.findOne({ where: { meta: { slug: slug } }, relations: ['meta'] });
  }

  public async update(updateEntryInput: UpdateEntryInput): Promise<Entry | null> {
    const entry = await this.entryRepository.preload({ id: updateEntryInput.id });

    if (!entry) {
      return null;
    }

    return this.entryRepository.save(Object.assign(entry, updateEntryInput));
  }

  public async remove(id: string): Promise<DeleteResult | null> {
    const entry = await this.entryRepository.preload({ id: id });

    if (!entry) {
      return null;
    }

    return this.entryRepository.delete(entry.id);
  }

  public count(): Promise<number> {
    return this.entryRepository.count();
  }
}

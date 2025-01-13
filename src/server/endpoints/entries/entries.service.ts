import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, Repository } from 'typeorm';

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

    if (entry) {
      return this.entryRepository.save(entry);
    }
  }

  public findAll(): Promise<Entry[]> {
    return this.entryRepository.find();
  }

  public findOneById(id: string): Promise<Entry> {
    return this.entryRepository.findOne({ where: { id: id } });
  }

  public findOneBySlug(slug: string): Promise<Entry> {
    return this.entryRepository.findOne({ where: { meta: { slug: slug } }, relations: ['meta'] });
  }

  public update(updateEntryInput: UpdateEntryInput): Promise<Entry> {
    const entry = this.entryRepository.preload({ id: updateEntryInput.id });

    if (entry) {
      return this.entryRepository.save(Object.assign(entry, updateEntryInput));
    }
  }

  public async remove(id: string): Promise<DeleteResult> {
    const entry = await this.entryRepository.preload({ id: id });

    if (entry) {
      return this.entryRepository.delete(entry.id);
    }
  }

  public count(): Promise<number> {
    return this.entryRepository.count();
  }
}

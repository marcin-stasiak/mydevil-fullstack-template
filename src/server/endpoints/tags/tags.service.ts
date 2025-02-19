import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, Repository } from 'typeorm';

import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  public create(createTagInput: CreateTagInput): Promise<Tag> {
    const tag = this.tagRepository.create(createTagInput);

    return this.tagRepository.save(tag);
  }

  public findAll(limit: number = 30, offset: number = 0): Promise<Tag[]> {
    return this.tagRepository.find({ take: limit, skip: offset });
  }

  public findOneById(id: string): Promise<Tag | null> {
    return this.tagRepository.findOne({ where: { id: id } });
  }

  public findOneBySlug(slug: string): Promise<Tag | null> {
    return this.tagRepository.findOne({ where: { slug: slug } });
  }

  public async update(updateTagInput: UpdateTagInput): Promise<Tag | null> {
    const tag = await this.tagRepository.preload({ id: updateTagInput.id });

    if (!tag) {
      return null;
    }

    return this.tagRepository.save(Object.assign(tag, updateTagInput));
  }

  public async remove(id: string): Promise<DeleteResult | null> {
    const tag = await this.tagRepository.preload({ id: id });

    if (!tag) {
      return null;
    }

    return this.tagRepository.delete(tag.id);
  }

  public count(): Promise<number> {
    return this.tagRepository.count();
  }
}

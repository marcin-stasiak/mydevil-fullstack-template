import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

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

  public findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  public findOneById(id: string): Promise<Tag> {
    return this.tagRepository.findOne({ where: { id: id } });
  }

  public findOneBySlug(slug: string): Promise<Tag> {
    return this.tagRepository.findOne({ where: { meta: { slug: slug } }, relations: ['meta'] });
  }

  public async update(updateTagInput: UpdateTagInput) {
    const tag = await this.tagRepository.preload({ id: updateTagInput.id });

    if (tag) {
      return this.tagRepository.save(Object.assign(tag, updateTagInput));
    }
  }

  public async remove(id: string) {
    const tag = await this.tagRepository.preload({ id: id });

    if (tag) {
      return this.tagRepository.delete(tag.id);
    }
  }

  public count(): Promise<number> {
    return this.tagRepository.count();
  }
}

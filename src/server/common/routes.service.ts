import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Meta } from './entities/meta-endpoint.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Meta)
    private readonly metaRepository: Repository<Meta>,
  ) {}

  public findOneBySlug(slug: string): Promise<Meta | null> {
    return this.metaRepository.findOne({ where: { slug: slug } });
  }
}

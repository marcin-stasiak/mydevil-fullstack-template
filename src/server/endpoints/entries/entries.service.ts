import { Injectable } from '@nestjs/common';

import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';

@Injectable()
export class EntriesService {
  constructor() {}

  public create(createEntryInput: CreateEntryInput) {
    return 'This action adds a new entry';
  }

  public findAll() {
    return `This action returns all entries`;
  }

  public findOne(id: string) {
    return `This action returns a #${id} entry`;
  }

  public update(updateEntryInput: UpdateEntryInput) {
    return `This action updates a #${updateEntryInput} entry`;
  }

  public remove(id: string) {
    return `This action removes a #${id} entry`;
  }
}

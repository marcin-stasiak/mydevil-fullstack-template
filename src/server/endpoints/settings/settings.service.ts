import { Injectable } from '@nestjs/common';

import { CreateSettingInput } from './dto/create-setting.input';
import { UpdateSettingInput } from './dto/update-setting.input';

@Injectable()
export class SettingsService {
  constructor() {}

  public create(createSettingInput: CreateSettingInput) {
    return 'This action adds a new setting';
  }

  public findAll() {
    return `This action returns all settings`;
  }

  public findOne(id: string) {
    return `This action returns a #${id} setting`;
  }

  public update(updateSettingInput: UpdateSettingInput) {
    return `This action updates a #${updateSettingInput} setting`;
  }

  public remove(id: string) {
    return `This action removes a #${id} setting`;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { UpdateSettingInput } from './dto/update-setting.input';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Setting)
    private readonly settingRepository: Repository<Setting>,
  ) {}

  public findAll(): Promise<Setting[]> {
    return this.settingRepository.find();
  }

  public findOneByName(name: string): Promise<Setting | null> {
    return this.settingRepository.findOne({ where: { name: name } });
  }

  public async update(updateSettingInput: UpdateSettingInput): Promise<Setting | null> {
    const setting = await this.settingRepository.preload({ name: updateSettingInput.name });

    if (!setting) {
      return null;
    }

    return this.settingRepository.save(Object.assign(setting, updateSettingInput));
  }
}

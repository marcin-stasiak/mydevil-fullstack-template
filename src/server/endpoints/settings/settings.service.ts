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

  public findOne(path: string): Promise<Setting> {
    return this.settingRepository.findOne({ where: { path: path } });
  }

  public update(updateSettingInput: UpdateSettingInput) {
    const setting = this.settingRepository.preload({ path: updateSettingInput.path });

    if (setting) {
      return this.settingRepository.save(Object.assign(setting, updateSettingInput));
    }
  }
}

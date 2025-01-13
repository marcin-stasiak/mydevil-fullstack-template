import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UpdateSettingInput } from './dto/update-setting.input';
import { Setting } from './entities/setting.entity';
import { SettingsService } from './settings.service';

@Resolver(() => Setting)
export class SettingsResolver {
  constructor(private readonly settingsService: SettingsService) {}

  @Query(() => [Setting], { name: 'settings' })
  public findAll() {
    return this.settingsService.findAll();
  }

  @Query(() => Setting, { name: 'setting' })
  public findOne(@Args('path', { type: () => String }) path: string) {
    return this.settingsService.findOne(path);
  }

  @Mutation(() => Setting)
  public updateSetting(@Args('updateSettingInput') updateSettingInput: UpdateSettingInput) {
    return this.settingsService.update(updateSettingInput);
  }
}

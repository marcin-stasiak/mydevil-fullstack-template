import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CreateSettingInput } from './dto/create-setting.input';
import { UpdateSettingInput } from './dto/update-setting.input';
import { Setting } from './entities/setting.entity';
import { SettingsService } from './settings.service';

@Resolver(() => Setting)
export class SettingsResolver {
  constructor(private readonly settingsService: SettingsService) {}

  @Mutation(() => Setting)
  public createSetting(@Args('createSettingInput') createSettingInput: CreateSettingInput) {
    return this.settingsService.create(createSettingInput);
  }

  @Query(() => [Setting], { name: 'settings' })
  public findAll() {
    return this.settingsService.findAll();
  }

  @Query(() => Setting, { name: 'setting' })
  public findOne(@Args('id', { type: () => String }) id: string) {
    return this.settingsService.findOne(id);
  }

  @Mutation(() => Setting)
  public updateSetting(@Args('updateSettingInput') updateSettingInput: UpdateSettingInput) {
    return this.settingsService.update(updateSettingInput);
  }

  @Mutation(() => Setting)
  public removeSetting(@Args('id', { type: () => String }) id: string) {
    return this.settingsService.remove(id);
  }
}

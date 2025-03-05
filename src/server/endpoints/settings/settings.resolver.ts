import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { NotFoundError } from '../../common/errors/not-found.error';
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
  public async findOne(@Args('name', { type: () => String }) name: string) {
    const setting = await this.settingsService.findOneByName(name);

    if (!setting) {
      throw new NotFoundError(`Setting with name "${name}" not found`);
    }

    return setting;
  }

  @Mutation(() => Setting)
  public updateSetting(@Args('updateSettingInput') updateSettingInput: UpdateSettingInput) {
    return this.settingsService.update(updateSettingInput);
  }
}

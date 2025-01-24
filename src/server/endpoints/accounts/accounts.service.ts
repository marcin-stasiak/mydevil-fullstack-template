import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AccountsService {
  constructor(
    private readonly config: ConfigService,
    private readonly usersService: UsersService,
  ) {}

  public validateUser(email: string, password: string): Promise<User | null> {
    const user = this.usersService.findOneByEmail(email);

    return user;
  }

  public validateToken(payload: any) {}
}

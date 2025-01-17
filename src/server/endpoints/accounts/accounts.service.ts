import { Injectable } from '@nestjs/common';

import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AccountsService {
  constructor(private readonly usersService: UsersService) {}

  public validateUser(email: string, password: string): Promise<User> {
    const user = this.usersService.findOneByEmail(email);

    if (user) {
      return user;
    }
  }

  public validateToken(payload: any) {}
}

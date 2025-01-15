import { Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';

@Injectable()
export class AccountsService {
  constructor(private readonly usersService: UsersService) {}

  public validateUser(username: string, password: string): Promise<any> {
    return { id: 1, username: 'admin' };
  }

  public validateToken(payload: any) {}
}

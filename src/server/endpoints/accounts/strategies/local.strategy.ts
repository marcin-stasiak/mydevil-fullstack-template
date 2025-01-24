import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-local';

import { User } from '../../users/entities/user.entity';
import { AccountsService } from '../accounts.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly accountsService: AccountsService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  public validate(email: string, password: string): Promise<User | null> {
    const user = this.accountsService.validateUser(email, password);

    // Return error here?

    return user;
  }
}

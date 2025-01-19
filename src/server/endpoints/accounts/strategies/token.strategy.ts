import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { AccountsService } from '../accounts.service';

@Injectable()
export class TokenStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly config: ConfigService,
    private readonly accountsService: AccountsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('app.tokenSecret'),
    });
  }

  public validate(payload: any): Promise<Us> {
    const user = this.accountsService.validateToken(payload.id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  public async validateUser(username: string, password: string): Promise<any> {
    return { id: 1, username: 'admin' };
  }
}

import { registerAs } from '@nestjs/config';

import process from 'node:process';

export default registerAs('app', () => ({
  secret: process.env.APP_JWT_SECRET || 'secret',
}));

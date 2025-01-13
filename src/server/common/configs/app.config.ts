import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  secret: process.env.APP_JWT_SECRET || 'secret',
}));

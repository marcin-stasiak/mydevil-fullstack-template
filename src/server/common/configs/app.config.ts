import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  tokenSecret: process.env.APP_JWT_SECRET || 'secret',
  serveStatic: process.env.APP_SERVE_STATIC === 'true' || false,
}));

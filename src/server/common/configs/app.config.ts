import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  language: process.env.APP_LANGUAGE || 'en',
  tokenSecret: process.env.APP_JWT_SECRET || 'secret',
  serveStatic: process.env.APP_SERVE_STATIC === 'true' || false,
}));

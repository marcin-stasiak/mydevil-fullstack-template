import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  language: process.env.APP_LANGUAGE || 'en',
  timezone: process.env.APP_TIMEZONE || 'UTC',
  baseURL: process.env.APP_BASE_URL || 'http://localhost:3000',
  tokenSecret: process.env.APP_JWT_SECRET || 'secret',
  serveStatic: process.env.APP_SERVE_STATIC === 'true' || false,
}));

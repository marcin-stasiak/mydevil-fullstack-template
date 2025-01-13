import { registerAs } from '@nestjs/config';

import * as process from 'node:process';

export default () => ({
  development: process.env.NODE_ENV !== 'production',
  port: Number.parseInt(process.env.PORT, 10) || 3000,
});

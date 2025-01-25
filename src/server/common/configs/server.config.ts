import { isUndefined } from '@nestjs/common/utils/shared.utils';

export default () => ({
  development: process.env.NODE_ENV !== 'production',
  debug: !isUndefined(process.env.DEBUG),
  port: process.env.PORT || 3000,
});

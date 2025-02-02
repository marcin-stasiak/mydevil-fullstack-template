export default {
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  importOrder: [
    '^@nestjs/(.*)$',
    '^react(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^./common/configs(.*)$',
    '^./common/middlewares(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderParserPlugins: ['typescript', 'classProperties', 'decorators-legacy'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  overrides: [
    {
      files: '*.hbs',
      options: {
        parser: 'html',
      },
    },
    {
      files: '*.tsx',
      options: {
        parser: 'babel-ts',
      },
    },
  ],
};

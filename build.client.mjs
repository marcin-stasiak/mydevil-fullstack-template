// @ts-check
import esbuild from 'esbuild';
import cleanPlugin from 'esbuild-plugin-clean';
import manifestPlugin from 'esbuild-plugin-manifest';

const production = process.env.NODE_ENV === 'production';
const title = JSON.stringify('browser');
const baseURL = JSON.stringify(process.env.APP_BASE_URL || 'http://localhost:3000');

const options = {
  entryPoints: ['src/client/main.tsx'],
  outdir: 'public/assets',
  bundle: true,
  minify: production,
  sourcemap: !production,
  define: {
    'process.title': title,
    'process.env.APP_BASE_URL': baseURL,
  },
  plugins: [
    cleanPlugin({ cleanOnStartPatterns: ['public/assets'] }),
    manifestPlugin({ extensionless: 'input', hash: production, shortNames: true }),
  ],
  logLevel: 'info',
};

if (production) {
  await esbuild.build(options);
} else {
  const context = await esbuild.context(options);
  await context.watch();
}

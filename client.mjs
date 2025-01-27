import esbuild from 'esbuild';
import cleanPlugin from 'esbuild-plugin-clean';
import manifestPlugin from 'esbuild-plugin-manifest';

const production = process.env.NODE_ENV === 'production';
const options = {
  entryPoints: ['src/client/main.tsx'],
  outdir: 'public/assets',
  bundle: true,
  minify: production,
  sourcemap: !production,
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

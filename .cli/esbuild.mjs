import * as esbuild from 'esbuild';

esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  color: true,
  platform: 'node',
  target: 'node18',
  outfile: 'dist/index.js',
  alias: {
    commands: './src/commands',
    models: './src/models',
    utils: './src/utils',
  }
});

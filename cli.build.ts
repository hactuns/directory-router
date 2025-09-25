import { build, BuildOptions } from 'esbuild';

// Common options
const common: BuildOptions = {
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'cjs',
  tsconfig: 'tsconfig.json',
};

(async () => {
  try {
    // Build CLI
    await build({
      entryPoints: ['src/cli.ts'],
      outfile: './bin/cli.js',
      banner: { js: '#!/usr/bin/env node' },
      ...common,
    });

    // Build server runtime
    await build({
      entryPoints: ['src/server.ts'],
      outfile: './bin/server.js',
      ...common,
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();

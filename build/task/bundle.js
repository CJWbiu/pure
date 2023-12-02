import { build } from 'vite';
import path from 'path';
import postcssLit from 'rollup-plugin-postcss-lit';
import { compRoot, outputDir } from '../util';

export const buildBundle = async () => {
  try {
    await build({
      plugins: [postcssLit()],
      outputDir: outputDir,
      build: {
        lib: {
          entry: path.resolve(compRoot, 'index.ts'),
          name: 'PureComponents',
          fileName: 'pure-components',
          formats: ['iife', 'es'],
        },
      },
    });
  } catch (error) {
    console.log('[build] build bundle failed: ', error);
  }
};

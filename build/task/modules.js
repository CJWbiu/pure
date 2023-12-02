import { build } from 'vite';
import glob from 'fast-glob';
import path from 'path';
import postcssLit from 'rollup-plugin-postcss-lit';
import { compRoot, outputDir } from '../util';

async function getInput() {
  try {
    const inputFiles = await glob('*/index.ts', {
      ignore: ['node_modules'],
      absolute: true,
      onlyFiles: true,
      cwd: compRoot,
    });

    return Object.fromEntries(inputFiles.map(file => [path.relative('packages/components', file.slice(0, -8)), file]));
  } catch (error) {
    console.log('[build] get input files failed: ', error);
    return null;
  }
}

export const buildModules = async () => {
  const input = await getInput();

  try {
    await build({
      plugins: [postcssLit()],
      build: {
        lib: {
          entry: input,
        },
        rollupOptions: {
          output: {
            dir: path.resolve(outputDir, 'es'),
            format: 'es',
          },
        },
      },
    });
  } catch (error) {
    console.log('[build] build modules failed: ', error);
  }
};

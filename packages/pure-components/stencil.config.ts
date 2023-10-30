import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import path from 'path';

const globalStyle = path.resolve('../pure-themes/lib/default/index.css');

export const config: Config = {
  namespace: 'pure-components',
  devServer: { openBrowser: false },
  globalStyle,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [sass()],
};

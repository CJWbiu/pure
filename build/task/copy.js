import fs from 'fs';
import path from 'path';
import { outputDir, compRoot } from '../util';

const pkgFileName = 'package.json';

export const copyFiles = async () => {
  try {
    fs.copyFileSync(path.resolve(compRoot, pkgFileName), path.resolve(outputDir, pkgFileName));
  } catch (error) {
    console.log('copy file failed: ', error);
  }
};

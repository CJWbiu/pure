import { series, parallel } from 'gulp';
import { buildBundle, buildModules, copyFiles } from './build/task';

export default series(parallel(buildBundle, buildModules), copyFiles);

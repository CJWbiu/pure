const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const watch = require('gulp-watch');

const inputPath = './src/*/index.scss';
const outputPath = './lib';

function buildThemes() {
  return src(inputPath)
    .pipe(sass.sync())
    .pipe(cssmin({ removeComments: true }))
    .pipe(dest(outputPath));
}

function runDev() {
  return watch(inputPath, { verbose: true }, () => {
    src(inputPath).pipe(sass.sync()).pipe(dest(outputPath));
  });
}

exports.build = buildThemes;
exports.dev = runDev;

const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');
const fs = require('fs');

const source = path.resolve('src/global.scss');
const target = path.resolve('src/lib');
const mapTarget = '';

function buildStyles() {
  return gulp
    .src(source) // source file
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass().on('error', sass.logError)) // compile SCSS to CSS, minify css and log errors
    .pipe(sourcemaps.write(mapTarget)) // sourcemaps are written to .map file
    .pipe(gulp.dest(target)); // destination folder
}

function watchChanges() {
  gulp.watch('src/global.scss', () => buildStyles);
}

exports.default = gulp.series(buildStyles, watchChanges);

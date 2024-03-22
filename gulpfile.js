const gulp = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const sourcemaps = require("gulp-sourcemaps");
const path = require("path");
const fs = require("fs");

const source = path.resolve("src/global.scss");
const target = path.resolve("src/lib");
const mapTarget = path.resolve("src/lib/target");

function buildStyles() {
  return gulp
    .src(source)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(target));
}

function watchChanges() {
  gulp.watch("src/global.scss", buildStyles);
}

exports.default = gulp.series(buildStyles, watchChanges);

// fs.writeFileSync(path.resolve(target), result.css.toString());

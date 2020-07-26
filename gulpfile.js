const { src, dest, parallel, watch, task } = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const css = () =>
  src('src/styles/app.scss')
    .pipe(sass())
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(dest('dist'));

const criticalCss = () =>
  src('src/styles/critical.scss')
    .pipe(sass())
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(dest('src/_includes'));

task('buildCss', parallel(css, criticalCss));
task('watch', () => watch('src/styles/**/*.scss', parallel('buildCss')));

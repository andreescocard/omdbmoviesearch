'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');

gulp.task('workflowcss', function () {
 gulp.src('./assets/scss/*.scss')
 .pipe(sourcemaps.init())
 .pipe(sass().on('error', sass.logError))
 .pipe(autoprefixer({
 browsers: ['last 2 versions'],
 cascade: false
 }))
 .pipe(cssnano())
 .pipe(sourcemaps.write('./'))
 .pipe(gulp.dest('./assets/css/'))
});

gulp.task('workflowjs', function() {
    gulp.src(['assets/js/*.js'])
      .pipe(minify())
      .pipe(gulp.dest('assets/js'))
  });
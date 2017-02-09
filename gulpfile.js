var gulp = require('gulp'),
    jade = require('gulp-jade'),
    data = require('gulp-data'),
    jsonminify = require('gulp-jsonminify'),
    sass = require('gulp-ruby-sass'),
    cleanCSS = require('gulp-clean-css'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify');

gulp.task('jsonminify', function () {
    return gulp.src(['jade/data.jade'])
        .pipe(jsonminify())
        .pipe(gulp.dest('jade/min'));
});

gulp.task('jade', function() {
  return gulp.src('jade/index.jade')
    .pipe(data(function (file) {
      return require('./jade/data.jade');
    }))
    .pipe(jade())
    .pipe(gulp.dest('www/'));
});

gulp.task('sass', function() {
  return sass('sass/style-responsive.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('www/css'))
});

gulp.task('minify-css', function() {
  return gulp.src('www/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('deploy/css/min'));
});

gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('js/script-responsive.js')
        .pipe(browserify())
        .pipe(gulp.dest('www/js'))
});

gulp.task('uglifyJS', function () {
  gulp.src('js/script-responsive.js')
      .pipe(uglify())
      .pipe(gulp.dest('deploy/js'))
});

gulp.task('default', ['jade', 'sass', 'scripts']);
gulp.task('production', ['minify-css', 'uglifyJS']);

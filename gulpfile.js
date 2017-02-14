var gulp = require('gulp'),
    jade = require('gulp-jade'),
    data = require('gulp-data'),
    jsonminify = require('gulp-jsonminify'),
    sass = require('gulp-ruby-sass'),
    cleanCSS = require('gulp-clean-css'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    gulpSequence = require('gulp-sequence');

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
        .pipe(gulp.dest('www/css'));
});

gulp.task('minify-css', function() {
  return gulp.src('www/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('deploy/css'));
});

gulp.task('scripts', function() {
  gulp.src('js/script-responsive.js')
      .pipe(browserify())
      .pipe(gulp.dest('www/js'));
});

gulp.task('copy', function() {
  gulp.src(['js/video.js', 'js/socialFeeds.js'])
      .pipe(gulp.dest('www/js'));
});

gulp.task('copy-images', function() {
  gulp.src('www/images/*')
      .pipe(gulp.dest('deploy/images'));
});

gulp.task('uglifyJS', function () {
  gulp.src('www/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('deploy/js'));
});

gulp.task('default', gulpSequence(['jsonminify'], ['jade', 'sass', 'scripts', 'copy', 'copy-images']));
gulp.task('build', gulpSequence('default', ['minify-css', 'uglifyJS']));

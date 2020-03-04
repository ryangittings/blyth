// Grab our gulp packages
var gulp = require('gulp');

const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  scope: ['devDependencies'],
});

const browserSync = $.browserSync.create();
const reload = browserSync.reload;

gulp.task('browserSync', function() {
  browserSync.init({
      proxy: "blyth.test",
      open: true,
      notify: false
  });
  gulp.watch("*.php").on("change", reload);
});

// Minify Javascript files
gulp.task('compress', function() {
  return gulp.src(['assets/src/js/**/*.js'])
      .pipe($.minify())
      .pipe(gulp.dest('assets/js'))
});

// Compiles sass into Assets

gulp.task('css', function () {
  return gulp
      .src('assets/src/css/app.css')
      .pipe($.sourcemaps.init())
      .pipe($.postcss([$.postcssImport(), $.cssnano()]))
      .pipe($.sourcemaps.write())
      .pipe($.rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('assets/css'))
      .pipe(browserSync.stream());
});

// Process and Optimizing Images
gulp.task('images', function() {
  return gulp.src('assets/src/img/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
      .pipe($.cache($.imagemin({
          interlaced: true,
      })))
      .pipe(gulp.dest('assets/img'))
});

// Watchers
gulp.task('watch', function() {
  gulp.watch('assets/src/css/**/*.css', gulp.series('css'));
  gulp.watch('assets/src/js/**/*.js', gulp.series('compress'));
  gulp.watch('*.html', reload);
  gulp.watch('assets/src/img/**/*.+(png|jpg|jpeg|gif|svg)', gulp.series('images'));
});

// Cleaning
gulp.task('clean', function (done) {
  $.del.sync(['./assets/img']);
  done();
});

// Build Sequences
// ---------------

gulp.task('default', gulp.parallel(['clean', 'css', 'images', 'compress', 'browserSync'], 'watch'));
// Grab our gulp packages
var gulp = require('gulp');

const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  scope: ['devDependencies'],
});

const browserSync = $.browserSync.create();

const paths = {
  url: "blyth.test",
  styles: {
    watch: ["./assets/src/css/**/*.css"],
    src: ["./assets/src/css/*.css"],
    dest: "./assets/css"
  },
  scripts: {
    watch: ["./assets/src/js/**/*.js"],
    src: ["./assets/src/js/*.js"],
    dest: "./assets/js"
  },
  assets: {
    src: ['./assets/src/img/**/*.+(png|jpg|jpeg|gif|svg)'],
    dest: "./assets/img"
  }
};

// Minify Javascript files
gulp.task('scripts', function () {
  return gulp.src(paths.scripts.src)
    .pipe(
      $.babel({
        presets: ["@babel/env"]
      })
    )
    .pipe($.minify({
      ext: {
        src: ".js",
        min: ".min.js"
      }
    }))
    .pipe(gulp.dest(paths.scripts.dest))
});

// Compiles sass into Assets
gulp.task('css', function () {
  return gulp
    .src(paths.styles.src)
    .pipe($.postcss([$.postcssImport(), $.cssnano()]))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
});

// Process and Optimizing Images
gulp.task('assets', function () {
  return gulp.src(paths.assets.src)
    .pipe($.cache($.imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest(paths.assets.dest))
});

// Watchers
gulp.task('watch', function () {
  browserSync.init({
    proxy: paths.url,
    open: true,
    notify: false
  });

  gulp.watch(paths.styles.watch, gulp.series('css'));
  gulp.watch(paths.scripts.watch, gulp.series('scripts', reload));
  gulp.watch("**/*.php", reload);
  gulp.watch('**/*.html', reload);
  gulp.watch(paths.assets.src, gulp.series('assets'));
});

// Browsersync Helper
function reload(done) {
  browserSync.reload();
  done();
}

// Cleaning
gulp.task('clean', function (done) {
  $.del.sync([paths.assets.dest]);
  done();
});

// Build Sequences
gulp.task('default', gulp.parallel(['clean', 'css', 'assets', 'scripts']));
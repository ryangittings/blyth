// Grab our gulp packages
const $ = require('gulp-load-plugins')({
  pattern: ['*', '*/*'],
  scope: ['devDependencies']
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
    src: './assets/src/js',
    dest: "assets/js"
  },
  assets: {
    src: ['./assets/src/img/**/*.+(png|jpg|jpeg|gif|svg)'],
    dest: "./assets/img"
  }
};

// Minify Javascript files
$.gulp.task('scripts', function () {
  var b = $.browserify({
    entries: `${paths.scripts.src}/main.js`,
    debug: true,
  }).transform("babelify", {presets: ["@babel/preset-env"]});

  return b.bundle()
    .pipe($.plumber())
    .pipe($.vinylSourceStream('main.js'))
    .pipe($.vinylBuffer())
    .pipe($.uglify())
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.sourcemaps.write('./'))
    .pipe($.gulp.dest(paths.scripts.dest));
});

// Compiles sass into Assets
$.gulp.task('css', function () {
  return $.gulp
    .src(paths.styles.src)
    .pipe($.postcss([$.postcssImport(), $.cssnano({
      preset: ['default', {
        calc: false,
      }],
    })]))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
});

// Process and Optimizing Images
$.gulp.task('assets', function () {
  return $.gulp.src(paths.assets.src)
    .pipe($.cache($.imagemin({
      interlaced: true,
    })))
    .pipe($.gulp.dest(paths.assets.dest))
});

// Watchers
$.gulp.task('watch', function () {
  browserSync.init({
    proxy: paths.url,
    open: false,
    notify: false
  });

  $.gulp.watch(paths.styles.watch, $.gulp.series('css'));
  $.gulp.watch(paths.scripts.watch, $.gulp.series('scripts'));
  $.gulp.watch("**/*.php", reload);
  $.gulp.watch('**/*.html', reload);
  $.gulp.watch(paths.assets.src, $.gulp.series('assets'));
});

// Browsersync Helper
function reload(done) {
  browserSync.reload();
  done();
}

// Cleaning
$.gulp.task('clean', function (done) {
  $.del.sync([paths.assets.dest]);
  done();
});

// Build Sequences
$.gulp.task('default', $.gulp.parallel(['clean', 'css', 'assets', 'scripts']));
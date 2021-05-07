const postcss = require('gulp-postcss')
const precss = require('precss')
const tailwind = require('tailwindcss')
const gulp = require('gulp')

gulp.task('css', function () {
  return gulp.src('./src/*.css').pipe(
    postcss([
      precss(),
      tailwind(),
    ])
  ).pipe(
    gulp.dest('themes')
  );
});

gulp.task('css:dev', function () {
  gulp.watch(['./src/*.css'], gulp.series(['css']))
})

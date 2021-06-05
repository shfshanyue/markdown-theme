const postcss = require('gulp-postcss')
const precss = require('precss')
const tailwind = require('tailwindcss')
const gulp = require('gulp')
const rename = require('gulp-rename')
const cleanCss = require('gulp-clean-css')
const through2 = require('through2')

gulp.task('css', function () {
  return gulp.src('./src/*.css')
    .pipe(postcss([
      precss(),
      tailwind(),
    ]))
    .pipe(gulp.dest('themes'))
    .pipe(cleanCss())
    .pipe(rename((path) => {
      path.extname = '.js'
    }))
    .pipe(through2.obj(function(file, _, cb) {
      if (file.isBuffer()) {
        const code = `module.exports = \`${file.contents.toString()}\``
        file.contents = Buffer.from(code)
      }
      cb(null, file);
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css:dev', function () {
  gulp.watch(['./src/*.css'], gulp.series(['css']))
})

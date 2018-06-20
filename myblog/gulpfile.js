const gulp = require('gulp');
const minifycss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const htmlclean = require('gulp-htmlclean');
const imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  return gulp.src('./source/images/**/*.+(png|jpg|jpeg|gif|svg|)')
    .pipe(imagemin({
      interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
      optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
      progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
      multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('./source/images'));
});
// 压缩 public 目录 css文件
gulp.task('minify-css', function() {
  return gulp.src('./source/**/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('./source'));
});

// 压缩 public 目录 html文件
gulp.task('minify-html', function() {
  return gulp.src('./source/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    }))
    .pipe(gulp.dest('./source'))
});

// 压缩 public/js 目录 js文件
gulp.task('minify-js', function() {
  return gulp.src('./source/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./source'));
});

gulp.task('images', function() {
  return gulp.src('./public/images/*.+(png|jpg|jpeg|gif|svg|)')
    .pipe(imagemin({
      interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
      optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
      progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
      multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('./public/dist/images'));
});


gulp.task('default', ['minify-html', 'minify-css']);
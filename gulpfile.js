var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMinify = require('gulp-css');

gulp.task('css', function(){
  gulp.src([
    './css/normalize.css',
    './animsition/dist/css/animsition.min.css',
    './slick/slick/slick.css',
    './slick/slick/slick-theme.css',
    './css/portfolio.css'
  ])
  .pipe(concat('app.css'))
  .pipe(cssMinify())
  .pipe(gulp.dest('./css'));
});


gulp.task('scripts',function(){
    gulp.src([
      './animsition/dist/js/animsition.min.js',
      './slick/slick/slick.min.js',
      './portfolio.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});



gulp.task('watchCSS', function(){
  //
  gulp.watch(['css/**/*.css','js/**/*.js']);
});
gulp.task('default',['css','scripts']);

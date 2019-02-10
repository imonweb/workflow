/*  Gulp V.4.0 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var SOURCEPATHS = {
  sassSource : 'src/scss/*.scss'
}

var APPPATH = {
  root  : 'app/',
  css   : 'app/css',
  js    : 'app/js'
}

function styles(){
  gulp.task('sass', function(){
        // return gulp.src('src/scss/app.scss')
        return gulp.src(SOURCEPATHS.sassSource)
          .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
          // .pipe(gulp.dest('app/css'));
          .pipe(gulp.dest(APPPATH.css));
  });
}

function service(){
  gulp.task('serve', ['sass'], function(){
    browserSync.init([APPPATH.css + '/*.css', APPPATH.root + '/*.html', APPPATH.js + '/*.js'], {
      server: {
        baseDir : APPPATH.root
      }
    })
  });
}



var build = gulp.parallel(styles);

gulp.task(build, service);
gulp.task('default', build);

var gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-minify-css'),
    path = require('path');

gulp.task('build-less', function(){
    return gulp.src('./less/bootstrap.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  	gulp.watch('./less/*.less', ['build-less']);
});
var gulp = require('gulp'),
	less = require('gulp-less'),
    path = require('path');

gulp.task('build-less', function(){
    return gulp.src('./less/bootstrap.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  	gulp.watch('./less/*.less', ['build-less']);
});
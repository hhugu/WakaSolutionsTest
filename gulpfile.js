'use strict';
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
	connect.server({
		port: 8085,
		root: 'app',
		livereload: true
	});
});

gulp.task('files', function() {
	gulp.src('./app/*')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['./app/*'], ['files']);
});

gulp.task('run', ['connect', 'watch']);
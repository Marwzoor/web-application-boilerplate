'use strict';

/**
 * Define your paths and variables here
 */
var options = {
	sassSrc: './resources/assets/sass/**/*.scss',
	sassDest: './assets/css/',
	jsSrc: './resources/assets/javascripts/**/*.js',
	jsDest: './assets/js/',
	jsDestFileName: 'application.js',
	mangleDistJs: true
};

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
	return gulp.src(options.sassSrc)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(options.sassDest));

});

gulp.task('js', function() {
	return gulp.src(options.jsSrc)
		.pipe(concat(options.jsDestFileName))
		.pipe(gulp.dest(options.jsDest));
});

gulp.task('watch', function() {
	gulp.watch(options.sassSrc, ['sass']);
	gulp.watch(options.jsSrc, ['js']);
})

gulp.task('watch:sass', function () {
	gulp.watch(options.sassSrc, ['sass']);
});

gulp.task('watch:js', function() {
	gulp.watch(options.jsSrc, ['js']);
});

gulp.task('dist', function() {
	gulp.src(options.sassSrc)
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(options.sassDest));

	gulp.src(options.jsSrc)
		.pipe(concat(options.jsDestFileName))
		.pipe(gulp.dest(options.jsDest));

	gulp.src(options.jsDest + options.jsDestFileName)
		.pipe(uglify({mangle: options.mangleDistJs}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(options.jsDest));
});
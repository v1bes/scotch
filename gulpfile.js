"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');


/*
 * You can eigher use 'gulp sass' to compile your sass to css or
 * 'gulp watch' to start a watcher, which will automatically compile
 * when you make changes to any sass file.
 */

// Sass to css
gulp.task('sass', () => {
    return gulp.src('kit/css/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('kit/css/'));
});


// Watcher
gulp.task('watch', () => {
    gulp.watch('kit/**/*.sass', ['sass']);
});
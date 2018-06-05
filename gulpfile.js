"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');

const paths = {
    styles: {
        src: 'styles/**/*.sass',
        dest: 'styles/css/'
    }
};


/*
 * Define tasks
 */

//sass to css
gulp.task('sass', function(){
    return gulp.src('./sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});




const gulp = require('gulp');
const sass = require('gulp-sass');
const autoPreFixer = require('gulp-autoprefixer');
const cssMin = require('gulp-cssmin');

gulp.task('compile', () => {
    return gulp.src('./src/*.scss')
        .pipe(sass.sync())
        .pipe(autoPreFixer({
            browsers: ['ie > 9', 'last 2 versions'],
            cascade: false
        }))
        .pipe(cssMin())
        .pipe(gulp.dest('./lib'));
});

gulp.task('copyFont', () => {
    return gulp.src('./src/fonts/**')
        .pipe(cssMin())
        .pipe(gulp.dest('./lib/fonts'));
});

gulp.task('build', ['compile', 'copyFont']);

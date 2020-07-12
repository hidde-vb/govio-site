const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task('css', function () {
    return gulp.src('./_includes/scss/main.scss')
        .pipe(sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError))
        .pipe(gulp.dest('./_site/css'));
});
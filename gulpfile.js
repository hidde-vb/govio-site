const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task('sass', function () {
    return gulp.src('css/**/*.scss')
        .pipe(sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError))
        .pipe(gulp.dest('./_site/css'));
});

gulp.task('watch', function () {
    gulp.watch('css/**/*.scss', gulp.series('sass'));
})
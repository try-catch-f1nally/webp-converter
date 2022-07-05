const gulp = require("gulp");
const webp = require("gulp-webp");

const convert = () => gulp.src("input_img/**/*")
    .pipe(webp())
    .pipe(gulp.dest("output_img"));

gulp.task(convert);
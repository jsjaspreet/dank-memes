const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const parallel = require("concurrent-transform");
const os = require("os");
const rename = require("gulp-rename");

const numCPUs = os.cpus().length;

gulp.task('thumbnails', function () {
  gulp.src('enumerated/*')
    .pipe(parallel(
      imageResize({ width: 350, noProfile: true, quality: 0.75}),
      numCPUs
    ))
    .pipe(parallel(
      rename((path) => path.basename += "-T"),
      numCPUs
    ))
    .pipe(gulp.dest('enumerated-thumbnails'));
});

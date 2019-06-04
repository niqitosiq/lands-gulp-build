var fontfacegen = require('fontfacegen');
var map = require('map-stream');
var gulp         = require('gulp'),
config       = require('../config');
gulp.task('fontgen', function() {
  return gulp.src(config.src.fonts + "/*.{ttf,otf}")
    .pipe(map(function(file, cb) {
      fontfacegen({
        source: file.path,
        dest: config.dest.fonts
      });
      cb(null, file);
    }));
});
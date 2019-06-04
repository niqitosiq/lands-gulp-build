var gulp        = require('gulp');
var config      = require('../config');

gulp.task('build', function(cb) {
    gulp.series(
        'sass',
        cb
    );
});
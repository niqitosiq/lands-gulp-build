var gulp        = require('gulp');
var config      = require('../config');

gulp.task('default', gulp.parallel('build', "watch", "server"));


var gulp        = require('gulp');
var config      = require('../config');

gulp.task('default', function(cb) {
	gulp.series('build', 'watch', 'server', cb)
});

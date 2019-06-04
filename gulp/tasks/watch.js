var gulp		 = require('gulp'),
	config 		 = require('../config');

gulp.task('watch',
		gulp.parallel('sass:watch', 'images:watch')
	)
;

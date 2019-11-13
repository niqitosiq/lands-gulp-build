var gulp		 = require('gulp'),
	config 		 = require('../config');

gulp.task('watch',
	gulp.parallel('sass:watch', 'images:watch', 'js:watch', "public:watch", 'svgo:watch', 'sprite:svg:watch', 'pug:watch')
);

var gulp         = require('gulp'),
    config       = require('../config'),
    uglify		 = require("gulp-uglify"),
    concat		 = require("gulp-concat");



gulp.task('js', function (done) {
	return gulp.src([config.src.js+'/libs/*.js', config.src.js+'/*.js'])
		.pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest.js+'/'));
})
	
gulp.task('js:watch', function() {
    gulp.watch(config.src.js+'/*', gulp.parallel('js'));
});
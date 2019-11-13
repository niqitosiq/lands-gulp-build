var gulp		 = require('gulp'),
 	sass         = require('gulp-sass'),
	sourcemaps   = require('gulp-sourcemaps'),
	postcss      = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	mqpacker     = require('css-mqpacker'),
	config 		 = require('../config'),
    browserSync  = require('browser-sync').create();

gulp.task('public', function(done) {
    return gulp
        .src(config.src.public + '/**/*')
        .pipe(gulp.dest(config.dest.root))

});

gulp.task('public:watch', function(){
    gulp.watch(config.src.public + '/**/*', gulp.series('public'));
})
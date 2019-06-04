var gulp		= require("gulp"),
	watch 		= require('gulp-watch'),
	newer		= require('gulp-newer'),
	imagemin 	= require('gulp-imagemin'),
	sass 		= require('gulp-sass'),
	config 		 = require('../config');

// image processing
gulp.task('images', function(){
  const out = config.dest.root + '/img';
  console.log(config.src.img + '/*')
  return gulp.src(config.src.img + '/*')
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out));
});
gulp.task('images:watch', function(){
	console.log(config.src.img + '/**/*.{jpg,png,gif,jpeg}')
	gulp.watch(config.src.img + '/**/*.{jpg,png,gif,jpeg}', gulp.parallel('images'));
})
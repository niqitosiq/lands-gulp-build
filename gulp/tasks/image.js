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
    .pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({
				optimizationLevel: 7,
				bitDepthReduction: true,
				colorTypeReduction: true,
				paletteReduction: true,
				buffer: Buffer}),
				imagemin.svgo({plugins: [{removeViewBox: true}]})
		]), {
		verbose: true
	})
    .pipe(gulp.dest(out));
});
gulp.task('images:watch', function(){
	console.log(config.src.img + '/**/*.{jpg,png,gif,jpeg}')
	gulp.watch(config.src.img + '/**/*.{jpg,png,gif,jpeg}', gulp.parallel('images'));
})
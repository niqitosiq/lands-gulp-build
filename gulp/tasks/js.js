var gulp         = require('gulp'),
    config       = require('../config'),
    uglify		 = require("gulp-uglify"),
    concat		 = require("gulp-concat"),
    babel		 = require("gulp-babel"),
    webpack      = require('webpack'),
    webpackStre  = require('webpack-stream');



gulp.task('js', function (done) {
	return gulp.src(
		[
			'src/js/app.js'
	    ])
		.pipe(webpackStre({
            output: {
                filename: 'app.js',
            },
            module: {
                rules: [
                  {
                    test: /\.(js)$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                      presets: ['env']
                    }
                  }
                ]
            }
        }))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest.js+'/'));
})
	
gulp.task('js:watch', function() {
    gulp.watch(config.src.js+'/*', gulp.parallel('js'));
});
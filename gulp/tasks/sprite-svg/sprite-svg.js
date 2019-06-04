var gulp        = require('gulp'),
    svgSprite   = require('gulp-svg-sprite'),
    config      = require('../../config');


gulp.task('sprite:svg', function() {
    return gulp.src(config.src.iconsSvg + '/*.svg')
        .pipe(svgSprite(
            {
                shape: {
                  dimension: { 
                    maxWidth: 32,
                    maxHeight: 32
                  },
                  spacing: { 
                    padding: 10
                  },
                  dest: '/int'
                },
                mode: {
                  view: {
                    bust: false,
                    render: {
                      scss: true
                    }
                  },
                  symbol: true
                }
            }
        ))
        .pipe(gulp.dest(config.dest.img));

});

gulp.task('sprite:svg:watch', function() {
    gulp.watch(config.src.iconsSvg + '/*.svg', gulp.parallel('sprite:svg'));
});

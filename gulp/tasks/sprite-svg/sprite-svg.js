var gulp        = require('gulp'),
    svgSprite   = require('gulp-svg-sprite'),
    config      = require('../../config');


gulp.task('sprite:svg', function() {
  console.log("/" + config.src.iconsSvg + "/")
  console.log("/" + config.src.iconsSvg + '/same.scss')
    return gulp.src(config.src.iconsSvg + '/*.svg')
        .pipe(svgSprite(
            {
                mode: {
                  stack: {
                    sprite: "../sprite.svg",
                    render: {
                      scss: {
                        dest: '../../../src/sass/generated/_sprite-svg.scss', 
                        template: config.src.iconsSvg + "/temp.scss"
                      }
                    }
                    
                  },
                },
                svg: {
                },
                shape: {
                  dimension: {
                    attributes: true,
                  },
                  spacing: {
                    box: "padding"
                  }
                }
            }
        ))
        .pipe(gulp.dest(config.dest.img));

});

gulp.task('sprite:svg:watch', function() {
    gulp.watch(config.src.iconsSvg + '/*.svg', gulp.parallel('sprite:svg'));
});

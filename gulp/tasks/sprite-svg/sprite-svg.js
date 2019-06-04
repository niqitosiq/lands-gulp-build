var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var svgmin      = require('gulp-svgmin');
var svgStore    = require('gulp-svgstore');
var rename      = require('gulp-rename');
var through2    = require('through2');
var consolidate = require('gulp-consolidate');
var config      = require('../../config');
var cheerio   = require('gulp-cheerio');
gulp.task('sprite:svg', function() {
    return gulp.src(config.src.iconsSvg + '/self/*.svg')
            .pipe(
                svgmin({
                    js2svg: {
                        pretty: true
                    }
                }))
            .pipe(
                cheerio({
                    run: function ($) {
                        $('[fill]').removeAttr('fill');
                        $('[stroke]').removeAttr('stroke');
                        $('[style]').removeAttr('style');
                    },
                    parserOptions: {xmlMode: true}
                })
            )
            .pipe(replace('&gt;', '>'))
            .pipe(svgSprite({
                mode: {
                    symbol: {
                        sprite: "../sprite.svg",
                        render: {
                            scss: {
                                dest: config.src.sassGen + '/_sprite.scss',
                                template: config.src.sass + "sass/templates/_sprite_template.scss"
                            }
                        }
                    }
                }
            }))
            .pipe(gulp.dest(config.src.iconsSvg + "/"));

});

gulp.task('sprite:svg:watch', function() {
    gulp.watch(config.src.iconsSvg + '/*.svg', gulp.parallel('sprite:svg'));
});

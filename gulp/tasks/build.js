var gulp         = require('gulp'),
    config       = require('../config');

gulp.task('build',
    gulp.series('pug', 'sass', 'images', 'js', "public", "sprite:svg", "fontgen")
);

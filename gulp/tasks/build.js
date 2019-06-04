var gulp         = require('gulp'),
    config       = require('../config');

gulp.task('build',
    gulp.series('sass', 'images', 'js', "sprite:svg")
);

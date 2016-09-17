var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var watch = require('gulp-watch')

//Default
gulp.task('default', ['scripts'])

//Scripts 
gulp.task('scripts', function() {

    var scripts = ['src/js/app.js']

    return watch(scripts, function() {
        gulp.src(scripts)
            .pipe(concat('bundle.js'))
            .pipe(uglify())
            .pipe(gulp.dest('public/javascripts/'))
    })
})
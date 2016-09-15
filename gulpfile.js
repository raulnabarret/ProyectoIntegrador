var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var watch = require('gulp-watch')

//Default
gulp.task('default', ['styles', 'scripts'])

//Scripts 
gulp.task('scripts', function() {

	var scripts = ['./src/bootstrap/js/bootstrap.min.js', './src/js/*.js']

	return watch(scripts, function() {
		gulp.src(scripts)
			.pipe(concat('bundle.js'))
			.pipe(uglify())
			.pipe(gulp.dest('public/'));
	})
})
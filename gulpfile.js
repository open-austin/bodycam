var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var rename = require( 'gulp-rename' );

var htmlTemplates = ['./templates/'];

gulp.task('build', function() {
  gulp.src([htmlTemplates + '*.tpl.html'])
    .pipe(fileinclude())
    .pipe(rename({extname: ""}))
    .pipe(rename({extname: ".html"}))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
	gulp.watch( htmlTemplates + '/*', ['build'] );
});

gulp.task('default', ['build', 'watch'])

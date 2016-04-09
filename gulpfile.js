var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var rename = require( 'gulp-rename' );
var markdown = require( 'gulp-markdown' );

var htmlTemplates = ['./templates/'];
var markdownTemplates = ['./templates/markdown/'];

gulp.task('markdown', function(){
  return gulp.src([markdownTemplates + '*.md'])
  .pipe(markdown())
  .pipe(gulp.dest('./templates/'));
})

gulp.task('build', function() {
  gulp.src([htmlTemplates + '*.tpl.html'])
    .pipe(fileinclude())
    .pipe(rename({extname: ""}))
    .pipe(rename({extname: ".html"}))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
	gulp.watch( htmlTemplates + '/*', ['build'] );
	gulp.watch( markdownTemplates + '/*', ['markdown'] );
});

gulp.task('default', ['markdown', 'build', 'watch'])

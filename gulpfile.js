// requirements
var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var rename = require( 'gulp-rename' );
var markdown = require( 'gulp-markdown' );
var sass = require('gulp-sass');

// local helper vars
var htmlTemplates = ['./templates/'];
var markdownFiles = ['./templates/markdown/'];
var stylesheets = ['./sass/**/'];

// Convert markdown files to HTML
gulp.task('markdown', function(){
  return gulp.src('./templates/markdown/*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./templates/'));
});

// Compile HTML templates
gulp.task('build', function() {
  gulp.src([htmlTemplates + '*.tpl.html'])
    .pipe(fileinclude())
    .pipe(rename({extname: ""}))
    .pipe(rename({extname: ".html"}))
    .pipe(gulp.dest('./'));
});

// Process Sass to CSS
gulp.task('sass', function () {
  return gulp.src(['./sass/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// $ gulp watch
gulp.task('watch', function(){
	gulp.watch( htmlTemplates + '/*', ['build'] );
	gulp.watch( markdownFiles + '/*', ['markdown'] );
	gulp.watch( stylesheets + '/*', ['sass'] );
});

//  $ gulp
gulp.task('default', ['markdown', 'build', 'sass', 'watch'])

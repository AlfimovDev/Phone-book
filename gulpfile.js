var gulp = require('gulp');
	jade = require('gulp-jade');
	watch = require('gulp-watch');
	sass = require('gulp-sass');
	webserver = require('gulp-webserver');
  concat = require('gulp-concat');
  autoprefixer = require('gulp-autoprefixer');
  cssbeautify = require('gulp-cssbeautify');

gulp.task('default', ['watch', 'webserver']);

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('jade', function() {
	return gulp.src('src/templates/**/*.jade')
		.pipe(jade({
      doctype: 'html',
			pretty: true
		}))
    .on('error', console.log)
		.pipe(gulp.dest('builds/'));
});

gulp.task('sass', function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass({
      pretty: true
    }).on('error', sass.logError))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('concat', function (){
  return gulp.src(['src/css/common.css', 'src/css/main.css'])
      .pipe(concat('main.css'))
      .pipe(cssbeautify())
      .pipe(autoprefixer({
        browsers: ["> 0%", "Firefox >= 2"],
        cascade: false
      }))
      .pipe(gulp.dest('builds/css'));
})

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/css/**/*.css', ['concat']);
  gulp.watch('src/**/*.jade', ['jade']);
  // Other watchers
});
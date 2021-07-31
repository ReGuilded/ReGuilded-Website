const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

gulp.task('default', async cb => {
    // Compile all SASS files
    gulp.src(`./wwwroot/sass/**/*.sass`)
        .pipe(sass({ indentedSyntax: false, outputStyle: 'compressed' }))
        .pipe(gulp.dest(`./wwwroot/css`))
})
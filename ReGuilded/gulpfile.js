const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

gulp.task('default', async cb => compileSass)
gulp.task('live-rebuild', async cb => {
    gulp.watch(`./wwwroot/sass/**/*.sass`, compileSass)
})

async function compileSass() {
    // Compile all SASS files
    gulp.src(`./wwwroot/sass/**/*.sass`)
        .pipe(sass({ indentedSyntax: false, outputStyle: 'compressed' }))
        .pipe(gulp.dest(`./wwwroot/css`))
}
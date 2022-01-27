const gulp = require("gulp"),
    sass = require("gulp-sass")(require("sass")),
    through2 = require("through2");

gulp.task("default", compileSass);
gulp.task("json", () => gulp.src(`./wwwroot/contributors.json`).pipe(transformJson).pipe(gulp.dest(`./wwwroot/`)));
gulp.task("live-rebuild", async () => {
    gulp.watch(`./wwwroot/sass/**/*.sass`, compileSass);
});

async function compileSass() {
    // Compile all SASS files
    gulp.src(`./wwwroot/sass/**/*.sass`)
        .pipe(sass({ indentedSyntax: false, outputStyle: "compressed" }))
        .pipe(gulp.dest(`./wwwroot/css`));
}
const transformJson = through2.obj((file, encoding, callback) => {
    const content = JSON.parse(file.contents.toString());
    const json = {
        dev: [],
        contrib: []
    };
    
    json.dev = content.filter(contributor => contributor.isCoreDeveloper).map(contributor => contributor.guildedId);
    json.contrib = content.filter(contributor => contributor.isContributor).map(contributor => contributor.guildedId);

    file.contents = Buffer.from(JSON.stringify(json));
    file.path = file.path.replace(/contributors[.]json$/, "contributorIds.json");

    callback(null, file);
});

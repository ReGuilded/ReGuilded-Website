const gulp = require("gulp"),
    stylus = require("gulp-stylus"),
    through2 = require("through2");

const stylusPath = "./wwwroot/stylus/src/**/*.styl";

gulp.task("default", compileStylus);
gulp.task("json", () => gulp.src(`./wwwroot/contributors.json`).pipe(transformJson).pipe(gulp.dest(`./wwwroot/`)));
gulp.task("live-rebuild", async () => {
    gulp.watch(stylusPath, compileStylus);
});

async function compileStylus() {
    // Compile all Stylus files
    gulp.src(stylusPath)
        .pipe(stylus({ indentedSyntax: false, outputStyle: "compressed" }))
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

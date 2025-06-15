const { dir } = require('console');
const path = require('path');

function path_from_str(fp) {
    // Extract the base name from the file path
    let result = path.normalize(fp);
    console.log(result); //outputs home.html to the console
    return result;
}

function parse_path(fp) {
    dirname = path.dirname(fp);
    basename = path.basename(fp);
    extname = path.extname(fp);
    console.log("\tdirname: " + dirname);
    console.log("\tbasename: " + basename);
    console.log("\textname: " + extname);
    return {
        dirname: dirname,
        basename: basename,
        extname: extname
    };
}

exports.path_from_str = path_from_str;
exports.parse_path = parse_path;
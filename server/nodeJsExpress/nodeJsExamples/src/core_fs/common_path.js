import { normalize, dirname as _dirname, basename as _basename, extname as _extname } from 'path';

/**
 * Extracts and normalizes the base name from the given file path.
 * Example 1: Resolving '..' and '.'
 * Input: '/users/../home/./docs'
 * Output: '/home/docs'
 * 
 * Example 2: Handling multiple slashes
 * Input: '/users//home///docs' 
 * Output: '/users/home/docs'

 * Example 3: Preserving trailing slash
 * Input '/users/home/docs/' 
 * Output: '/users/home/docs/'
 *
 * @param {string} fp - The file path to process. Examples:
 *   - Absolute path: "/Users/hualiu/Documents/home.html"
 *   - Relative path: "./home.html"
 * @returns {string} The normalized file path. 
 */
function normalize_path(fp) {
    // Extract the base name from the file path
    let result = normalize(fp);
    console.log(result); //outputs home.html to the console
    return result;
}

/**
 * Parses a file path and extracts its directory name, base name, and extension name.
 *
 * @param {string} fp - The file path to parse. Examples:
 *   - Absolute path: "/Users/hualiu/Documents/file.txt"
 *   - Relative path: "./file.txt"
 * @returns {Object} An object containing the following properties:
 *   - {string} dirname: The directory name of the file path.
 *   - {string} basename: The base name of the file path.
 *   - {string} extname: The extension name of the file path.
 */
function parse_path(fp) {
    let dirname = _dirname(fp);
    let basename = _basename(fp);
    let extname = _extname(fp);
    console.log("\tdirname: " + dirname);
    console.log("\tbasename: " + basename);
    console.log("\textname: " + extname);
    return {
        dirname: dirname,
        basename: basename,
        extname: extname
    };
}

const _normalize_path = normalize_path;
export { _normalize_path as normalize_path };
const _parse_path = parse_path;
export { _parse_path as parse_path };
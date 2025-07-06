import { readFileSync } from 'fs';
let sample_txt_fp = 'src/core_fs/sample.txt';

function load_txt(filepath) {
    // Read the contents of the file synchronously
    const data = readFileSync(filepath, 'utf8');
    return data;
}

//------------------
console.log('load_txt from ' + sample_txt_fp);
const data = load_txt(sample_txt_fp)
console.log(data);

//----------------------
import { parse_path, normalize_path } from './common_path.js';
parse_path(sample_txt_fp);
const sample_txt_fp_path = normalize_path(sample_txt_fp);
console.log('load_txt from normalized path:' + sample_txt_fp_path);
const data2 = load_txt(sample_txt_fp_path)
console.log(data2);
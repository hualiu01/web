const fs = require('fs');
sample_txt_fp = 'core_fs/sample.txt';

function load_txt(filepath) {
    // Read the contents of the file synchronously
    const data = fs.readFileSync(filepath, 'utf8');
    return data;
}

//------------------
console.log('load_txt from ' + sample_txt_fp);
const data = load_txt(sample_txt_fp)
console.log(data);

//----------------------
const my_path_module = require('./common_path')
my_path_module.parse_path(sample_txt_fp);
const sample_txt_fp_path = my_path_module.path_from_str(sample_txt_fp);
console.log('load_txt from path:' + sample_txt_fp_path);
const data2 = load_txt(sample_txt_fp_path)
console.log(data2);
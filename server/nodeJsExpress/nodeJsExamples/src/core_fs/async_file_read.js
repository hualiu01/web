import { readFile } from 'fs';
// Asynchronously read the file 'sample.txt'
readFile('src/core_fs/sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    // Print the contents of 'sample.txt' to the console
    console.log(data);
});
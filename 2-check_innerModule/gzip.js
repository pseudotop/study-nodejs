const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('2-check_innerModule/readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('2-check_innerModule/readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);
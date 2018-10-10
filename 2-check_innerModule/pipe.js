const fs = require('fs');

const readStream = fs.createReadStream('2-check_innerModule/readme4.txt');
const writeStream = fs.createWriteStream('2-check_innerModule/writeme3.txt');
readStream.pipe(writeStream);
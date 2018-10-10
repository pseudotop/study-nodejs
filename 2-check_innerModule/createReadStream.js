const fs = require('fs');

const readStream = fs.createReadStream('2-check_innerModule/readme3.txt',{ highWaterMark: 16 });
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data:', chunk, chunk.length);
    console.log('data:', chunk.toString());
});

readStream.on('end',() => {
    console.log('end:',Buffer.concat(data).toString());
});

readStream.on('error',(err)=>{
    console.log('error:',err);
});

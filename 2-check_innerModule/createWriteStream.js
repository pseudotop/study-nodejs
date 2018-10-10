const fs = require('fs');

const writeStream = fs.createWriteStream('2-check_innerModule/writeme2.txt');
writeStream.on('finish', ()=>{
    console.log('파일쓰기 완료');
});

writeStream.write('이글을씁니다.\n');
writeStream.write('1이글을씁니다.');
writeStream.end();
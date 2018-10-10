const fs = require('fs');

fs.writeFile('2-check_innerModule/writeme.txt','글이 입력됩니다.', (err) => {
    if(err){
        throw err;
    }
    fs.readFile('2-check_innerModule/writeme.txt',(err, data) => {
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
});
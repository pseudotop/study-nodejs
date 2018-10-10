const fs = require('fs');

fs.readFile('2-check_innerModule/readme.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});
const fs = require('fs');

fs.copyFile('2-check_innerModule/readme4.txt', '2-check_innerModule/writeme4.txt', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('복사 완료');
});
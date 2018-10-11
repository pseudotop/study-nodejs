const fs = require('fs');

setInterval(() => {
    fs.unlink('3-control_error/abcdefg.js', (err) => {
        if(err) {
            console.error(err);
        }
    });
}, 1000);
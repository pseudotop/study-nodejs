const crypto = require('crypto');

console.log('base64:',crypto.createHash('sha512').update('dddd').digest('base64'));
console.log('hex:',crypto.createHash('sha512').update('dddd').digest('hex'));
console.log('base64:',crypto.createHash('sha512').update('ddddd').digest('base64'));

const path = require('path');

const string = __filename;

console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
	dir: 'C:\\train_nodejs',
	name: 'path',
	ext: '.js',
}));
console.log('path.relative():',path.relative('C:\\train_nodejs\\2-check_innerModule\\path.js', 'C:\\'));
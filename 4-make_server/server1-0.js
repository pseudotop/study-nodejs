const http = require('http');

const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
});
server.listen(80);
server.on('listening', ()=>{
    console.log('80번 포트에서 서버 대기중입니다!');
});
server.on('error', (err) => {
    console.error(err);
});
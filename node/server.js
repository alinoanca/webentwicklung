const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hallo, dies ist dein erster Node.js-Server!\n');
});

server.listen(3000, () => {
    console.log('Server läuft unter http://localhost:3000/');
});

const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
  response.statusCode = '200';
  response.setHeader('Content-Type', 'text-plain');

  response.end('hellow world\n')
});

server.listen(9000);
console.log('Servidor en la url http://localhost:9000');
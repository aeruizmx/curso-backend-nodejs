const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('./big', (err, data) => {
    if(err){
      console.error('err', err)
    }
    res.end(data)
  })
})
server.listen(5000);
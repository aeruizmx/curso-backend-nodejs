const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  /* fs.createReadStream('./big', (err, data) => {
    if(err){
      console.error('err', err)
    }
    res.end(data)
  }) */
  const src = fs.createReadStream('./big');
  src.pipe(res);
})
server.listen(5000);
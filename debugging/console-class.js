const fs = require('fs');
const out = fs.createWriteStream('./out.log');
const error = fs.createWriteStream('./error.log');

const consoleFile = new console.Console(out, error);

setInterval(()=>{
  consoleFile.log(new Date());
  consoleFile.error(new Error('Ups!!!'))
}, 2000)
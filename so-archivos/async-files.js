// node so-archivos/async-files.js so-archivos/naranja.txt 
const fs = require('fs');

const file = process.argv[2];
if(!file) {
  throw new Error('Debes indicar el archivo que quieres leer!')
}

const content = fs.readFile(file, function(err, content) {
  if(err){
    console.error(err);
    return ;
  }
  const lines = content.toString().split('\n').length;
  console.log(lines);
});
  

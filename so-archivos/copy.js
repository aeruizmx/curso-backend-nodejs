const fs = require('fs');
fs.copyFile('naranja.txt', 'limon.txt', err => {
  if(err){
    console.log(err)
    return;
  }
  console.log('Archivo copiado');
})
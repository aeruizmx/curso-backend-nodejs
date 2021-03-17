const express = require('express');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
moviesApi(app);
// app.get('/', function(req, res) {
//   res.send('hello world hello')
// })

// app.get('/json', function(req, res) {
//   res.json({'hello':  'world'})
// })
// app.get('/:year', function(req, res) {
//   const {year} = req.params;
//   if(year % 4 == 0 ){
//     res.send('Año bisiesto!')
//   } else {
//     res.send('Año no bisiesto!')
//   }

//})
app.listen(config.port, function(){
  console.log(`Listening http://localhost:${config.port}`);
})
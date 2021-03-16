const util = require('util');
const helloPluto = util.deprecate(()=>{
  console.log('Hello pluto')
}, 'Pluto is deprecated, Its not a planet anymore!')

helloPluto();

//node --inspect console-class.js
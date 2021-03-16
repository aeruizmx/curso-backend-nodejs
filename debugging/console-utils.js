// %s
// %d
// %j
console.log(' Un %s y un %s', 'perrito', 'gatito');
console.info('Hello world!');
console.warn('Warning!');

console.assert(42 == "42");
console.assert(42 === "42");

console.trace('Hello');

// NODE_DEBUG=foo node console-utils.js 
const util = require('util');
const debuglog = util.debuglog('foo');
debuglog('Hello from foo');


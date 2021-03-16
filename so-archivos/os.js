const os = require('os');
console.log('CPU Info ', os.cpus());
console.log('Ip address ', os.networkInterfaces().en0.map(i => i.address));
console.log('Free memory ', os.freemem());
console.log('Type ', os.type());
console.log('SP Version', os.release());
console.log('Usr info ', os.userInfo());
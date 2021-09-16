const os = require('os')

const user = os.userInfo();
console.log(user);

console.log(`System uptime is ${os.uptime} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem()/1024/1024/1024,
    freeMem:os.freemem()/1024/1024/1024
}

console.log(currentOS);
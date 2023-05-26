const os = require('os')
//const user = os.userInfo()
//user information
//console.log(user)

//system timeout
//console.log(`The System UpTime is ${os.uptime()} second`)

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()

}

console.log(currentOS)
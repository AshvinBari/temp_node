
// OS modules cover
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

// method returns the System uptime in seconds 
console.log(`The System Uptime is ${os.uptime()} seconds`)


const currentOS={
    name:os.type(),
    release:os.release(),
    totalme:os.totalmem(),
    freeMem:os.freemem(),

}
console.log(currentOS)
const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./sub/first.txt', 'utf8')
const second = readFileSync('./sub/second.txt','utf8')

// console.log(first,second)
writeFileSync('./sub/result-sync.txt',`Here is the result :${first},${second} `,{flag:'a'})

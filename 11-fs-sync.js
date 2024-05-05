const { log } = require('console')
const {readFile,writeFile}=require('fs')

readFile('./sub/first.txt', 'utf8',(err,result)=>{
// so you not proving a utf8 coding to acsses a Buffer memory 'utf8'
    if (err){
        console.log(err)
        return
    }
    console.log(result)
  

})
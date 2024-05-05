const john = 'john'
const peter = 'peter'
const sayHi = (name)=>{
    console.log(`hello there ${name}`);
}

sayHi('Ashu')
sayHi(john)
sayHi(peter)

console.log(module)

const amount = 1

if (amount < 10 ){
    console.log('small number');

}
else{
    console.log('large number ');

}
console.log('Hey it my first node app ');
 
const names = require('./name');
const sayHi = require('./utils');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('sunas')
sayHi(names.john)
sayHi(names.peter)
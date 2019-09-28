const readlineSync = require('readline-sync')
const writeInfo = require('./newUser/writeInfo')
const info = require('./data/info')

const register = () => {
   writeInfo()
   info();
console.log("end")

}
module.exports = register

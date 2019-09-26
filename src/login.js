const readline = require('readline');
const initialize = require('./dot')
const fs = require('fs')

const readlineSync = require('readline-sync')
const init = () => {

    var userName = readlineSync.keyInYN('Initializing will reset all previous data. Continue? ');
 
    // fs.writeFileSync('test.json', 'lol')
    // fs.truncate('test.json', 0, function(){console.log('done')})

    // Handle the secret text (e.g. password).
    console.log("What is your favorite food")
    var favFood = readlineSync.prompt()
    let file = fs.readFileSync('test.json')
    file.push({
        Balance: favFood
    })
    file = JSON.parse(file)
    const update = JSON.stringify(file)
    // file.accounts[0].Balance = favFood
    // file = filee
    console.log(file)
    fs.writeFileSync('test.json', update)
    // console.log(file)

    
console.log('Oh, ' + userName + ' loves ' + favFood + '!');


}
module.exports = init
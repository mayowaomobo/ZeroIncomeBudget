const readlineSync = require('readline-sync')
const fs = require('fs')
const chalk = require('chalk')
const percentages=require('../data/percentages')
let passcode = 0;

const getUsernameAndPassword = (callback) => {
    var username = readlineSync.question("Username: ")
    var password = readlineSync.questionNewPassword('Password: ', {min: '0', confirmMessage: "Re-enter password to confirm: "})
    for (let letter in password){
    passcode += password.charCodeAt(letter)
    }

    const data = {
        id: 0,
        userInfo:[]
    }
  
    data.userInfo.push({
      login: {
          username: username,
          passcode: passcode
      }
    });

    saveData(data)
    callback();
}

const budgetingFacotrs = () => {
    const info = fs.readFileSync('./test.json');
    const parsedInfo = JSON.parse(info)

    var initial = parseInt(readlineSync.question('How much are you planning to budget with? $',{
        limit: Number,
        limitMessage: (chalk.red.bold("Invalid input"))
    }))
    

    var factors = new Array()
    factorCounter = 0;
    console.log("\nBudgeting factors? (Groceries, Clothes, Misc e.t.c.) \n(press 'q' when done)")
    do{
        var restrictors = readlineSync.question('Factor ' +  (factorCounter+1) + ": ")
            factors[factorCounter] = restrictors
            factorCounter++
        }
    while(restrictors != 'q')

    factors.pop();
    parsedInfo.userInfo.push({
        initial: initial,
        factorCount: (factorCounter - 1),
        factors: factors,
        percentages: []
    })
    saveData(parsedInfo)
    percentages(parsedInfo)
}


const saveData = (data) => {
    const dataJSON = JSON.stringify(data, null, 2)
    fs.writeFileSync('./test.json', dataJSON)
}

const start = () => {
getUsernameAndPassword(budgetingFacotrs)
}

module.exports = start
const readlineSync = require('readline-sync')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const percentageData=require('../data/percentages')
let passcode = 0;

const existingUserCheck = (username) => {
    rawdata = fs.readFileSync(path.join(__dirname,'../../users.json'))
    data = JSON.parse(rawdata);

    for (var name = 0; name < data.users.length; name++){
        if (data.users[name].userInfo[0].login.username == username){
            console.log(chalk.red.bold("Sorry, this username is already taken"))
            start()
        }
    }
}

const getUsernameAndPassword = (callback) => {
    userData = loadUsers();

    var username = readlineSync.question("Username: ")
    var password = readlineSync.questionNewPassword('Password: ', {min: '0', confirmMessage: "Re-enter password to confirm: "})
    for (let letter in password){
        passcode += password.charCodeAt(letter)
    }

    existingUserCheck(username)

    toPush = {
            "id": userData.users.length,
            "userInfo": [
              {
                "login": {
                  "username": username,
                  "passcode": passcode
                },
                "initial": null,
                "factorCount": null,
                "factors": [],
                "percentages": [],
                "amount": []
              }
            ]
    }
  
    callback(toPush)
}

const budgetingFacotrs = (toPush) => {

    var initial = parseInt(readlineSync.question('How much are you planning to budget with? $',{
        limit: Number,
        limitMessage: (chalk.red.bold("Invalid input"))
    }))
    
    factorCounter = 0;
    console.log("\nBudgeting factors? (Groceries, Clothes, Misc e.t.c.) \n(press 'q' when done)")
    do{
        var restrictors = readlineSync.question('Factor ' +  (factorCounter+1) + ": ")
        toPush.userInfo[0].factors[factorCounter] = restrictors
            factorCounter++
    } while(restrictors != 'q')

    toPush.userInfo[0].factors.pop();
    toPush.userInfo[0].initial = initial
    toPush.userInfo[0].factorCount = factorCounter - 1

    percentageData(toPush)
}


const start = () => {
getUsernameAndPassword(budgetingFacotrs)
}


const loadUsers = () => {
    try {
        rawUserData = fs.readFileSync(path.join(__dirname,'../../users.json'))
        return userData = JSON.parse(rawUserData);
    }
    catch {
        console.log("There was an error")
    }
}

module.exports = start
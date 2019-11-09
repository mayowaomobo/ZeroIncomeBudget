const readlineSync = require('readline-sync')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const percentageData=require('../data/percentages')
let passcode = 0;

const existingUserCheck = (username) => {
    rawdata = fs.readFileSync(path.join(__dirname,'../../test.json'))
    data = JSON.parse(rawdata);

    for (var name = 0; name < data.users.length; name++){
        if (data.users[name].userInfo[0].login.username == username){
            console.log(chalk.red.bold("Sorry, this username is already taken"))
            start()
        }
    }
}

const getUsernameAndPassword = (callback) => {

    const data = loadTemplate();
    userData = loadUsers();

    var username = readlineSync.question("Username: ")
    var password = readlineSync.questionNewPassword('Password: ', {min: '0', confirmMessage: "Re-enter password to confirm: "})
    for (let letter in password){
        passcode += password.charCodeAt(letter)
    }

    existingUserCheck(username)

    data.users[0].userInfo[0].login.username = username
    data.users[0].userInfo[0].login.passcode = passcode
    data.users[0].id = userData.users.length + 1;

    saveData(data)
    callback()
}

const budgetingFacotrs = () => {
        const data = loadTemplate();
        userData = loadUsers();

    var initial = parseInt(readlineSync.question('How much are you planning to budget with? $',{
        limit: Number,
        limitMessage: (chalk.red.bold("Invalid input"))
    }))
    
    factorCounter = 0;
    console.log("\nBudgeting factors? (Groceries, Clothes, Misc e.t.c.) \n(press 'q' when done)")
    do{
        var restrictors = readlineSync.question('Factor ' +  (factorCounter+1) + ": ")
        data.users[0].userInfo[0].factors[factorCounter] = restrictors
            factorCounter++
    } while(restrictors != 'q')

    data.users[0].userInfo[0].factors.pop();
    data.users[0].userInfo[0].initial = initial
    data.users[0].userInfo[0].factorCount = factorCounter

    saveData(data)
    percentageData(data)
}

const saveData = (data) => {
    const dataJSON = JSON.stringify(data, null, 2)
    fs.writeFileSync('./test.json', dataJSON)
    return dataJSON;
    // var uname = data.userInfo[0].login.username;
    // console.log(uname)
}

const start = () => {
getUsernameAndPassword(budgetingFacotrs)
}

const loadTemplate = () => {
    try {
        let rawdata = fs.readFileSync(path.join(__dirname,'template.json'))
        return data = JSON.parse(rawdata);
    }
    catch {
        console.log("There was an error")
    }
}

const loadUsers = () => {
    try {
        rawUserData = fs.readFileSync(path.join(__dirname,'../../test.json'))
        return userData = JSON.parse(rawUserData);
    }
    catch {
        console.log("There was an error")
    }
}

module.exports = start
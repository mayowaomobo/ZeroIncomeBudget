const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const readlineSync = require('readline-sync')
let passcode = 0;

const login = () => {

    const info = fs.readFileSync('./users.json');
    const parsedInfo = JSON.parse(info)

    // console.log(parsedInfo.info[0].login.username)

    var userName = readlineSync.question('Username: ');
    var password = readlineSync.question('Password: ');

    for (let letter in password){
        passcode += password.charCodeAt(letter)
    }
    // if (passcode == parsedInfo.info[0].login.passcode && userName ==  parsedInfo.info[0].login.username){
    //     console.log("welcome in")
    // }else{
    //     console.log("incorrect username or password");
    // }

    
        data = loadUsers();
    
        for (var name = 0; name < data.users.length; name++){
            if (data.users[name].userInfo[0].login.username == userName && data.users[name].userInfo[0].login.passcode == passcode){
                console.log("Welcome " + userName)    
                for (factor = 0; factor < data.users[name].userInfo[0].factorCount; factor++){
                    console.log(chalk.blue.bold(data.users[name].userInfo[0].factors[factor] + " : " + data.users[name].userInfo[0].amount[factor]) )
                }
                
            }
        }
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

module.exports = login
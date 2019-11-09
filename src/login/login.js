const fs = require('fs')
const readlineSync = require('readline-sync')
let passcode = 0;

const login = () => {

    const info = fs.readFileSync('./test.json');
    const parsedInfo = JSON.parse(info)

    // console.log(parsedInfo.info[0].login.username)

    var userName = readlineSync.question('Username: ');
    var password = readlineSync.question('Password: ');

    for (let letter in password){
        passcode += password.charCodeAt(letter)
    }
    if (passcode == parsedInfo.info[0].login.passcode && userName ==  parsedInfo.info[0].login.username){
        console.log("welcome in")
    }else{
        console.log("incorrect username or password");
    }

}
module.exports = login
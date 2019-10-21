const readlineSync = require('readline-sync')
const fs = require('fs')
let passcode = 0;
const register = () => {

    var username = readlineSync.question("Username: ")
    var password = readlineSync.questionNewPassword('Password: ', {min: '0', confirmMessage: "Re-enter password to confirm: "})
    for (let letter in password){
    passcode += password.charCodeAt(letter)
    }

    
    const data = {
        id: 0,
        info:[]
    }

    
    data.info.push({
      login: {
          username: username,
          passcode: passcode
      }
    });

    saveData(data)

    // ndata = fs.readFileSync('./test.json');
    // ndata = JSON.parse(ndata)
    // console.log(data)
    // console.log(ndata.info[0])
    // ndata.info[0].test = ({
    //     test: 'test'
    // });
    // console.log(ndata.info[0])

//   console.log(data)
}


const loadData = () => {
    try{
        const dataBuffer = fs.readFileSync('./test.json')
    }
    catch {
        console.log("There was an error")
    }
}

const saveData = (data) => {
    const dataJSON = JSON.stringify(data, null, 2)
    fs.writeFileSync('./test.json', dataJSON)

}
module.exports = register
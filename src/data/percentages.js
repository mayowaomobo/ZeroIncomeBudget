const fs = require('fs')
const path = require('path')
const readlineSync = require('readline-sync')

const percentages = (info) => { 
percentage = 100
starter = 0

  for (let factors in info.userInfo[0].factors){
    starter++
    factorPercent = readlineSync.questionInt((starter)+"/"+info.userInfo[0].factors.length + " Percent allocated to " + info.userInfo[0].factors[factors] + "? (" + percentage + "% available) ? ")
    if (factorPercent > percentage || factorPercent < 0){
    while (factorPercent > percentage || factorPercent < 0){
      console.log("invalid input");
    factorPercent = readlineSync.questionInt((starter)+"/"+info.userInfo[0].factors.length + " Percent allocated to " + info.userInfo[0].factors[factors] + "? (" + percentage + "% available) ? ")
    }
  } 
      percentage = percentage - factorPercent  
      info.userInfo[0].percentages.push(factorPercent) 
  }
  initial(info)
}

const initial = (info) => {

  userData = loadUsers();

  for (let factors of info.userInfo[0].percentages){

      initialValue = info.userInfo[0].initial;
      value = initialValue * (factors / 100)
      info.userInfo[0].amount.push(value)
    }
    userData.users.push(info)
    
    saveData(userData)
  }

const saveData = (data) => {
  const dataJSON = JSON.stringify(data, null, 2)
  fs.writeFileSync('./users.json', dataJSON)
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
module.exports = percentages
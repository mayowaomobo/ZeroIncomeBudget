const fs = require('fs')
const path = require('path')
const readlineSync = require('readline-sync')

const percentages = (info) => { 
percentage = 100
starter = 0
// console.log("this is percentages")
  
// do{
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
      // saveData(info)
  }
  initial(info)
}

const initial = (info) => {
  // const test = fs.readFileSync('./test.json');
  // const info = JSON.parse(test)
  userData = loadUsers();

  for (let factors of info.userInfo[0].percentages){
    // console.log(factors)
      initialValue = info.userInfo[0].initial;
      value = initialValue * (factors / 100)
      info.userInfo[0].amount.push(value)
    }
    userData.users.push(info)
    // console.log(userData)
    saveData(userData)
  }

const saveData = (data) => {
  const dataJSON = JSON.stringify(data, null, 2)
  fs.writeFileSync('./test.json', dataJSON)
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
module.exports = percentages
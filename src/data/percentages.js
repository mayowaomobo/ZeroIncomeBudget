const fs = require('fs')
const readlineSync = require('readline-sync')

const percentages = (info) => { 
percentage = 100
starter = 0
// console.log("this is percentages")
  
// do{
  for (let factors in info.users[0].userInfo[0].factors){
    starter++
    factorPercent = readlineSync.questionInt((starter)+"/"+info.users[0].userInfo[0].factors.length + " Percent allocated to " + info.users[0].userInfo[0].factors[factors] + "? (" + percentage + "% available) ? ")
    if (factorPercent > percentage || factorPercent < 0){
    while (factorPercent > percentage || factorPercent < 0){
      console.log("invalid input");
    factorPercent = readlineSync.questionInt((starter)+"/"+info.users[0].userInfo[0].factors.length + " Percent allocated to " + info.users[0].userInfo[0].factors[factors] + "? (" + percentage + "% available) ? ")
    }
  } 
      percentage = percentage - factorPercent  
      info.users[0].userInfo[0].percentages.push(factorPercent)  
      saveData(info)
  }
}
const saveData = (data) => {
  const dataJSON = JSON.stringify(data, null, 2)
  fs.writeFileSync('./test.json', dataJSON)
}
module.exports = percentages
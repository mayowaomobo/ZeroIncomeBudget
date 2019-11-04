const fs = require('fs')
const readlineSync = require('readline-sync')

const percentages = (info) => { 
percentage = 100
starter = 0
// console.log("this is percentages")
  
// do{
  for (let factors in info.userInfo[1].factors){
    starter++
    factorPercent = readlineSync.questionInt((starter)+"/"+info.userInfo[1].factors.length + " Percent allocated to " + info.userInfo[1].factors[factors] + "; (" + percentage + "% available) ? ")
    if (factorPercent > percentage || factorPercent < 0){
    while (factorPercent > percentage || factorPercent < 0){
      console.log("invalid input");
    factorPercent = readlineSync.questionInt((starter)+"/"+info.userInfo[1].factors.length + " Percent allocated to " + info.userInfo[1].factors[factors] + "; (" + percentage + "% available) ? ")
    }
  } 
      percentage = percentage - factorPercent  
      info.userInfo[1].percentages.push(factorPercent)  
      saveData(info)
  }
}
const saveData = (data) => {
  const dataJSON = JSON.stringify(data, null, 2)
  fs.writeFileSync('./test.json', dataJSON)
}
module.exports = percentages
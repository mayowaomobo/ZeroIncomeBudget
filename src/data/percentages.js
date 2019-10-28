const fs = require('fs')
const readlineSync = require('readline-sync')
input = false
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
      factorPercent = readlineSync.questionInt("Percent allocated to " + info.userInfo[1].factors[factors] + "? " + percentage + "% available")
    }
  } 
      percentage = percentage - factorPercent  
      info.userInfo[0].percentages.push({
        percentage
    })  
  }
}

module.exports = percentages
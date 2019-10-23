const fs = require('fs')
const readlineSync = require('readline-sync')
input = false
const percentages = (info) => { 
percentage = 100
number1 = 0
// console.log("this is percentages")
  
// do{
  for (let factors in info.userInfo[1].factors){
    number1++
    factorPercent = readlineSync.questionInt((number1)+"/"+info.userInfo[1].factors.length + " Percent allocated to " + info.userInfo[1].factors[factors] + "; (" + percentage + "% available) ? ")
    if (factorPercent > percentage || factorPercent < 0){
    while (factorPercent > percentage || factorPercent < 0){
      console.log("invalid input");
      factorPercent = readlineSync.questionInt("Percent allocated to " + info.userInfo[1].factors[factors] + "? " + percentage + "% available")
      input = true
    }
   } 
      percentage = percentage - factorPercent
    
  }
//   console.log("Hello")
    
//   }while(x == x)
// }
// for (let factors in info.userInfo[1].factors){
  // console.log("The first factor is " + info.userInfo[1].factors[factors])
      // }
      console.log("done")
    }
module.exports = percentages
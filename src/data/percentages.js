const fs = require('fs')
const readlineSync = require('readline-sync')

const percentages = (info) => { 
percentage = 100
// console.log("this is percentages")
  
// do{
  for (let factors in info.userInfo[1].factors){
    factorPercent = readlineSync.question("Percent of " + percentage + "% you want to allocate to " + info.userInfo[1].factors[factors] + "? ",{
      
    })
    if (factorPercent > percentage || factorPercent < 0){
      console.log("invalid input");
    } else {
      percentage = percentage - factorPercent
    }
  }
//   console.log("Hello")
    
//   }while(x == x)
// }
// for (let factors in info.userInfo[1].factors){
  // console.log("The first factor is " + info.userInfo[1].factors[factors])
      // }
    }
module.exports = percentages
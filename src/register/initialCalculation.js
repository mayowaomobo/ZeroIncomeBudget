const fs = require('fs')


const initial = (info) => {
    // const test = fs.readFileSync('./test.json');
    // const info = JSON.parse(test)


    for (let factors of info.userInfo[0].percentages){
      // console.log(factors)
        initialValue = info.userInfo[0].initial;
        value = initialValue * (factors / 100)
        info.userInfo[0].amount[]
      }
    }

module.exports = initial
const fs = require('fs')


var initial;
const theMath = () => {
    const test = fs.readFileSync('./test.json');
    const info = JSON.parse(test)


    for (let factors of info.userInfo[1].percentages){
        initial = info.userInfo[1].initial;
        value = initial * (factors / 100)
        console.log(value)
      }
    }

theMath();
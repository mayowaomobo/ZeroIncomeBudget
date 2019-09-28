const fs = require('fs')
const readlineSync = require('readline-sync')
const percentages = require('./percentages')

const info = () => {

    
    const info = fs.readFileSync('./test.json');
    const parsedInfo = JSON.parse(info)

    var initial = readlineSync.question('How much are you planning to budget with? ',{
        limit: Number,
        limitMessage: "Invalid input"
    })
    var factors = new Array()
    y = 0;
    console.log(factors)
    do{
        var restrictors = readlineSync.question('Budgeting factors? (press q to exit)')
            factors[y] = restrictors
            y++
        }
    while(restrictors != 'q')

    factors.pop();
    parsedInfo.info.push({
        initial: initial,
        testy: y,
        factors: factors
    })
    saveData(parsedInfo)
// console.log(factors)
percentages(parsedInfo)

}

const saveData = (data) => {
    const dataJSON = JSON.stringify(data, null, 2)
    fs.writeFileSync('./test.json', dataJSON)

}

module.exports = info
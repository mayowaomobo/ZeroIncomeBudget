const readlineSync = require('readline-sync')
const test = () => {

    var userName = readlineSync.keyInYN('May I have your name? ');
    console.log('Hi ' + userName + '!');
 
    // Handle the secret text (e.g. password).
    var favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: false // The typed text on screen is hidden by `*` (default).
    });
console.log('Oh, ' + userName + ' loves ' + favFood + '!');




// var log4js = require('log4js');
// var logger = log4js.getLogger();
// logger.level = 'debug';
// logger.debug("Some debug messages");


}
module.exports = test
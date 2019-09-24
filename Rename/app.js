const commander = require('commander')
const readline = require('readline');
const initialize = require('./initialize')
const confirm = require('./confirmation')

commander
    .option('-i --initialize');


   commander.parse(process.argv);
    if (commander.initialize){
        confirm()
        initialize();
    }


//initialize
//add value
//expense
//balance
// console.log(process.argv[2])


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//     if (answer != "yes"){
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//     }
//     else {
//         console.log("It worked")
//     }

//   rl.close();
// });
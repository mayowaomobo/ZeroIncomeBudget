const commander = require('commander')
const readline = require('readline');
// const initialize = require('./initialize')
const login = require('./src/login')

commander
    .option('-l --login');


   commander.parse(process.argv);

   if (commander.login){
        login()
   }
       
    


//initialize
//add value
//expense
//balance

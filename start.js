const commander = require('commander')
const readline = require('readline');
// const initialize = require('./initialize')
const login = require('./src/login')
const register = require('./src/register')

commander
    .option('-l --login')
    .option('-r --register');


   commander.parse(process.argv);

   if (commander.login){
        login()
   }
   if (commander.register){
        register();
   }

       
    


//initialize
//add value
//expense
//balance

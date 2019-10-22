const commander = require('commander')
const login = require('./src/login/login')
const createAccount = require('./src/register/createLoginInfo')

commander
    .option('-l --login')
    .option('-r --register');
          commander.parse(process.argv);

   if (commander.login){
        login()
   }
   if (commander.register){
        createAccount();
   }

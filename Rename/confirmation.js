const readline = require('readline');

const confirm = () => {
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Initializing will reset all previous data \nPress Y to continue: ', (answer) => {
  if (answer != "Y" && answer != "y"){
      process.exit(1)
  }
  rl.close();
});
}
module.exports = confirm
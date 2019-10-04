const fs = require('fs')
const readlineSync = require('readline-sync')

const percentages = (info) => { 
MAX = 100, MIN = 0, value = (MAX/2), key = "", test = 100;
for (var goals of info.info[1].factors){
    
  
  console.log('\n' + (new Array(30)).join(' ') +
  'Percentage allocated to ' + goals+ '\n');
console.log('' + (new Array(30)).join(' ') +
  '[Z] <- -> [X]  FIX: [SPACE]\n');
while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(value + 1)).join('-') + 'O' +
    (new Array(MAX - value + 1)).join('-') + '| ' + value);
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '});
  if (key === 'z') { if (value > MIN) { value--; } }
  else if (key === 'x') { if (value < MAX) { value++; } }
  else { break; }
}
console.log('\nA value the user requested: ' + value);
console.log(goals)
}

}

module.exports = percentages
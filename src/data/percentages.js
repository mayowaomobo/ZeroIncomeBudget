const fs = require('fs')
const readlineSync = require('readline-sync')

const percentages = (info) => { 
    console.log(info)
for (var goals in info.info[0].factors){
//   MAX = 100, MIN = 0, value = (MAX/2), key = "";
//   console.log('\n' + (new Array(30)).join(' ') +
//   'What percent would you like on insert here\n');
// console.log('' + (new Array(30)).join(' ') +
//   '[Z] <- -> [X]  FIX: [SPACE]\n');
// while (true) {
//   console.log('\x1B[1A\x1B[K|' +
//     (new Array(value + 1)).join('-') + 'O' +
//     (new Array(MAX - value + 1)).join('-') + '| ' + value);
//   key = readlineSync.keyIn('',
//     {hideEchoBack: true, mask: '', limit: 'zx '});
//   if (key === 'z') { if (value > MIN) { value--; } }
//   else if (key === 'x') { if (value < MAX) { value++; } }
//   else { break; }
// }
// console.log('\nA value the user requested: ' + value);
console.log(goals)
}

}

module.exports = percentages
let generate2d = require('./generate2d');
let twArray = require('./labirint');
let move = require('./move');
let validate = require('./validate');
var term = require('terminal-kit').terminal;

let array = generate2d(28, 28);
array = twArray(array);

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] === 1) {
      term.bgWhite(array[i][j] + ' ');
    } else {
      process.stdout.write('0' + ' ');
    }
  }
  console.log();
}

// console.log(array);
// let coord = '1 1';

// console.log(move(array, coord));

// validate();

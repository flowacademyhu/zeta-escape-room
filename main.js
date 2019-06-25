let generate2d = require('./generate2d');
let twArray = require('./labirint');
let move = require('./move');
let validate = require('./validate');

let array = generate2d(28, 28);
console.log(twArray(array));
// let coord = '1 1';

// console.log(move(array, coord));

// validate();

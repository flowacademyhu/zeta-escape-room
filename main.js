let generate2d = require('./generate2d');
let twArray = require('./labirint');
let move = require('./move');

console.log('szasztok');
let array = generate2d(35, 28);
console.log(twArray(array));
let coord = '1 1';

console.log(move(array, coord));

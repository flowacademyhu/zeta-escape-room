let generate2d = require('./generate2d');
let twArray = require('./labirint');
let move = require('./move');
let validate = require('./validate');
var term = require('terminal-kit').terminal;
let readline = require('readline-sync');
let generateLabirynth = require('./labgen');

let array = generateLabirynth();

const labBackground = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j].visibility === true) {
        process.stdout.write(array[i][j].value);
      } else if (array[i][j].visibility === false) {
        process.stdout.write(' ');
      }
    }
    console.log();
  }
  return array;
};

labBackground(array);
// validate();

var term = require('terminal-kit').terminal;
let readline = require('readline-sync');
let trapGen = require('./trap');
let foodGen = require('./food');
let move = require('./move');
let generateLabirynth = require('./labgen');
let torch = require('./torch');
let vision = require('./vision');
let array = generateLabirynth();

const labBackground = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (Number(array[i][j].value) === 1 && array[i][j].visibility === true) {
        term.bgWhite('  ');
      } else if (array[i][j].visibility === false) {
        process.stdout.write('  ');
      } else if (array[i][j].value === 'x') {
        term.bgRed('  ');
      } else if (array[i][j].value === 'F') {
        term.bgGreen(' F');
      } else if (array[i][j].value === 'H') {
        term.bgBlack(' H');
      } else if (array[i][j].value === 'T') {
        term.bgBlue(' T');
      } else if (array[i][j].value === 'TO') {
        term.bgYellow('TO');
      } else if (Number(array[i][j].value) === 0 && array[i][j].visibility === true) {
        term.bgBlack('  ');
      }
    }
    console.log();
  }
  return array;
};

let life = { life: 10 };
let torchLife = { life: 3 };

let a;
let where = [1, 1];

while (true) {
  vision.vision(array, where, torchLife);
  labBackground(array);
  a = readline.keyIn();
  move(array, where, a, life);
  if (a === 'q') {
    process.exit();
  }
}

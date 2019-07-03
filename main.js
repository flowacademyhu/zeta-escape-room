// let generate2d = require('./generate2d');
// let twArray = require('./labirint');
let move = require('./move');
// let validate = require('./validate');
var term = require('terminal-kit').terminal;
let readline = require('readline-sync');
let generateLabirynth = require('./labgen');
let torch = require('./torch');
let visionDefault = require('./vision');
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
      } else if (array[i][j].value === 'H') {
        term.bgBlack(' H');
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

const hintGen = () => {
  let count = 0;
  while (count < 7) {
    let rng1 = Math.floor(Math.random() * 27 + 1);
    let rng2 = Math.floor(Math.random() * 27 + 1);
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (rng1 === i && rng2 === j && array[i][j].visibility === false && Number(array[i][j].value) !== 1) {
          array[i][j] = { value: 'H', visibility: true, discovered: false, decription: 'Here is the hint.' };
          count++;
        }
      }
    }
  }
  return array;
};
let torchLife = 3;
hintGen();
torch.torchGen(array, 3);
labBackground(array);
let a = readline.keyIn();
let where = [1, 1];
move(array, where, a);
while (true) {
  if (array[where[0]][where[1]].torch === true || (torchLife < 3 && torchLife > 0)) {
    torch.torchUse(array, where, 3);
    torchLife--;
    console.log(torchLife);
    if (torchLife === 0) {
      array[where[0]][where[1]].torch = false;
    }
  } else {
    torchLife = 3;
    visionDefault(array, where);
  }
  labBackground(array);
  a = readline.keyIn();
  where = move(array, where, a);
  if (a === 'q') {
    process.exit();
  }
}

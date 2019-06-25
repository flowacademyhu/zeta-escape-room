let term = require('terminal-kit').terminal;
let readline = require('readline-sync');
let a = readline.keyIn('Press a key! ');
const move = (arr, where, a) => {
  let x = Number(where[0]);
  let y = Number(where[1]);
  if (a === 'w') {
    if (x > 2 && arr[x - 1][y] !== 1) {
      arr[x][y] = 0;
      x = x - 1;
      arr[x][y] = x;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 's') {
    if (x < arr.length - 2 && arr[x + 1][y] !== 1) {
      arr[x][y] = 0;
      x = x + 1;
      arr[x][y] = x;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 'd') {
    if (y < arr[x].length - 4 && arr[x][y + 1] !== 1) {
      arr[x][y] = 0;
      y = y + 2;
      arr[x][y] = x;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 'a') {
    if (y > 4 && arr[x][y - 1] !== 1) {
      arr[x][y] = 0;
      y = y - 2;
      arr[x][y] = x;
    } else {
      console.log('Invalid movement!');
    }
  }

  where[0] = x;
  where[1] = y;
  return where;
};

module.exports = move;

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
      arr[x][y].visibibility = true;
      arr[x - 1][y].visibility = true;
      arr[x + 1][y].visibility = true;
      arr[x][y - 1].visibility = true;
      arr[x][y + 1].visibility = true;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 's') {
    if (x < arr.length - 2 && arr[x + 1][y] !== 1) {
      arr[x][y] = 0;
      x = x + 1;
      arr[x][y] = x;
      arr[x][y].visibibility = true;
      arr[x - 1][y].visibility = true;
      arr[x + 1][y].visibility = true;
      arr[x][y - 1].visibility = true;
      arr[x][y + 1].visibility = true;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 'd') {
    if (y < arr[x].length - 2 && arr[x][y + 1] !== 1) {
      arr[x][y] = 0;
      y = y + 1;
      arr[x][y] = x;
      arr[x][y].visibibility = true;
      arr[x - 1][y].visibility = true;
      arr[x + 1][y].visibility = true;
      arr[x][y - 1].visibility = true;
      arr[x][y + 1].visibility = true;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 'a') {
    if (y > 2 && arr[x][y - 1] !== 1) {
      arr[x][y] = 0;
      y = y - 1;
      arr[x][y] = x;
      arr[x][y].visibibility = true;
      arr[x - 1][y].visibility = true;
      arr[x + 1][y].visibility = true;
      arr[x][y - 1].visibility = true;
      arr[x][y + 1].visibility = true;
    } else {
      console.log('Invalid movement!');
    }
  }

  where[0] = x;
  where[1] = y;
  return where;
};

module.exports = move;

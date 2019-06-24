let axel = require('axel');
const move = (arr, where) => {
  let readline = require('readline-sync');
  let a = readline.keyIn('Press a key! ');
  let place = where.split(' ');
  let x = Number(place[0]);
  let y = Number(place[1]);
  if (a === 'w') {
    if (x > 2 && arr[x - 1][y !== 1]) {
      x = x - 1;
      axel.box(x, y, 2, 1);
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 's') {
    if (x < arr.length - 2 && arr[x + 1][y] !== 1) {
      x = x + 1;
      axel.box(x, y, 2, 1);
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 'd') {
    if (y < arr[x].length - 4 && arr[x][y + 1] !== 1) {
      y = y + 2;
      axel.box(x, y, 2, 1);
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 'a') {
    if (y > 4 && arr[x][y - 1] !== 1) {
      y = y - 2;
      axel.box(x, y, 2, 1);
    } else {
      console.log('Invalid movement!');
    }
  }
  let result = x + ' ' + y;
  return result;
};

module.exports = move;
/* w=up;
s=down;
a=left;
d=right, */

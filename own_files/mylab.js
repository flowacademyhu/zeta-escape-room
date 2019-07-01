const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fill2d = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] = { value: '1', visibility: false };
      if (i % 2 !== 0 && j % 2 !== 0) {
        array[i][j] = { value: '0', visibility: false, visited: false };
      }
    }
  }
  return array;
};

const draw2d = (array) => {
  for (let i = 0; i < array.length; i++) {
    let temp = '';
    for (let j = 0; j < array[i].length; j++) {
      temp += array[i][j].value;
    }
    console.log(temp);
  }
};
let l = generate2d(13, 13);
l = fill2d(l);
// draw2d(l);

const stackArray = () => {
  let stack = [];
  let n = 0;
  for (let i = 0; i < l.length; i++) {
    for (let j = 0; j < l[i].length; j++) {
      if (l[i][j].value === '0') {
        stack[n] = [i, j];
        n++;
      }
    }
  }
  return stack;
};
let stack = stackArray();
const mazeGen = () => {
  let x = stack[0][0];
  let y = stack[0][1];
  let r = Math.floor(Math.random() * 4 + 1);
  if (stack.length === 0) {
    process.exit();
  } else if ((r === 1 && l[x - 2][y].value === '0') || (r === 2 && l[x + 2][y].value === '0') || (r === 3 && l[x][y + 2].value === '0') || (r === 4 && l[x][y - 2].value === '0')) {
    console.log(x, y);
    switch (r) {
      case 1:
        if (x > 3) {
          l[x - 1][y].value = '0';
        }
        break;
      case 2:
        if (x < 11) {
          l[x + 1][y].value = '0';
        }
        break;
      case 3:
        if (y < 11) {
          l[x][y + 1].value = '0';
        }
        break;
      case 4:
        if (y > 3) {
          l[x][y - 1].value = '0';
        }
        break;
    }
    r = Math.floor(Math.random() * 4 + 1);
    stack.shift();
    x = stack[0][0];
    y = stack[0][1];
    draw2d(l);
  } mazeGen();
};
mazeGen();

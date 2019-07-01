var term = require('terminal-kit').terminal;
const labBackground = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j].value === '1') {
        term.bgWhite('  ');
      } else if (array[i][j].value === '0') {
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
      array[i][j] = { value: '1', visibility: false, visited: true };
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
let x = stack[0][0];
let y = stack[0][1];
let r = Math.floor(Math.random() * 4 + 1);

const mazeGen = () => {
  console.log(stack.length);
  if (Number(stack.length) === 1) {
    process.exit();
  } else if (x < 2 && l[x + 2][y].value === '0') {
    l[x + 1][y] = { value: '0', visibility: false, visited: true };
    l[x][y].visited = true;
  } else if (y < 2 && l[x][y + 2].value === '0') {
    l[x][y + 1] = { value: '0', visibility: false, visited: true };
    l[x][y].visited = true;
  } else if (x > 10 && l[x - 2][y].value === '0') {
    l[x - 1][y] = { value: '0', visibility: false, visited: true };
    l[x][y].visited = true;
  } else if (y > 10 && l[x][y - 2].value === '0') {
    l[x][y - 1] = { value: '0', visibility: false, visited: true };
    l[x][y].visited = true;
  } else {
    console.log(x, y);
    switch (r) {
      case 1:
        if (l[x - 2][y].value === '0' && l[x - 2][y].visited === false) {
          l[x - 1][y] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else if (l[x - 1][y].visited === true && l[x - 1][y].value === '0' && l[x + 2][y].visited === false) {
          l[x + 1][y] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else if (l[x][y - 2].visited === false) {
          l[x][y - 1] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else {
          l[x][y + 1] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        }
        break;
      case 2:
        if (l[x + 2][y].value === '0' && l[x + 2][y].visited === false) {
          l[x + 1][y] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else if (l[x + 1][y].visited === true && l[x + 1][y].value === '0' && l[x - 2][y].visited === false) {
          l[x - 1][y] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else if (l[x][y - 2].visited === false) {
          l[x][y - 1] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else { l[x][y + 1] = { value: '0', visibility: false, visited: true }; }
        break;
      case 3:
        if (l[x][y + 2].value === '0' && l[x][y + 2].visited === false) {
          l[x][y + 1] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else if (l[x][y - 1].visited === true && l[x][y - 1].value === '0' && l[x][y + 2].visited === false) {
          l[x][y + 1] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else if (l[x + 1][y].visited === true && l[x - 2][y].visited === false) {
          l[x - 1][y] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else if (l[x - 1][y].visited === true && l[x + 2][y].visited === false) {
          l[x + 1][y] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        }

        break;
      case 4:
        if (l[x][y - 2].value === '0' && l[x][y - 2].visited === false) {
          l[x][y - 1] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else if (l[x][y + 1].visited === true && l[x][y + 1].value === '0' && l[x][y - 2].visited === false) {
          l[x][y - 1] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else if (l[x + 1][y].visited === true && l[x - 2][y].visited === false) {
          l[x - 1][y] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        } else if (l[x - 1][y].visited === true && l[x + 2][y].visited === false) {
          l[x + 1][y] = { value: '0', visibility: false, visited: true };
          l[x][y].visited = true;
        }
        break;
      default:
        break;
    }
  }

  r = Math.floor(Math.random() * 4 + 1);
  stack.shift();
  x = stack[0][0];
  y = stack[0][1];
  labBackground(l);
  mazeGen();
};
mazeGen();

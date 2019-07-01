let readline = require('readline-sync');
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

const neighbour = () => {
  if ((x < maze.length - 2 && maze[x + 2][y].visited === true) && (x > 2 && maze[x - 2][y].visited === true) && (y > 2 && maze[x][y - 2].visited === true) && (y < maze.length - 2 && maze[x][y + 2].visited === true)) {
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze.length; j++) {
        if (maze[i][j].visited === false) {
          x = i;
          y = j;
        }
      }
    }
  }
};

let maze = [];

let r = Math.floor(Math.random() * 2) + 1;
let x = 1;
let y = 1;
let rng1 = [1, 2, 4];
let rng2 = [1, 3, 4];
let counter = 0;
const mazeGen = () => {
  counter = 0;
  if (x === 1) {
    if (y === 1) {
      r = Math.floor(Math.random() * 2) + 1;
    } else if (y === maze.length - 2) {
      r = Math.floor(Math.random() * 2) + 2;
    } else {
      r = Math.floor(Math.random() * 2) + 1;
      if (r === 2) { r = 3; }
    }
  } else if (x === maze.length - 2) {
    if (y === 1) {
      r = (Math.floor(Math.random() * 2) + 1) * 2;
    } else if (y === maze.length - 2) {
      r = Math.floor(Math.random() * 2) + 3;
    } else {
      r = Math.floor(Math.random() * 3);
      r = rng2[r];
    }
  } else if (y === 1) {
    r = Math.floor(Math.random() * 3);
    r = rng1[r];
  } else if (y === maze.length - 2) {
    r = Math.floor(Math.random() * 3);
    r = rng2[r];
  } else {
    r = Math.floor(Math.random() * 4) + 1;
  }
  switch (r) {
    case 1: // le
      if (maze[x + 2][y].visited === false) {
        maze[x + 1][y] = { value: '0', visibility: false, visited: true };
        maze[x][y].visited = true;
        x = x + 2;
      }
      break;
    case 2: // jobbra
      if (maze[x][y + 2].visited === false) {
        maze[x][y + 1] = { value: '0', visibility: false, visited: true };
        maze[x][y].visited = true;
        y = y + 2;
      }
      break;
    case 3: // balra
      if (maze[x][y - 2].visited === false) {
        maze[x][y - 1] = { value: '0', visibility: false, visited: true };
        maze[x][y].visited = true;
        y = y - 2;
      }
      break;
    case 4: // fel
      if (maze[x - 2][y].visited === false) {
        maze[x - 1][y] = { value: '0', visibility: false, visited: true };
        maze[x][y].visited = true;
        x = x - 2;
      }
      break;
  }

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j].visited === false && maze[i][j].value === '0') {
        counter++;
      }
    }
  }
  if (counter === 0) {
    process.exit();
  } else {
    console.clear();
    labBackground(maze);
    neighbour();
    mazeGen();
  }
};

maze = generate2d(29, 29);
fill2d(maze);
mazeGen();

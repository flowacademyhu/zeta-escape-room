let my = 0;
let mx = 0;

const seeUp = (maze, x, y) => {
  if (Number(maze[x - 1][y].value) !== 1) {
    if (maze[x - 1][y].value === 'x') {
      mx = x - 1;
      my = y;
      return true;
    } else {
      seeUp(maze, x - 1, y);
    }
  } else {
    return false;
  }
};

const seeDown = (maze, x, y) => {
  if (Number(maze[x + 1][y].value) !== 1) {
    if (maze[x + 1][y].value === 'x') {
      mx = x + 1;
      my = y;
      return true;
    } else {
      seeDown(maze, x + 1, y);
    }
  } else {
    return false;
  }
};

const seeLeft = (maze, x, y) => {
  if (Number(maze[x][y - 1].value) !== 1) {
    if (maze[x][y - 1].value === 'x') {
      mx = x;
      my = y - 1;
      return true;
    } else {
      seeLeft(maze, x, y - 1);
    }
  } else {
    return false;
  }
};

const seeRight = (maze, x, y) => {
  if (Number(maze[x][y + 1].value) !== 1) {
    if (maze[x][y + 1].value === 'x') {
      mx = x;
      my = y + 1;
      return true;
    } else {
      seeRight(maze, x, y + 1);
    }
  } else {
    return false;
  }
};

const ghostSee = (maze, x, y) => {
  seeUp(maze, x, y);
  seeDown(maze, x, y);
  seeLeft(maze, x, y);
  seeRight(maze, x, y);
};

let ma = [];
const ghostNeighbor = (maze, x, y) => {
  if (Number(maze[x - 1][y].value) !== 1) {
    ma.push(1);
  } else if (Number(maze[x + 1][y]) !== 1) {
    ma.push(2);
  } else if (Number(maze[x][y + 1]) !== 1) {
    ma.push(3);
  } else if (Number(maze[x][y - 1]) !== 1) {
    ma.push(4);
  }
};

let atemp = 0;
const ghostRandom = (maze, x, y, ma) => {
  let r = Math.floor(Math.random() * ma.length);
  let a = ma[r];
  if (a === 1) { // fel
    if (x > 1 && Number(maze[x - 1][y].value) !== 1) {
      maze[x][y].value = '0';
      x = x - 1;
      maze[x][y].value = 'g';
    }
  } else if (a === 2) { // le
    if (x < maze.length - 1 && Number(maze[x + 1][y].value) !== 1) {
      maze[x][y].value = '0';
      x = x + 1;
      maze[x][y].value = 'g';
    }
  } else if (a === 3) { // jobbra
    if (y < maze[x].length - 1 && Number(maze[x][y + 1].value) !== 1) {
      maze[x][y].value = '0';
      y = y + 1;
      maze[x][y].value = 'g';
    }
  } else if (a === 4) { // balra
    if (y > 1 && Number(maze[x][y - 1].value) !== 1) {
      maze[x][y].value = '0';
      y = y - 1;
      maze[x][y].value = 'g';
    }
  }
  atemp = a;
  return [x, y];
};

const ghostTargeted = (maze, x, y) => {
  while (x !== mx) {
    if (x < mx) {
      maze[x][y] = 0;
      x = x + 1;
      maze[x][y] = 'g';
    } else if (x > mx) {
      maze[x][y] = 0;
      x = x - 1;
      maze[x][y] = 'g';
    }
  }
  while (y !== my) {
    if (y < my) {
      maze[x][y] = '0';
      y = y + 1;
      maze[x][y] = 'g';
    } else if (y > my) {
      maze[x][y] = '0';
      y = y - 1;
      maze[x][y] = 'g';
    }
  }
  return { x, y };
};

/* const ghostMove = (maze, x, y) => {
  if (ghostSee(maze, x, y)) {
    ghostTargeted(maze, x, y);
  } else {
    ghostRandom(maze, x, y);
  }
  ghostMove(maze, x, y);
}; */
let gx = 15;
let gy = 15;
setInterval((m) => {
  console.clear();
  labBackground(m);
  if (ghostSee(m, gx, gy)) {
    ghostTargeted(m, gx, gy);
  } else {
    let arr = ghostRandom(m, gx, gy);
    gx = arr[0];
    gy = arr[1];
  }
}, 150, maze);

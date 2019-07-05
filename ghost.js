let my = 0;
let mx = 0;

const seeUp = (maze, x, y) => {
  if (Number(maze[x - 1][y].value) !== 1) {
    if (maze[x - 1][y].value === 'x') {
      mx = x - 1;
      my = y;
      return true;
    } else {
      seeUp(maze, (x - 1), y);
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
      seeDown(maze, (x + 1), y);
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
      seeLeft(maze, x, (y - 1));
    }
  } else {
    return false;
  }
};

const seeRight = (maze, x, y) => {
  if (Number(maze[x][y + 1].value) !== 1 && maze[x][y + 1].value !== 'E') {
    if (maze[x][y + 1].value === 'x') {
      mx = x;
      my = y + 1;
      return true;
    } else {
      seeRight(maze, x, (y + 1));
    }
  } else {
    return false;
  }
};

const ghostSee = (maze, x, y) => {
  let res = false;
  res = seeUp(maze, x, y);
  if (res) {
    return res;
  }
  res = seeDown(maze, x, y);
  if (res) {
    return res;
  }
  res = seeLeft(maze, x, y);
  if (res) {
    return res;
  }
  res = seeRight(maze, x, y);
  return res;
};

const ghostNeighbor = (maze, x, y) => {
  let ma = [];
  let i = 0;
  if (Number(maze[x - 1][y].value) !== 1) {
    ma[i] = 1;
    i++;
  }
  if (Number(maze[x + 1][y].value ) !== 1) {
    ma[i] = 2;
    i++;
  }
  if (Number(maze[x][y + 1].value) !== 1) {
    ma[i] = 3;
    i++;
  }
  if (Number(maze[x][y - 1].value) !== 1) {
    ma[i] = 4;
  }
  return ma;
};
let n = 0;
let atemp = 0;
let vtemp = '0';
let vstemp = false;
const ghostRandom = (maze, x, y) => {
  let ma = ghostNeighbor(maze, x, y);
  let r = 0;
  let a = Math.floor(Math.random() * ma.length);
  if (ma.length === 1) {
    a = ma[0];
  } else {
    if (atemp === 1) {
      let d = ma.indexOf(2);
      ma.splice(d, 1);
      r = Math.floor(Math.random() * ma.length);
      a = ma[r];
    } else if (atemp === 2) {
      let d = ma.indexOf(1);
      ma.splice(d, 1);
      r = Math.floor(Math.random() * ma.length);
      a = ma[r];
    } else if (atemp === 3) {
      let d = ma.indexOf(4);
      ma.splice(d, 1);
      r = Math.floor(Math.random() * ma.length);
      a = ma[r];
    } else if (atemp === 4) {
      let d = ma.indexOf(3);
      ma.splice(d, 1);
      r = Math.floor(Math.random() * ma.length);
      a = ma[r];
    }
  }
  if (a === 1) { // fel
    if (x > 1 && Number(maze[x - 1][y].value) !== 1 && maze[x - 1][y].value !== 'E') {
      if (maze[x - 1][y].value !== 'x') {
        maze[x][y].value = vtemp;
        maze[x][y].visibility = vstemp;
        x = x - 1;
        vtemp = maze[x][y].value;
        vstemp = maze[x][y].visibility;
        maze[x][y].value = 'G';
        maze[x][y].visibility = true;
      } else {
        return resetGhost(maze, x, y);
      }
    }
  } else if (a === 2) { // le
    if (x < maze.length - 1 && Number(maze[x + 1][y].value) !== 1 && maze[x + 1][y].value !== 'E') {
      if (maze[x + 1][y].value !== 'x') {
        maze[x][y].value = vtemp;
        maze[x][y].visibility = vstemp;
        x = x + 1;
        vtemp = maze[x][y].value;
        vstemp = maze[x][y].visibility;
        maze[x][y].value = 'G';
        maze[x][y].visibility = true;
      } else {
        return resetGhost(maze, x, y);
      }
    }
  } else if (a === 3) { // jobbra
    if (y < maze[x].length - 1 && Number(maze[x][y + 1].value) !== 1 && maze[x][y + 1].value !== 'E') {
      if (maze[x][y + 1].value !== 'x') {
        maze[x][y].value = vtemp;
        maze[x][y].visibility = vstemp;
        y = y + 1;
        vtemp = maze[x][y].value;
        vstemp = maze[x][y].visibility;
        maze[x][y].value = 'G';
        maze[x][y].visibility = true;
      } else {
        return resetGhost(maze, x, y);
      }
    }
  } else if (a === 4) { // balra
    if (y > 1 && Number(maze[x][y - 1].value) !== 1 && maze[x][y + 1].value !== 'E') {
      if (maze[x][y - 1].value !== 'x') {
        maze[x][y].value = vtemp;
        maze[x][y].visibility = vstemp;
        y = y - 1;
        vtemp = maze[x][y].value;
        vstemp = maze[x][y].visibility;
        maze[x][y].value = 'G';
        maze[x][y].visibility = true;
      } else {
        return resetGhost(maze, x, y);
      }
    }
  }
  atemp = a;
  return [x, y];
};

const ghostTargeted = (maze, x, y) => {
  if (x < mx) {
    maze[x][y] = vtemp;
    x = x + 1;
    vtemp = maze[x][y].value;
    maze[x][y] = 'G';
  } else if (x > mx) {
    maze[x][y] = vtemp;
    x = x - 1;
    vtemp = maze[x][y].value;
    maze[x][y] = 'G';
  }

  if (y < my) {
    maze[x][y] = vtemp;
    y = y + 1;
    vtemp = maze[x][y].value;
    maze[x][y] = 'G';
  } else if (y > my) {
    maze[x][y] = vtemp;
    y = y - 1;
    vtemp = maze[x][y].value;
    maze[x][y] = 'G';
  }

  return { x, y };
};

const hidegHost = (maze, x, y) => {
  maze[x][y].value = vtemp;
  maze[x][y].visibility = vstemp;
};

const resetGhost = (maze, x, y) => {
  maze[x][y].value = vtemp;
  maze[x][y].visibility = vstemp;
  return [maze.length - 2, maze[maze.length - 2].length - 2];
};

/* const ghostMove = (maze, x, y) => {
  if (ghostSee(maze, x, y)) {
    ghostTargeted(maze, x, y);
  } else {
    ghostRandom(maze, x, y);
  }
  ghostMove(maze, x, y);
}; */
/* let gx = maze.length - 2;
let gy = maze.length - 2;
let prot = false;

setInterval((m) => {
  console.clear();
  labBackground(m);
  if (prot) {
    setTimeout(hidegHost, 30 * 1000);
    gx = maze.length - 2;
    gy = maze.length - 2;
  }
  if (ghostSee(m, gx, gy)) {
    ghostTargeted(m, gx, gy);
  } else {
    let arr = ghostRandom(m, gx, gy);
    gx = arr[0];
    gy = arr[1];
  }
}, 150, maze);
*/
module.exports = {
  ghostSee,
  ghostNeighbor,
  ghostRandom,
  ghostTargeted,
  hidegHost
};

const ghostSee = (x, y) => {
  if (maze[x - 1][y].value !== '1') {
    if (maze[x - 1][y].value === 'x') {
      let mx = x - 1;
      let my = y;
      return true;
    } else {
      ghostSee(x - 1, y);
    }
  } else {
    return false;
  }
  if (maze[x + 1][y].value !== '1') {
    if (maze[x + 1][y].value === 'x') {
      let mx = x + 1;
      let my = y;
    } else {
      ghostSee(x + 1, y);
    }
  } else {
    return false;
  }
  if (maze[x][y - 1].value !== '1') {
    if (maze[x][y - 1].value === 'x') {
      let mx = x;
      let my = y - 1;
    } else {
      ghostSee(x, y - 1);
    }
  } else {
    return false;
  }

  if (maze[x][y + 1].value !== '1') {
    if (maze[x][y + 1].value === 'x') {
      let mx = x;
      let my = y + 1;
    } else {
      ghostSee(x, y + 1);
    }
  } else {
    return false;
  }
};

const ghostMove = (x, y) => {
  let a = Math.floor(Math.random() * 4) + 1;

  if (a === 1) { // fel
    if (x > 1 && Number(maze[x - 1][y].value) !== 1) {
      maze[x][y].value = '0';
      x = x - 1;
      maze[x][y].value = 'g';
    } else {
      ghostMove(x, y);
    }
  } else if (a === 2) { // le
    if (x < maze.length - 1 && Number(maze[x + 1][y].value) !== 1) {
      maze[x][y].value = '0';
      x = x + 1;
      maze[x][y].value = 'g';
    } else {
      ghostMove(x, y);
    }
  } else if (a === 3) { // jobbra
    if (y < maze[x].length - 1 && Number(maze[x][y + 1].value) !== 1) {
      maze[x][y].value = '0';
      y = y + 1;
      maze[x][y].value = 'g';
    } else {
      ghostMove(x, y);
    }
  } else if (a === 4) { // balra
    if (y > 1 && Number(maze[x][y - 1].value) !== 1) {
      maze[x][y].value = '0';
      y = y - 1;
      maze[x][y].value = 'g';
    } else {
      ghostMove(x, y);
    }
  }
  return { x, y };
};

module.exports = ghostSee;
module.exports = ghostMove;

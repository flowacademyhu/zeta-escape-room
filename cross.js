const createCross = (maze) => {
  let a = Math.floor(Math.random() * maze.lenght);
  let b = Math.floor(Math.random() * maze.length);
  if (Number(maze[a][b].value) === 0) {
    maze[a][b].value = 'CR';
    return maze;
  } else {
    createCross(maze);
  }
};

const useCross = (maze) => {
  if (maze[x][y].value === 'CR') {
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j].value !== '1') {
          maze[i][j].protected = true;
        }
      }
    }
  }
};

module.exports = createCross();
module.exports = useCross();

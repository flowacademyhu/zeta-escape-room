const foodGen = (maze) => {
  let n = 0;
  let food = [];
  while (n < 3) {
    let a = Math.floor(Math.random() * (maze.length - 1));
    let b = Math.floor(Math.random() * (maze.length - 1));
    if (maze[a][b].value === '0') {
      maze[a][b].value = 'F';
      food[n] = [a, b];
      n++;
    }
  }
};

module.exports = foodGen;

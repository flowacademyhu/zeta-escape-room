const trapGen = (maze) => {
  let n = 0;
  let traps = [];
  while (n < 3) {
    let a = Math.floor(Math.random() * (maze.length - 1));
    let b = Math.floor(Math.random() * (maze[a].length - 1));
    if (maze[a][b].value === '0') {
      maze[a][b].value = 'T';
      traps[n] = [a, b];
      n++;
    }
  }
};

module.exports = trapGen;

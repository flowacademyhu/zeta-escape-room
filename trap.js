const trapGen = (maze) => {
  let n = 0;
  while (n < 3) {
    let a = Math.floor(Math.random() * (maze.length - 1));
    let b = Math.floor(Math.random() * (maze[a].length - 1));
    if (maze[a][b].value === '0') {
      maze[a][b].value = 'T';
      n++;
    }
  }
};

module.exports = trapGen;

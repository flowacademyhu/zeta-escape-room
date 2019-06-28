const newMaze = (x, y) => {
  let totalcells = x * y;
  let cells = new Array(x);
  let unvis = new Array(y);

  for (let i = 0; i < y; i++) {
    cells[i] = new Array(x);
    unvis[i] = new Array(y);
    for (let j = 0; j < x; j++) {
      cells[i][j] = [0, 0, 0, 0];
      unvis[i][j] = true;
    }
  }
  return totalcells;
};
console.log(newMaze(5, 5));

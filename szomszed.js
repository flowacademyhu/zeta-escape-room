const neighbour = () => {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      // bal felső
      if (x === 1 && y === 1 && (maze[x + 2][y].visited === false || maze[x][y + 2].visited === false)) {
        return true;
      }
      // jobb felső
      else if (x === 1 && y === maze.length - 2 && (maze[x + 2][y].visited === false || maze[x][y - 2].visited === false)) {
        return true;
      }
      // bal alsó
      else if (x === maze.length - 2 && y === 1 && (maze[x - 2][y].visited === false || maze[x][y + 2].visited === false)) {
        return true;
      }
      // jobb alsó
      else if (x === maze.length - 2 && y === maze.length - 2 && (maze[x - 2][y].visited === false || maze[x][y - 2].visited === false)) {
        return true;
      }
      // felső sor többi eleme
      else if (x === 1 && y > 1 && y < maze.length - 2 && (maze[x + 2][y].visited === false || maze[x][y + 2].visited === false || maze[x][y - 2].visited === false)) {
        return true;
      }
      // alsó sor többi eleme
      else if (x === maze.length - 2 && y > 1 && y < maze.length - 2 && (maze[x - 2][y].visited === false || maze[x][y + 2].visited === false || maze[x][y - 2].visited === false)) {
        return true;
      }
      // jobb oszlop többi eleme
      else if (y === 1 && x > 1 && x < maze.length - 2 && (maze[x + 2][y].visited === false || maze[x - 2][y].visited === false || maze[x][y + 2].visited === false)) {
        return true;
      }
      // bal oszlop többi eleme
      else if (y === maze.length - 2 && x > 1 && x < maze.length - 2 && (maze[x + 2][y].visited === false || maze[x - 2][y].visited === false || maze[x][y - 2].visited === false)) {
        return true;
      }
      // összes többi elem
      else if (y > 1 && y < maze.length - 2 && x > 1 && x < maze.length - 2 && (maze[x + 2][y].visited === false || maze[x - 2][y].visited === false || maze[x][y - 2].visited === false || arr[x][y + 2].visited === false)) {
        return true;
      } else {
        return false;
      }
    }
  }
};

const torchUse = (array, where) => {
  let x = Number(where[0]);
  let y = Number(where[1]);
  let life = 5;

  if (x < 3) {

  } else if (y === 1) {
    array[x - 1][y].visibility = true;
    array[x + 1][y].visibility = true;
    array[x][y + 1].visibility = true;
    array[x - 2][y].visibility = true;
    array[x + 2][y].visibility = true;
    array[x][y + 2].visibility = true;
    array[x - 3][y].visibility = true;
    array[x + 3][y].visibility = true;
    array[x][y + 3].visibility = true;
  } else if (y === 2) {
    array[x - 1][y].visibility = true;
    array[x + 1][y].visibility = true;
    array[x][y - 1].visibility = true;
    array[x][y + 1].visibility = true;
    array[x - 2][y].visibility = true;
    array[x + 2][y].visibility = true;
    array[x][y + 2].visibility = true;
    array[x - 3][y].visibility = true;
    array[x + 3][y].visibility = true;
    array[x][y + 3].visibility = true;
  } else if (array[x][y].used === true) {
    array[x - 1][y].visibility = true;
    array[x + 1][y].visibility = true;
    array[x][y - 1].visibility = true;
    array[x][y + 1].visibility = true;
    array[x - 2][y].visibility = true;
    array[x + 2][y].visibility = true;
    array[x][y - 2].visibility = true;
    array[x][y + 2].visibility = true;
    array[x - 3][y].visibility = true;
    array[x + 3][y].visibility = true;
    array[x][y - 3].visibility = true;
    array[x][y + 3].visibility = true;
  }
};

module.exports = torchUse;

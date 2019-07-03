const visionDefault = (arr, where) => {
  let x = Number(where[0]);
  let y = Number(where[1]);
  if (x > 1) {
    arr[x - 1][y].visibility = true;
    arr[x + 1][y].visibility = true;
    arr[x][y - 1].visibility = true;
    arr[x][y + 1].visibility = true;
  } else if (x < arr.length - 1) {
    arr[x - 1][y].visibility = true;
    arr[x + 1][y].visibility = true;
    arr[x][y - 1].visibility = true;
    arr[x][y + 1].visibility = true;
  } else if (y < arr.length - 1) {
    arr[x - 1][y].visibility = true;
    arr[x + 1][y].visibility = true;
    arr[x][y - 1].visibility = true;
    arr[x][y + 1].visibility = true;
  } else if (y > 1) {
    arr[x - 1][y].visibility = true;
    arr[x + 1][y].visibility = true;
    arr[x][y - 1].visibility = true;
    arr[x][y + 1].visibility = true;
  }
};

module.exports = visionDefault;

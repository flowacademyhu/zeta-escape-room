let torch = require('./torch');
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

const vision = (array, where, torchLife) => {
  if (array[where[0]][where[1]].torch === true || (torchLife.life < 3 && torchLife.life > 0)) {
    torch.torchUse(array, where, 3);
    torchLife.life--;
    if (torchLife.life === 0) {
      array[where[0]][where[1]].torch = false;
    }
  } else {
    torchLife.life = 3;
    visionDefault(array, where);
  }
};

module.exports = {
  visionDefault: visionDefault,
  vision: vision
};

const move = (arr, where, a, life) => {
  let x = Number(where[0]);
  let y = Number(where[1]);

  if (a === 'w') { // fel
    if (x > 1 && Number(arr[x - 1][y].value) !== 1) {
      if (arr[x - 1][y].value === 'T') {
        life.life--;
      }
      if (arr[x - 1][y].value === 'F') {
        life.life++;
      }
      if (arr[x - 1][y].value === 'CR') {

      }
      arr[x][y].value = '0';
      x = x - 1;
      arr[x][y].value = 'x';
      arr[x][y].torch = false;
      arr[x][y].visibility = true;
      if (arr[x][y].used === false) {
        arr[x][y].torch = true;
      }
    } else {

    }
  } else if (a === 's') { // le
    if (x < arr.length - 1 && Number(arr[x + 1][y].value) !== 1) {
      if (arr[x + 1][y].value === 'T') {
        life.life--;
      }
      if (arr[x + 1][y].value === 'F') {
        life.life++;
      }
      arr[x][y].value = '0';
      x = x + 1;
      arr[x][y].value = 'x';
      arr[x][y].torch = false;
      arr[x][y].visibility = true;
      if (arr[x][y].used === false) {
        arr[x][y].torch = true;
      }
    } else {

    }
  } else if (a === 'd') { // jobbra
    if ((y === arr.length - 2 && x === 3) || (y === arr.length - 2 && x === 4)) {
    } else if (y < arr[x].length - 1 && Number(arr[x][y + 1].value) !== 1) {
      if (arr[x][y + 1].value === 'T') {
        life.life--;
      }
      if (arr[x][y + 1].value === 'F') {
        life.life++;
      }
      arr[x][y].value = '0';
      y = y + 1;
      arr[x][y].value = 'x';
      arr[x][y].torch = false;
      arr[x][y].visibility = true;
      if (arr[x][y].used === false) {
        arr[x][y].torch = true;
      }
    } else {

    }
  } else if (a === 'a') { // balra
    if (y > 1 && Number(arr[x][y - 1].value) !== 1) {
      if (arr[x][y - 1].value === 'T') {
        life.life--;
      }
      if (arr[x][y - 1].value === 'F') {
        life.life++;
      }
      arr[x][y].value = '0';
      y = y - 1;
      arr[x][y].value = 'x';
      arr[x][y].torch = false;
      arr[x][y].visibility = true;
      if (arr[x][y].used === false) {
        arr[x][y].torch = true;
      }
    } else {

    }
  }

  where[0] = x;
  where[1] = y;
};

module.exports = move;

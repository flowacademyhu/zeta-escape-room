const move = (arr, where, a) => {
  let x = Number(where[0]);
  let y = Number(where[1]);
  if (a === 'w') { // fel
    if (x > 1 && Number(arr[x - 1][y].value) !== 1) {
      arr[x][y].value = '0';
      x = x - 1;
      arr[x][y].value = 'x';
      arr[x][y].visibility = true;
      arr[x - 1][y].visibility = true;
      arr[x + 1][y].visibility = true;
      arr[x][y - 1].visibility = true;
      arr[x][y + 1].visibility = true;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 's') { // le
    if (x < arr.length - 1 && Number(arr[x + 1][y].value) !== 1) {
      arr[x][y].value = '0';
      x = x + 1;
      arr[x][y].value = 'x';
      arr[x][y].visibility = true;
      arr[x - 1][y].visibility = true;
      arr[x + 1][y].visibility = true;
      arr[x][y - 1].visibility = true;
      arr[x][y + 1].visibility = true;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 'd') { // jobbra
    if (y < arr[x].length - 1 && Number(arr[x][y + 1].value) !== 1) {
      arr[x][y].value = '0';
      y = y + 1;
      arr[x][y].value = 'x';
      arr[x][y].visibility = true;
      arr[x - 1][y].visibility = true;
      arr[x + 1][y].visibility = true;
      arr[x][y - 1].visibility = true;
      arr[x][y + 1].visibility = true;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 'a') { // balra
    if (y > 1 && Number(arr[x][y - 1].value) !== 1) {
      arr[x][y].value = '0';
      y = y - 1;
      arr[x][y].value = 'x';
      arr[x][y].visibility = true;
      arr[x - 1][y].visibility = true;
      arr[x + 1][y].visibility = true;
      arr[x][y - 1].visibility = true;
      arr[x][y + 1].visibility = true;
    } else {
      console.log('Invalid movement!');
    }
  }

  where[0] = x;
  where[1] = y;
  return where;
};

module.exports = move;

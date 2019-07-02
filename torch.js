
const torchGen = (array, n) => {
  let count = 0;
  while (count < n) {
    let rng1 = Math.floor(Math.random() * 27 + 1);
    let rng2 = Math.floor(Math.random() * 27 + 1);
    for (let i = 1; i < array.length - 1; i++) {
      for (let j = 1; j < array[i].length - 1; j++) {
        if (rng1 === i && rng2 === j && array[i][j].visibility === false && Number(array[i][j].value) !== 1) {
          array[i][j] = { value: 'TO', visibility: true, used: false };
          count++;
        }
      }
    }
  }
  return array;
};

const torchUse = (array, where, range) => {
  let x = Number(where[0]);
  let y = Number(where[1]);
  let c = 0;
  let tx = x - range;
  // let ty = y - range;
  let tymin;
  let tymax;

  if (array[x][y].used === true) {
    for (let i = tx; i <= x; i++) {
      tx = x - range + c;
      tymin = y - c;
      tymax = y + c;
      for (let ty = tymin; ty <= tymax; ty++) {
        array[tx][ty].visibility = true;
        console.log(c, tx, ty);
      }

      c++;
    }
    /* for (let j = ty; j <= y + range; j++) {
      ty = y - range + d;
      array[x][ty].visibility = true;
      d++;
    }
    tymin = y - range;
    tymax = y + range;
  */
  }
};

const torchUpTime = (array, where) => {
  let x = Number(where[0]);
  let y = Number(where[1]);
  let torchLifeTime = 5;
  if (torchUse()) {
    if (x > 2 && x < array.length - 2 && y > 2 && y < array.length - 2) {
      array[x][y].visibility = true;
      while (torchLifeTime > 5) {
        torchLifeTime--;
      }
    }
  }
};

module.exports = {
  torchGen: torchGen,
  torchUse: torchUse,
  torchUpTime: torchUpTime
};

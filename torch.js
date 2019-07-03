
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
  let d = 0;
  let tx = x - range;
  let txm = x + range;
  let tymin;
  let tymax;
  for (let i = tx; i <= x; i++) {
    tx = x - range + c;
    tymin = y - c;
    tymax = y + c;
    for (let ty = tymin; ty <= tymax; ty++) {
      if (tx < array.length && tx > 0 && ty > 0 && ty < array.length) {
        array[tx][ty].visibility = true;
      }
    }
    c++;
  }
  for (let i = txm; i >= x; i--) {
    txm = x + range - d;
    tymin = y - d;
    tymax = y + d;
    for (let ty = tymin; ty <= tymax; ty++) {
      if (txm < array.length && txm > 0 && ty > 0 && ty < array.length) {
        array[txm][ty].visibility = true;
      }
    }
    d++;
  }
  return true;
};

const torchUpTime = (array, where) => {
  let x = Number(where[0]);
  let y = Number(where[1]);
  let torchLifeTime = 5;
};

module.exports = {
  torchGen: torchGen,
  torchUse: torchUse,
  torchUpTime: torchUpTime
};

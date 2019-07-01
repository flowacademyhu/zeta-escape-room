const torchGen = (array) => {
  let count = 0;
  while (count < 3) {
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

module.exports = torchGen;

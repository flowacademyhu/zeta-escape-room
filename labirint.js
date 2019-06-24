
const twArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
      arr[i][0] = 1;
      arr[i][19] = 1;
      arr[0][j] = 1;
      arr[19][j] = 1;
    }
  }
  return arr;
};

module.exports = twArray;

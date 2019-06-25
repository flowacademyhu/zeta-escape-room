
const twArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
      arr[i][0] = 1;
      arr[i][28] = 1;
      arr[0][j] = 1;
      arr[34][j] = 1;
    }
  }
  arr[2][2] = 1;
  arr[2][3] = 1;
  arr[2][4] = 1;
  arr[2][5] = 1;
  return arr;
};
console.log(twArray());
module.exports = twArray;

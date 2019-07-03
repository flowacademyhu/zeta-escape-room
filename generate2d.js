
const generate2D = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fillArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = ['A', 'B', 'C'];
    }
  }
  return arr;
};
let k = generate2D(3, 1);
console.log(fillArr(k));
module.exports = generate2D;

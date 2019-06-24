const generate2D = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

let arr = generate2D(20, 20);

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

console.log(twArray(arr));

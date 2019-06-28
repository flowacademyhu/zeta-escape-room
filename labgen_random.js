const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fill2d = () => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] = { value: '1', visibility: false, visited: false };
    }
  }
};
let array = generate2d(10, 10);
fill2d(array);
console.log(array);

const mazeRandom = (array) => {
  let dir = [{ name: 'n', value: 1 }, { name: 's', value: 2 }, { name: 'e', value: 4 }, { name: 'w', value: 8 }];
  let dx = { e: 1, w: -1, n: 0, s: 0 };
  let dy = { e: 0, w: 0, n: -1, s: 1 };
  let opp = { e: w, w: e, n: s, s: n };
  let rng = Math.floor(Math.random() * 4);
  let direction = dir[rng].name;
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = 1; j < array[i].length - 1; j++) {

    }
  }
};
mazeRandom();

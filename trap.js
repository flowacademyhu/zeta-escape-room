const trapGen = (array) => {
  let a = Math.floor(Math.random()*array.length);
  let b = Math.floor(Math.random()*array[a].length);
    let n=3;
while (n<3) {
    if (Number(array[a][b].value)=0) {
        array[a][b].value='T';
        n++
    }
}
  }
};

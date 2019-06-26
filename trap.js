const trapGen = (array) => {
  let n=0;
    while (n<3) {
    let a = Math.floor(Math.random()*array.length);
    let b = Math.floor(Math.random()*array[a].length);
    if (Number(array[a][b].value)===0) {
        array[a][b].value='T';
        n++
    }
}
}
};

const generateLabirynth = () => {
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
        array[i][j] = { value: '0', visibility: false };
      }
    }
  };

  let array = generate2d(28, 28);
  fill2d(array);

  for (let i = 0; i < array.length; i++) { // labirintus szélét generáló ciklus
    for (let j = 0; j < array[i].length; j++) {
      if (i < 1 || i === array.length - 1 || j < 1 || j === array[i].length - 1) {
        array[i][j] = { value: '1', visibility: true };
      }
    }
  }/* for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    process.stdout.write(array[i][j].value);
  }
  console.log();
} */

  const generateMaze = () => {
    array[1][3] = { value: '1', visibility: false };
    array[1][4] = { value: '1', visibility: false };
    array[1][5] = { value: '1', visibility: false };
    array[1][6] = { value: '1', visibility: false };
    array[1][7] = { value: '1', visibility: false };
    array[1][8] = { value: '1', visibility: false };
    array[1][9] = { value: '1', visibility: false };
    array[1][10] = { value: '1', visibility: false };
    array[1][11] = { value: '1', visibility: false };
    array[1][12] = { value: '1', visibility: false };
    array[1][13] = { value: '1', visibility: false };
    array[1][14] = { value: '1', visibility: false };
    array[1][15] = { value: '1', visibility: false };
    array[1][16] = { value: '1', visibility: false };
    array[1][17] = { value: '1', visibility: false };
    array[1][18] = { value: '1', visibility: false };
    array[1][19] = { value: '1', visibility: false };
    array[1][20] = { value: '1', visibility: false };
    array[1][21] = { value: '1', visibility: false };
    array[1][22] = { value: '1', visibility: false };
    array[1][23] = { value: '1', visibility: false };
    array[1][24] = { value: '1', visibility: false };
    array[1][25] = { value: '1', visibility: false };
    array[1][26] = { value: '1', visibility: false };
    array[1][27] = { value: '1', visibility: false };

    array[2][3] = { value: '1', visibility: false };
    array[2][4] = { value: '1', visibility: false };
    array[2][5] = { value: '1', visibility: false };
    array[2][6] = { value: '1', visibility: false };
    array[2][7] = { value: '1', visibility: false };
    array[2][8] = { value: '1', visibility: false };
    array[2][9] = { value: '1', visibility: false };
    array[2][10] = { value: '1', visibility: false };
    array[2][11] = { value: '1', visibility: false };
    array[2][12] = { value: '1', visibility: false };
    array[2][13] = { value: '1', visibility: false };
    array[2][14] = { value: '1', visibility: false };
    array[2][15] = { value: '1', visibility: false };
    array[2][16] = { value: '1', visibility: false };
    array[2][17] = { value: '1', visibility: false };
    array[2][18] = { value: '1', visibility: false };
    array[2][19] = { value: '1', visibility: false };
    array[2][20] = { value: '1', visibility: false };
    array[2][21] = { value: '1', visibility: false };
    array[2][22] = { value: '1', visibility: false };
    array[2][23] = { value: '1', visibility: false };
    array[2][24] = { value: '1', visibility: false };
    array[2][25] = { value: '1', visibility: false };
    array[2][26] = { value: '1', visibility: false };
    array[2][27] = { value: '1', visibility: false };

    array[3][3] = { value: '1', visibility: false };
    array[3][4] = { value: '1', visibility: false };
    array[3][5] = { value: '1', visibility: false };
    array[3][6] = { value: '1', visibility: false };
    array[3][7] = { value: '1', visibility: false };
    array[3][8] = { value: '1', visibility: false };
    array[3][9] = { value: '1', visibility: false };
    array[3][10] = { value: '1', visibility: false };
    array[3][11] = { value: '1', visibility: false };
    array[3][12] = { value: '1', visibility: false };
    array[3][13] = { value: '1', visibility: false };
    array[3][14] = { value: '1', visibility: false };
    array[3][15] = { value: '1', visibility: false };
    array[3][16] = { value: '1', visibility: false };
    array[3][17] = { value: '1', visibility: false };
    array[3][18] = { value: '1', visibility: false };
    array[3][19] = { value: '1', visibility: false };
    array[3][20] = { value: '1', visibility: false };
    array[3][21] = { value: '1', visibility: false };
    array[3][22] = { value: '1', visibility: false };
    array[3][23] = { value: '1', visibility: false };
    array[3][27] = { value: '0', visibility: true };

    array[4][3] = { value: '1', visibility: false };
    array[4][4] = { value: '1', visibility: false };
    array[4][5] = { value: '1', visibility: false };
    array[4][6] = { value: '1', visibility: false };
    array[4][7] = { value: '1', visibility: false };
    array[4][8] = { value: '1', visibility: false };
    array[4][9] = { value: '1', visibility: false };

    array[4][16] = { value: '1', visibility: false };
    array[4][17] = { value: '1', visibility: false };
    array[4][18] = { value: '1', visibility: false };
    array[4][19] = { value: '1', visibility: false };
    array[4][20] = { value: '1', visibility: false };
    array[4][21] = { value: '1', visibility: false };
    array[4][22] = { value: '1', visibility: false };
    array[4][23] = { value: '1', visibility: false };
    array[4][27] = { value: '0', visibility: true };

    array[5][3] = { value: '1', visibility: false };
    array[5][4] = { value: '1', visibility: false };
    array[5][5] = { value: '1', visibility: false };
    array[5][6] = { value: '1', visibility: false };
    array[5][7] = { value: '1', visibility: false };
    array[5][8] = { value: '1', visibility: false };
    array[5][9] = { value: '1', visibility: false };

    array[5][16] = { value: '1', visibility: false };
    array[5][17] = { value: '1', visibility: false };
    array[5][18] = { value: '1', visibility: false };
    array[5][19] = { value: '1', visibility: false };
    array[5][20] = { value: '1', visibility: false };
    array[5][21] = { value: '1', visibility: false };
    array[5][22] = { value: '1', visibility: false };
    array[5][23] = { value: '1', visibility: false };

    array[5][26] = { value: '1', visibility: false };
    array[5][27] = { value: '1', visibility: false };

    array[6][3] = { value: '1', visibility: false };
    array[6][4] = { value: '1', visibility: false };
    array[6][5] = { value: '1', visibility: false };
    array[6][6] = { value: '1', visibility: false };
    array[6][7] = { value: '1', visibility: false };
    array[6][8] = { value: '1', visibility: false };
    array[6][9] = { value: '1', visibility: false };
    array[6][12] = { value: '1', visibility: false };
    array[6][13] = { value: '1', visibility: false };
    array[6][16] = { value: '1', visibility: false };
    array[6][17] = { value: '1', visibility: false };
    array[6][18] = { value: '1', visibility: false };
    array[6][19] = { value: '1', visibility: false };
    array[6][20] = { value: '1', visibility: false };
    array[6][21] = { value: '1', visibility: false };
    array[6][22] = { value: '1', visibility: false };
    array[6][23] = { value: '1', visibility: false };
    array[6][26] = { value: '1', visibility: false };
    array[6][27] = { value: '1', visibility: false };

    array[7][3] = { value: '1', visibility: false };
    array[7][4] = { value: '1', visibility: false };
    array[7][5] = { value: '1', visibility: false };
    array[7][6] = { value: '1', visibility: false };
    array[7][7] = { value: '1', visibility: false };
    array[7][8] = { value: '1', visibility: false };
    array[7][9] = { value: '1', visibility: false };
    array[7][12] = { value: '1', visibility: false };
    array[7][13] = { value: '1', visibility: false };
    array[7][16] = { value: '1', visibility: false };
    array[7][17] = { value: '1', visibility: false };
    array[7][18] = { value: '1', visibility: false };
    array[7][19] = { value: '1', visibility: false };
    array[7][20] = { value: '1', visibility: false };
    array[7][21] = { value: '1', visibility: false };
    array[7][22] = { value: '1', visibility: false };
    array[7][23] = { value: '1', visibility: false };
    array[7][26] = { value: '1', visibility: false };
    array[7][27] = { value: '1', visibility: false };

    array[8][26] = { value: '1', visibility: false };
    array[8][27] = { value: '1', visibility: false };

    array[9][26] = { value: '1', visibility: false };
    array[9][27] = { value: '1', visibility: false };

    array[10][1] = { value: '1', visibility: false };
    array[10][2] = { value: '1', visibility: false };
    array[10][3] = { value: '1', visibility: false };
    array[10][4] = { value: '1', visibility: false };
    array[10][5] = { value: '1', visibility: false };
    array[10][6] = { value: '1', visibility: false };
    array[10][9] = { value: '1', visibility: false };
    array[10][10] = { value: '1', visibility: false };
    array[10][11] = { value: '1', visibility: false };
    array[10][12] = { value: '1', visibility: false };
    array[10][13] = { value: '1', visibility: false };
    array[10][16] = { value: '1', visibility: false };
    array[10][17] = { value: '1', visibility: false };
    array[10][18] = { value: '1', visibility: false };
    array[10][21] = { value: '1', visibility: false };
    array[10][22] = { value: '1', visibility: false };
    array[10][23] = { value: '1', visibility: false };
    array[10][26] = { value: '1', visibility: false };
    array[10][27] = { value: '1', visibility: false };

    array[11][1] = { value: '1', visibility: false };
    array[11][2] = { value: '1', visibility: false };
    array[11][3] = { value: '1', visibility: false };
    array[11][4] = { value: '1', visibility: false };
    array[11][5] = { value: '1', visibility: false };
    array[11][6] = { value: '1', visibility: false };
    array[11][9] = { value: '1', visibility: false };
    array[11][10] = { value: '1', visibility: false };
    array[11][11] = { value: '1', visibility: false };
    array[11][12] = { value: '1', visibility: false };
    array[11][13] = { value: '1', visibility: false };
    array[11][16] = { value: '1', visibility: false };
    array[11][17] = { value: '1', visibility: false };
    array[11][18] = { value: '1', visibility: false };
    array[11][21] = { value: '1', visibility: false };
    array[11][22] = { value: '1', visibility: false };
    array[11][23] = { value: '1', visibility: false };
    array[11][26] = { value: '1', visibility: false };
    array[11][27] = { value: '1', visibility: false };

    array[12][1] = { value: '1', visibility: false };
    array[12][2] = { value: '1', visibility: false };
    array[12][3] = { value: '1', visibility: false };
    array[12][4] = { value: '1', visibility: false };
    array[12][5] = { value: '1', visibility: false };
    array[12][6] = { value: '1', visibility: false };
    array[12][9] = { value: '1', visibility: false };
    array[12][10] = { value: '1', visibility: false };
    array[12][11] = { value: '1', visibility: false };
    array[12][12] = { value: '1', visibility: false };
    array[12][13] = { value: '1', visibility: false };
    array[12][16] = { value: '1', visibility: false };
    array[12][17] = { value: '1', visibility: false };
    array[12][18] = { value: '1', visibility: false };
    array[12][21] = { value: '1', visibility: false };
    array[12][22] = { value: '1', visibility: false };
    array[12][23] = { value: '1', visibility: false };
    array[12][26] = { value: '1', visibility: false };
    array[12][27] = { value: '1', visibility: false };

    array[13][26] = { value: '1', visibility: false };
    array[13][27] = { value: '1', visibility: false };

    array[14][26] = { value: '1', visibility: false };
    array[14][27] = { value: '1', visibility: false };

    array[15][1] = { value: '1', visibility: false };
    array[15][2] = { value: '1', visibility: false };
    array[15][3] = { value: '1', visibility: false };
    array[15][4] = { value: '1', visibility: false };
    array[15][5] = { value: '1', visibility: false };
    array[15][6] = { value: '1', visibility: false };
    array[15][9] = { value: '1', visibility: false };
    array[15][10] = { value: '1', visibility: false };
    array[15][11] = { value: '1', visibility: false };
    array[15][12] = { value: '1', visibility: false };
    array[15][13] = { value: '1', visibility: false };
    array[15][14] = { value: '1', visibility: false };
    array[15][15] = { value: '1', visibility: false };
    array[15][16] = { value: '1', visibility: false };
    array[15][17] = { value: '1', visibility: false };
    array[15][18] = { value: '1', visibility: false };
    array[15][19] = { value: '1', visibility: false };
    array[15][20] = { value: '1', visibility: false };
    array[15][21] = { value: '1', visibility: false };
    array[15][22] = { value: '1', visibility: false };
    array[15][23] = { value: '1', visibility: false };
    array[15][26] = { value: '1', visibility: false };
    array[15][27] = { value: '1', visibility: false };

    array[16][1] = { value: '1', visibility: false };
    array[16][2] = { value: '1', visibility: false };
    array[16][3] = { value: '1', visibility: false };
    array[16][4] = { value: '1', visibility: false };
    array[16][5] = { value: '1', visibility: false };
    array[16][6] = { value: '1', visibility: false };
    array[16][9] = { value: '1', visibility: false };
    array[16][10] = { value: '1', visibility: false };
    array[16][11] = { value: '1', visibility: false };
    array[16][12] = { value: '1', visibility: false };
    array[16][13] = { value: '1', visibility: false };
    array[16][14] = { value: '1', visibility: false };
    array[16][15] = { value: '1', visibility: false };
    array[16][16] = { value: '1', visibility: false };
    array[16][17] = { value: '1', visibility: false };
    array[16][18] = { value: '1', visibility: false };
    array[16][19] = { value: '1', visibility: false };
    array[16][20] = { value: '1', visibility: false };
    array[16][21] = { value: '1', visibility: false };
    array[16][22] = { value: '1', visibility: false };
    array[16][23] = { value: '1', visibility: false };
    array[16][26] = { value: '1', visibility: false };
    array[16][27] = { value: '1', visibility: false };

    array[17][1] = { value: '1', visibility: false };
    array[17][2] = { value: '1', visibility: false };
    array[17][3] = { value: '1', visibility: false };
    array[17][4] = { value: '1', visibility: false };
    array[17][5] = { value: '1', visibility: false };
    array[17][6] = { value: '1', visibility: false };
    array[17][9] = { value: '1', visibility: false };
    array[17][10] = { value: '1', visibility: false };
    array[17][11] = { value: '1', visibility: false };
    array[17][12] = { value: '1', visibility: false };
    array[17][13] = { value: '1', visibility: false };
    array[17][14] = { value: '1', visibility: false };
    array[17][15] = { value: '1', visibility: false };
    array[17][16] = { value: '1', visibility: false };
    array[17][17] = { value: '1', visibility: false };
    array[17][18] = { value: '1', visibility: false };
    array[17][19] = { value: '1', visibility: false };
    array[17][20] = { value: '1', visibility: false };
    array[17][21] = { value: '1', visibility: false };
    array[17][22] = { value: '1', visibility: false };
    array[17][23] = { value: '1', visibility: false };
    array[17][26] = { value: '1', visibility: false };
    array[17][27] = { value: '1', visibility: false };

    array[18][1] = { value: '1', visibility: false };
    array[18][2] = { value: '1', visibility: false };
    array[18][3] = { value: '1', visibility: false };
    array[18][4] = { value: '1', visibility: false };
    array[18][5] = { value: '1', visibility: false };
    array[18][6] = { value: '1', visibility: false };
    array[18][9] = { value: '1', visibility: false };
    array[18][10] = { value: '1', visibility: false };
    array[18][11] = { value: '1', visibility: false };/* for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          process.stdout.write(array[i][j].value);
        }
        console.log();
      } */
    array[18][12] = { value: '1', visibility: false };
    array[18][13] = { value: '1', visibility: false };
    array[18][14] = { value: '1', visibility: false };
    array[18][15] = { value: '1', visibility: false };
    array[18][16] = { value: '1', visibility: false };
    array[18][17] = { value: '1', visibility: false };
    array[18][18] = { value: '1', visibility: false };
    array[18][19] = { value: '1', visibility: false };
    array[18][20] = { value: '1', visibility: false };
    array[18][21] = { value: '1', visibility: false };
    array[18][22] = { value: '1', visibility: false };
    array[18][23] = { value: '1', visibility: false };
    array[18][26] = { value: '1', visibility: false };
    array[18][27] = { value: '1', visibility: false };

    array[19][26] = { value: '1', visibility: false };
    array[19][27] = { value: '1', visibility: false };
    array[20][26] = { value: '1', visibility: false };
    array[20][27] = { value: '1', visibility: false };

    array[21][1] = { value: '1', visibility: false };
    array[21][2] = { value: '1', visibility: false };
    array[21][3] = { value: '1', visibility: false };
    array[21][4] = { value: '1', visibility: false };
    array[21][5] = { value: '1', visibility: false };
    array[21][6] = { value: '1', visibility: false };
    array[21][9] = { value: '1', visibility: false };
    array[21][10] = { value: '1', visibility: false };
    array[21][11] = { value: '1', visibility: false };
    array[21][12] = { value: '1', visibility: false };
    array[21][13] = { value: '1', visibility: false };
    array[21][16] = { value: '1', visibility: false };
    array[21][17] = { value: '1', visibility: false };
    array[21][18] = { value: '1', visibility: false };
    array[21][19] = { value: '1', visibility: false };
    array[21][22] = { value: '1', visibility: false };
    array[21][23] = { value: '1', visibility: false };
    array[21][26] = { value: '1', visibility: false };
    array[21][27] = { value: '1', visibility: false };

    array[22][1] = { value: '1', visibility: false };
    array[22][2] = { value: '1', visibility: false };
    array[22][3] = { value: '1', visibility: false };
    array[22][4] = { value: '1', visibility: false };
    array[22][5] = { value: '1', visibility: false };
    array[22][6] = { value: '1', visibility: false };
    array[22][9] = { value: '1', visibility: false };
    array[22][10] = { value: '1', visibility: false };
    array[22][11] = { value: '1', visibility: false };
    array[22][12] = { value: '1', visibility: false };
    array[22][13] = { value: '1', visibility: false };
    array[22][16] = { value: '1', visibility: false };
    array[22][17] = { value: '1', visibility: false };
    array[22][18] = { value: '1', visibility: false };
    array[22][19] = { value: '1', visibility: false };
    array[22][22] = { value: '1', visibility: false };
    array[22][23] = { value: '1', visibility: false };
    array[22][26] = { value: '1', visibility: false };
    array[22][27] = { value: '1', visibility: false };

    array[23][1] = { value: '1', visibility: false };
    array[23][2] = { value: '1', visibility: false };
    array[23][3] = { value: '1', visibility: false };
    array[23][4] = { value: '1', visibility: false };
    array[23][5] = { value: '1', visibility: false };
    array[23][6] = { value: '1', visibility: false };
    array[23][9] = { value: '1', visibility: false };
    array[23][10] = { value: '1', visibility: false };
    array[23][11] = { value: '1', visibility: false };
    array[23][12] = { value: '1', visibility: false };
    array[23][13] = { value: '1', visibility: false };
    array[23][16] = { value: '1', visibility: false };
    array[23][17] = { value: '1', visibility: false };
    array[23][18] = { value: '1', visibility: false };
    array[23][19] = { value: '1', visibility: false };
    array[23][22] = { value: '1', visibility: false };
    array[23][23] = { value: '1', visibility: false };
    array[23][26] = { value: '1', visibility: false };
    array[23][27] = { value: '1', visibility: false };

    array[24][26] = { value: '1', visibility: false };
    array[24][27] = { value: '1', visibility: false };

    array[25][26] = { value: '1', visibility: false };
    array[25][27] = { value: '1', visibility: false };

    array[26][1] = { value: '1', visibility: false };
    array[26][2] = { value: '1', visibility: false };
    array[26][3] = { value: '1', visibility: false };
    array[26][4] = { value: '1', visibility: false };
    array[26][5] = { value: '1', visibility: false };
    array[26][6] = { value: '1', visibility: false };
    array[26][7] = { value: '1', visibility: false };
    array[26][8] = { value: '1', visibility: false };
    array[26][9] = { value: '1', visibility: false };
    array[26][10] = { value: '1', visibility: false };
    array[26][11] = { value: '1', visibility: false };
    array[26][12] = { value: '1', visibility: false };
    array[26][13] = { value: '1', visibility: false };
    array[26][14] = { value: '1', visibility: false };
    array[26][15] = { value: '1', visibility: false };
    array[26][16] = { value: '1', visibility: false };
    array[26][17] = { value: '1', visibility: false };
    array[26][18] = { value: '1', visibility: false };
    array[26][19] = { value: '1', visibility: false };
    array[26][20] = { value: '1', visibility: false };
    array[26][21] = { value: '1', visibility: false };
    array[26][22] = { value: '1', visibility: false };
    array[26][23] = { value: '1', visibility: false };
    array[26][24] = { value: '1', visibility: false };
    array[26][25] = { value: '1', visibility: false };
    array[26][26] = { value: '1', visibility: false };
    array[26][27] = { value: '1', visibility: false };
  };

  generateMaze();
  /* for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    process.stdout.write(array[i][j].value);
  }
  console.log();
} */

  return array;
};

module.exports = generateLabirynth;

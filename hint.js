const hintGen = (array) => {
  let count = 0;
  while (count < 7) {
    let rng1 = Math.floor(Math.random() * 35 + 1);
    let rng2 = Math.floor(Math.random() * 35 + 1);
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (rng1 === i && rng2 === j && array[i][j].visibility === false && Number(array[i][j].value) !== 1) {
          array[i][j] = { value: 'H', visibility: true, discovered: false };
          count++;
        }
      }
    }
  }
  return array;
};

const hintStash = (array, where, pw, foundHints) => {
  let x = Number(where[0]);
  let y = Number(where[1]);
  let password = [
    { letter: 'p', description: 'Letter is P', seen: false },
    { letter: 'a', description: 'Letter is A', seen: false },
    { letter: 's', description: 'Letter is S', seen: false },
    { letter: 's', description: 'Letter is S', seen: false },
    { letter: 'w', description: 'Letter is W', seen: false },
    { letter: 'o', description: 'Letter is O', seen: false },
    { letter: 'r', description: 'Letter is R', seen: false },
    { letter: 'd', description: 'Letter is D', seen: false }
  ];
  let r = Math.floor(Math.random() * password.length);
  if (array[x][y].discovered === false && password[r].seen === false && pw.value === 'password' && password.length !== 0) {
    array[x][y].discovered = true;
    password[r].seen = true;
    foundHints.push(password[r]);
    password.splice(r, 1);
  } else if (password.length === 0) {
    console.log('There are no more hints to discover!');
  } else {
    r = Math.floor(Math.random() * password.length);
  }
  return foundHints;
};

const hintBoard = (foundHints) => {
  for (let i = 0; i < foundHints.length; i++) {
    console.log(i + '. ' + foundHints[i].description);
  }
};

module.exports = {
  hintGen,
  hintStash,
  hintBoard
};

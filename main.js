const main = () => {
  var term = require('terminal-kit').terminal;
  let readline = require('readline-sync');
  let trapGen = require('./trap');
  let foodGen = require('./food');
  let move = require('./move');
  let gen = require('./maze_new');
  let ghost = require('./ghost');

  let torch = require('./torch');
  let vision = require('./vision');
  let maze = [];

  /* const labBackground = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (Number(array[i][j].value) === 1 && array[i][j].visibility === true) {
        term.bgWhite('  ');
      } else if (array[i][j].visibility === false) {
        process.stdout.write('  ');
      } else if (array[i][j].value === 'x') {
        term.bgRed('  ');
      } else if (array[i][j].value === 'F') {
        term.bgGreen(' F');
      } else if (array[i][j].value === 'H') {
        term.bgBlack(' H');
      } else if (array[i][j].value === 'T') {
        term.bgBlue(' T');
      } else if (array[i][j].value === 'TO') {
        term.bgYellow('TO');
      } else if (Number(array[i][j].value) === 0 && array[i][j].visibility === true) {
        term.bgBlack('  ');
      }
    }
    console.log();
  }
  return array;
};
*/
  maze = gen.generate2d(27, 27);
  maze = gen.fill2d(maze);
  gen.mazeGen(1, 1, maze);
  maze[1][1] = { value: 'x', visibility: true };
  torch.torchGen(maze, 3);
  trapGen(maze);
  // gen.labBackground(maze);
  let life = { life: 10 };
  let torchLife = { life: 3 };

  let a;
  let where = [1, 1];
  console.clear();

  let gx = maze.length - 2;
  let gy = maze.length - 2;
  let prot = false;
  while (true) {
    vision.vision(maze, where, torchLife);
    if (prot) {
      setTimeout(ghost.hidegHost, 30 * 1000);
      gx = maze.length - 2;
      gy = maze.length - 2;
    }
    if (ghost.ghostSee(maze, gx, gy)) {
      ghost.ghostTargeted(maze, gx, gy);
    } else {
      let arr = ghost.ghostRandom(maze, gx, gy);
      gx = arr[0];
      gy = arr[1];
    }

    gen.labBackground(maze);

    a = readline.keyIn();
    console.clear();
    move(maze, where, a, life);

    if (a === 'q') {
      process.exit();
    }
  }
};

module.exports = main;

const main = () => {
  let readline = require('readline-sync');
  let trapGen = require('./trap');
  let foodGen = require('./food');
  let move = require('./move');
  let gen = require('./maze_new');
  let ghost = require('./ghost');
  let torch = require('./torch');
  let vision = require('./vision');
  let manual = require('./manual');
  let validate = require('./validate');
  let { hintGen, hintStash, hintBoard } = require('./hint');
  let maze = [];
  let foundHints = [];
  let pw = 'password';
  let password = [
    { letter: 'p', description: 'Letter is P', seen: false },
    { letter: 'a', description: 'Letter is A', seen: false },
    { letter: 's', description: 'Letters are 2S', seen: false },
    { letter: 'w', description: 'Letter is W', seen: false },
    { letter: 'o', description: 'Letter is O', seen: false },
    { letter: 'r', description: 'Letter is R', seen: false },
    { letter: 'd', description: 'Letter is D', seen: false }
  ];

  maze = gen.generate2d(35, 35);
  maze = gen.fill2d(maze);
  gen.mazeGen(1, 1, maze);
  maze[1][1] = { value: 'x', visibility: true };
  maze[3][maze.length - 1] = { value: 'E', visibility: true, visited: true };
  torch.torchGen(maze, 6);
  trapGen(maze);
  hintGen(maze);
  foodGen(maze);
  let life = { life: 5 };
  let torchLife = { life: 3 };

  let a;
  let where = [1, 1];
  console.clear();

  let gx = maze.length - 2;
  let gy = maze.length - 2;
  let prot = false;
  while (true) {
    console.clear();
    gen.labBackground(maze);
    // gen.rawDraw(maze);
    console.log('\n Life:' + life.life);
    console.log('\n Press "m" button to open the manual.');
    console.log(' If you would like to exit (what We DON\'T recommend), press "q".');
    a = readline.keyIn();
    let tg = move(maze, where, a, life);
    if (tg !== undefined) {
      gx = tg[0];
      gy = tg[1];
    }
    vision.vision(maze, where, torchLife);
    hintStash(maze, where, pw, foundHints, password);
    if (a === 'h') {
      console.clear();
      console.log('Found Hints:');
      console.log('\n(The hints below are not in the right sequence.)');
      hintBoard(foundHints);
      console.log('\n\nPress any key to return into the maze. (Except "q".)');
      a = readline.keyIn();
      console.clear();
    }
    if (a === 'm') {
      manual();
      console.log('\n\nPress any key to return into the maze. (Except "q".)');
      a = readline.keyIn();
      console.clear();
    }
    if (a === 'q') {
      process.exit();
    }
    if (a === 'v' && maze[3][maze.length - 2].value === 'x') {
      console.clear();
      validate(pw);
    }
    /* if (prot) {
      setTimeout(ghost.hidegHost, 30 * 1000);
      gx = maze.length - 2;
      gy = maze.length - 2;
    } */
    /* if (ghost.ghostSee(maze, gx, gy)) {
      ghost.ghostTargeted(maze, gx, gy);
    } else { */
    let arr = ghost.ghostRandom(maze, gx, gy, life);
    gx = arr[0];
    gy = arr[1];
    // }
  }
};

module.exports = main;

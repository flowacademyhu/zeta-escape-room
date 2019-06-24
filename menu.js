const menu = () => {
  let menusor = [
    '1. New Game',
    '2. Load Game',
    '3. Credits',
    '4. Exit'
  ];

  for (let i = 0; i < menusor.length; i++) {
    console.log(menusor[i]);
  }
  let readline = require('readline-sync');
  let input = readline.keyIn();
  return input;
};

module.exports = menu;

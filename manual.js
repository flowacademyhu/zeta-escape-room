const manual = () => {
  let menu = require('./menu');
  let readline = require('readline-sync');
  console.clear();
  console.log('Read the fkin manual');
  let a = readline.keyIn();
  if (a === 'q') {
    process.exit();
  } else {
    menu.back2menu();
  }
};

module.exports = manual;

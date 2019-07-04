let menu = require('./menu');

const manual = () => {
  let readline = require('readline-sync');
  console.clear();
  console.log('Read the fkin manual');
  let a = readline.keyIn();
  if (a === 'q') {
    process.exit();
  } else {
    menu();
  }
};

module.exports = manual;

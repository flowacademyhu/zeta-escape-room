let main = require('./main');
var term = require('terminal-kit').terminal;
var center = require('center-align');
var readline = require('readline-sync');
let a;
let logo = require('./logo');
const menu = () => {
  let menusor = [
    'New Game',
    'Exit'

  ];
  console.clear();
  menusor = center(menusor);

  console.log('\n');
  logo.background(logo.zeta);
  console.log('\n\n');
  logo.background(logo.escape);
  console.log('\n');
  logo.background(logo.room);
  console.log('\n');
  console.log('\n');
  term.singleColumnMenu(menusor, function (error, response) {
    if (error) {}
    term('\n');
    if (response.selectedIndex === 0) {
      main();
    } else if (response.selectedIndex === 1) {
      console.log();
      process.exit();
    }
  });
};

menu();

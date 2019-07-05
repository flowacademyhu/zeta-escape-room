let main = require('./main');
var term = require('terminal-kit').terminal;
var center = require('center-align');
var readline = require('readline-sync');
let a;

const menu = () => {
  let menusor = [
    'New Game',
    'Exit'

  ];
  console.clear();
  menusor = center(menusor);

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

const menu = () => {
  let main = require('./main');
  let manual = require('./manual');
  var term = require('terminal-kit').terminal;
  var center = require('center-align');

  let menusor = [
    'New Game',
    'Manual',
    'Credits',
    'Exit'

  ];
  console.clear();
  menusor = center(menusor);

  term.singleColumnMenu(menusor, function (error, response) {
    term('\n')(
    );
    if (response.selectedIndex === 0) {
      main();
    } else if (response.selectedIndex === 1) {
      manual();
    } else if (response.selectedIndex === 1) {
      console.log('credits');
    } else if (response.selectedIndex === 2) {
      console.log();
    }
    process.exit();
  });
};

const back2menu = () => {
  menu();
};

menu();
module.exports = {
  back2menu,
  menu
};

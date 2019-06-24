const menu = () => {
  var term = require('terminal-kit').terminal;
  var center = require('center-align');

  let menusor = [
    'New Game',
    'Load Game',
    'Credits',
    'Exit'

  ];

  menusor = center(menusor);

  term.singleColumnMenu(menusor, function (error, response) {
    term('\n').eraseLineAfter.green(
    );
    if (response.selectedIndex === 0) {
      console.log('új játék');
    } else if (response.selectedIndex === 1) {
      console.log('betőt');
    } else if (response.selectedIndex === 2) {
      console.log('credits');
    } else if (response.selectedIndex === 3) {
      process.exit();
    }
    process.exit();
  });
};

menu();

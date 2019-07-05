const manual = () => {
  console.clear();
  console.log('Escape-room Manual');
  console.log('\n\n Rules: You wake up in a maze. Your goal is escape from the maze, but you will need a password to be able to do that. \n Your starting life is 10.');
  console.log('There are many objects in the game: \n TO - Torch: ');
  console.log('\n\n BASIC keybindings: \n');
  console.log(' W - Move up \n S - Move Down \n A - Move Left \n D - Move Right');
  console.log('\n\n H - Open your hints.');
  console.log('\n M - Open the game\'s manual.');
  console.log('\n Q - Quit game.');
  console.log('\n\n\n This game was made by Gabi, Martin & Tibi.');
};

module.exports = manual;

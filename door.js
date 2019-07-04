let readline = require('readline-sync');
Array[5][Array.length - 1] = { value: 'd', visibility: true };
Array[6][Array.length - 1] = { value: 'd', visibility: true };
const eXLab = (maze) => {
  if (y === maze.length - 1) {
    let ans = readline.question('Please enter the password!');
    if (ans === 'password') {
      console.log('Congratulation, you escaped from the labirinth!');
    } else {
      console.log('Incorrect password. Please try again!');
    }
  }
};

module.exports = eXLab;

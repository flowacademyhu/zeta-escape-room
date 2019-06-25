
const validate = (str) => {
  let readline = require('readline-sync');
  let boolean = false;
  let life = 3;
  console.log('Please enter the password to escape. Be careful, you have only 3 opportunity to leave the area.');
  while (life > 0) {
    str = readline.question();
    let password = 'cica1';
    console.clear();
    if (str === password) {
      boolean = true;
      console.log('Congratulations. You are free to leave.');
      return boolean;
    } else {
      if (life === 1) {
        return boolean;
      }
      life--;
      console.log('Invalid password. You have ' + life + ' more try.');
    }
  }
};

module.exports = validate;

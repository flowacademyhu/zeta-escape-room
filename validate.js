
const validate = (pw) => {
  let readline = require('readline-sync');
  let boolean = false;
  let life = 3;
  let str;
  console.log('Please enter the password to escape. Be careful, you have only 3 opportunity to leave the area.');
  while (life > 0) {
    str = readline.question();
    console.clear();
    if (str === pw) {
      console.log('Congratulations. You are free to leave.');
      return !boolean;
    } else {
      if (life === 1) {
        console.clear();
        console.log('Press a key to exit.');
        str = readline.keyIn();
        process.exit();
      }
      life--;
      console.log('Invalid password. You have ' + life + ' more try.');
    }
  }
};

module.exports = validate;

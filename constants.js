const { createConnection } = require("net");

const IP = 'localhost';
const PORT = 50541;

//mapping for messages
const msg = {
l: 'Say: LOL',
n: "Say: Nice Move",
b: "Say: Be Right Back",
w: "Move: up",
s: "Move: down",
a: "Move: left",
d: "Move: right"
}

//User initials

const initials = 'Name: MDG'

console.log(IP, PORT);

module.exports = {
  IP,
  PORT,
  msg,
  initials
};

// switch (data) {
  //   case '\u0003':
  //     console.log('bye bye');
  //     process.exit();
  //   case 'w':
  //     connection.write('Move: up');
  //     break;
  //   case 'a':
  //     connection.write('Move: left');
  //     break;
  //   case 's':
  //     connection.write('Move: down');
  //     break;
  //   case 'd':
  //     connection.write('Move: right');
  //     break;
  //   case 'l':
  //     connection.write('Say: LOL');
  //     break;
  //   case 'n':
  //     connection.write('Say: Nice Move');
  //     break;
  //   case 'b':
  //     connection.write('Say: Be Right Back')
  // }
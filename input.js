const {connect} = require('./client');
// setup interface to handle user input from stdin

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput)

  return stdin;
};


const handleUserInput = (data) => {

  switch (data) {
    case '\u0003':
      console.log('bye bye');
      process.exit();
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case 'l':
      connection.write('Say: LOL');
      break;
    case 'n':
      connection.write('Say: Nice Move');
      break;
    case 'b':
      connection.write('Say: Be Right Back')
  }
};

module.exports = {setupInput};
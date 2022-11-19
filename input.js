const {msg} = require('./constants');
// setup interface to handle user input from stdin

let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};


const handleUserInput = (data) => {

  data = data.toLowerCase(); //converting all key to lower case

  if (data === '\u0003') return process.exit(); //Ctrl + c => exits program
  //uses msg object to look for the key and return value of that key
  if (!msg[data]) {
    connection.write('Say: undefined key');
  } else {
    connection.write(msg[data]);
  }
};

module.exports = {setupInput};
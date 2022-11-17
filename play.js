const { stdin } = require('process');
const {net, connect} = require('./client');

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput)

  return stdin;
};


const handleUserInput = (data) => {
  
  if ( data === '\u0003' ) {
    // ctrl-c ( end of text )
    console.log('user exits')
    process.exit();
  }
  
  if(data === 'w') {
    console.log('Move up')
  }
};

setupInput()
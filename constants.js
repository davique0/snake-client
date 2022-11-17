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
};

//User initials

const initials = 'Name: MDG';

console.log(IP, PORT);

module.exports = {
  IP,
  PORT,
  msg,
  initials
};
//const { Server } = require("http");
const { IP, PORT } = require("./constants");
const net = require("net");
const { initials } = require('./constants');
//establishes a connection with the game server

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  //prints a message when connections has been established
  conn.on("connect", () => {
    console.log("Connected to game server");
    conn.write(initials);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};


module.exports = {connect};
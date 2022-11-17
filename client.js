const net = require("net");
//establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  //prints a message when connections has been established
  conn.on("connect", () => {
    console.log("Connected to server")
  })

  conn.on("data", (data) => {
    console.log(data)
  });

  return conn;
};


module.exports = {net, connect};
//CLIENT
const net = require("net"); //node 

const {IP, PORT} = require("./constants"); 

const connect = function (IP, PORT) {
  const conn = net.createConnection({ // create conn func encoded to create a new socket via node
    host: IP,
    port: PORT,
  });
  return conn;
};

// pass in IP and PORT from constants.js
const conn = connect(IP, PORT);

// event players name above snake
conn.on("connect", () => {
  conn.write("Name: RAY");
});

module.exports = { connect };  // to export connect func

const net = require("net"); // require net module

const {IP, PORT} = require("./constants"); 

const connect = function (IP, PORT) {
  const conn = net.createConnection({ // create conn func
    host: IP,
    port: PORT,
  });
  return conn; // need to return the obj
};


// pass in IP and PORT from constants.js
const conn = connect(IP, PORT); //  too call connect func, global scope

//event name
conn.on("connect", () => {
  conn.write("Name: RAY");
});


//event move-up 
//  conn.on("connect", () => {
//   setInterval(() => {
//     conn.write("Move: up");
//   }, 50);
//   conn.write("Move: up"); 
//  });

//  conn.on("connect", () => {
//   setTimeout=(() => {
//   conn.write("Move: left"); 
//  }, 50);
// });

//  conn.on("connect", () => {
//   setTimeout=(() => {
//   conn.write("Move: down"); 
//  }, 100);
// });

//  conn.on("connect", () => {
//   setTimeout=(() => {
//   conn.write("Move: right"); 
//  },150);
// });

module.exports = { connect };  // to export connect func
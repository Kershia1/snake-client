
const net = require("net"); // require net module

const connect = function() {
  const conn = net.createConnection({ // create conn func
    host:"localhost",
    port: 50541,
  });
  return conn; // need to return the obj
};

const conn = connect(); //  too call connect func, global scope

//event name
conn.on("connect", ()=> {
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

module.exports = {connect};  // to export connect func
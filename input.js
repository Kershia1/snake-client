const net = require("net"); 
const {connect} = require("./client"); // require connect func from client.js
const {IP, PORT} = require("./constants"); // pass in IP and PORT from constants.js

const conn = connect(IP, PORT); // call connect func

let connection; // declare connection var

const setupInput = (conn) => {
  connection = conn; // assign conn to connection var) 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

//event handler to kill server by pressing ctrl + c, and key movements
const handleUserInput = function (key) {
if (key === '\u0003') {
  process.exit();
} else if (key === "w") { // 
  conn.write("Move: up");
} else if (key === "a") {
  conn.write("Move: left");
} else if (key === "s") {
  conn.write("Move: down");
} else if  (key === "d") {
  conn.write("Move: right");
} else if (key === "p") {
  conn.write("Say: I'm gonna get you!");
} else if (key === "o") {
  conn.write("Say: Om nom nom nom nom!");
} else { (key === "l") 
  conn.write("Say: I'm the bestest snake in the world!") 
}
};


module.exports = {setupInput}; // export setupInput func

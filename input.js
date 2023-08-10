const net = require("net"); 
const {connect} = require("./client"); // require connect func from client.js

const conn = connect(); //  too call connect func, global scope
//not sure if this is needed, says not a function

let connection; // declare connection var

const setupInput = (conn) => {
  connection = conn; // assign conn to connection var) 
  // stdin.on("data", (key) => { // event handler for key input
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
} else { (key === "d") 
  conn.write("Move: right");
}
};


module.exports = {setupInput}; // export setupInput func

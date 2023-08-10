
const net = require("net"); // require net module
// both mods required net (facepalm)

const {connect} = require("./client"); // require connect func from client.js

// need to call the connect function, now that modules are linked
const conn = connect(); //  too call connect func, global scope

// not defined yet, wrong scope for event handler

conn.on("data",(data)=>  {
console.log("The server sent you a message: ", data);
}); //event handler for established connection

conn.on("connect", ()=> {
  console.log("Successfully connected to the game server");
});
conn.setEncoding("utf8");

return conn; // return conn func
console.log("Connecting ...");
connect();

//allows for listening to key board input
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

//event handler to kill server by pressing ctrl + c
const handleUserInput = function (key) {
if (key === '\u0003') {
  process.exit();
}
};
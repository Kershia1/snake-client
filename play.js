
const net = require("net");

const { connect } = require("./client"); // require connect func from client.js

//allows for listening to key board input from input.js mod
const { setupInput } = require("./input");
const { IP, PORT } = require("./constants");

//call the linked functions
const conn = connect(IP, PORT);
setupInput(conn);
// const stdin = setupInput();

conn.on("data", (data) => {
  console.log("The server sent you a message: ", data);
}); //event handler for established connection

conn.on("connect", () => {
  console.log("Successfully connected to the game server");
});
conn.setEncoding("utf8");

return conn; 
console.log("Connecting ...");
connect(); // call connect func

setupInput(); // call setupInput func

module.exports = { connect };  // to export obj returned by connect func

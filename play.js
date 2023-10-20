//SERVER
const net = require("net");

const { connect } = require("./client"); // require connect func from client.js

//allows for listening to key board input from input.js mod
const { setupInput } = require("./input");
const { IP, PORT } = require("./constants");

//call the linked functions
const conn = connect(IP, PORT);
setupInput(conn);
// const stdin = setupInput();

//initiating the event
conn.on("data", (data) => {
  console.log("The server sent you a message: ", data);
}); //event handler for established connection

conn.on("connect", () => {
  console.log("Successfully connected to the game server");
});
conn.setEncoding("utf8");

return conn; 
console.log("Connecting ..."); //unreachable code
connect(); // call connect func

setupInput(); // call setupInput func

module.exports = { connect };  // to export obj returned by connect func

/*
De-Bug note: Used AI Assistance to understand event throw error. 
Relavent Error:
node:events:491
      throw er; // Unhandled 'error' event
      ^

Error: connect ECONNREFUSED 127.0.0.1:50541
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1278:16)
Emitted 'error' event on Socket instance at:
    at emitErrorNT (node:internal/streams/destroy:157:8)
    at emitErrorCloseNT (node:internal/streams/destroy:122:3)
    at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  errno: -111,
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 50541
}

Assistance Used to then search on StackOverFlow: 
Looks like something maybe using port 50541 still, incorrectly killed project?
these are the insturctions to resolve, very vague 

node:events:491
https://stackoverflow.com/questions/75484596/npm-is-giving-error-for-instance-nodeevents491-throw-er-unhandled-error


*/
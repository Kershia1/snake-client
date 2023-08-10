const net = require("net"); 

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

module.exports = {setupInput}; // export setupInput func

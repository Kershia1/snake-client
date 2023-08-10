
const net = require("net"); // require net module

const connect = function() {
  const conn = net.createConnection({ // create conn func
    host:"localhost",
    port: 50541,
  });
  return conn; // need to return the obj
};
module.exports = {connect};  // to export connect func
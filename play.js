const net = require("net"); 

// est connection to game server here

const connect = function() {
const conn = net.createConnection({ // create conn func
  host:"localhost",
  port: 50541,
});

conn.on("data",(data)=>  {
console.log("The server sent you data: ", data);
});
conn.on("connect", ()=> {
  console.log("Established connection with Snek server");
});
conn.setEncoding("utf8");

return conn; 
};
console.log("Connecting ...");
connect();
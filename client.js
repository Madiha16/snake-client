const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");

//export the connect function
module.exports = connect;

// const myNumber = 42;
// const myString = "hello";
// const myFunction = () => {
//   // myFunction's code
// };

// module.exports = {
//   myNumber, // stores 42 as myNumber
//   myString, // stores "hello" as myString
//   myFunction, // stores the function as myFunction
// };
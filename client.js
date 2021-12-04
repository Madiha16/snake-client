const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

   //use the .on method on our conn object to register a "connect" handler (a callback function)
  //In the callback, print a message to the screen when the connection is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  //Send snakes name to server (SEN)
  conn.on('connect', () => {
    conn.write("Name: SEN");

  });
  
  // //Send a "Move up" command
  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // });

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
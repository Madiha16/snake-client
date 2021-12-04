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
  //Send snakes name to server (SEN)
    conn.write("Name: SEN");
  // //Send a "Move up" command
  //   conn.write("Move: up");

    //Successive move commands don't do anything?
    // conn.write("Move: up");
    // conn.write("Move: up");
    // conn.write("Move: up");
    // conn.write("Move: up");

  // //setInterval moves snake up off the board
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 50);
    
    // //move snake up one after 1/2 sec
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 500);
    
    // //Moves snake to the left using setTimeout
    // for (let i = 0; i <= 50; i++) {
    //   setTimeout(() => {
    //     conn.write("Move: left");
    //   }, 500);
    // }
    
  });
  
  return conn;
};

console.log("Connecting ...");

//export the connect function
module.exports = {
  connect
}

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
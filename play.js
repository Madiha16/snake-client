const net = require("net");

//returns the connect function from client.js //"require" the connect function
const connect = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//Added control+c input and terminate the game
const handleUserInput = function () {
  if (key === '\u0003') {
    process.exit();
  }
};